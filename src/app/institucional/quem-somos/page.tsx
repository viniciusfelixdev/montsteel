import type { Metadata } from "next";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import {
  Target, Eye, Gem, ArrowLeft, ArrowRight, Users, MapPin, Phone, Clock, Truck,
  ShieldCheck, Stamp, HardHat, BadgeCheck,
} from "lucide-react";
import Reveal from "./Reveal";
import StatsGrid from "./StatsGrid";
import { CONTACT_INFO } from "@/lib/constants";

const selos = [
  { Icon: ShieldCheck, sigla: "ABNT", desc: "Projetos calculados conforme normas técnicas nacionais e internacionais." },
  { Icon: Stamp, sigla: "ART / CREA", desc: "Cada obra com Anotação de Responsabilidade Técnica de engenharia." },
  { Icon: HardHat, sigla: "Segurança NR", desc: "Montagem conforme as normas regulamentadoras de segurança do trabalho." },
  { Icon: BadgeCheck, sigla: "Garantia", desc: "Estruturas entregues com garantia formal em contrato." },
];

// Placeholders — substituir por nomes, cargos, fotos e textos reais dos fundadores.
const fundadores = [
  {
    iniciais: "CM",
    nome: "Carlos Henrique Moretti",
    cargo: "Fundador & Diretor-Geral",
    bio: "Começou ainda jovem no chão de fábrica de estruturas metálicas e nunca mais saiu. É quem guia a visão de engenharia da CoberSteel — do primeiro cálculo ao galpão erguido.",
  },
  {
    iniciais: "MB",
    nome: "Marcos Aurélio Brandão",
    cargo: "Sócio-fundador · Operações e Obras",
    bio: "Responsável pelas equipes de campo e pela montagem. Garante que cada obra saia no prazo, com segurança e exatamente como foi projetada.",
  },
  {
    iniciais: "RS",
    nome: "Roberto Salvi",
    cargo: "Sócio-fundador · Comercial e Projetos",
    bio: "À frente do relacionamento com o cliente e dos projetos sob medida. Traduz a necessidade de cada operação em uma solução estrutural viável.",
  },
];

export const metadata: Metadata = {
  title: "Quem Somos | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Conheça a CoberSteel: referência em galpões de lona (PVC) e metálicos, com fundadores com mais de 25 anos de experiência no setor. Nossa história, missão, visão e valores.",
  alternates: { canonical: "/institucional/quem-somos" },
};

// Placeholder — datas exatas não confirmadas. Substituir "year" pelos anos reais assim que validados com os fundadores.
const timeline = [
  { year: "01", title: "Fundação", desc: "A CoberSteel nasce unindo a experiência de mais de 25 anos dos fundadores no setor de estruturas metálicas e coberturas industriais, com foco em inovação e empreendedorismo." },
  { year: "02", title: "Fábrica Própria", desc: "Construção da primeira fábrica própria, dedicada à produção de estruturas metálicas com controle direto sobre qualidade e prazos." },
  { year: "03", title: "Consolidação como Referência", desc: "A empresa se consolida como referência no mercado de galpões temporários de lona (PVC) e galpões metálicos, reconhecida pela solidez técnica e agilidade." },
  { year: "04", title: "Ampliação de Soluções", desc: "Portfólio ampliado para venda, locação, manutenção, ampliação e deslocamento de galpões, atendendo qualquer fabricante ou modelo." },
  { year: "05", title: "Expansão da Confecção de Lona", desc: "Segunda fábrica própria entra em operação, somando mais de 4.000 m² de área fabril dedicada também à confecção de membranas técnicas em lona de PVC." },
  { year: "06", title: "Solução Híbrida", desc: "Desenvolvimento do Galpão CoberECOsteel Híbrido, unindo estrutura metálica e cobertura de lona para equilibrar resistência, custo e sustentabilidade." },
  { year: "07", title: "Hoje", desc: "Uma das poucas empresas do mercado capazes de oferecer uma solução completa e integrada, com controle total sobre qualidade e prazos em cada projeto." },
];

const valores = [
  {
    Icon: Target,
    titulo: "Missão",
    texto:
      "Caminhar ao lado de cada cliente para que sua operação cresça com segurança. Queremos ser o parceiro de confiança na hora de armazenar, mover e proteger o que importa para o seu negócio.",
  },
  {
    Icon: Eye,
    titulo: "Visão",
    texto:
      "Sermos reconhecidos, dentro e fora do Brasil, como a empresa que as indústrias escolhem quando o assunto é cobertura e logística — não só pela estrutura que entregamos, mas pela forma como cuidamos de cada projeto.",
  },
  {
    Icon: Gem,
    titulo: "Valores",
    texto:
      "Acreditamos que qualidade e segurança nunca são negociáveis — e que prazo combinado é prazo cumprido. Ouvimos antes de propor, porque cada operação é diferente, e buscamos sempre a melhor solução pelo melhor preço, sem abrir mão do que é bem feito. Acima de tudo, fazemos isso com responsabilidade social e ambiental, valorizando a Economia Circular e respeitando rigorosamente as normas ABNT.",
  },
];

export default function QuemSomosPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative institucional-banner-padding-bottom overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/quem-somos-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <Reveal className="institucional-content-offset institucional-content-min-height relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2 rounded-lg transition-all mb-8 group"
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
      <section className="bg-dark-steel py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            <Reveal className="lg:col-span-7">
              <h2
                className="text-4xl sm:text-5xl font-black uppercase text-white mb-8 leading-[0.95] font-display"
              >
                NOSSA <span className="text-cobersteel-blue">JORNADA</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-5">
                A CoberSteel é referência no mercado de galpões temporários de lona (PVC) e galpões metálicos, com sólida experiência e mais de 25 anos de atuação de nossos fundadores no setor. Somos especializados em infraestrutura flexível para armazenagem e coberturas, além de equipamentos logísticos para a indústria, e oferecemos soluções integradas e personalizadas para cada cliente.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-5">
                Desde a nossa criação, temos como foco a inovação e o empreendedorismo, prezando pela alta qualidade, segurança e agilidade em todos os serviços prestados. Nosso diferencial vai além da eficiência técnica: o compromisso com a construção de relacionamentos duradouros e verdadeiros com nossos clientes é uma das nossas marcas registradas.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Oferecemos um portfólio completo de serviços, incluindo venda, locação, manutenção, ampliação e deslocamento de galpões. Independentemente do fabricante ou modelo, estamos prontos para atender às necessidades específicas de cada cliente.
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
      <section className="bg-dark-mid py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white leading-[0.95] font-display"
            >
              MARCOS DA NOSSA <span className="text-cobersteel-blue">TRAJETÓRIA</span>
            </h2>
          </Reveal>

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
                    className="absolute left-4 lg:left-1/2 top-1/2 w-3.5 h-3.5 rounded-full -translate-x-1/2 -translate-y-1/2 ring-4 ring-dark-mid"
                    style={{ backgroundColor: "#FFFFFF" }}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className={`ml-10 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                    <Reveal>
                      <div className="bg-dark-steel rounded-xl p-7">
                        <span
                          className="text-sm font-black tracking-widest text-cobersteel-silver font-display"
                        >
                          {item.year}
                        </span>
                        <h3
                          className="text-xl font-bold uppercase text-cobersteel-gold mt-1 mb-2.5 leading-tight font-display"
                        >
                          {item.title}
                        </h3>
                        <p className="text-[16px] text-[#94A3B8] leading-relaxed">{item.desc}</p>
                      </div>
                    </Reveal>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-dark-steel py-24 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 sm:mb-16">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white leading-[0.95] text-balance font-display"
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
                    <Icon className="w-7 h-7 text-white flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                    <h3
                      className="text-2xl font-black uppercase tracking-wide text-white leading-none font-display"
                    >
                      {titulo}
                    </h3>
                  </div>
                  <p className="text-lg text-white/80 leading-[1.7] max-w-[68ch] text-pretty">
                    {texto}
                  </p>
                </Reveal>
                <div className="h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe / Fundadores */}
      <section className="bg-dark-mid py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Foto (placeholder — substituir por foto real da equipe) */}
            <Reveal className="lg:col-span-6 order-last lg:order-first">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-steel flex flex-col items-center justify-center text-center px-6">
                <Users className="w-12 h-12 text-cobersteel-blue mb-4" strokeWidth={1.25} aria-hidden="true" />
                <p
                  className="text-lg font-bold uppercase tracking-wide text-white/70 font-display"
                >
                  Foto da equipe
                </p>
                <p className="text-sm text-[#94A3B8] mt-1">Em breve</p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6">
              <h2
                className="text-4xl sm:text-5xl font-black uppercase text-white mb-8 leading-[0.95] font-display"
              >
                POR TRÁS DE CADA <span className="text-cobersteel-blue">ESTRUTURA</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-5">
                A CoberSteel foi fundada por profissionais que cresceram dentro do chão de fábrica — gente que conhece estrutura metálica de perto, do cálculo ao parafuso, com mais de 25 anos de experiência no setor. Esse jeito hands-on continua o mesmo até hoje.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Cada projeto passa por engenheiros experientes e por equipes de campo próprias, treinadas e certificadas. A gente não terceiriza o que importa: quando você fala com a CoberSteel, fala com quem realmente levanta o galpão.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fundadores */}
      <section className="bg-dark-steel py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 sm:mb-16">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white leading-[0.95] font-display"
            >
              NOSSOS <span className="text-cobersteel-blue">FUNDADORES</span>
            </h2>
          </Reveal>

          <div className="space-y-6">
            {fundadores.map((f, i) => (
              <Reveal key={f.nome} delay={i * 0.08}>
                <article className="grid grid-cols-[96px_1fr] sm:grid-cols-[160px_1fr] gap-6 sm:gap-8 items-center rounded-2xl bg-dark-mid p-6 sm:p-8">
                  {/* Foto (placeholder — substituir por foto real) */}
                  <div
                    className="aspect-square rounded-xl bg-dark-steel flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span
                      className="text-2xl sm:text-3xl font-black text-cobersteel-blue font-display"
                    >
                      {f.iniciais}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-black uppercase text-white leading-none font-display"
                    >
                      {f.nome}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wide text-cobersteel-gold mt-1.5 mb-3">
                      {f.cargo}
                    </p>
                    <p className="text-white/80 leading-relaxed max-w-[60ch] text-pretty">{f.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selos técnicos */}
      <section className="bg-dark-mid py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white leading-[0.95] text-balance font-display"
            >
              PROJETOS COM <span className="text-cobersteel-blue">SELO DE ENGENHARIA</span>
            </h2>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Conformidade técnica não é diferencial, é obrigação. Toda estrutura CoberSteel carrega responsabilidade de engenharia do cálculo à entrega.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {selos.map((selo, i) => (
              <Reveal key={selo.sigla} className="flex flex-col items-center text-center" delay={i * 0.08}>
                <div className="w-20 h-20 rounded-full border-2 border-cobersteel-blue/40 flex items-center justify-center mb-5">
                  <selo.Icon className="w-9 h-9 text-cobersteel-blue" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p
                  className="text-xl font-black uppercase tracking-wide text-white mb-2 font-display"
                >
                  {selo.sigla}
                </p>
                <p className="text-[16px] text-[#94A3B8] leading-relaxed max-w-[26ch]">{selo.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* Localização / Presença */}
      <section className="bg-dark-steel py-24 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-5xl mx-auto mb-16">
            <h2
              className="text-xl sm:text-3xl lg:text-5xl font-black uppercase text-white leading-[0.95] whitespace-nowrap font-display"
            >
              SEDE EM IBATÉ. ATENDIMENTO NO <span className="text-cobersteel-blue">BRASIL TODO</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cobersteel-gold flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white mb-0.5">Sede</p>
                    <p className="text-[#94A3B8] leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Truck className="w-6 h-6 text-cobersteel-gold flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white mb-0.5">Abrangência</p>
                    <p className="text-[#94A3B8] leading-relaxed">Projeto, fabricação e instalação em todas as regiões do país.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-cobersteel-gold flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white mb-0.5">Contato</p>
                    <p className="text-[#94A3B8] leading-relaxed">
                      {CONTACT_INFO.phone1} · {CONTACT_INFO.whatsapp} (WhatsApp)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-cobersteel-gold flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white mb-0.5">Horário</p>
                    <p className="text-[#94A3B8] leading-relaxed">{CONTACT_INFO.hours}</p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-dark-border">
                <iframe
                  title="Mapa da sede da CoberSteel em Ibaté/SP"
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
      <section className="bg-gradient-to-br from-dark-steel to-[#101E30] py-20">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-5xl font-black uppercase text-white mb-5 leading-[0.95] font-display"
          >
            VAMOS CONSTRUIR JUNTOS?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-9 leading-relaxed">
            Fale com nossos especialistas e receba um projeto personalizado para a sua operação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento"
              trackLocation="quem_somos_cta_final"
              className="inline-flex items-center justify-center gap-2 bg-cobersteel-gold text-dark-steel font-bold uppercase tracking-wide px-8 py-4 rounded-lg hover:brightness-110 transition font-display"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </TrackedLink>
            <a
              href="https://wa.me/5516997977613"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-white hover:text-cobersteel-blue transition font-display"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
