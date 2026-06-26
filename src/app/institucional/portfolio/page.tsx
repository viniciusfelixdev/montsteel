import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Ruler, Truck, Users, Wrench, Building2 } from "lucide-react";
import { COMPANY_NUMBERS } from "@/lib/constants";

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

const diferenciais = [
  { icon: Truck, title: "Logística Nacional", desc: "Capacidade de transporte e montagem em qualquer estado brasileiro." },
  { icon: Users, title: "Equipes de Campo", desc: "Times de montagem especializados que se deslocam até a sua obra." },
  { icon: Wrench, title: "Manutenção em Todo o País", desc: "Atendimento de manutenção preventiva e corretiva onde a estrutura estiver." },
  { icon: Building2, title: "Projetos Sob Medida", desc: "Soluções adaptadas ao clima e às exigências de cada região." },
];

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

      {/* CoberSteel no Brasil — atuação nacional */}
      <section className="bg-dark-mid py-16 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">CoberSteel no Brasil</p>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              ATUAÇÃO <span className="text-cobersteel-blue">NACIONAL</span>
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto mt-4">
              De Norte a Sul, levamos infraestrutura industrial flexível para onde a sua operação precisa crescer.
            </p>
          </div>

          {/* Números */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {COMPANY_NUMBERS.map((n) => (
              <div key={n.label} className="text-center">
                <p
                  className="text-4xl sm:text-5xl font-black text-cobersteel-gold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  +{Number(n.value).toLocaleString("pt-BR")}
                  <span className="text-2xl align-top ml-1">{n.unit}</span>
                </p>
                <p className="text-sm text-[#94A3B8] mt-2">{n.label}</p>
              </div>
            ))}
          </div>

          {/* Regiões */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {regioes.map((r) => (
              <div key={r.nome} className="bg-dark-steel border border-dark-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-cobersteel-gold" aria-hidden="true" />
                  <h3
                    className="font-black uppercase text-white text-lg"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {r.nome}
                  </h3>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Diferenciais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((d) => (
              <div key={d.title} className="bg-dark-steel border border-dark-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-cobersteel-blue/20 border border-cobersteel-blue/30 flex items-center justify-center mb-4">
                  <d.icon className="w-5 h-5 text-cobersteel-blue" aria-hidden="true" />
                </div>
                <h3
                  className="font-black uppercase text-white text-sm mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {d.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
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
