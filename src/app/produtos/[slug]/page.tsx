import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { ArrowRight, ChevronRight } from "lucide-react";
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
    title: `${product.name} | CoberSteel — Galpões e Coberturas Industriais`,
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
    brand: { "@type": "Brand", name: "CoberSteel" },
    category: "Galpões e coberturas industriais",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Produtos", item: `${SITE_URL}/#produtos` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE_URL}/produtos/${product.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero da página */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src={product.img}
          alt={`${product.name} — CoberSteel`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-white/70">
              <li className="flex items-center gap-1.5">
                <Link href="/" className="hover:text-white transition-colors">Início</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
              </li>
              <li className="flex items-center gap-1.5">
                <Link href="/#produtos" className="hover:text-white transition-colors">Produtos</Link>
                <ChevronRight className="w-3 h-3" aria-hidden="true" />
              </li>
              <li className="text-white" aria-current="page">{product.name}</li>
            </ol>
          </nav>
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
          <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-cobersteel-gold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cobersteel-gold" aria-hidden="true" />
            Desenvolvida sob medida para você
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
                O QUE SÃO OS <span className="text-cobersteel-blue">{product.name.toUpperCase()}</span>
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
                <span className="w-1 h-6 rounded-full bg-cobersteel-blue flex-shrink-0" aria-hidden="true" />
                <h2
                  className="text-xl font-black uppercase text-dark-steel dark:text-white tracking-wide font-display"
                >
                  APLICAÇÕES
                </h2>
              </div>
              <ul className="space-y-3">
                {product.aplicacoes.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[16px] text-slate-600 dark:text-[#94A3B8]">
                    <ArrowRight className="w-3.5 h-3.5 text-cobersteel-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vantagens */}
            <div className="bg-white dark:bg-dark-mid p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-6 rounded-full bg-cobersteel-gold flex-shrink-0" aria-hidden="true" />
                <h2
                  className="text-xl font-black uppercase text-dark-steel dark:text-white tracking-wide font-display"
                >
                  VANTAGENS
                </h2>
              </div>
              <ul className="space-y-3">
                {product.vantagens.map((v) => (
                  <li key={v.titulo} className="flex items-start gap-3 text-[16px] text-slate-600 dark:text-[#94A3B8]">
                    <ArrowRight className="w-3.5 h-3.5 text-cobersteel-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {v.titulo}
                  </li>
                ))}
              </ul>
            </div>

            {/* Especificações Técnicas */}
            <div className="bg-white dark:bg-dark-mid p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-1 h-6 rounded-full bg-cobersteel-silver flex-shrink-0" aria-hidden="true" />
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
      <section className="bg-gradient-to-br from-[#F4F8FC] to-[#DCE8F5] dark:from-dark-steel dark:to-[#101E30] py-16">
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
              href="/orcamento"
              trackName={product.ctaLabel}
              trackLocation="produto_cta_final"
              className="inline-flex items-center justify-center px-10 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded hover:bg-amber-400 transition-colors"
            >
              {product.ctaLabel}
            </TrackedLink>
            <a
              href="https://wa.me/5516997977613"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-dark-steel dark:border-white text-dark-steel dark:text-white font-bold text-sm uppercase rounded hover:bg-dark-steel dark:hover:bg-white hover:text-white dark:hover:text-cobersteel-blue transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
