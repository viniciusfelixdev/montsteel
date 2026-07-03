import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { ArrowLeft, ArrowRight, MapPin, Ruler, Calendar, Building2, Target, CheckCircle2, Quote, Tag } from "lucide-react";
import { PORTFOLIO_DATA, getPortfolioCase } from "@/lib/portfolio";
import { getProduct } from "@/lib/products";

export async function generateStaticParams() {
  return PORTFOLIO_DATA.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caso = getPortfolioCase(slug);
  if (!caso) return {};
  return {
    title: `${caso.titulo} | Portfólio CoberSteel`,
    description: caso.resumo,
    alternates: { canonical: `/institucional/portfolio/${caso.slug}` },
  };
}

export default async function PortfolioCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caso = getPortfolioCase(slug);
  if (!caso) notFound();

  const produto = caso.produtoSlug ? getProduct(caso.produtoSlug) : undefined;

  const meta = [
    { Icon: Tag, label: caso.setor, gold: true },
    { Icon: MapPin, label: caso.local },
    { Icon: Ruler, label: caso.area },
    { Icon: Calendar, label: caso.ano },
    ...(caso.cliente ? [{ Icon: Building2, label: caso.cliente }] : []),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${caso.img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/80" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-steel to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/institucional/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Portfólio
          </Link>

          <h1
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-5 max-w-4xl leading-[0.95]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {caso.titulo}
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8">{caso.resumo}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {meta.map(({ Icon, label, gold }) => (
              <span key={label} className="inline-flex items-center gap-2 text-sm text-white/80">
                <Icon className={`w-4 h-4 ${gold ? "text-cobersteel-gold" : "text-cobersteel-blue"}`} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados em números */}
      <section className="bg-dark-steel py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {caso.resultados.map((r) => (
              <div key={r.label} className="bg-dark-mid rounded-xl p-8 text-center">
                <p
                  className="text-4xl sm:text-5xl font-black text-cobersteel-gold mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {r.valor}
                </p>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desafio + Solução */}
      <section className="bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Desafio */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cobersteel-gold/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-cobersteel-gold" aria-hidden="true" />
                </div>
                <h2
                  className="text-3xl font-black uppercase text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  O Desafio
                </h2>
              </div>
              <div className="space-y-4">
                {caso.desafio.map((p, i) => (
                  <p key={i} className="text-[#94A3B8] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            {/* Solução */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cobersteel-blue/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-cobersteel-blue" aria-hidden="true" />
                </div>
                <h2
                  className="text-3xl font-black uppercase text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  A Solução
                </h2>
              </div>
              <div className="space-y-4">
                {caso.solucao.map((p, i) => (
                  <p key={i} className="text-[#94A3B8] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ficha técnica */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-black uppercase text-white mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            FICHA <span className="text-cobersteel-blue">TÉCNICA</span>
          </h2>
          <div className="rounded-xl overflow-hidden border border-dark-border">
            {caso.specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center justify-between px-5 py-4 text-sm ${
                  i % 2 === 0 ? "bg-dark-mid" : "bg-dark-steel"
                }`}
              >
                <span className="text-[#94A3B8] font-medium">{s.label}</span>
                <span className="text-white font-semibold text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento (opcional) */}
      {caso.depoimento && (
        <section className="bg-dark-mid py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <figure className="bg-dark-steel rounded-2xl p-10 sm:p-12">
              <Quote className="w-10 h-10 text-cobersteel-blue/40 mb-6" aria-hidden="true" />
              <blockquote
                className="text-2xl sm:text-3xl text-white leading-snug mb-6 text-balance"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                &ldquo;{caso.depoimento.texto}&rdquo;
              </blockquote>
              <figcaption className="text-sm text-[#94A3B8]">
                <span className="font-semibold text-white">{caso.depoimento.autor}</span>
                {" · "}
                {caso.depoimento.cargo}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* Produto relacionado (opcional) */}
      {produto && (
        <section className="bg-dark-steel py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between bg-dark-mid rounded-xl p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-cobersteel-gold mb-2">
                  Solução aplicada
                </p>
                <h3
                  className="text-2xl font-black uppercase text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {produto.name}
                </h3>
                <p className="text-sm text-[#94A3B8] mt-1 max-w-md">{produto.tagline}</p>
              </div>
              <Link
                href={`/produtos/${produto.slug}`}
                className="flex-shrink-0 inline-flex items-center gap-2 border border-cobersteel-blue text-cobersteel-blue text-sm font-semibold px-5 py-3 rounded-lg hover:bg-cobersteel-blue hover:text-white transition-all"
              >
                Ver produto <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="bg-gradient-to-br from-dark-steel to-[#101E30] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            TEM UM PROJETO PARECIDO?
          </h2>
          <p className="text-white/80 mb-8">
            Fale com nossos especialistas e receba uma solução desenvolvida sob medida para a sua operação.
          </p>
          <TrackedLink
            href="/orcamento"
            trackName="solicitar_orcamento"
            trackLocation="portfolio_detalhe_cta_final"
            className="inline-flex items-center justify-center px-10 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
          >
            Solicitar Orçamento
          </TrackedLink>
        </div>
      </section>
    </>
  );
}
