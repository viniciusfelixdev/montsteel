import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { getSegment, SEGMENTS_DATA } from "@/lib/segments";
import { PRODUCTS } from "@/lib/constants";

const SEGMENT_IMAGES: Record<string, string> = {
  "agronegocio": "/images/segmentos/agronegocio.png",
  "alimentos-bebidas": "/images/segmentos/alimentos-bebidas.png",
  "automotivo": "/images/segmentos/automotivo.png",
  "construcao-civil": "/images/segmentos/construcao-civil.png",
  "industria": "/images/segmentos/industria.png",
  "mineracao": "/images/segmentos/mineracao.png",
  "papel-celulose": "/images/segmentos/papel-celulose.png",
  "petroquimico": "/images/segmentos/petroquimico.png",
  "portuario": "/images/segmentos/portuario.png",
  "siderurgico": "/images/segmentos/siderurgico.png",
  "sucroalcooleiro": "/images/segmentos/sucroalcooleiro.png",
  "varejo-atacado": "/images/segmentos/varejo-atacado.png",
};

export async function generateStaticParams() {
  return SEGMENTS_DATA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) return {};
  return {
    title: `Galpões para ${segment.name} | CoberSteel — Infraestrutura Industrial`,
    description: `Soluções CoberSteel para o setor de ${segment.name}. Galpões, coberturas e infraestrutura industrial conforme normas ABNT para sua operação.`,
    alternates: { canonical: `/segmentos/${segment.slug}` },
  };
}

export default async function SegmentoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const segment = getSegment(slug);
  if (!segment) notFound();

  const relatedProducts = PRODUCTS.filter((p) =>
    segment.produtos.includes(p.slug)
  );

  return (
    <>
      {/* Header */}
      <section className="relative segments-banner-padding overflow-hidden">
        {SEGMENT_IMAGES[segment.slug] ? (
          <>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${SEGMENT_IMAGES[segment.slug]}')`,
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
                backgroundImage:
                  "repeating-linear-gradient(45deg, #5C88B5 0, #5C88B5 1px, transparent 0, transparent 50%)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden="true"
            />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#segmentos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Todos os segmentos
          </Link>

          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-4 font-display"
          >
            {segment.name}
          </h1>
          <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-cobersteel-gold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cobersteel-gold" aria-hidden="true" />
            Desenvolvida sob medida para você
          </p>
        </div>
      </section>

      {/* Desafios + Soluções */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Desafios do setor */}
            <div>
              <h2
                className="text-3xl font-black uppercase text-white mb-8 font-display"
              >
                DESAFIOS DO <span className="text-cobersteel-blue">SETOR</span>
              </h2>
              <div className="space-y-5">
                {segment.desafios.map((d, i) => (
                  <p key={i} className="text-[#94A3B8] leading-relaxed text-base">
                    {d}
                  </p>
                ))}
              </div>
            </div>

            {/* Soluções recomendadas */}
            <div>
              <h2
                className="text-3xl font-black uppercase text-white mb-8 font-display"
              >
                SOLUÇÕES <span className="text-cobersteel-blue">RECOMENDADAS</span>
              </h2>

              <div className="space-y-3 mb-6">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/produtos/${p.slug}?from=segmentos/${segment.slug}`}
                    className="group flex items-center justify-between p-4 bg-dark-mid rounded-xl hover:bg-dark-mid/70 transition-colors"
                  >
                    <div>
                      <p
                        className="font-black uppercase text-white text-base group-hover:text-cobersteel-gold transition-colors font-display"
                      >
                        {p.name}
                      </p>
                      <p className="text-[14px] text-[#94A3B8] mt-0.5">{p.shortDesc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-cobersteel-gold flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                ))}
              </div>

              {/* Outras soluções */}
              <div className="bg-dark-mid rounded-xl p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-white font-semibold text-base mb-1">Não encontrou o que precisa?</p>
                    <p className="text-[#94A3B8] text-sm">
                      Desenvolvemos projetos especiais sob medida para o setor de {segment.name}.
                    </p>
                  </div>
                  <Link
                    href={`/produtos/projetos-especiais?from=segmentos/${segment.slug}`}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-cobersteel-gold text-dark-steel text-sm font-bold rounded-lg hover:bg-amber-400 transition-colors"
                  >
                    Ver Projetos Especiais
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-dark-steel to-[#101E30] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase text-white mb-4 font-display"
          >
            FALE COM UM ESPECIALISTA EM {segment.name.toUpperCase()}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Cada projeto é desenvolvido sob medida para você. Fale com um especialista e receba uma proposta personalizada, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento_gratuito"
              trackLocation="segmento_cta_final"
              className="inline-flex items-center justify-center px-8 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento Gratuito
            </TrackedLink>
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
