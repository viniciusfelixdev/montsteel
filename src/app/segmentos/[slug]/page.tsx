import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { getSegment, SEGMENTS_DATA } from "@/lib/segments";
import { PRODUCTS, CONTACT_INFO } from "@/lib/constants";

const SEGMENT_IMAGES: Record<string, string> = {
  "agronegocio": "/images/segmentos/agronegocio.webp",
  "alimentos-bebidas": "/images/segmentos/alimentos-bebidas.webp",
  "automotivo": "/images/segmentos/automotivo.webp",
  "construcao-civil": "/images/segmentos/construcao-civil.webp",
  "industria": "/images/segmentos/industria.webp",
  "mineracao": "/images/segmentos/mineracao.webp",
  "papel-celulose": "/images/segmentos/papel-celulose.webp",
  "petroquimico": "/images/segmentos/petroquimico.webp",
  "portuario": "/images/segmentos/portuario.webp",
  "siderurgico": "/images/segmentos/siderurgico.webp",
  "sucroalcooleiro": "/images/segmentos/sucroalcooleiro.webp",
  "varejo-atacado": "/images/segmentos/varejo-atacado.webp",
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
    title: `Galpões para ${segment.name} | MontSteel — Infraestrutura Industrial`,
    description: `Soluções MontSteel para o setor de ${segment.name}. Galpões, coberturas e infraestrutura industrial conforme normas ABNT para sua operação.`,
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
            <div className="absolute inset-0 bg-[#1A1A1A]/75" aria-hidden="true" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-dark-mid" aria-hidden="true" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #CC8000 0, #CC8000 1px, transparent 0, transparent 50%)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden="true"
            />
          </>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Segmentos", href: "/#segmentos" },
              { label: segment.name },
            ]}
          />
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
          <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-montsteel-gold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-montsteel-gold" aria-hidden="true" />
            Soluções sob medida para o seu setor
          </p>
        </div>
      </section>

      {/* Desafios + Soluções */}
      <section className="bg-light-bg dark:bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Desafios do setor */}
            <div>
              <h2
                className="text-3xl font-black uppercase text-dark-steel dark:text-white mb-8 font-display"
              >
                DESAFIOS DO <span className="text-montsteel-blue">SETOR</span>
              </h2>
              <div className="space-y-5">
                {segment.desafios.map((d, i) => (
                  <p key={i} className="text-slate-600 dark:text-[#94A3B8] leading-relaxed text-base">
                    {d}
                  </p>
                ))}
              </div>
            </div>

            {/* Soluções recomendadas */}
            <div>
              <h2
                className="text-3xl font-black uppercase text-dark-steel dark:text-white mb-8 font-display"
              >
                SOLUÇÕES <span className="text-montsteel-blue">RECOMENDADAS</span>
              </h2>

              <div className="space-y-3 mb-6">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/produtos/${p.slug}?from=segmentos/${segment.slug}`}
                    className="group flex items-center justify-between p-4 bg-white dark:bg-dark-mid rounded-xl hover:bg-light-bg/70 dark:hover:bg-dark-mid/70 transition-colors"
                  >
                    <div>
                      <p
                        className="font-black uppercase text-dark-steel dark:text-white text-base group-hover:text-montsteel-gold transition-colors font-display"
                      >
                        {p.name}
                      </p>
                      <p className="text-[14px] text-slate-600 dark:text-[#94A3B8] mt-0.5">{p.shortDesc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-montsteel-gold flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                ))}
              </div>

              {/* Outras soluções */}
              <div className="bg-white dark:bg-dark-mid rounded-xl p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-dark-steel dark:text-white font-semibold text-base mb-1">Não encontrou o que precisa?</p>
                    <p className="text-slate-600 dark:text-[#94A3B8] text-sm">
                      Desenvolvemos projetos especiais sob medida para o setor de {segment.name}.
                    </p>
                  </div>
                  <Link
                    href={`/produtos/projetos-especiais?from=segmentos/${segment.slug}`}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-montsteel-gold text-dark-steel text-sm font-bold rounded-lg hover:bg-amber-400 transition-colors"
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
      <section className="bg-gradient-to-br from-[#FFF8EF] to-[#FFE3B8] dark:from-dark-steel dark:to-[#2E2000] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
          >
            FALE COM UM ESPECIALISTA EM {segment.name.toUpperCase()}
          </h2>
          <p className="text-dark-steel/80 dark:text-white/80 text-lg mb-8">
            Cada projeto é desenvolvido sob medida para você. Fale com um especialista e receba uma proposta personalizada, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href={`/orcamento?segmento=${segment.slug}`}
              trackName="solicitar_orcamento_gratuito"
              trackLocation="segmento_cta_final"
              className="inline-flex items-center justify-center px-8 py-4 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento Gratuito
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
