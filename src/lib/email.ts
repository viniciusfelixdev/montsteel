import { z } from "zod";

/**
 * Configuração de e-mail centralizada.
 * Defina as variáveis no .env.local (veja .env.local.example).
 */
export const EMAIL_CONFIG = {
  apiKey: process.env.RESEND_API_KEY,
  // Remetente verificado no Resend (ex: "CoberSteel <site@cobersteel.com.br>").
  // Enquanto o domínio não estiver verificado, use "onboarding@resend.dev".
  from: process.env.EMAIL_FROM || "CoberSteel <onboarding@resend.dev>",
  // Destinatário interno que recebe os leads.
  to: process.env.EMAIL_TO || "contato@cobersteel.com.br",
};

/* ---------------- Schemas ---------------- */

export const orcamentoSchema = z.object({
  type: z.literal("orcamento"),
  nome: z.string().min(2),
  email: z.string().email(),
  telefone: z.string().min(8),
  empresa: z.string().min(2),
  segmento: z.string().min(1),
  tipoInteresse: z.string().min(1),
  produto: z.string().min(1),
  areaNecessaria: z.string().optional().default(""),
  mensagem: z.string().optional().default(""),
});

export const fornecedorSchema = z.object({
  type: z.literal("fornecedor"),
  razaoSocial: z.string().min(2),
  cnpj: z.string().min(11),
  responsavel: z.string().min(2),
  email: z.string().email(),
  telefone: z.string().min(8),
  categoria: z.string().min(1),
  atuacao: z.string().min(1),
  mensagem: z.string().optional().default(""),
});

export const contactPayloadSchema = z.discriminatedUnion("type", [
  orcamentoSchema,
  fornecedorSchema,
]);

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

/* ---------------- Renderização do e-mail ---------------- */

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value?: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 12px;background:#0F1923;color:#94A3B8;font-size:12px;text-transform:uppercase;letter-spacing:.05em;width:200px;vertical-align:top;border-bottom:1px solid #2A3A50;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;color:#fff;font-size:14px;border-bottom:1px solid #2A3A50;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td>
  </tr>`;
}

export function buildEmail(data: ContactPayload): {
  subject: string;
  html: string;
  replyTo: string;
} {
  if (data.type === "orcamento") {
    return {
      subject: `Novo orçamento — ${data.empresa} (${data.nome})`,
      replyTo: data.email,
      html: emailShell(
        "Nova solicitação de orçamento",
        [
          row("Nome", data.nome),
          row("E-mail", data.email),
          row("Telefone / WhatsApp", data.telefone),
          row("Empresa", data.empresa),
          row("Segmento", data.segmento),
          row("Tipo de interesse", data.tipoInteresse),
          row("Produto", data.produto),
          row("Área aproximada", data.areaNecessaria),
          row("Mensagem", data.mensagem),
        ].join("")
      ),
    };
  }

  return {
    subject: `Novo cadastro de fornecedor — ${data.razaoSocial}`,
    replyTo: data.email,
    html: emailShell(
      "Novo cadastro de fornecedor",
      [
        row("Razão social", data.razaoSocial),
        row("CNPJ", data.cnpj),
        row("Responsável", data.responsavel),
        row("E-mail", data.email),
        row("Telefone", data.telefone),
        row("Categoria", data.categoria),
        row("Área de atuação", data.atuacao),
        row("Descrição", data.mensagem),
      ].join("")
    ),
  };
}

function emailShell(title: string, rows: string): string {
  return `<div style="background:#0F1923;padding:24px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;background:#1A2535;border:1px solid #2A3A50;border-radius:12px;overflow:hidden;">
      <div style="background:#5C88B5;padding:18px 24px;">
        <h1 style="margin:0;color:#fff;font-size:18px;text-transform:uppercase;letter-spacing:.02em;">${escapeHtml(title)}</h1>
        <p style="margin:4px 0 0;color:#E2E8F0;font-size:12px;">Enviado pelo site cobersteel.com.br</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>
  </div>`;
}
