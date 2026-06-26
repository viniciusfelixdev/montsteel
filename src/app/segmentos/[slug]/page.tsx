import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Wheat, UtensilsCrossed, Car, Building2, Factory, Mountain,
  FileText, Flame, Anchor, Layers, Leaf, ShoppingCart,
  ArrowLeft, CheckCircle2, ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { getSegment, SEGMENTS_DATA } from "@/lib/segments";
import { PRODUCTS } from "@/lib/constants";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const ICON_MAP: Record<string, LucideIcon> = {
  Wheat, UtensilsCrossed, Car, Building2, Factory, Mountain,
  FileText, Flame, Anchor, Layers, Leaf, ShoppingCart,
};

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

  const Icon = ICON_MAP[segment.icon] ?? Factory;

  const relatedProducts = PRODUCTS.filter((p) =>
    segment.produtos.includes(p.slug)
  );

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Segmentos" },
              { label: segment.name },
            ]}
          />
          <Link
            href="/#segmentos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white px-4 py-2 rounded-lg transition-all mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Todos os segmentos
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-cobersteel-blue/20 border border-cobersteel-blue/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-cobersteel-blue" aria-hidden="true" />
            </div>
            <h1
              className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {segment.name}
            </h1>
          </div>
          <p className="text-lg text-[#94A3B8] max-w-xl">
            Soluções desenvolvidas sob medida para você — porque nenhuma operação é igual à outra.
          </p>
        </div>
      </section>

      {/* Desafios do setor */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
                Contexto
              </p>
              <h2
                className="text-4xl sm:text-5xl font-black uppercase text-white mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                DESAFIOS DO <span className="text-cobersteel-blue">SETOR</span>
              </h2>
              <div className="space-y-5">
                {segment.desafios.map((d, i) => (
                  <p key={i} className="text-[#94A3B8] leading-relaxed text-sm">
                    {d}
                  </p>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div className="bg-dark-mid border border-dark-border rounded-xl p-8">
              <h3
                className="text-xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                POR QUE A COBERSTEEL PARA {segment.name.toUpperCase()}
              </h3>
              <ul className="space-y-4">
                {segment.beneficios.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-cobersteel-gold flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[#94A3B8]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções recomendadas */}
      <section className="bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Portfólio
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              SOLUÇÕES <span className="text-cobersteel-blue">RECOMENDADAS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {relatedProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/produtos/${p.slug}`}
                className="group p-6 bg-dark-steel border border-dark-border rounded-xl hover:border-cobersteel-blue transition-colors flex flex-col gap-3"
              >
                <h3
                  className="text-lg font-black uppercase text-white group-hover:text-cobersteel-blue transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {p.name}
                </h3>
                <p className="text-sm text-[#94A3B8] flex-1">{p.shortDesc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-cobersteel-blue font-semibold uppercase tracking-wider">
                  Saiba mais <ChevronRight className="w-3 h-3" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          {/* Outras soluções não listadas */}
          <div className="bg-dark-steel border border-dark-border rounded-xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm mb-1">
                  Não encontrou o que precisa?
                </p>
                <p className="text-[#94A3B8] text-xs">
                  Desenvolvemos projetos especiais sob medida para demandas únicas do setor de {segment.name}.
                </p>
              </div>
              <Link
                href="/produtos/projetos-especiais"
                className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 border border-cobersteel-blue text-cobersteel-blue text-sm font-semibold rounded-lg hover:bg-cobersteel-blue hover:text-white transition-colors"
              >
                Ver Projetos Especiais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-cobersteel-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            FALE COM UM ESPECIALISTA EM {segment.name.toUpperCase()}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Cada projeto é desenvolvido sob medida para você. Fale com um especialista e receba uma proposta personalizada, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center px-8 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento Gratuito
            </Link>
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
