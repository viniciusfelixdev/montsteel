import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import {
  Wrench, ShieldCheck, Zap, Expand, Truck, ClipboardList, CheckCircle2,
  ArrowLeft, type LucideIcon,
} from "lucide-react";

type Servico = {
  icon: LucideIcon;
  titulo: string;
  badge?: string;
  desc: string;
  itens: string[];
};

export const metadata: Metadata = {
  title: "Serviços e Manutenções | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Instalação, montagem, manutenção preventiva e corretiva, ampliações e deslocamento de galpões industriais. Equipe especializada CoberSteel em todo o Brasil.",
  alternates: { canonical: "/servicos" },
};

const servicos: Servico[] = [
  {
    icon: Wrench,
    titulo: "Instalação e Montagem",
    desc: "Mão de obra especializada para montagem segura e dentro do prazo. Nossas equipes de campo atuam em todo o Brasil, garantindo a instalação correta de cada componente estrutural conforme o projeto técnico aprovado.",
    itens: [
      "Equipes treinadas e certificadas",
      "Cronograma detalhado de instalação",
      "Acompanhamento técnico na obra",
      "Entrega com laudo de conformidade",
    ],
  },
  {
    icon: ShieldCheck,
    titulo: "Manutenção Preventiva",
    desc: "Inspeções periódicas programadas para identificar e corrigir pontos de atenção antes que se tornem problemas. A manutenção preventiva prolonga significativamente a vida útil da estrutura e reduz custos no longo prazo.",
    itens: [
      "Inspeção visual e estrutural completa",
      "Verificação de fixações e ancoragens",
      "Substituição de elementos desgastados",
      "Relatório técnico pós-inspeção",
    ],
  },
  {
    icon: Zap,
    titulo: "Manutenção Corretiva",
    badge: "Resposta em até 48h",
    desc: "Atendimento ágil para restaurar a integridade estrutural após danos causados por eventos climáticos, impactos ou deterioração natural. Priorizamos a segurança e a continuidade da sua operação.",
    itens: [
      "Atendimento emergencial prioritário",
      "Diagnóstico técnico preciso",
      "Execução com peças originais",
      "Garantia no serviço executado",
    ],
  },
  {
    icon: Expand,
    titulo: "Ampliações",
    desc: "Sua operação cresceu e o espaço ficou pequeno? Expandimos as estruturas existentes com módulos adicionais que se integram perfeitamente à construção original, sem necessidade de demolição.",
    itens: [
      "Projeto de ampliação integrado à estrutura existente",
      "Mínima interrupção das operações",
      "Aprovação ART de engenharia",
      "Ampliação lateral ou longitudinal",
    ],
  },
  {
    icon: Truck,
    titulo: "Deslocamento de Estruturas",
    desc: "Relocação de galpões inteiros para novos endereços. Desmontamos, transportamos e remontamos sua estrutura no novo local, preservando ao máximo os componentes e reduzindo o custo em relação a uma nova aquisição.",
    itens: [
      "Desmontagem controlada e catalogada",
      "Transporte especializado",
      "Remontagem com inspeção de cada peça",
      "Prazo competitivo de execução",
    ],
  },
  {
    icon: ClipboardList,
    titulo: "Laudos e Consultorias Técnicas",
    desc: "Emissão de laudos técnicos de vistoria estrutural, laudos para seguradoras e consultorias para adequação de estruturas existentes às normas ABNT vigentes.",
    itens: [
      "Laudo com ART de engenharia",
      "Diagnóstico para seguradoras",
      "Adequação às normas ABNT",
      "Pareceres técnicos documentados",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* Header */}
      <section className="relative institucional-banner-padding-bottom overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/servicos/banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <div className="institucional-content-offset institucional-content-min-height relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Início
          </Link>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            SERVIÇOS E MANUTENÇÕES
          </h1>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-dark-steel py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white leading-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              O QUE FAZEMOS POR VOCÊ
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mt-4">
              Soluções completas para cada etapa da vida da sua estrutura — da montagem inicial à manutenção contínua, sempre com responsabilidade técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {servicos.map((s) => (
              <div
                key={s.titulo}
                className="bg-dark-mid rounded-2xl p-10 flex flex-col gap-8"
              >
                <div className="flex items-start gap-5 min-h-[180px]">
                  <div className="w-14 h-14 rounded-xl bg-cobersteel-blue/15 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-7 h-7 text-cobersteel-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5 mb-3">
                      <h3
                        className="text-2xl font-black uppercase text-white leading-tight"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {s.titulo}
                      </h3>
                      {s.badge && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-cobersteel-gold bg-cobersteel-gold/10 border border-cobersteel-gold/30 px-2.5 py-1 rounded-full">
                          <Zap className="w-3 h-3" aria-hidden="true" />
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-base text-[#94A3B8] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-8 border-t border-dark-border">
                  {s.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#94A3B8] leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-cobersteel-gold/80 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            AGENDE UM SERVIÇO DE MANUTENÇÃO
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Fale com nossa equipe técnica e receba um orçamento elaborado sob medida para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento"
              trackLocation="servicos_cta_final"
              className="inline-flex items-center justify-center px-8 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento
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
