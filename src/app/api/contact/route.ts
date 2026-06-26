import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EMAIL_CONFIG, buildEmail, contactPayloadSchema } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const parsed = contactPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  if (!EMAIL_CONFIG.apiKey) {
    console.error("[contact] RESEND_API_KEY ausente — não foi possível enviar o e-mail.");
    return NextResponse.json(
      { error: "Serviço de e-mail não configurado no servidor." },
      { status: 500 }
    );
  }

  const { subject, html, replyTo } = buildEmail(parsed.data);

  try {
    const resend = new Resend(EMAIL_CONFIG.apiKey);
    const { error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo,
      subject,
      html,
    });

    if (error) {
      console.error("[contact] Erro do Resend:", error);
      return NextResponse.json({ error: "Falha ao enviar o e-mail." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Exceção ao enviar e-mail:", err);
    return NextResponse.json({ error: "Erro interno ao enviar o e-mail." }, { status: 500 });
  }
}
