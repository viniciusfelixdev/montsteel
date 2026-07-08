import type { Metadata } from "next";
import { CONTACT_INFO } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import PrefetchBannerLink from "@/components/shared/PrefetchBannerLink";
import { MapPin, Ruler, ArrowLeft, ArrowRight, Tag, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio";
import { IMAGE_BLUR } from "@/lib/image-blur";
import ClientLogos from "@/components/home/ClientLogos";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Portfólio de Obras | MontSteel — Galpões e Coberturas Industriais",
  description:
    "Conheça obras e projetos entregues pela MontSteel: galpões de lona, metálicos, híbridos e mezaninos. Atuação nacional nos principais setores da indústria brasileira.",
  alternates: { canonical: "/institucional/portfolio" },
};

const regioes = [
  { nome: "Sudeste", desc: "Sede em Ibaté/SP e maior concentração de obras — atendendo SP, MG, RJ e ES." },
  { nome: "Sul", desc: "Forte presença no agronegócio e na indústria do PR, SC e RS." },
  { nome: "Centro-Oeste", desc: "Suporte ao agronegócio e à logística de grãos em GO, MT, MS e DF." },
  { nome: "Nordeste", desc: "Projetos nos polos industriais, portuários e sucroalcooleiros da região." },
  { nome: "Norte", desc: "Estruturas para mineração, logística e armazenagem em ambientes desafiadores." },
];


export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative institucional-banner-padding-bottom overflow-hidden">
        <Image
          src="/images/geral/montsteel.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={50}
          placeholder="blur"
          blurDataURL={IMAGE_BLUR["/images/geral/montsteel.webp"]}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" aria-hidden="true" />
        <div className="institucional-content-offset institucional-content-min-height relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Portfólio" }]} />
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
            NOSSO <span className="text-montsteel-blue">PORTFÓLIO</span>
          </h1>
        </div>
      </section>

      <ClientLogos />

      {/* Grid de obras */}
      <section className="bg-light-bg dark:bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.map((o) => (
              <article
                key={o.slug}
                className="group bg-white dark:bg-dark-mid rounded-xl overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={o.img}
                    alt={o.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h2
                    className="font-black uppercase text-dark-steel dark:text-white text-lg mb-3 leading-tight font-display"
                  >
                    {o.titulo}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 dark:text-[#94A3B8] mb-5 flex-1">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-montsteel-gold" aria-hidden="true" />
                      {o.setor}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-montsteel-blue" aria-hidden="true" />
                      {o.local}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-montsteel-blue" aria-hidden="true" />
                      {o.area}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <PrefetchBannerLink
                      href={`/institucional/portfolio/${o.slug}`}
                      className="inline-flex items-center gap-2 border border-montsteel-blue text-montsteel-blue text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-montsteel-blue hover:text-white transition-all"
                    >
                      Ver estudo de caso <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </PrefetchBannerLink>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-[#94A3B8]">
                      <Calendar className="w-3.5 h-3.5 text-montsteel-blue" aria-hidden="true" />
                      {o.ano}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MontSteel no Brasil — atuação nacional */}
      <section className="bg-white dark:bg-dark-mid py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white font-display"
            >
              ATUAÇÃO NACIONAL
            </h2>
            <p className="text-slate-600 dark:text-[#94A3B8] max-w-2xl mx-auto mt-4">
              De Norte a Sul, levamos infraestrutura industrial flexível para onde a sua operação precisa crescer.
            </p>
          </div>

          {/* Regiões */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {regioes.map((r) => (
              <div key={r.nome} className="bg-light-bg dark:bg-dark-steel rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-montsteel-gold" aria-hidden="true" />
                  <h3
                    className="font-black uppercase text-dark-steel dark:text-white text-lg font-display"
                  >
                    {r.nome}
                  </h3>
                </div>
                <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#FFF8EF] to-[#FFE3B8] dark:from-dark-steel dark:to-[#2E2000] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
          >
            SEU PROJETO PODE SER O PRÓXIMO
          </h2>
          <p className="text-dark-steel/80 dark:text-white/80 mb-8 max-w-2xl mx-auto">
            Conte para a gente o que você precisa e receba uma proposta personalizada para a sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento"
              trackLocation="portfolio_cta_final"
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
