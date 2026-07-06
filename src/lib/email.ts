import { z } from "zod";

/**
 * Configuração de e-mail centralizada.
 * Defina as variáveis no .env.local (veja .env.local.example).
 */
export const EMAIL_CONFIG = {
  apiKey: process.env.RESEND_API_KEY,
  // Remetente verificado no Resend (ex: "MontSteel <site@montsteel.com.br>").
  // Enquanto o domínio não estiver verificado, use "onboarding@resend.dev".
  from: process.env.EMAIL_FROM || "MontSteel <onboarding@resend.dev>",
  // Destinatário interno que recebe os leads.
  to: process.env.EMAIL_TO || "contato@montsteel.com.br",
};

/* ---------------- Schemas ---------------- */

const orcamentoSchema = z.object({
  type: z.literal("orcamento"),
  nome: z.string().min(2).max(150),
  email: z.string().email().max(200),
  telefone: z.string().min(8).max(30),
  empresa: z.string().min(2).max(150),
  segmento: z.string().min(1).max(100),
  tipoInteresse: z.string().min(1).max(100),
  produto: z.string().min(1).max(100),
  areaNecessaria: z.string().max(50).optional().default(""),
  mensagem: z.string().max(5000).optional().default(""),
});

const fornecedorSchema = z.object({
  type: z.literal("fornecedor"),
  razaoSocial: z.string().min(2).max(150),
  cnpj: z.string().min(11).max(20),
  responsavel: z.string().min(2).max(150),
  email: z.string().email().max(200),
  telefone: z.string().min(8).max(30),
  categoria: z.string().min(1).max(100),
  atuacao: z.string().min(1).max(100),
  mensagem: z.string().max(5000).optional().default(""),
});

const candidaturaSchema = z.object({
  type: z.literal("candidatura"),
  nome: z.string().min(2).max(150),
  email: z.string().email().max(200),
  telefone: z.string().min(8).max(30),
  vaga: z.string().min(1).max(150),
  mensagem: z.string().max(5000).optional().default(""),
});

export const contactPayloadSchema = z.discriminatedUnion("type", [
  orcamentoSchema,
  fornecedorSchema,
  candidaturaSchema,
]);

export type ContactPayload = z.infer<typeof contactPayloadSchema>;

/* ---------------- Renderização do e-mail ---------------- */

/**
 * Escapa HTML e converte qualquer caractere não-ASCII (acentos, cedilha, travessão)
 * em entidade numérica (ex.: "ç" -> "&#231;"). Isso deixa o HTML gerado 100% ASCII,
 * imune a erro de detecção de charset por qualquer sistema que processe o e-mail
 * depois de sair da nossa aplicação (ex.: rastreamento de cliques/abertura do
 * provedor de envio).
 */
function escapeHtml(value: string): string {
  const escaped = String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  return Array.from(escaped)
    .map((char) => {
      const code = char.codePointAt(0)!;
      return code > 127 ? `&#${code};` : char;
    })
    .join("");
}

/**
 * Codifica uma string com acentos no formato "encoded-word" do RFC 2047
 * (=?UTF-8?B?...?=), exigido para caracteres não-ASCII em cabeçalhos de
 * e-mail como o Subject — ao contrário do corpo HTML, cabeçalhos não têm
 * como declarar charset via meta tag, então precisam ser ASCII puro.
 */
function mimeEncodeWord(value: string): string {
  // eslint-disable-next-line no-control-regex
  if (/^[\x00-\x7F]*$/.test(value)) return value;
  const base64 = Buffer.from(value, "utf8").toString("base64");
  return `=?UTF-8?B?${base64}?=`;
}

function row(label: string, value?: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 12px;background:#1A1A1A;color:#94A3B8;font-size:12px;text-transform:uppercase;letter-spacing:.05em;width:200px;vertical-align:top;border-bottom:1px solid #333333;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;color:#fff;font-size:14px;border-bottom:1px solid #333333;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td>
  </tr>`;
}

export function buildEmail(data: ContactPayload): {
  subject: string;
  html: string;
  replyTo: string;
} {
  if (data.type === "orcamento") {
    return {
      subject: mimeEncodeWord(`Novo orçamento — ${data.empresa} (${data.nome})`),
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

  if (data.type === "fornecedor") {
    return {
      subject: mimeEncodeWord(`Novo cadastro de fornecedor — ${data.razaoSocial}`),
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

  return {
    subject: mimeEncodeWord(`Nova candidatura — ${data.vaga} (${data.nome})`),
    replyTo: data.email,
    html: emailShell(
      "Nova candidatura recebida",
      [
        row("Nome", data.nome),
        row("E-mail", data.email),
        row("Telefone / WhatsApp", data.telefone),
        row("Vaga de interesse", data.vaga),
        row("Mensagem", data.mensagem),
      ].join("")
    ),
  };
}

function emailShell(title: string, rows: string): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;">
    <div style="background:#1A1A1A;padding:24px;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:640px;margin:0 auto;background:#242424;border:1px solid #333333;border-radius:12px;overflow:hidden;">
        <div style="background:#CC8000;padding:18px 24px;">
          <h1 style="margin:0;color:#fff;font-size:18px;text-transform:uppercase;letter-spacing:.02em;">${escapeHtml(title)}</h1>
          <p style="margin:4px 0 0;color:#E2E8F0;font-size:12px;">Enviado pelo site montsteel.com.br</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
      </div>
    </div>
  </body>
</html>`;
}
