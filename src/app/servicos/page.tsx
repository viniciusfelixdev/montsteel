import type { Metadata } from "next";
import { CONTACT_INFO } from "@/lib/constants";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
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
  title: "Serviços e Manutenções | MontSteel — Galpões e Coberturas Industriais",
  description:
    "Instalação, montagem, manutenção preventiva e corretiva, ampliações e deslocamento de galpões industriais. Equipe especializada MontSteel em todo o Brasil.",
  alternates: { canonical: "/servicos" },
};

const servicos: Servico[] = [
  {
    icon: Wrench,
    titulo: "Montagem",
    desc: "Mão de obra especializada para montagem segura e dentro do prazo. Nossas equipes de campo atuam em todo o Brasil, garantindo a instalação correta de cada componente estrutural conforme o projeto técnico aprovado.",
    itens: [
      "Equipes treinadas e certificadas",
      "Cronograma detalhado de instalação",
      "Acompanhamento técnico na obra",
      "Entrega com laudo de conformidade",
    ],
  },
  {
    icon: Expand,
    titulo: "Ampliações",
    desc: "Sua operação cresceu e o espaço ficou pequeno? Expandimos as estruturas existentes com módulos adicionais que se integram perfeitamente à construção original, sem necessidade de demolição.",
    itens: [
      "Mínima interrupção das operações",
      "Aprovação ART de engenharia",
    ],
  },
  {
    icon: Truck,
    titulo: "Deslocamento de Estruturas",
    desc: "Relocação de galpões inteiros para novos endereços. Desmontamos, transportamos e remontamos sua estrutura no novo local, preservando ao máximo os componentes e reduzindo o custo em relação a uma nova aquisição.",
    itens: [
      "Desmontagem controlada e catalogada",
      "Transporte especializado",
      "Prazo competitivo de execução",
    ],
  },
  {
    icon: Zap,
    titulo: "Manutenção Corretiva",
    badge: "Resposta em até 48h",
    desc: "Atendimento ágil para restaurar a integridade estrutural após danos causados por eventos climáticos, impactos ou deterioração natural. Priorizamos a segurança e a continuidade da sua operação.",
    itens: [
      "Diagnóstico técnico preciso",
      "Garantia no serviço executado",
    ],
  },
  {
    icon: ShieldCheck,
    titulo: "Manutenção Preventiva",
    desc: "Inspeções periódicas programadas para identificar e corrigir pontos de atenção antes que se tornem problemas. A manutenção preventiva prolonga significativamente a vida útil da estrutura e reduz custos no longo prazo.",
    itens: [
      "Inspeção visual e estrutural completa",
      "Verificação de fixações e ancoragens",
      "Relatório técnico pós-inspeção",
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
            backgroundImage: "url('/images/servicos/banner.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" aria-hidden="true" />
        <div className="institucional-content-offset institucional-content-min-height relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Serviços" }]} />
          <Link
            href="/"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm hover:bg-black/70 px-4 py-2.5 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Início
          </Link>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-6 font-display"
          >
            SERVIÇOS E MANUTENÇÕES
          </h1>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-light-bg dark:bg-dark-steel py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white leading-none font-display"
            >
              O QUE FAZEMOS POR VOCÊ
            </h2>
            <p className="text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed mt-4">
              Oferecemos soluções completas para cada etapa da vida da sua estrutura, da montagem inicial à manutenção contínua, sempre com responsabilidade técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {servicos.map((s) => (
              <div
                key={s.titulo}
                className="bg-white dark:bg-dark-mid rounded-2xl p-10 flex items-start gap-5 min-h-[180px]"
              >
                <div className="w-14 h-14 rounded-xl bg-montsteel-blue/15 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-7 h-7 text-montsteel-blue" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5 mb-3">
                    <h3
                      className="text-2xl font-black uppercase text-dark-steel dark:text-white leading-tight font-display"
                    >
                      {s.titulo}
                    </h3>
                    {s.badge && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-montsteel-gold bg-montsteel-gold/10 px-2.5 py-1 rounded-full">
                        <Zap className="w-3 h-3" aria-hidden="true" />
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantias gerais */}
      <section className="bg-white dark:bg-dark-mid py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white leading-none font-display"
            >
              CONTE SEMPRE COM
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {servicos.flatMap((s) => s.itens).map((item) => (
              <li key={item} className="flex items-start gap-2 text-[16px] text-slate-600 dark:text-[#94A3B8] leading-snug">
                <CheckCircle2 className="w-4 h-4 text-montsteel-gold/80 flex-shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-[#FFF8EF] to-[#FFE3B8] dark:from-dark-steel dark:to-[#2E2000] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
          >
            AGENDE UM SERVIÇO DE MANUTENÇÃO
          </h2>
          <p className="text-dark-steel/80 dark:text-white/80 text-lg mb-8">
            Fale com nossa equipe técnica e receba um orçamento elaborado sob medida para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento"
              trackLocation="servicos_cta_final"
              className="inline-flex items-center justify-center px-8 py-4 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento
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
