import type { Metadata } from "next";
import { CONTACT_INFO } from "@/lib/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { ArrowRight } from "lucide-react";
import ProductGallery from "@/components/products/ProductGallery";
import { PRODUCTS_DATA, getProduct } from "@/lib/products";
import { getSegment } from "@/lib/segments";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} | MontSteel — Galpões e Coberturas Industriais`,
    description: product.metaDescription ?? product.tagline,
    alternates: { canonical: `/produtos/${product.slug}` },
  };
}

export default async function ProdutoPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
}) {
  const { slug } = await params;
  const { from } = await searchParams;
  const product = getProduct(slug);
  if (!product) notFound();

  const segmentSlug = from?.startsWith("segmentos/") ? from.replace("segmentos/", "") : null;
  const originSegment = segmentSlug ? getSegment(segmentSlug) : undefined;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.metaDescription ?? product.tagline,
    image: `${SITE_URL}${product.img}`,
    url: `${SITE_URL}/produtos/${product.slug}`,
    brand: { "@type": "Brand", name: "MontSteel" },
    category: "Galpões e coberturas industriais",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* Hero da página */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src={product.img}
          alt={`${product.name} — MontSteel`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Produtos", href: "/#produtos" },
              { label: product.name },
            ]}
          />
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {originSegment && (
              <Link
                href={`/segmentos/${originSegment.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all group"
              >
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                Voltar para {originSegment.name}
              </Link>
            )}
            <Link
              href="/#produtos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all group"
            >
              {originSegment ? (
                <>
                  Ir para Produtos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </>
              ) : (
                <>
                  <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                  Voltar para Produtos
                </>
              )}
            </Link>
          </div>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-4 font-display"
          >
            {product.name}
          </h1>
          <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-montsteel-gold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-montsteel-gold" aria-hidden="true" />
            Desenvolvid{product.feminino ? "a" : "o"}{product.plural ? "s" : ""} sob medida para você
          </p>
        </div>
      </section>

      {/* Descrição */}
      <section className="bg-light-bg dark:bg-dark-steel pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4">
              <h2
                className="text-3xl font-black uppercase text-dark-steel dark:text-white mb-6 font-display"
              >
                O QUE {product.plural ? "SÃO" : "É"} {product.plural ? (product.feminino ? "AS" : "OS") : (product.feminino ? "A" : "O")}{" "}
                <span className="text-montsteel-blue">{product.name.toUpperCase()}</span>
              </h2>
              {product.descricao.map((p, i) => (
                <p key={i} className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">{p}</p>
              ))}
            </div>

            {/* Card de foto */}
            <aside className="lg:col-span-1 sticky top-24 self-start">
              <ProductGallery images={product.gallery} alt={product.name} />
            </aside>
          </div>
        </div>
      </section>

      {/* Aplicações + Vantagens + Specs */}
      <section className="bg-light-bg dark:bg-dark-steel pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-slate-200 dark:bg-dark-border rounded-2xl overflow-hidden">

            {/* Aplicações */}
            <div className="bg-white dark:bg-dark-mid p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-6 rounded-full bg-montsteel-blue flex-shrink-0" aria-hidden="true" />
                <h2
                  className="text-xl font-black uppercase text-dark-steel dark:text-white tracking-wide font-display"
                >
                  APLICAÇÕES
                </h2>
              </div>
              <ul className="space-y-3">
                {product.aplicacoes.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[16px] text-slate-600 dark:text-[#94A3B8]">
                    <span className="flex items-center h-6 flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-montsteel-blue" aria-hidden="true" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vantagens */}
            <div className="bg-white dark:bg-dark-mid p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-6 rounded-full bg-montsteel-gold flex-shrink-0" aria-hidden="true" />
                <h2
                  className="text-xl font-black uppercase text-dark-steel dark:text-white tracking-wide font-display"
                >
                  VANTAGENS
                </h2>
              </div>
              <ul className="space-y-3">
                {product.vantagens.map((v) => (
                  <li key={v.titulo} className="flex items-start gap-3 text-[16px] text-slate-600 dark:text-[#94A3B8]">
                    <span className="flex items-center h-6 flex-shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 text-montsteel-gold" aria-hidden="true" />
                    </span>
                    {v.titulo}
                  </li>
                ))}
              </ul>
            </div>

            {/* Especificações Técnicas */}
            <div className="bg-white dark:bg-dark-mid p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-6 rounded-full bg-montsteel-silver flex-shrink-0" aria-hidden="true" />
                <h2
                  className="text-xl font-black uppercase text-dark-steel dark:text-white tracking-wide font-display"
                >
                  ESPECIFICAÇÕES
                </h2>
              </div>
              <dl className="space-y-0 divide-y divide-slate-200 dark:divide-dark-border">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-[16px] text-slate-500 dark:text-[#64748B] font-medium flex-shrink-0">{s.label}</dt>
                    <dd className="text-[16px] text-dark-steel dark:text-white text-right">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-br from-[#FFF8EF] to-[#FFE3B8] dark:from-dark-steel dark:to-[#2E2000] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
          >
            PRONTO PARA DAR O PRÓXIMO PASSO?
          </h2>
          <p className="text-dark-steel/80 dark:text-white/80 mb-8">
            Fale com nossos especialistas e receba um projeto desenvolvido sob medida para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href={`/orcamento?produto=${product.orcamentoValue}${originSegment ? `&segmento=${originSegment.slug}` : ""}`}
              trackName={product.ctaLabel}
              trackLocation="produto_cta_final"
              className="inline-flex items-center justify-center px-8 py-4 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              {product.ctaLabel}
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
