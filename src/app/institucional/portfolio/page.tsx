import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { MapPin, Ruler, Building2, ArrowLeft, ArrowRight, Tag, Calendar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/portfolio";
import ClientLogos from "@/components/home/ClientLogos";

export const metadata: Metadata = {
  title: "Portfólio de Obras | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Conheça obras e projetos entregues pela CoberSteel: galpões de lona, metálicos, híbridos e mezaninos. Atuação nacional nos principais setores da indústria brasileira.",
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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/geral/cobersteel.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <div className="institucional-content-offset institucional-content-min-height relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Início
          </Link>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            NOSSO <span className="text-cobersteel-blue">PORTFÓLIO</span>
          </h1>
        </div>
      </section>

      <ClientLogos />

      {/* Grid de obras */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.map((o) => (
              <article
                key={o.slug}
                className="group bg-dark-mid rounded-xl overflow-hidden flex flex-col"
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
                    className="font-black uppercase text-white text-lg mb-3 leading-tight"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {o.titulo}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#94A3B8] mb-5 flex-1">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-cobersteel-gold" aria-hidden="true" />
                      {o.setor}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cobersteel-blue" aria-hidden="true" />
                      {o.local}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-cobersteel-blue" aria-hidden="true" />
                      {o.area}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href={`/institucional/portfolio/${o.slug}`}
                      className="inline-flex items-center gap-2 border border-cobersteel-blue text-cobersteel-blue text-sm font-semibold px-4 py-2 rounded-lg hover:bg-cobersteel-blue hover:text-white transition-all"
                    >
                      Ver estudo de caso <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#94A3B8]">
                      <Calendar className="w-3.5 h-3.5 text-cobersteel-blue" aria-hidden="true" />
                      {o.ano}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CoberSteel no Brasil — atuação nacional */}
      <section className="bg-dark-mid py-16 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              ATUAÇÃO NACIONAL
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto mt-4">
              De Norte a Sul, levamos infraestrutura industrial flexível para onde a sua operação precisa crescer.
            </p>
          </div>

          {/* Regiões */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {regioes.map((r) => (
              <div key={r.nome} className="bg-dark-steel rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-cobersteel-gold" aria-hidden="true" />
                  <h3
                    className="font-black uppercase text-white text-lg"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {r.nome}
                  </h3>
                </div>
                <p className="text-[16px] text-[#94A3B8] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-dark-steel to-[#101E30] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            SEU PROJETO PODE SER O PRÓXIMO
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Conte para a gente o que você precisa e receba uma proposta personalizada para a sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5516997977613"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Falar no WhatsApp
            </a>
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento"
              trackLocation="portfolio_cta_final"
              className="inline-block border-2 border-white text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-white hover:text-cobersteel-blue transition-colors"
            >
              Solicitar Orçamento
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
