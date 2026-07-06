import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Handshake } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Parceiros | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Conheça os parceiros estratégicos da CoberSteel e os cases de sucesso desenvolvidos em conjunto para o setor de infraestrutura industrial.",
  alternates: { canonical: "/institucional/parceiros" },
};

export default function ParceirosPage() {
  return (
    <>
      {/* Header */}
      <section className="relative institucional-banner-padding-bottom overflow-hidden bg-gradient-to-br from-dark-steel to-dark-mid">
        <div className="institucional-content-offset institucional-content-min-height relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Parceiros" }]} />
          <Link
            href="/"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Início
          </Link>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-6 font-display"
          >
            NOSSOS <span className="text-cobersteel-blue">PARCEIROS</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Empresas com quem construímos projetos, trocamos conhecimento técnico e fortalecemos a cadeia de infraestrutura industrial no Brasil.
          </p>
        </div>
      </section>

      {/* Placeholder — cases em breve */}
      <section className="bg-light-bg dark:bg-dark-steel py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-xl bg-cobersteel-blue/15 flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-7 h-7 text-cobersteel-blue" aria-hidden="true" />
          </div>
          <h2
            className="text-3xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
          >
            CASES EM CONSTRUÇÃO
          </h2>
          <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Estamos reunindo os primeiros cases desenvolvidos com nossos parceiros estratégicos. Em breve, esta página vai reunir histórias reais de parcerias, projetos conjuntos e resultados.
          </p>
        </div>
      </section>
    </>
  );
}
