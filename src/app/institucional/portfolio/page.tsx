import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfólio de Obras | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Conheça obras e projetos entregues pela CoberSteel: galpões de lona, metálicos, híbridos e mezaninos para os principais setores da indústria brasileira.",
  alternates: { canonical: "/institucional/portfolio" },
};

const obras = [
  {
    titulo: "Galpão de Lona — Armazenagem de Grãos",
    setor: "Agronegócio",
    local: "Interior de SP",
    area: "2.400 m²",
    img: "/images/produtos/galpao-de-lona.png",
  },
  {
    titulo: "Galpão Metálico Industrial",
    setor: "Indústria",
    local: "Região Sul",
    area: "5.000 m²",
    img: "/images/produtos/galpao-metalico.png",
  },
  {
    titulo: "Galpão CoberECOsteel Híbrido",
    setor: "Logística",
    local: "Centro-Oeste",
    area: "3.200 m²",
    img: "/images/produtos/galpao-coberecosteeel-hibrido.png",
  },
  {
    titulo: "Mezanino Metálico — Expansão Vertical",
    setor: "Varejo e Atacado",
    local: "Grande SP",
    area: "1.100 m²",
    img: "/images/produtos/mezaninos-metalicos.png",
  },
  {
    titulo: "Projeto Especial sob Medida",
    setor: "Petroquímico",
    local: "Nordeste",
    area: "Sob projeto",
    img: "/images/produtos/projetos-especiais.png",
  },
  {
    titulo: "Niveladoras de Doca",
    setor: "Logística e Distribuição",
    local: "Sudeste",
    area: "8 docas",
    img: "/images/produtos/niveladoras-de-doca.png",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-dark-mid">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #5C88B5 0, #5C88B5 1px, transparent 0, transparent 50%)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Institucional
          </p>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            NOSSO <span className="text-cobersteel-blue">PORTFÓLIO</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Uma seleção de obras e projetos entregues pela CoberSteel para os mais diversos setores da indústria nacional.
          </p>
        </div>
      </section>

      {/* Grid de obras */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {obras.map((o) => (
              <article
                key={o.titulo}
                className="group bg-dark-mid border border-dark-border rounded-xl overflow-hidden hover:border-cobersteel-blue/50 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={o.img}
                    alt={o.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-cobersteel-gold text-dark-steel text-xs font-bold uppercase px-2.5 py-1 rounded">
                    {o.setor}
                  </span>
                </div>
                <div className="p-6">
                  <h2
                    className="font-black uppercase text-white text-lg mb-3 leading-tight"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {o.titulo}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-[#94A3B8]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cobersteel-blue" aria-hidden="true" />
                      {o.local}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-cobersteel-blue" aria-hidden="true" />
                      {o.area}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-[#64748B] mt-10">
            * Imagens ilustrativas. Cases reais e fotos de obras serão adicionados em breve.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cobersteel-blue py-16">
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
          <Link
            href="/orcamento"
            className="inline-block bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </>
  );
}
