import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Truck, Building2, Users, Wrench } from "lucide-react";
import { COMPANY_NUMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CoberSteel no Brasil | Atuação Nacional em Galpões Industriais",
  description:
    "A CoberSteel atende todo o território nacional com galpões e coberturas industriais. Conheça nossa capilaridade logística e presença nas principais regiões do Brasil.",
  alternates: { canonical: "/institucional/cobersteel-no-brasil" },
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

export default function CoberSteelNoBrasilPage() {
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
            COBERSTEEL <span className="text-cobersteel-blue">NO BRASIL</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            De Norte a Sul, levamos infraestrutura industrial flexível para onde a sua operação precisa crescer. Capilaridade logística e equipes especializadas em todo o território nacional.
          </p>
        </div>
      </section>

      {/* Números */}
      <section className="bg-dark-steel py-16 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
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
      </section>

      {/* Regiões */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">Cobertura</p>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              PRESENÇA EM TODAS AS <span className="text-cobersteel-blue">REGIÕES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regioes.map((r) => (
              <div key={r.nome} className="bg-dark-mid border border-dark-border rounded-xl p-6">
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
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            ATENDEMOS A SUA REGIÃO
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Onde quer que esteja a sua operação, a CoberSteel chega até você. Solicite um orçamento e fale com um especialista.
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
