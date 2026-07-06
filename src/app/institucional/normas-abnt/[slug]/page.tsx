import type { Metadata } from "next";
import { CONTACT_INFO } from "@/lib/constants";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { getNorma, NORMAS } from "@/lib/normas";

// Banners por norma. Por padrão, nenhuma imagem é exibida.
// Para dar uma foto específica a uma norma, adicione o slug aqui
// (ex.: "nbr-6118": "/images/normas/nbr-6118.png").
const NORMA_IMAGES: Record<string, string> = {};

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
    title: `${norma.codigo} — ${norma.titulo} | MontSteel`,
    description: norma.resumo,
    alternates: { canonical: `/institucional/normas-abnt/${norma.slug}` },
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

  const specificImg = NORMA_IMAGES[norma.slug];

  return (
    <>
      {/* Header */}
      <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-br from-dark-steel to-dark-mid">
        {specificImg && (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${specificImg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#1A1A1A]/75" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-steel to-transparent" aria-hidden="true" />
          </>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Normas ABNT", href: "/institucional/normas-abnt" },
              { label: norma.codigo },
            ]}
          />
          <Link
            href="/institucional/normas-abnt"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Todas as normas
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold font-mono px-3 py-1 rounded border text-montsteel-blue border-montsteel-blue/40 bg-montsteel-blue/10">
              {norma.codigo}
            </span>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#94A3B8]">
              {norma.categoria}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4 leading-tight text-white font-display"
          >
            {norma.titulo}
          </h1>
          <p className="text-lg leading-relaxed text-[#94A3B8]">
            {norma.resumo}
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-light-bg dark:bg-dark-steel py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {norma.conteudo.map((bloco) => (
              <div key={bloco.subtitulo}>
                <h2
                  className="text-2xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
                >
                  {bloco.subtitulo}
                </h2>
                <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">{bloco.texto}</p>
              </div>
            ))}

            <div>
              <h2
                className="text-2xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
              >
                Como a MontSteel aplica esta norma
              </h2>
              <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">{norma.aplicacaoMontSteel}</p>
            </div>

            <div>
              <h2
                className="text-2xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
              >
                Pontos Críticos que Você Precisa Conhecer
              </h2>
              <ul className="space-y-4">
                {norma.pontosCriticos.map((ponto) => (
                  <li key={ponto} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-montsteel-gold flex-shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    <span className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">{ponto}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#FFF8EF] to-[#FFE3B8] dark:from-dark-steel dark:to-[#2E2000] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
          >
            SOLICITE UM PROJETO CONFORME A {norma.codigo}
          </h2>
          <p className="text-dark-steel/80 dark:text-white/80 mb-8">
            Cada projeto MontSteel é desenvolvido sob medida para você, com documentação técnica completa e ART de engenharia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento"
              trackLocation="normas_abnt_detalhe_cta_final"
              className="inline-flex items-center justify-center px-8 py-4 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento
            </TrackedLink>
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-dark-steel/10 dark:bg-white/10 text-dark-steel dark:text-white font-bold text-sm uppercase rounded-lg hover:bg-dark-steel dark:hover:bg-white hover:text-white dark:hover:text-montsteel-blue transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
