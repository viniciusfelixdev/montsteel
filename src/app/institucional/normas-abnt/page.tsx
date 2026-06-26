import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, FileText, AlertTriangle, ChevronRight } from "lucide-react";
import { NORMAS } from "@/lib/normas";

export const metadata: Metadata = {
  title: "Conformidade com Normas ABNT | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Todos os projetos CoberSteel são desenvolvidos conforme as normas ABNT para estruturas metálicas e galpões industriais. Segurança técnica em cada detalhe.",
  alternates: { canonical: "/institucional/normas-abnt" },
};

const pilares = [
  {
    icon: ShieldCheck,
    titulo: "Cálculo Estrutural Rigoroso",
    desc: "Todo projeto passa por cálculo estrutural completo realizado por engenheiro responsável, com emissão de ART (Anotação de Responsabilidade Técnica).",
  },
  {
    icon: FileText,
    titulo: "Documentação Técnica Completa",
    desc: "Entregamos ao cliente o memorial descritivo, plantas estruturais, laudos e ARTs — documentação completa para aprovação em órgãos municipais e seguradoras.",
  },
  {
    icon: AlertTriangle,
    titulo: "Análise de Cargas Regionais",
    desc: "Consideramos as condições climáticas da região onde você está — velocidade do vento, sobrecarga de neve em altitude e variações térmicas — para garantir segurança real no seu endereço.",
  },
  {
    icon: CheckCircle2,
    titulo: "Materiais Certificados",
    desc: "Utilizamos exclusivamente aço com certificação de qualidade, lonas técnicas com laudos de resistência UV e demais materiais rastreáveis conforme as normas aplicáveis.",
  },
];

export default function NormasAbntPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#F4F7FA] to-[#E2E8F0] pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-x-0 top-20 bottom-0"
          style={{
            backgroundImage: "url('/images/normas/abnt-logo-blue.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 2rem center",
            backgroundSize: "auto 60%",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#0047BB] text-xs font-semibold uppercase tracking-widest mb-3">
            Institucional
          </p>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-dark-steel mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            CONFORMIDADE COM <span className="text-[#0047BB]">NORMAS ABNT</span>
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl leading-relaxed">
            Cada projeto CoberSteel é desenvolvido sob medida para você e calculado em conformidade com as normas brasileiras e internacionais — porque segurança estrutural não é opcional.
          </p>
        </div>
      </section>

      {/* Por que normas importam */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
                Nossa Posição
              </p>
              <h2
                className="text-4xl sm:text-5xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                NORMAS ABNT NÃO SÃO <span className="text-cobersteel-blue">BUROCRACIA</span>
              </h2>
              <p className="text-[#94A3B8] leading-relaxed mb-4">
                No setor de galpões industriais, é comum encontrar estruturas projetadas sem cálculo de engenharia formal, sem ART e sem conformidade com as normas técnicas brasileiras. O resultado é infraestrutura que aparenta funcionar — até que um evento climático extremo, uma sobrecarga de equipamento ou simplesmente o tempo a coloca à prova.
              </p>
              <p className="text-[#94A3B8] leading-relaxed mb-4">
                Na CoberSteel, cada projeto é assinado por engenheiro responsável e calculado conforme as normas ABNT pertinentes. Isso não é diferencial — é o mínimo que você merece ao investir em infraestrutura para a sua operação.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                A conformidade técnica também protege você juridicamente: estruturas com ART e documentação completa são aceitas por seguradoras, aprovadas em prefeituras e auditáveis por órgãos de fiscalização sem imprevistos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pilares.map((p) => (
                <div
                  key={p.titulo}
                  className="p-6 bg-dark-mid border border-dark-border rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-cobersteel-gold/20 border border-cobersteel-gold/30 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-cobersteel-gold" aria-hidden="true" />
                  </div>
                  <h3
                    className="font-black uppercase text-white text-sm mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {p.titulo}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabela de normas */}
      <section className="bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Referências Técnicas
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              NORMAS APLICÁVEIS AOS <span className="text-cobersteel-blue">NOSSOS PROJETOS</span>
            </h2>
          </div>

          <div className="border border-dark-border rounded-xl overflow-hidden">
            {NORMAS.map((n, i) => (
              <Link
                key={n.codigo}
                href={`/institucional/normas-abnt/${n.slug}`}
                className={`grid sm:grid-cols-4 gap-4 px-6 py-5 border-b border-dark-border last:border-0 hover:bg-cobersteel-blue/10 transition-colors group ${
                  i % 2 === 0 ? "bg-dark-steel" : "bg-dark-mid"
                }`}
              >
                <div className="sm:col-span-1 flex items-start">
                  <span className="inline-block text-xs font-bold text-cobersteel-blue uppercase tracking-wide font-mono">
                    {n.codigo}
                  </span>
                </div>
                <div className="sm:col-span-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white mb-1 group-hover:text-cobersteel-blue transition-colors">
                      {n.titulo}
                    </p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">{n.resumo}</p>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-[#94A3B8] group-hover:text-cobersteel-blue group-hover:translate-x-1 flex-shrink-0 mt-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-xs text-[#94A3B8] text-center">
            As normas aplicáveis variam conforme o tipo de estrutura, localidade e uso. Nossos engenheiros identificam as referências específicas para cada projeto.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cobersteel-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            SOLICITE UM PROJETO NORMATIZADO
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Fale com nossos especialistas e receba um projeto desenvolvido sob medida para você — com ART, documentação completa e total conformidade com as normas ABNT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center px-8 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento
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
