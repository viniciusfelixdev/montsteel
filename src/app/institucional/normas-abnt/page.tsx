import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { ShieldCheck, CheckCircle2, FileText, AlertTriangle, ChevronRight, ArrowLeft } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { NORMAS } from "@/lib/normas";
import { IMAGE_BLUR } from "@/lib/image-blur";

export const metadata: Metadata = {
  title: "Conformidade com Normas ABNT | MontSteel — Galpões e Coberturas Industriais",
  description:
    "Todos os projetos MontSteel são desenvolvidos conforme as normas ABNT para estruturas metálicas e galpões industriais. Segurança técnica em cada detalhe.",
  alternates: { canonical: "/institucional/normas-abnt" },
};

const pilares = [
  {
    icon: ShieldCheck,
    titulo: "Cálculo Estrutural Rigoroso",
    desc: "Calculamos cada projeto por completo com um engenheiro responsável e emitimos a ART, a Anotação de Responsabilidade Técnica.",
  },
  {
    icon: FileText,
    titulo: "Documentação Técnica Completa",
    desc: "Entregamos a você o memorial descritivo, as plantas estruturais, os laudos e a ART, toda a documentação para aprovar seu projeto em órgãos municipais e seguradoras.",
  },
  {
    icon: AlertTriangle,
    titulo: "Análise de Cargas Regionais",
    desc: "Consideramos as condições climáticas da sua região, como velocidade do vento, sobrecarga de neve em altitude e variações térmicas, para garantir segurança real no seu endereço.",
  },
  {
    icon: CheckCircle2,
    titulo: "Materiais Certificados",
    desc: "Usamos apenas aço com certificação de qualidade, lonas técnicas com laudo de resistência UV e demais materiais rastreáveis, sempre conforme as normas aplicáveis ao seu projeto.",
  },
];

export default function NormasAbntPage() {
  return (
    <>
      {/* Header */}
      <section className="relative institucional-banner-padding-bottom overflow-hidden">
        <Image
          src="/images/normas-abnt-banner.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={50}
          placeholder="blur"
          blurDataURL={IMAGE_BLUR["/images/normas-abnt-banner.webp"]}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" aria-hidden="true" />
        <div className="institucional-content-offset institucional-content-min-height relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Normas ABNT" }]} />
          <Link
            href="/"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Início
          </Link>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-6 font-display"
          >
            CONFORMIDADE COM <span className="text-montsteel-blue">NORMAS ABNT</span>
          </h1>
        </div>
      </section>

      {/* Por que normas importam */}
      <section className="bg-light-bg dark:bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-amber-800 dark:text-montsteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
                Nosso Posicionamento
              </p>
              <h2
                className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white mb-6 font-display"
              >
                NORMAS ABNT NÃO SÃO BUROCRACIA
              </h2>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  No setor de galpões industriais, é comum encontrar estruturas projetadas sem cálculo de engenharia formal, sem ART e sem conformidade com as normas técnicas brasileiras. O resultado é uma infraestrutura que parece funcionar bem, até que um evento climático extremo, uma sobrecarga de equipamento ou simplesmente o tempo coloquem tudo à prova.
                </p>
                <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  Assinamos cada projeto com um engenheiro responsável e calculamos tudo conforme as normas ABNT pertinentes. Para nós, isso não é um diferencial, é o mínimo que você merece ao investir na infraestrutura da sua operação.
                </p>
                <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  A conformidade técnica também protege você juridicamente. Com ART e documentação completa, sua estrutura é aceita por seguradoras, aprovada em prefeituras e resiste sem imprevistos a qualquer auditoria de fiscalização.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-[#64748B] mb-5">
                Como aplicamos isso no seu projeto
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {pilares.map((p) => (
                  <div
                    key={p.titulo}
                    className="p-6 bg-white dark:bg-dark-mid rounded-xl border border-slate-200 dark:border-dark-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-montsteel-blue/20 flex items-center justify-center mb-4">
                      <p.icon className="w-5 h-5 text-montsteel-blue" aria-hidden="true" />
                    </div>
                    <h3
                      className="font-black uppercase text-dark-steel dark:text-white text-base mb-2 font-display"
                    >
                      {p.titulo}
                    </h3>
                    <p className="text-[14px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabela de normas */}
      <section className="bg-white dark:bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
            >
              NORMAS APLICÁVEIS AOS <span className="text-montsteel-blue">NOSSOS PROJETOS</span>
            </h2>
            <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">
              Estas são as normas técnicas que orientam o cálculo estrutural dos nossos galpões. Clique em qualquer uma para entender o que ela exige e como isso protege a sua operação.
            </p>
          </div>

          <div className="border border-slate-200 dark:border-dark-border rounded-xl overflow-hidden">
            {NORMAS.map((n, i) => (
              <Link
                key={n.codigo}
                href={`/institucional/normas-abnt/${n.slug}`}
                className={`grid sm:grid-cols-4 gap-4 px-6 py-5 border-b border-slate-200 dark:border-dark-border last:border-0 hover:bg-montsteel-blue/10 transition-colors group ${
                  i % 2 === 0 ? "bg-light-bg dark:bg-dark-steel" : "bg-white dark:bg-dark-mid"
                }`}
              >
                <div className="sm:col-span-1 flex items-start">
                  <span className="inline-block text-xs font-bold font-mono px-3 py-1 rounded border text-montsteel-blue border-montsteel-blue/40 bg-montsteel-blue/10 uppercase tracking-wide">
                    {n.codigo}
                  </span>
                </div>
                <div className="sm:col-span-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-dark-steel dark:text-white mb-1 group-hover:text-montsteel-blue transition-colors">
                      {n.titulo}
                    </p>
                    <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">{n.resumo}</p>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-slate-600 dark:text-[#94A3B8] group-hover:text-montsteel-blue group-hover:translate-x-1 flex-shrink-0 mt-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-600 dark:text-[#94A3B8] text-center">
            As normas aplicáveis variam conforme o tipo de estrutura, a localidade e o uso do seu galpão. Nossa equipe de engenharia identifica as referências específicas para o seu projeto.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#FFF8EF] to-[#FFE3B8] dark:from-dark-steel dark:to-[#2E2000] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
          >
            SOLICITE UM PROJETO NORMATIZADO
          </h2>
          <p className="text-dark-steel/80 dark:text-white/80 text-lg mb-8">
            Fale com a nossa equipe de especialistas e receba um projeto desenvolvido sob medida para você, com ART, documentação completa e total conformidade com as normas ABNT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento"
              trackLocation="normas_abnt_cta_final"
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
