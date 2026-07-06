"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Upload, X } from "lucide-react";
import CustomSelect from "@/components/shared/CustomSelect";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const BANCO_DE_TALENTOS = "Banco de Talentos (nenhuma vaga específica)";

const schema = z.object({
  nome: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  vaga: z.string().min(1, "Selecione uma vaga"),
  mensagem: z.string().optional(),
  curriculo: z
    .custom<FileList>((v) => v instanceof FileList && v.length === 1, "Anexe seu currículo")
    .refine((files) => files[0]?.size <= MAX_FILE_SIZE, "Arquivo deve ter até 5MB")
    .refine((files) => ALLOWED_TYPES.includes(files[0]?.type), "Formato inválido. Envie PDF, DOC ou DOCX"),
  lgpd: z.literal(true, "Você deve aceitar a política de privacidade"),
});

type FormData = z.infer<typeof schema>;

const fieldClass =
  "w-full bg-light-bg dark:bg-dark-steel border border-slate-300 dark:border-dark-border rounded-lg px-4 py-3 text-sm text-dark-steel dark:text-white placeholder-slate-400 dark:placeholder-[#64748B] focus:outline-none focus:border-montsteel-blue transition-colors";

const labelClass = "block text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-[#94A3B8] mb-1.5";

const errorClass = "mt-1 text-xs text-red-700 dark:text-red-400 flex items-center gap-1";

export default function CandidaturaForm({ vagas }: { vagas: string[] }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const VAGA_OPTIONS = [
    ...vagas.map((v) => ({ value: v, label: v })),
    { value: BANCO_DE_TALENTOS, label: BANCO_DE_TALENTOS },
  ];

  const searchParams = useSearchParams();
  const vagaParam = searchParams.get("vaga");
  const defaultVaga = VAGA_OPTIONS.some((o) => o.value === vagaParam) ? vagaParam! : undefined;

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
    watch,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      vaga: defaultVaga,
    },
  });

  // O formulário fica montado o tempo todo (não remonta quando o link "Aplicar"
  // de outra vaga só troca o ?vaga= na mesma página), então o campo precisa
  // ser sincronizado manualmente sempre que o parâmetro da URL mudar.
  useEffect(() => {
    if (defaultVaga) setValue("vaga", defaultVaga, { shouldValidate: true });
  }, [defaultVaga, setValue]);

  const curriculoFile = watch("curriculo")?.[0];

  async function onSubmit(data: FormData) {
    setSubmitError(null);
    try {
      const fd = new FormData();
      fd.append("nome", data.nome);
      fd.append("email", data.email);
      fd.append("telefone", data.telefone);
      fd.append("vaga", data.vaga);
      fd.append("mensagem", data.mensagem || "");
      fd.append("curriculo", data.curriculo[0]);

      const res = await fetch("/api/careers", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Falha no envio");
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.");
    }
  }

  if (submitted) {
    return (
      <div ref={successRef} className="bg-white dark:bg-dark-mid rounded-xl p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-2xl font-black uppercase text-dark-steel dark:text-white mb-2 font-display">
          Candidatura Enviada!
        </h2>
        <p className="text-slate-600 dark:text-[#94A3B8] mb-6">
          Recebemos seu currículo. Nossa equipe vai analisar seu perfil e entrar em contato se houver compatibilidade.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-montsteel-blue text-sm hover:underline"
        >
          Enviar nova candidatura
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
      <h2 className="text-2xl font-black uppercase text-dark-steel dark:text-white font-display">
        Envie sua Candidatura
      </h2>

      {submitError && (
        <div className="flex items-center gap-2 bg-red-900/30 border border-red-700/50 rounded-lg px-4 py-3 text-sm text-red-300">
          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          {submitError}
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
            E-mail <span className="text-montsteel-gold">*</span>
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

      {/* Row: Telefone + Vaga */}
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
            {...register("telefone")}
          />
          {errors.telefone && (
            <p className={errorClass} role="alert">
              <AlertCircle className="w-3 h-3" aria-hidden="true" />
              {errors.telefone.message}
            </p>
          )}
        </div>
        <Controller
          name="vaga"
          control={control}
          render={({ field }) => (
            <CustomSelect
              label="Vaga de Interesse"
              required
              variant="gold"
              placeholder="Selecione a vaga"
              value={field.value || ""}
              onChange={field.onChange}
              options={VAGA_OPTIONS}
              error={errors.vaga?.message}
            />
          )}
        />
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="mensagem" className={labelClass}>
          Mensagem (opcional)
        </label>
        <textarea
          id="mensagem"
          rows={3}
          placeholder="Conte um pouco sobre sua experiência ou o que te interessa na vaga."
          className={`${fieldClass} resize-none`}
          {...register("mensagem")}
        />
      </div>

      {/* Currículo */}
      <div>
        <label htmlFor="curriculo" className={labelClass}>
          Currículo (PDF, DOC ou DOCX — até 5MB) <span className="text-montsteel-gold">*</span>
        </label>
        <input
          id="curriculo"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="hidden"
          aria-required="true"
          aria-invalid={!!errors.curriculo}
          {...register("curriculo")}
          ref={(el) => {
            register("curriculo").ref(el);
            fileInputRef.current = el;
          }}
        />
        {curriculoFile ? (
          <div className="flex items-center justify-between gap-3 bg-light-bg dark:bg-dark-steel border border-slate-300 dark:border-dark-border rounded-lg px-4 py-3">
            <span className="text-sm text-dark-steel dark:text-white truncate">{curriculoFile.name}</span>
            <button
              type="button"
              onClick={() => {
                setValue("curriculo", undefined as unknown as FileList, { shouldValidate: true });
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
              aria-label="Remover arquivo"
              className="text-slate-500 dark:text-[#94A3B8] hover:text-red-500 flex-shrink-0"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 bg-light-bg dark:bg-dark-steel border border-dashed border-slate-300 dark:border-dark-border rounded-lg px-4 py-6 text-sm text-slate-600 dark:text-[#94A3B8] hover:border-montsteel-blue transition-colors"
          >
            <Upload className="w-4 h-4" aria-hidden="true" />
            Selecionar arquivo
          </button>
        )}
        {errors.curriculo && (
          <p className={errorClass} role="alert">
            <AlertCircle className="w-3 h-3" aria-hidden="true" />
            {errors.curriculo.message as string}
          </p>
        )}
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
            da MontSteel e autorizo o uso dos meus dados para fins de recrutamento.{" "}
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
        className="w-full py-4 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar Candidatura"}
      </button>
    </form>
  );
}
