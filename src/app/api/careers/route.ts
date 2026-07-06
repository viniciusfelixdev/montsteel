import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL_CONFIG, buildEmail, contactPayloadSchema } from "@/lib/email";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!checkRateLimit(`careers:${ip}`, 5, 10 * 60 * 1000)) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const parsed = contactPayloadSchema.safeParse({
    type: "candidatura",
    nome: formData.get("nome") ?? undefined,
    email: formData.get("email") ?? undefined,
    telefone: formData.get("telefone") ?? undefined,
    vaga: formData.get("vaga") ?? undefined,
    mensagem: formData.get("mensagem") ?? undefined,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const curriculo = formData.get("curriculo");
  if (!(curriculo instanceof File) || curriculo.size === 0) {
    return NextResponse.json({ error: "Anexe o currículo." }, { status: 422 });
  }
  if (curriculo.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: "Arquivo muito grande. Máximo de 5MB." }, { status: 422 });
  }
  if (!ALLOWED_TYPES.includes(curriculo.type)) {
    return NextResponse.json({ error: "Formato inválido. Envie PDF, DOC ou DOCX." }, { status: 422 });
  }

  if (!EMAIL_CONFIG.apiKey) {
    console.error("[careers] RESEND_API_KEY ausente — não foi possível enviar o e-mail.");
    return NextResponse.json(
      { error: "Serviço de e-mail não configurado no servidor." },
      { status: 500 }
    );
  }

  const { subject, html, replyTo } = buildEmail(parsed.data);
  const fileBuffer = Buffer.from(await curriculo.arrayBuffer());

  try {
    const resend = new Resend(EMAIL_CONFIG.apiKey);
    const { error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo,
      subject,
      html,
      attachments: [{ filename: curriculo.name, content: fileBuffer }],
    });

    if (error) {
      console.error("[careers] Erro do Resend:", error);
      return NextResponse.json({ error: "Falha ao enviar o e-mail." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[careers] Exceção ao enviar e-mail:", err);
    return NextResponse.json({ error: "Erro interno ao enviar o e-mail." }, { status: 500 });
  }
}
