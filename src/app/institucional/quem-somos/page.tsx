import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { IMAGE_BLUR } from "@/lib/image-blur";
import {
  Target, Eye, Gem, ArrowLeft, ArrowRight, MapPin, Phone, Clock, Truck,
  ShieldCheck, Stamp, HardHat, BadgeCheck,
} from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import StatsGrid from "./StatsGrid";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { CONTACT_INFO } from "@/lib/constants";

const selos = [
  { Icon: ShieldCheck, sigla: "ABNT", desc: "Projetos calculados conforme normas técnicas nacionais e internacionais." },
  { Icon: Stamp, sigla: "ART / CREA", desc: "Cada obra com Anotação de Responsabilidade Técnica de engenharia." },
  { Icon: HardHat, sigla: "Segurança NR", desc: "Montagem conforme as normas regulamentadoras de segurança do trabalho." },
  { Icon: BadgeCheck, sigla: "Garantia", desc: "Estruturas entregues com garantia formal em contrato." },
];

export const metadata: Metadata = {
  title: "Quem Somos | MontSteel — Galpões e Coberturas Industriais",
  description:
    "Conheça a MontSteel: montagem e fabricação de estruturas metálicas em Ibaté/SP. Nossa história, missão, visão e valores.",
  alternates: { canonical: "/institucional/quem-somos" },
};

const timeline: { year: string; title: string; desc: string }[] = [
  {
    year: "2025",
    title: "Fundação da MontSteel",
    desc: "Nascemos em Ibaté/SP com a proposta de unir montagem e fabricação de estruturas metálicas em um único parceiro técnico, ágil e confiável.",
  },
  {
    year: "2025",
    title: "Estrutura no Parque Industrial de Ibaté",
    desc: "Instalação da nossa base operacional, reunindo equipe técnica, equipamentos e logística para atender obras em todo o território nacional.",
  },
  {
    year: "2025",
    title: "Primeiros projetos entregues",
    desc: "Consolidação de processos de engenharia, segurança e montagem, com as primeiras estruturas metálicas entregues dentro do rigor técnico que definimos como padrão.",
  },
  {
    year: "Hoje",
    title: "Expansão da operação",
    desc: "Seguimos ampliando nossa capacidade de atendimento, investindo em equipe, equipamentos e conformidade técnica para acompanhar o crescimento dos nossos clientes.",
  },
];

const valores = [
  {
    Icon: Target,
    titulo: "Missão",
    texto: "Entregar estruturas metálicas com excelência técnica, segurança e agilidade, sendo o parceiro de confiança de clientes da construção civil e do setor industrial em todo o Brasil.",
  },
  {
    Icon: Eye,
    titulo: "Visão",
    texto: "Ser reconhecida nacionalmente como referência em montagem e fabricação de estruturas metálicas, unindo conformidade técnica, eficiência operacional e relacionamento próximo com o cliente.",
  },
  {
    Icon: Gem,
    titulo: "Valores",
    texto: "Segurança em primeiro lugar, rigor técnico em conformidade com as normas ABNT, agilidade no atendimento e nas montagens, e compromisso com o resultado do cliente em cada etapa da obra.",
  },
];

export default function QuemSomosPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative institucional-banner-padding-bottom overflow-hidden">
        <Image
          src="/images/quem-somos-banner.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={50}
          placeholder="blur"
          blurDataURL={IMAGE_BLUR["/images/quem-somos-banner.webp"]}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" aria-hidden="true" />
        <Reveal className="institucional-content-offset institucional-content-min-height relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Quem Somos" }]} />
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
            QUEM SOMOS
          </h1>
        </Reveal>
      </section>

      {/* Sobre a empresa */}
      <section className="bg-light-bg dark:bg-dark-steel py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            <Reveal className="lg:col-span-7">
              <h2
                className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white mb-8 leading-[0.95] font-display"
              >
                NOSSA <span className="text-montsteel-blue">JORNADA</span>
              </h2>
              <p className="text-lg text-dark-steel/80 dark:text-white/80 leading-relaxed">
                Fundada em janeiro de 2025, a MontSteel nasceu com o objetivo de oferecer soluções completas e robustas em montagem e fabricação de estruturas metálicas. Localizada estrategicamente no Parque Industrial de Ibaté/SP, combinamos expertise técnica, segurança e eficiência para atender às demandas da construção civil e do setor industrial.
              </p>
            </Reveal>

            {/* Stats rápidos */}
            <div className="lg:col-span-5">
              <StatsGrid />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white dark:bg-dark-mid py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white leading-[0.95] font-display"
            >
              MARCOS DA NOSSA <span className="text-montsteel-blue">TRAJETÓRIA</span>
            </h2>
          </Reveal>

          {timeline.length === 0 ? (
            <p className="text-dark-steel/70 dark:text-white/70 text-center">Conteúdo em atualização.</p>
          ) : (
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-dark-border" aria-hidden="true" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 lg:left-1/2 top-1/2 w-3.5 h-3.5 rounded-full -translate-x-1/2 -translate-y-1/2 bg-montsteel-blue ring-4 ring-white dark:ring-dark-mid"
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className={`ml-10 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                    <Reveal>
                      <div className="bg-light-bg dark:bg-dark-steel rounded-xl p-7">
                        <span
                          className="text-sm font-black tracking-widest text-montsteel-silver font-display"
                        >
                          {item.year}
                        </span>
                        <h3
                          className="text-xl font-bold uppercase text-montsteel-gold mt-1 mb-2.5 leading-tight font-display"
                        >
                          {item.title}
                        </h3>
                        <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">{item.desc}</p>
                      </div>
                    </Reveal>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-light-bg dark:bg-dark-steel py-24 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 sm:mb-16">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white leading-[0.95] text-balance font-display"
            >
              MISSÃO, VISÃO E VALORES
            </h2>
          </Reveal>

          <div>
            <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />
            {valores.map(({ Icon, titulo, texto }) => (
              <div key={titulo}>
                <Reveal className="grid gap-x-12 gap-y-5 py-10 sm:py-14 lg:grid-cols-[200px_1fr]">
                  <div className="flex items-center gap-3">
                    <Icon className="w-7 h-7 text-dark-steel dark:text-white flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                    <h3
                      className="text-2xl font-black uppercase tracking-wide text-dark-steel dark:text-white leading-none font-display"
                    >
                      {titulo}
                    </h3>
                  </div>
                  <p className="text-lg text-dark-steel/80 dark:text-white/80 leading-[1.7] max-w-[68ch] text-pretty">
                    {texto}
                  </p>
                </Reveal>
                <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selos técnicos */}
      <section className="bg-white dark:bg-dark-mid py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white leading-[0.95] text-balance font-display"
            >
              PROJETOS COM <span className="text-montsteel-blue">SELO DE ENGENHARIA</span>
            </h2>
            <p className="mt-4 text-lg text-dark-steel/80 dark:text-white/80 leading-relaxed">
              Conformidade técnica não é diferencial, é obrigação. Toda estrutura MontSteel carrega responsabilidade de engenharia do cálculo à entrega.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {selos.map((selo, i) => (
              <Reveal key={selo.sigla} className="flex flex-col items-center text-center" delay={i * 0.08}>
                <div className="w-20 h-20 rounded-full border-2 border-montsteel-blue/40 flex items-center justify-center mb-5">
                  <selo.Icon className="w-9 h-9 text-montsteel-blue" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p
                  className="text-xl font-black uppercase tracking-wide text-dark-steel dark:text-white mb-2 font-display"
                >
                  {selo.sigla}
                </p>
                <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed max-w-[26ch]">{selo.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Localização / Presença */}
      <section className="bg-light-bg dark:bg-dark-steel py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-5xl mx-auto mb-16">
            <h2
              className="text-xl sm:text-3xl lg:text-5xl font-black uppercase text-dark-steel dark:text-white leading-[0.95] whitespace-nowrap font-display"
            >
              SEDE EM IBATÉ. ATENDIMENTO EM TODO O <span className="text-montsteel-blue">BRASIL</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-montsteel-gold flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-dark-steel dark:text-white mb-0.5">Sede</p>
                    <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-montsteel-gold flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-dark-steel dark:text-white mb-0.5">Abrangência</p>
                    <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">Projeto, fabricação e instalação em todas as regiões do país.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-montsteel-gold flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-dark-steel dark:text-white mb-0.5">Contato</p>
                    <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                      {CONTACT_INFO.phone1} · {CONTACT_INFO.whatsapp} (WhatsApp)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-montsteel-gold flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-dark-steel dark:text-white mb-0.5">Horário</p>
                    <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed">{CONTACT_INFO.hours}</p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-dark-border">
                <iframe
                  title="Mapa da sede da MontSteel em Ibaté/SP"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&output=embed`}
                  width="100%"
                  height="380"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, display: "block", filter: "grayscale(0.4) contrast(1.05)" }}
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-[#FFF8EF] to-[#FFE3B8] dark:from-dark-steel dark:to-[#2E2000] py-20">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white mb-5 leading-[0.95] font-display"
          >
            VAMOS CONSTRUIR JUNTOS?
          </h2>
          <p className="text-dark-steel/85 dark:text-white/85 text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
            Fale com nossos especialistas e receba um projeto personalizado para a sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento"
              trackLocation="quem_somos_cta_final"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
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
        </Reveal>
      </section>
    </>
  );
}
