"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { SEGMENTS } from "@/lib/constants";
import CustomSelect from "@/components/shared/CustomSelect";
import { trackFormAbandon, trackFormSubmit } from "@/components/shared/Analytics";

const SEGMENTO_OPTIONS = [
  ...SEGMENTS.map((s) => ({ value: s.slug, label: s.name })),
  { value: "outro", label: "Outro" },
];

const TIPO_INTERESSE_OPTIONS = [
  { value: "locacao", label: "Locação" },
  { value: "venda", label: "Venda" },
  { value: "manutencao", label: "Manutenção" },
  { value: "outro", label: "Outro" },
];

const PRODUTO_OPTIONS = [
  { value: "galpao-lona", label: "Galpão de Lona" },
  { value: "galpao-metalico", label: "Galpão Metálico" },
  { value: "galpao-hibrido", label: "Galpão Híbrido CoberECOsteel" },
  { value: "mezanino", label: "Mezanino Metálico" },
  { value: "projeto-especial", label: "Projeto Especial" },
  { value: "niveladora", label: "Niveladora de Doca" },
  { value: "nao-sei", label: "Não sei ainda" },
];

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  empresa: z.string().min(2, "Nome da empresa obrigatório"),
  segmento: z.string().min(1, "Selecione um segmento"),
  tipoInteresse: z.string().min(1, "Selecione o tipo de interesse"),
  produto: z.string().min(1, "Selecione o produto de interesse"),
  dimensoes: z.string().optional(),
  mensagem: z.string().optional(),
  lgpd: z.literal(true, "Você deve aceitar a política de privacidade"),
});

type FormData = z.infer<typeof schema>;

const fieldClass =
  "w-full bg-light-bg dark:bg-dark-steel border border-slate-300 dark:border-dark-border rounded-lg px-4 py-3 text-sm text-dark-steel dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus:outline-none focus:border-montsteel-blue transition-colors";

const labelClass = "block text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-[#94A3B8] mb-1.5";

const errorClass = "mt-1 text-xs text-red-700 dark:text-red-400 flex items-center gap-1";

const DIACRITICS_REGEX = /[\p{Diacritic}]/gu;

/** Reduz texto livre a um slug seguro para envio ao GA4 (sem PII, sem caracteres livres). */
function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(DIACRITICS_REGEX, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 40);
}

/** Nome de cada campo para o parâmetro `last_focused_field` do GA4 — consistente com os slugs já usados em `envio_formulario_sucesso`. */
const FIELD_TRACK_NAMES = {
  nome: "nome",
  email: "email",
  telefone: "telefone",
  empresa: "empresa",
  segmento: "segmento_atuacao",
  tipoInteresse: "tipo_interesse",
  produto: "produto",
  dimensoes: "area_m2",
};

export default function OrcamentoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  // Dedupe: cada campo só dispara "formulario_abandono" uma vez por sessão de preenchimento.
  const trackedAbandonFields = useRef<Set<string>>(new Set());
  const successRef = useRef<HTMLDivElement>(null);

  // Pré-preenche produto/segmento vindos de ?produto=...&segmento=..., quando o
  // visitante chega vindo da página de um produto ou de um segmento — evita ter
  // que selecionar de novo algo que já indicou ao navegar pelo site.
  const searchParams = useSearchParams();
  const produtoParam = searchParams.get("produto");
  const segmentoParam = searchParams.get("segmento");
  const defaultProduto = PRODUTO_OPTIONS.some((o) => o.value === produtoParam) ? produtoParam! : undefined;
  const defaultSegmento = SEGMENTO_OPTIONS.some((o) => o.value === segmentoParam) ? segmentoParam! : undefined;

  // Centraliza a tela no card de confirmação ao enviar, já que ele substitui o
  // formulário no mesmo lugar e o usuário pode não perceber a mudança se estiver scrollado.
  useEffect(() => {
    if (!submitted) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    successRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
  }, [submitted]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      produto: defaultProduto,
      segmento: defaultSegmento,
    },
  });

  function handleFieldBlur(fieldKey: keyof typeof FIELD_TRACK_NAMES) {
    if (submitted) return;
    if (trackedAbandonFields.current.has(fieldKey)) return;
    trackedAbandonFields.current.add(fieldKey);
    trackFormAbandon("orcamento", FIELD_TRACK_NAMES[fieldKey]);
  }

  /** Igual a `register(name)`, mas compõe o onBlur original com o rastreamento de abandono. */
  function registerWithAbandonTracking(name: keyof typeof FIELD_TRACK_NAMES) {
    const field = register(name);
    return {
      ...field,
      onBlur: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        field.onBlur(event);
        handleFieldBlur(name);
      },
    };
  }

  async function onSubmit(data: FormData) {
    setSubmitError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "orcamento", ...data }),
      });
      if (!res.ok) throw new Error("Falha no envio");
      trackFormSubmit("orcamento", {
        segmento_atuacao: data.segmento,
        tipo_interesse: data.tipoInteresse,
        area_m2: data.dimensoes ? slugify(data.dimensoes) : "nao_informado",
      });
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div ref={successRef} className="bg-white dark:bg-dark-mid rounded-xl p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto mb-4" aria-hidden="true" />
        <h2
          className="text-2xl font-black uppercase text-dark-steel dark:text-white mb-2 font-display"
        >
          Orçamento Solicitado!
        </h2>
        <p className="text-slate-600 dark:text-[#94A3B8] mb-6">
          Recebemos sua solicitação. Nossa equipe entrará em contato em até 24 horas úteis.
        </p>
        <button
          onClick={() => {
            trackedAbandonFields.current.clear();
            setSubmitted(false);
          }}
          className="text-montsteel-blue text-sm hover:underline"
        >
          Enviar nova solicitação
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white dark:bg-dark-mid rounded-xl p-6 sm:p-8 space-y-6"
    >
      <h2
        className="text-2xl font-black uppercase text-dark-steel dark:text-white font-display"
      >
        Dados do Projeto
      </h2>

      {submitError && (
        <div className="flex items-center gap-2 bg-red-900/30 border border-red-700/50 rounded-lg px-4 py-3 text-sm text-red-300">
          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
        </div>
      )}

      {/* Row: Nome + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className={labelClass}>
            Nome completo <span className="text-montsteel-gold">*</span>
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            className={fieldClass}
            aria-required="true"
            aria-invalid={!!errors.nome}
            {...registerWithAbandonTracking("nome")}
          />
          {errors.nome && (
            <p className={errorClass} role="alert">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.nome.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail <span className="text-montsteel-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className={fieldClass}
            aria-required="true"
            aria-invalid={!!errors.email}
            {...registerWithAbandonTracking("email")}
          />
          {errors.email && (
            <p className={errorClass} role="alert">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Row: Telefone + Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefone" className={labelClass}>
            Telefone / WhatsApp <span className="text-montsteel-gold">*</span>
          </label>
          <input
            id="telefone"
            type="tel"
            placeholder="(16) 99999-9999"
            className={fieldClass}
            aria-required="true"
            aria-invalid={!!errors.telefone}
            {...registerWithAbandonTracking("telefone")}
          />
          {errors.telefone && (
            <p className={errorClass} role="alert">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.telefone.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>
            Empresa <span className="text-montsteel-gold">*</span>
          </label>
          <input
            id="empresa"
            type="text"
            placeholder="Nome da empresa"
            className={fieldClass}
            aria-required="true"
            aria-invalid={!!errors.empresa}
            {...registerWithAbandonTracking("empresa")}
          />
          {errors.empresa && (
            <p className={errorClass} role="alert">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.empresa.message}
            </p>
          )}
        </div>
      </div>

      {/* Row: Segmento + Tipo de interesse */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Controller
          name="segmento"
          control={control}
          render={({ field }) => (
            <CustomSelect
              label="Segmento de Atuação"
              required
              variant="gold"
              placeholder="Selecione o segmento"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={() => handleFieldBlur("segmento")}
              options={SEGMENTO_OPTIONS}
              error={errors.segmento?.message}
            />
          )}
        />
        <Controller
          name="tipoInteresse"
          control={control}
          render={({ field }) => (
            <CustomSelect
              label="Tipo de Interesse"
              required
              variant="gold"
              placeholder="Selecione o tipo"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={() => handleFieldBlur("tipoInteresse")}
              options={TIPO_INTERESSE_OPTIONS}
              error={errors.tipoInteresse?.message}
            />
          )}
        />
      </div>

      {/* Row: Produto + Área */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Controller
          name="produto"
          control={control}
          render={({ field }) => (
            <CustomSelect
              label="Produto de Interesse"
              required
              variant="gold"
              placeholder="Selecione o produto"
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={() => handleFieldBlur("produto")}
              options={PRODUTO_OPTIONS}
              error={errors.produto?.message}
            />
          )}
        />
        <div>
          <label htmlFor="dimensoes" className={labelClass}>
            Dimensões do Galpão
          </label>
          <input
            id="dimensoes"
            type="text"
            placeholder="Ex: 20 x 60 m"
            className={fieldClass}
            {...registerWithAbandonTracking("dimensoes")}
          />
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className={labelClass}>
          Mensagem / Detalhes Adicionais
        </label>
        <textarea
          id="mensagem"
          rows={4}
          placeholder="Descreva seu projeto, prazo desejado, localização, etc."
          className={`${fieldClass} resize-none`}
          {...register("mensagem")}
        />
      </div>

      {/* LGPD */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-slate-300 dark:border-dark-border bg-light-bg dark:bg-dark-steel accent-montsteel-blue"
            aria-required="true"
            aria-invalid={!!errors.lgpd}
            {...register("lgpd")}
          />
          <span className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Li e concordo com a{" "}
            <a
              href="/institucional/privacidade"
              className="text-montsteel-blue hover:underline"
              target="_blank"
            >
              Privacidade
            </a>{" "}
            da MontSteel e autorizo o uso dos meus dados para contato.{" "}
            <span className="text-montsteel-gold">*</span>
          </span>
        </label>
        {errors.lgpd && (
          <p className={`${errorClass} mt-2`} role="alert">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.lgpd.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase tracking-wide rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Solicitar Orçamento Gratuito"}
      </button>
    </form>
  );
}
