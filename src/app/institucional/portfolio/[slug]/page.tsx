import type { Metadata } from "next";
import { CONTACT_INFO } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { ArrowLeft, ArrowRight, MapPin, Ruler, Calendar, Building2, Target, CheckCircle2, Quote, Tag } from "lucide-react";
import { PORTFOLIO_DATA, getPortfolioCase } from "@/lib/portfolio";
import { getProduct } from "@/lib/products";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

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
    title: `${caso.titulo} | Portfólio MontSteel`,
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
        <div className="absolute inset-0 bg-[#1A1A1A]/80" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-steel to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Portfólio", href: "/institucional/portfolio" },
              { label: caso.titulo },
            ]}
          />
          <Link
            href="/institucional/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Portfólio
          </Link>

          <h1
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-5 max-w-4xl leading-[0.95] font-display"
          >
            {caso.titulo}
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8">{caso.resumo}</p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {meta.map(({ Icon, label, gold }) => (
              <span key={label} className="inline-flex items-center gap-2 text-sm text-white/80">
                <Icon className={`w-4 h-4 ${gold ? "text-montsteel-gold" : "text-montsteel-blue"}`} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Desafio + Solução */}
      <section className="bg-white dark:bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Desafio */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-montsteel-gold/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-montsteel-gold" aria-hidden="true" />
                </div>
                <h2
                  className="text-3xl font-black uppercase text-dark-steel dark:text-white font-display"
                >
                  O Desafio
                </h2>
              </div>
              <div className="space-y-4">
                {caso.desafio.map((p, i) => (
                  <p key={i} className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            {/* Solução */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-montsteel-blue/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-montsteel-blue" aria-hidden="true" />
                </div>
                <h2
                  className="text-3xl font-black uppercase text-dark-steel dark:text-white font-display"
                >
                  A Solução
                </h2>
              </div>
              <div className="space-y-4">
                {caso.solucao.map((p, i) => (
                  <p key={i} className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ficha técnica + Solução aplicada */}
      <section className="bg-light-bg dark:bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2
                className="text-3xl font-black uppercase text-dark-steel dark:text-white mb-8 font-display"
              >
                FICHA <span className="text-montsteel-blue">TÉCNICA</span>
              </h2>
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-dark-border">
                {caso.specs.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex items-center justify-between px-5 py-4 text-sm ${
                      i % 2 === 0 ? "bg-white dark:bg-dark-mid" : "bg-light-bg dark:bg-dark-steel"
                    }`}
                  >
                    <span className="text-slate-600 dark:text-[#94A3B8] font-medium">{s.label}</span>
                    <span className="text-dark-steel dark:text-white font-semibold text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solução aplicada */}
            {produto && (
              <div>
                <h2
                  className="text-3xl font-black uppercase text-dark-steel dark:text-white mb-8 font-display"
                >
                  SOLUÇÃO <span className="text-montsteel-blue">APLICADA</span>
                </h2>
                <div className="bg-white dark:bg-dark-mid rounded-xl p-8">
                  <h3
                    className="text-2xl font-black uppercase text-dark-steel dark:text-white mb-2 font-display"
                  >
                    {produto.name}
                  </h3>
                  <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] mb-6">{produto.tagline}</p>
                  <Link
                    href={`/produtos/${produto.slug}`}
                    className="inline-flex items-center gap-2 border border-montsteel-blue text-montsteel-blue text-sm font-semibold px-5 py-3 rounded-lg hover:bg-montsteel-blue hover:text-white transition-all"
                  >
                    Ver produto <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Depoimento (opcional) */}
      {caso.depoimento && (
        <section className="bg-white dark:bg-dark-mid py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <figure className="bg-light-bg dark:bg-dark-steel rounded-2xl p-10 sm:p-12">
              <Quote className="w-10 h-10 text-montsteel-blue/40 mb-6" aria-hidden="true" />
              <blockquote
                className="text-2xl sm:text-3xl text-dark-steel dark:text-white leading-snug mb-6 text-balance font-display"
              >
                &ldquo;{caso.depoimento.texto}&rdquo;
              </blockquote>
              <figcaption className="text-sm text-slate-600 dark:text-[#94A3B8]">
                <span className="font-semibold text-dark-steel dark:text-white">{caso.depoimento.autor}</span>
                {" · "}
                {caso.depoimento.cargo}
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="bg-gradient-to-br from-[#FFF8EF] to-[#FFE3B8] dark:from-dark-steel dark:to-[#2E2000] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
          >
            TEM UM PROJETO PARECIDO?
          </h2>
          <p className="text-dark-steel/80 dark:text-white/80 mb-8">
            Fale com nossos especialistas e receba uma solução desenvolvida sob medida para a sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento"
              trackLocation="portfolio_detalhe_cta_final"
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
