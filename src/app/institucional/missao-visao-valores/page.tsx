import type { Metadata } from "next";
import Link from "next/link";
import {
  Target, Eye, Gem, Shield, Zap, Map, Award, Leaf, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Missão, Visão e Valores | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Conheça a missão, a visão e os valores que orientam a CoberSteel na entrega de soluções em galpões e coberturas industriais com excelência técnica.",
  alternates: { canonical: "/institucional/missao-visao-valores" },
};

const valores = [
  { icon: Shield, title: "Qualidade e Segurança", desc: "Qualidade, segurança e o cliente sempre em primeiro lugar." },
  { icon: Zap, title: "Agilidade", desc: "Agilidade no atendimento e nas instalações." },
  { icon: Map, title: "Planejamento Logístico", desc: "Planejamento logístico otimizado para cada operação." },
  { icon: Award, title: "Custo-Benefício", desc: "Preços competitivos, o melhor custo-benefício do mercado." },
  { icon: Leaf, title: "Responsabilidade ESG", desc: "Responsabilidade social, ambiental e Economia Circular." },
  { icon: CheckCircle2, title: "Conformidade Técnica", desc: "Conformidade técnica rigorosa com as normas ABNT." },
];

const blocos = [
  {
    icon: Target,
    label: "Missão",
    texto:
      "Ser o principal parceiro dos clientes na busca contínua pela excelência na logística e armazenamento de produtos.",
  },
  {
    icon: Eye,
    label: "Visão",
    texto:
      "Ser reconhecida como a melhor empresa nacional e internacional no ramo de coberturas e equipamentos logísticos para a indústria.",
  },
];

export default function MissaoVisaoValoresPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/quem-somos-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/80" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Institucional
          </p>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            MISSÃO, VISÃO <span className="text-cobersteel-blue">E VALORES</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Os princípios que orientam cada projeto, cada montagem e cada relação que construímos com nossos clientes.
          </p>
        </div>
      </section>

      {/* Missão + Visão */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {blocos.map((b) => (
            <div key={b.label} className="bg-dark-mid border border-dark-border rounded-2xl p-10">
              <div className="w-14 h-14 rounded-xl bg-cobersteel-blue/20 border border-cobersteel-blue/30 flex items-center justify-center mb-6">
                <b.icon className="w-7 h-7 text-cobersteel-blue" aria-hidden="true" />
              </div>
              <h2
                className="text-3xl font-black uppercase text-white mb-4"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {b.label}
              </h2>
              <p className="text-lg text-[#94A3B8] leading-relaxed">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex w-14 h-14 rounded-xl bg-cobersteel-gold/20 border border-cobersteel-gold/30 items-center justify-center mb-5">
              <Gem className="w-7 h-7 text-cobersteel-gold" aria-hidden="true" />
            </div>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              NOSSOS <span className="text-cobersteel-gold">VALORES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v) => (
              <div key={v.title} className="bg-dark-steel border border-dark-border rounded-xl p-6">
                <v.icon className="w-6 h-6 text-cobersteel-blue mb-4" aria-hidden="true" />
                <h3
                  className="font-black uppercase text-white text-base mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{v.desc}</p>
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
            VAMOS CONSTRUIR JUNTOS?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como a CoberSteel pode sustentar o crescimento da sua operação.
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
