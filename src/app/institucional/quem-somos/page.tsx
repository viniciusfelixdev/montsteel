import type { Metadata } from "next";
import { Shield, Zap, Leaf, Award, Target, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Quem Somos | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Conheça a CoberSteel: mais de 25 anos de experiência em infraestrutura industrial flexível. Nossa história, missão, visão e valores.",
  alternates: { canonical: "/institucional/quem-somos" },
};

const timeline = [
  { year: "1999", title: "Fundação", desc: "A CoberSteel nasce em Ibaté/SP com foco em coberturas industriais para o interior paulista." },
  { year: "2005", title: "Expansão Nacional", desc: "Início das operações em outros estados, atendendo clientes no agronegócio e setor sucroalcooleiro." },
  { year: "2010", title: "Portfólio Ampliado", desc: "Lançamento da linha de galpões metálicos e dos mezaninos metálicos para clientes industriais." },
  { year: "2015", title: "Inovação ESG", desc: "Desenvolvimento do Galpão CoberECOsteel Híbrido, combinando estrutura metálica e cobertura de lona com menor pegada ambiental." },
  { year: "2020", title: "25 Anos de Mercado", desc: "Marco de mais de 75.000 m² de galpões instalados em todo o Brasil, consolidando liderança no setor." },
  { year: "Hoje", title: "Referência Nacional", desc: "Presente nos principais setores industriais do país, com equipe especializada e projetos conforme normas ABNT." },
];

const valores = [
  { icon: Shield, title: "Qualidade e Segurança", desc: "O cliente e a segurança estrutural vêm sempre em primeiro lugar em cada projeto que executamos." },
  { icon: Zap, title: "Agilidade", desc: "Atendimento rápido e instalações dentro do prazo, sem comprometer a qualidade da entrega." },
  { icon: Target, title: "Planejamento Logístico", desc: "Cada solução é desenvolvida sob medida para você — adaptada à sua operação, setor e localidade." },
  { icon: Award, title: "Melhor Custo-Benefício", desc: "Preços competitivos sem abrir mão da qualidade dos materiais e da execução técnica." },
  { icon: Leaf, title: "Responsabilidade ESG", desc: "Compromisso com a sustentabilidade, Economia Circular e responsabilidade socioambiental." },
  { icon: Heart, title: "Conformidade Técnica", desc: "Todos os projetos desenvolvidos em conformidade rigorosa com as normas ABNT nacionais e internacionais." },
];

export default function QuemSomosPage() {
  return (
    <>
      {/* Page Header */}
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
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Institucional
          </p>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-6"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            QUEM SOMOS
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Mais de 25 anos construindo infraestrutura que sustenta as maiores operações industriais do Brasil.
          </p>
        </div>
      </section>

      {/* Sobre a empresa */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                NOSSA <span className="text-cobersteel-blue">JORNADA</span>
              </h2>
              <p className="text-[#94A3B8] leading-relaxed mb-4">
                A CoberSteel nasceu em 1999 em Ibaté, interior de São Paulo, com uma missão clara: oferecer soluções de infraestrutura industrial flexível com qualidade, segurança e preço justo. O que começou como uma empresa regional cresceu para se tornar referência nacional no segmento de galpões e coberturas.
              </p>
              <p className="text-[#94A3B8] leading-relaxed mb-4">
                Ao longo de mais de duas décadas, instalamos mais de 75.000 m² de galpões, atendemos centenas de empresas dos maiores setores da economia brasileira e construímos uma equipe de especialistas apaixonados por engenharia e logística industrial.
              </p>
              <p className="text-[#94A3B8] leading-relaxed">
                Hoje, oferecemos um portfólio completo — de galpões de lona a projetos metálicos especiais — sempre com projetos calculados conforme normas ABNT e comprometidos com a excelência em cada instalação.
              </p>
            </div>

            {/* Stats rápidos */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "+25", label: "Anos de mercado" },
                { value: "+75.000", label: "m² instalados" },
                { value: "12", label: "Segmentos atendidos" },
                { value: "100%", label: "Conforme ABNT" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-dark-mid border border-dark-border rounded-xl text-center"
                >
                  <div
                    className="text-4xl font-black text-cobersteel-gold mb-1"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-sm text-[#94A3B8]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">Nossa História</p>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              MARCOS DA NOSSA <span className="text-cobersteel-blue">TRAJETÓRIA</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-dark-border" aria-hidden="true" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 top-1/2 w-3 h-3 bg-cobersteel-gold rounded-full -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

                  {/* Content */}
                  <div className={`ml-10 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-14" : "lg:pl-14"}`}>
                    <div className="bg-dark-steel border border-dark-border rounded-xl p-6">
                      <span
                        className="text-2xl font-black text-cobersteel-gold"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {item.year}
                      </span>
                      <h3
                        className="text-lg font-bold uppercase text-white mt-1 mb-2"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">Identidade Corporativa</p>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              MISSÃO, VISÃO <span className="text-cobersteel-blue">E VALORES</span>
            </h2>
          </div>

          {/* Missão e Visão */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <div className="bg-dark-mid border border-dark-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cobersteel-gold/20 border border-cobersteel-gold/30 flex items-center justify-center">
                  <Target className="w-5 h-5 text-cobersteel-gold" aria-hidden="true" />
                </div>
                <h3
                  className="text-xl font-black uppercase text-cobersteel-gold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Missão
                </h3>
              </div>
              <p className="text-[#94A3B8] leading-relaxed italic">
                "Ser o principal parceiro dos clientes na busca contínua pela excelência na logística e armazenamento de produtos."
              </p>
            </div>

            <div className="bg-dark-mid border border-dark-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cobersteel-gold/20 border border-cobersteel-gold/30 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-cobersteel-gold" aria-hidden="true" />
                </div>
                <h3
                  className="text-xl font-black uppercase text-cobersteel-gold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Visão
                </h3>
              </div>
              <p className="text-[#94A3B8] leading-relaxed italic">
                "Ser reconhecida como a melhor empresa nacional e internacional no ramo de coberturas e equipamentos logísticos para a indústria."
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-dark-mid border border-dark-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-cobersteel-gold/20 border border-cobersteel-gold/30 flex items-center justify-center">
                <Heart className="w-5 h-5 text-cobersteel-gold" aria-hidden="true" />
              </div>
              <h3
                className="text-2xl font-black uppercase text-cobersteel-gold"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Valores
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {valores.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-4 items-start p-4 bg-dark-steel border border-dark-border rounded-xl"
                >
                  <v.icon className="w-5 h-5 text-cobersteel-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4
                      className="font-bold uppercase text-white text-sm mb-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {v.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
