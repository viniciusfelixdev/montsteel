"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target, TrendingUp, Globe, Leaf, Zap, Building2,
  ArrowRight, Star, Shield, Users, BarChart3, Rocket,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const pilares = [
  {
    icon: Globe,
    numero: "01",
    titulo: "Expansão Nacional",
    desc: "Dobrar a presença geográfica com equipes fixas em pelo menos 5 novos estados, reduzindo o prazo de atendimento para menos de 72h em qualquer ponto do Brasil.",
    meta: "15 estados atendidos com equipe própria",
    cor: "cobersteel-blue",
  },
  {
    icon: TrendingUp,
    numero: "02",
    titulo: "Crescimento de Receita",
    desc: "Atingir 3× a receita atual com foco em contratos de locação de longo prazo, que geram receita recorrente previsível e fortalecem o caixa para novos investimentos.",
    meta: "300% de crescimento até dez/2027",
    cor: "cobersteel-gold",
  },
  {
    icon: Leaf,
    numero: "03",
    titulo: "Liderança ESG",
    desc: "Tornar o Galpão CoberECOsteel Híbrido a solução mais vendida do portfólio, posicionando a CoberSteel como a referência nacional em infraestrutura industrial sustentável.",
    meta: "50% das vendas em produtos ESG",
    cor: "cobersteel-blue",
  },
  {
    icon: Shield,
    numero: "04",
    titulo: "Excelência Técnica",
    desc: "Implementar sistema de gestão de qualidade certificado e ampliar o time de engenharia, garantindo que 100% dos projetos sejam entregues com ART e dentro do prazo contratado.",
    meta: "ISO 9001 conquistada em 2026",
    cor: "cobersteel-gold",
  },
  {
    icon: Users,
    numero: "05",
    titulo: "Time de Alta Performance",
    desc: "Triplicar o quadro de colaboradores com plano estruturado de carreira, treinamentos técnicos regulares e programa de participação nos resultados.",
    meta: "De 40 para 120 colaboradores",
    cor: "cobersteel-blue",
  },
  {
    icon: Rocket,
    numero: "06",
    titulo: "Digitalização",
    desc: "Lançar portal do cliente com acompanhamento de projetos em tempo real, sistema de manutenção preventiva agendada e app para equipes de campo.",
    meta: "Portal e app ao vivo em Q1 2026",
    cor: "cobersteel-gold",
  },
];

const marcos = [
  {
    periodo: "Q1 2026",
    titulo: "Fundação Digital",
    itens: ["Portal do cliente (MVP)", "CRM implementado", "BI operacional"],
  },
  {
    periodo: "Q3 2026",
    titulo: "Expansão Regional",
    itens: ["Filial Mato Grosso", "Filial Pará", "ISO 9001 certificada"],
  },
  {
    periodo: "Q1 2027",
    titulo: "Escala Nacional",
    itens: ["5 novos estados cobertos", "100 colaboradores", "App de campo lançado"],
  },
  {
    periodo: "Q4 2027",
    titulo: "Liderança Consolidada",
    itens: ["Meta 3× receita atingida", "50% produtos ESG", "Referência nacional"],
  },
];

const numeros = [
  { valor: "3×", label: "Meta de receita", sub: "em relação a 2025" },
  { valor: "15", label: "Estados com equipe", sub: "presença própria" },
  { valor: "120", label: "Colaboradores", sub: "até dezembro 2027" },
  { valor: "50%", label: "Vendas ESG", sub: "produtos sustentáveis" },
];

export default function Planejamento2027Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1019]">
        {/* Grade animada de fundo */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#5C88B5 1px, transparent 1px), linear-gradient(90deg, #5C88B5 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          aria-hidden="true"
        />

        {/* Gradiente de luz superior */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #5C88B5 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        {/* Acento dourado inferior esquerdo */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[300px] opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #D7A03B 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-cobersteel-gold text-xs font-semibold uppercase tracking-[0.3em] mb-6"
            >
              Documento Interno · Confidencial
            </motion.p>

            <motion.div variants={fadeUp} className="overflow-hidden mb-4">
              <h1
                className="text-[clamp(80px,18vw,220px)] font-black uppercase leading-none tracking-tighter text-white/[0.06] select-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                aria-hidden="true"
              >
                2027
              </h1>
            </motion.div>

            <motion.div variants={fadeUp} className="-mt-[clamp(50px,10vw,130px)]">
              <h2
                className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-tight"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                PLANEJAMENTO
                <br />
                <span className="text-cobersteel-blue">ESTRATÉGICO</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg text-[#94A3B8] max-w-2xl leading-relaxed"
            >
              A visão de onde a CoberSteel estará em 2027 — os pilares que guiam nossas decisões hoje para construir a empresa que queremos ser amanhã.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cobersteel-gold/40 bg-cobersteel-gold/10 text-cobersteel-gold text-xs font-semibold uppercase tracking-wider">
                <Star className="w-3.5 h-3.5" aria-hidden="true" />
                Horizonte 2025–2027
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cobersteel-blue/40 bg-cobersteel-blue/10 text-cobersteel-blue text-xs font-semibold uppercase tracking-wider">
                <BarChart3 className="w-3.5 h-3.5" aria-hidden="true" />
                6 Pilares Estratégicos
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-semibold uppercase tracking-wider">
                <Target className="w-3.5 h-3.5" aria-hidden="true" />
                4 Marcos de Execução
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Chevron signature no rodapé do hero */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-12 text-[#0F0F0F]">
            <polygon points="0,48 720,0 1440,48" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Números-meta */}
      <section className="bg-[#0F0F0F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-dark-border rounded-2xl overflow-hidden"
          >
            {numeros.map((n) => (
              <motion.div
                key={n.label}
                variants={fadeUp}
                className="bg-dark-mid p-8 text-center"
              >
                <p
                  className="text-5xl sm:text-6xl font-black text-cobersteel-gold mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {n.valor}
                </p>
                <p className="text-sm font-semibold text-white mb-1">{n.label}</p>
                <p className="text-xs text-[#94A3B8]">{n.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pilares estratégicos */}
      <section className="bg-[#0F0F0F] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Os 6 Pilares
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-6xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              ONDE VAMOS <span className="text-cobersteel-blue">CONCENTRAR ENERGIA</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pilares.map((p) => (
              <motion.div
                key={p.numero}
                variants={fadeUp}
                className="group relative bg-dark-mid border border-dark-border rounded-2xl p-8 hover:border-cobersteel-blue/40 transition-all duration-300 overflow-hidden"
              >
                {/* Número grande decorativo */}
                <span
                  className="absolute top-4 right-6 text-7xl font-black text-white/[0.04] select-none pointer-events-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  aria-hidden="true"
                >
                  {p.numero}
                </span>

                <div className={`w-12 h-12 rounded-xl bg-${p.cor}/15 border border-${p.cor}/30 flex items-center justify-center mb-6`}>
                  <p.icon className={`w-6 h-6 text-${p.cor}`} aria-hidden="true" />
                </div>

                <h3
                  className="text-xl font-black uppercase text-white mb-3"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {p.titulo}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">{p.desc}</p>

                <div className="pt-4 border-t border-dark-border">
                  <p className="text-xs text-cobersteel-gold font-semibold uppercase tracking-wide flex items-center gap-2">
                    <Target className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                    {p.meta}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline de marcos */}
      <section className="bg-dark-mid py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeUp} className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Execução
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-6xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              MARCOS DE <span className="text-cobersteel-blue">EXECUÇÃO</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            {/* Linha central (desktop) */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-dark-border" aria-hidden="true" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {marcos.map((m, i) => (
                <motion.div key={m.periodo} variants={fadeUp} className="relative">
                  {/* Ponto na linha */}
                  <div className="hidden lg:flex absolute -top-[9px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cobersteel-gold border-2 border-dark-mid items-center justify-center" aria-hidden="true" />

                  <div className="lg:pt-10 bg-dark-steel border border-dark-border rounded-xl p-6 hover:border-cobersteel-gold/30 transition-colors">
                    <span
                      className="inline-block text-xs font-bold text-cobersteel-gold uppercase tracking-widest mb-3 font-mono"
                    >
                      {m.periodo}
                    </span>
                    <h3
                      className="text-lg font-black uppercase text-white mb-4"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {m.titulo}
                    </h3>
                    <ul className="space-y-2">
                      {m.itens.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                          <span className="w-1.5 h-1.5 rounded-full bg-cobersteel-gold flex-shrink-0 mt-1" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {i === marcos.length - 1 && (
                      <div className="mt-4 pt-4 border-t border-dark-border">
                        <span className="text-xs text-cobersteel-blue font-semibold uppercase tracking-wider flex items-center gap-1">
                          <Star className="w-3 h-3" aria-hidden="true" />
                          Objetivo final
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-[#0F0F0F] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#D7A03B 1px, transparent 1px), linear-gradient(90deg, #D7A03B 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #D7A03B 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Building2 className="w-10 h-10 text-cobersteel-gold mx-auto mb-8 opacity-60" aria-hidden="true" />
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              className="text-3xl sm:text-5xl font-black uppercase text-white leading-tight mb-8"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              "Em 2027, quando alguém no Brasil pensar em{" "}
              <span className="text-cobersteel-gold">galpão industrial</span>, o primeiro nome que vem à cabeça será{" "}
              <span className="text-cobersteel-blue">CoberSteel."</span>
            </motion.blockquote>

            <motion.p variants={fadeUp} className="text-[#94A3B8] text-lg leading-relaxed mb-12">
              Este não é um sonho — é uma meta com pilares, marcos e responsáveis. O planejamento está feito. O trabalho começa agora.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
              >
                Fazer parte desta história
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/institucional/trabalhe-conosco"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase rounded-lg hover:border-white/50 transition-colors"
              >
                Trabalhe conosco
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rodapé da página */}
      <section className="bg-dark-mid border-t border-dark-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]">
            Planejamento Estratégico CoberSteel · Horizonte 2025–2027 · Documento Interno
          </p>
          <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
            <Zap className="w-3 h-3 text-cobersteel-gold" aria-hidden="true" />
            Revisão anual prevista: dezembro 2026
          </div>
        </div>
      </section>
    </>
  );
}
