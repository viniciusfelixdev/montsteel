import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PRODUCTS_DATA, getProduct } from "@/lib/products";
import { CONTACT_INFO } from "@/lib/constants";

const PRODUCT_IMAGES: Record<string, string> = {
  "mezaninos-metalicos": "/images/produtos/mezaninos-metalicos.png",
  "galpao-metalico": "/images/produtos/galpao-metalico.png",
  "galpao-de-lona": "/images/produtos/galpao-de-lona.png",
  "projetos-especiais": "/images/produtos/projetos-especiais.png",
  "galpao-coberecosteeel-hibrido": "/images/produtos/galpao-coberecosteeel-hibrido.png",
  "niveladoras-de-doca": "/images/produtos/niveladoras-de-doca.png",
};

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
    description: product.tagline,
  };
}

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      {/* Hero da página */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {PRODUCT_IMAGES[product.slug] ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${PRODUCT_IMAGES[product.slug]}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-dark-mid" aria-hidden="true" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #5C88B5 0, #5C88B5 1px, transparent 0, transparent 50%)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden="true"
            />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#produtos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white px-4 py-2 rounded-lg transition-all mb-6 group"
          >
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Voltar para Produtos
          </Link>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {product.name}
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-xl">{product.tagline}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-cobersteel-gold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cobersteel-gold" aria-hidden="true" />
            Desenvolvida sob medida para você
          </p>
        </div>
      </section>

      {/* Descrição */}
      <section className="bg-dark-steel py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4">
              <h2
                className="text-3xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                O QUE É O <span className="text-cobersteel-blue">{product.name.toUpperCase()}</span>
              </h2>
              {product.descricao.map((p, i) => (
                <p key={i} className="text-[#94A3B8] leading-relaxed">{p}</p>
              ))}
            </div>

            {/* CTA lateral */}
            <aside className="lg:col-span-1">
              <div className="bg-dark-mid border border-dark-border rounded-xl p-6 sticky top-24">
                <h3
                  className="text-lg font-black uppercase text-white mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Solicite um Orçamento
                </h3>
                <p className="text-sm text-[#94A3B8] mb-6">
                  Cada proposta é elaborada sob medida para você — nossa equipe analisa a sua operação e responde em até 24 horas úteis.
                </p>
                <Link
                  href="/orcamento"
                  className="block w-full text-center py-3 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors mb-3"
                >
                  {product.ctaLabel}
                </Link>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-semibold text-sm rounded-lg hover:bg-[#1ebe57] transition-colors"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="bg-dark-mid py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-black uppercase text-white mb-10"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            VANTAGENS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.vantagens.map((v) => (
              <div
                key={v.titulo}
                className="flex gap-4 items-start p-5 bg-dark-steel border border-dark-border rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-cobersteel-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3
                    className="font-bold uppercase text-white text-sm mb-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {v.titulo}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações + Specs */}
      <section className="bg-dark-steel py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Aplicações */}
            <div>
              <h2
                className="text-3xl font-black uppercase text-white mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                APLICAÇÕES
              </h2>
              <ul className="space-y-3">
                {product.aplicacoes.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                    <ArrowRight className="w-4 h-4 text-cobersteel-blue flex-shrink-0" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Especificações técnicas */}
            <div>
              <h2
                className="text-3xl font-black uppercase text-white mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                ESPECIFICAÇÕES TÉCNICAS
              </h2>
              <div className="border border-dark-border rounded-xl overflow-hidden">
                {product.specs.map((s, i) => (
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
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-cobersteel-blue py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            PRONTO PARA DAR O PRÓXIMO PASSO?
          </h2>
          <p className="text-white/80 mb-8">
            Fale com nossos especialistas e receba um projeto desenvolvido sob medida para você.
          </p>
          <Link
            href="/orcamento"
            className="inline-flex items-center justify-center px-10 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded hover:bg-amber-400 transition-colors"
          >
            {product.ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
