import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { getNorma, NORMAS } from "@/lib/normas";

export async function generateStaticParams() {
  return NORMAS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const norma = getNorma(slug);
  if (!norma) return {};
  return {
    title: `${norma.codigo} — ${norma.titulo} | CoberSteel`,
    description: norma.resumo,
  };
}

export default async function NormaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const norma = getNorma(slug);
  if (!norma) notFound();

  return (
    <>
      {/* Header */}
      <section className="relative bg-dark-mid pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #5C88B5 0, #5C88B5 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/institucional/normas-abnt"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white px-4 py-2 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Todas as normas
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold font-mono text-cobersteel-gold border border-cobersteel-gold/40 bg-cobersteel-gold/10 px-3 py-1 rounded">
              {norma.codigo}
            </span>
            <span className="text-xs text-[#94A3B8] uppercase tracking-widest font-semibold">
              {norma.categoria}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4 leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {norma.titulo}
          </h1>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            {norma.resumo}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-dark-steel py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {norma.conteudo.map((bloco) => (
              <div key={bloco.subtitulo}>
                <h2
                  className="text-2xl font-black uppercase text-white mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {bloco.subtitulo}
                </h2>
                <p className="text-[#94A3B8] leading-relaxed">{bloco.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicação CoberSteel */}
      <section className="bg-dark-mid py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-cobersteel-blue pl-6">
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Como a CoberSteel aplica esta norma
            </p>
            <p className="text-white leading-relaxed">{norma.aplicacaoCoberSteel}</p>
          </div>
        </div>
      </section>

      {/* Pontos críticos */}
      <section className="bg-dark-steel py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-mid border border-cobersteel-gold/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-5 h-5 text-cobersteel-gold flex-shrink-0" aria-hidden="true" />
              <h2
                className="text-xl font-black uppercase text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Pontos Críticos que Você Precisa Conhecer
              </h2>
            </div>
            <ul className="space-y-4">
              {norma.pontosCriticos.map((ponto) => (
                <li key={ponto} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-cobersteel-gold flex-shrink-0 mt-2"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#94A3B8] leading-relaxed">{ponto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cobersteel-blue py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            SOLICITE UM PROJETO CONFORME A {norma.codigo}
          </h2>
          <p className="text-white/80 mb-8">
            Cada projeto CoberSteel é desenvolvido sob medida para você, com documentação técnica completa e ART de engenharia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center px-8 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="https://wa.me/5516997977613"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase rounded-lg hover:bg-white hover:text-cobersteel-blue transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
