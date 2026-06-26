"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { SEGMENTS } from "@/lib/constants";
import SelectField from "@/components/shared/SelectField";

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  empresa: z.string().min(2, "Nome da empresa obrigatório"),
  segmento: z.string().min(1, "Selecione um segmento"),
  tipoInteresse: z.string().min(1, "Selecione o tipo de interesse"),
  produto: z.string().min(1, "Selecione o produto de interesse"),
  areaNecessaria: z.string().optional(),
  mensagem: z.string().optional(),
  lgpd: z.literal(true, "Você deve aceitar a política de privacidade"),
});

type FormData = z.infer<typeof schema>;

const fieldClass =
  "w-full bg-dark-steel border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-[#64748B] focus:outline-none focus:border-cobersteel-blue transition-colors";

const labelClass = "block text-xs font-semibold uppercase tracking-wide text-[#94A3B8] mb-1.5";

const errorClass = "mt-1 text-xs text-red-400 flex items-center gap-1";

export default function OrcamentoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setSubmitError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "orcamento", ...data }),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-dark-mid border border-dark-border rounded-xl p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto mb-4" aria-hidden="true" />
        <h2
          className="text-2xl font-black uppercase text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Orçamento Solicitado!
        </h2>
        <p className="text-[#94A3B8] mb-6">
          Recebemos sua solicitação. Nossa equipe entrará em contato em até 24 horas úteis.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-cobersteel-blue text-sm hover:underline"
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
      className="bg-dark-mid border border-dark-border rounded-xl p-6 sm:p-8 space-y-6"
    >
      <h2
        className="text-2xl font-black uppercase text-white"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
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
            Nome completo <span className="text-cobersteel-gold">*</span>
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            className={fieldClass}
            aria-required="true"
            aria-invalid={!!errors.nome}
            {...register("nome")}
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
            E-mail <span className="text-cobersteel-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className={fieldClass}
            aria-required="true"
            aria-invalid={!!errors.email}
            {...register("email")}
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
            Telefone / WhatsApp <span className="text-cobersteel-gold">*</span>
          </label>
          <input
            id="telefone"
            type="tel"
            placeholder="(16) 99999-9999"
            className={fieldClass}
            aria-required="true"
            aria-invalid={!!errors.telefone}
            {...register("telefone")}
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
            Empresa <span className="text-cobersteel-gold">*</span>
          </label>
          <input
            id="empresa"
            type="text"
            placeholder="Nome da empresa"
            className={fieldClass}
            aria-required="true"
            aria-invalid={!!errors.empresa}
            {...register("empresa")}
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
        <SelectField
          label="Segmento de Atuação"
          required
          variant="gold"
          error={errors.segmento?.message}
          aria-invalid={!!errors.segmento}
          {...register("segmento")}
        >
          <option value="">Selecione o segmento</option>
          {SEGMENTS.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
          <option value="outro">Outro</option>
        </SelectField>
        <SelectField
          label="Tipo de Interesse"
          required
          variant="gold"
          error={errors.tipoInteresse?.message}
          aria-invalid={!!errors.tipoInteresse}
          {...register("tipoInteresse")}
        >
          <option value="">Selecione o tipo</option>
          <option value="locacao">Locação</option>
          <option value="venda">Venda</option>
          <option value="manutencao">Manutenção</option>
          <option value="outro">Outro</option>
        </SelectField>
      </div>

      {/* Row: Produto + Área */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectField
          label="Produto de Interesse"
          required
          variant="gold"
          error={errors.produto?.message}
          aria-invalid={!!errors.produto}
          {...register("produto")}
        >
          <option value="">Selecione o produto</option>
          <option value="galpao-lona">Galpão de Lona</option>
          <option value="galpao-metalico">Galpão Metálico</option>
          <option value="galpao-hibrido">Galpão Híbrido CoberECOsteel</option>
          <option value="mezanino">Mezanino Metálico</option>
          <option value="projeto-especial">Projeto Especial</option>
          <option value="niveladora">Niveladora de Doca</option>
          <option value="nao-sei">Não sei ainda</option>
        </SelectField>
        <div>
          <label htmlFor="areaNecessaria" className={labelClass}>
            Área Aproximada (m²)
          </label>
          <input
            id="areaNecessaria"
            type="text"
            placeholder="Ex: 500 m²"
            className={fieldClass}
            {...register("areaNecessaria")}
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
            className="mt-0.5 w-4 h-4 rounded border-dark-border bg-dark-steel accent-cobersteel-blue"
            aria-required="true"
            aria-invalid={!!errors.lgpd}
            {...register("lgpd")}
          />
          <span className="text-xs text-[#94A3B8] leading-relaxed">
            Li e concordo com a{" "}
            <a
              href="/institucional/privacidade"
              className="text-cobersteel-blue hover:underline"
              target="_blank"
            >
              Política de Privacidade
            </a>{" "}
            da CoberSteel e autorizo o uso dos meus dados para contato.{" "}
            <span className="text-cobersteel-gold">*</span>
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
        className="w-full py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase tracking-wide rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Solicitar Orçamento Gratuito"}
      </button>
    </form>
  );
}
