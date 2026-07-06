import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Mail, Clock, Users, TrendingUp, Shield, Heart, Briefcase, ArrowLeft, ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const vagas = [
  {
    titulo: "Engenheiro(a) Civil / Estrutural",
    local: "Ibaté/SP",
    tipo: "CLT",
    modelo: "Presencial",
    quantidade: 1,
    desc: "Cálculo e desenvolvimento de projetos estruturais de galpões metálicos, com emissão de ART.",
  },
  {
    titulo: "Montador(a) de Estruturas Metálicas",
    local: "Campo (com viagens)",
    tipo: "CLT",
    modelo: "Presencial",
    quantidade: 4,
    desc: "Montagem e instalação de galpões e coberturas industriais em obras por todo o Brasil.",
  },
  {
    titulo: "Consultor(a) Comercial B2B",
    local: "Ibaté/SP",
    tipo: "CLT",
    modelo: "Híbrido",
    quantidade: 2,
    desc: "Prospecção e atendimento de clientes industriais, elaboração de propostas e fechamento de contratos.",
  },
  {
    titulo: "Auxiliar Administrativo",
    local: "Ibaté/SP",
    tipo: "CLT",
    modelo: "Presencial",
    quantidade: 1,
    desc: "Suporte às rotinas administrativas, financeiras e de apoio às operações internas.",
  },
];

export const metadata: Metadata = {
  title: "Trabalhe Conosco | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Faça parte do time CoberSteel. Confira nossas oportunidades e envie seu currículo para trabalhar com infraestrutura industrial de ponta.",
  alternates: { canonical: "/institucional/trabalhe-conosco" },
};

const beneficios = [
  { icon: TrendingUp, titulo: "Crescimento Profissional", desc: "Oportunidades reais de desenvolvimento e crescimento dentro da empresa." },
  { icon: Users, titulo: "Time Colaborativo", desc: "Ambiente de trabalho onde a troca de experiências e o trabalho em equipe são valorizados." },
  { icon: Shield, titulo: "Estabilidade", desc: "Empresa sólida com mais de 25 anos de mercado e crescimento contínuo." },
  { icon: Heart, titulo: "Propósito", desc: "Trabalhe em projetos que impactam a infraestrutura industrial de grandes empresas do Brasil." },
];

const areas = [
  { area: "Engenharia e Projetos", desc: "Cálculo estrutural, desenvolvimento de projetos e acompanhamento técnico de obras." },
  { area: "Montagem e Instalação", desc: "Equipes de campo para montagem de galpões e estruturas metálicas em todo o Brasil." },
  { area: "Comercial e Vendas", desc: "Prospecção, atendimento e relacionamento com clientes B2B nos principais setores industriais." },
  { area: "Logística e Operações", desc: "Planejamento e controle de materiais, frota e cronogramas de instalação." },
  { area: "Administrativo e Financeiro", desc: "Suporte às operações internas, controladoria e gestão administrativa." },
];

export default function TrabalheCOnoscoPage() {
  return (
    <>
      {/* Header */}
      <section className="relative institucional-banner-padding-bottom overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/quem-somos-banner.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <div className="institucional-content-offset institucional-content-min-height relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Trabalhe Conosco" }]} />
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
            TRABALHE CONOSCO
          </h1>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-light-bg dark:bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-800 dark:text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">Por que nos Escolher</p>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white font-display"
            >
              UM LUGAR PARA <span className="text-cobersteel-blue">CRESCER</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b) => (
              <div key={b.titulo} className="p-6 bg-white dark:bg-dark-mid rounded-xl border border-slate-200 dark:border-dark-border">
                <div className="w-10 h-10 rounded-lg bg-cobersteel-blue/20 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-cobersteel-blue" aria-hidden="true" />
                </div>
                <h3
                  className="font-bold uppercase text-dark-steel dark:text-white text-base mb-2 font-display"
                >
                  {b.titulo}
                </h3>
                <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="bg-white dark:bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white font-display"
            >
              ÁREAS QUE <span className="text-cobersteel-blue">CONTRATAMOS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((a) => (
              <div key={a.area} className="p-6 bg-light-bg dark:bg-dark-steel rounded-xl border border-slate-200 dark:border-dark-border">
                <h3
                  className="text-lg font-black uppercase text-dark-steel dark:text-white mb-2 font-display"
                >
                  {a.area}
                </h3>
                <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vagas Abertas */}
      <section className="bg-light-bg dark:bg-dark-steel py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white font-display"
            >
              VAGAS <span className="text-cobersteel-blue">ABERTAS</span>
            </h2>
          </div>

          <div className="space-y-4">
            {vagas.map((v) => (
              <div
                key={v.titulo}
                className="flex flex-col sm:flex-row sm:items-center gap-5 justify-between p-6 bg-white dark:bg-dark-mid rounded-xl border border-slate-200 dark:border-dark-border"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cobersteel-blue bg-cobersteel-blue/10 border border-cobersteel-blue/30 px-2.5 py-1 rounded">
                      <Briefcase className="w-3 h-3" aria-hidden="true" /> {v.tipo}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-[#94A3B8]">
                      <MapPin className="w-3 h-3 text-cobersteel-blue" aria-hidden="true" /> {v.local}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-[#94A3B8]">· {v.modelo}</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cobersteel-gold bg-cobersteel-gold/10 border border-cobersteel-gold/30 px-2.5 py-1 rounded-full">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-cobersteel-gold opacity-75 animate-ping" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cobersteel-gold" />
                      </span>
                      {v.quantidade} {v.quantidade === 1 ? "posição aberta" : "posições abertas"}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-black uppercase text-dark-steel dark:text-white mb-1 leading-tight font-display"
                  >
                    {v.titulo}
                  </h3>
                  <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed">{v.desc}</p>
                </div>

                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`Candidatura — ${v.titulo} (${v.local})`)}`}
                  className="group inline-flex items-center justify-center gap-2 flex-shrink-0 px-6 py-3 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors w-full sm:w-auto"
                >
                  Aplicar
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário / Envio de currículo */}
      <section className="bg-white dark:bg-dark-mid py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light-bg dark:bg-dark-steel rounded-xl p-8 border border-slate-200 dark:border-dark-border">
            <h2
              className="text-3xl font-black uppercase text-dark-steel dark:text-white mb-2 font-display"
            >
              ENVIE SEU CURRÍCULO
            </h2>
            <p className="text-slate-600 dark:text-[#94A3B8] text-sm mb-8">
              Não encontrou uma vaga específica? Envie seu currículo para nosso banco de talentos. Analisamos todos os perfis e entramos em contato quando surgir uma oportunidade compatível.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-[#94A3B8]">
                <Mail className="w-4 h-4 text-cobersteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-dark-steel dark:text-white font-medium mb-0.5">E-mail para envio</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-dark-steel dark:hover:text-white transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                  <p className="text-xs mt-1">Assunto: Currículo — [Área de interesse]</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-cobersteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-dark-steel dark:text-white font-medium mb-0.5">Sede</p>
                  <p>{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-[#94A3B8]">
                <Clock className="w-4 h-4 text-cobersteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-dark-steel dark:text-white font-medium mb-0.5">Horário de atendimento</p>
                  <p>{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <a
              href={`mailto:${CONTACT_INFO.email}?subject=Currículo — Banco de Talentos`}
              className="inline-flex items-center justify-center w-full py-3 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Enviar Currículo por E-mail
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
