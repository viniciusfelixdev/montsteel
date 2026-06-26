import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Artigos técnicos, cases e insights sobre infraestrutura industrial, galpões metálicos, normas ABNT e logística. Conteúdo especializado CoberSteel.",
};

type Categoria = "Técnico" | "Logística" | "Sustentabilidade" | "Cases" | "Novidades";

interface Artigo {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: Categoria;
  data: string;
  leitura: string;
  destaque?: boolean;
}

const artigos: Artigo[] = [
  {
    slug: "como-escolher-galpao-lona-ou-metalico",
    titulo: "Como escolher entre galpão de lona e metálico para sua operação",
    resumo:
      "Entenda as diferenças fundamentais entre galpões de lona e metálicos e saiba qual solução é mais adequada para cada tipo de operação industrial, considerando custo, prazo e durabilidade.",
    categoria: "Técnico",
    data: "10 jun 2025",
    leitura: "7 min",
    destaque: true,
  },
  {
    slug: "normas-abnt-estruturas-galpoes",
    titulo: "Normas ABNT para estruturas de galpões: o que sua empresa precisa saber",
    resumo:
      "Um guia completo sobre as principais normas ABNT aplicáveis a galpões e estruturas metálicas industriais, e por que a conformidade técnica é um investimento, não um custo.",
    categoria: "Técnico",
    data: "28 mai 2025",
    leitura: "9 min",
    destaque: true,
  },
  {
    slug: "mezaninos-metalicos-como-dobrar-area-util",
    titulo: "Mezaninos metálicos: como dobrar a área útil sem ampliar o terreno",
    resumo:
      "Descubra como os mezaninos metálicos permitem a expansão vertical de galpões industriais, aproveitando o pé-direito alto para criar novos andares sem obras de alvenaria.",
    categoria: "Técnico",
    data: "15 mai 2025",
    leitura: "6 min",
    destaque: true,
  },
  {
    slug: "sustentabilidade-construcao-industrial-galpao-hibrido",
    titulo: "Sustentabilidade na construção industrial: o caso do galpão híbrido",
    resumo:
      "Como o galpão CoberECOsteel Híbrido combina estrutura metálica com cobertura de lona para reduzir a pegada ambiental das operações industriais e apoiar as metas ESG das empresas.",
    categoria: "Sustentabilidade",
    data: "2 mai 2025",
    leitura: "5 min",
  },
  {
    slug: "galpao-de-lona-agronegocio-safra",
    titulo: "Galpão de lona no agronegócio: solução estratégica para a época de safra",
    resumo:
      "Como produtores rurais e cooperativas utilizam galpões de lona para ampliar rapidamente a capacidade de armazenagem durante o pico da colheita e reduzir perdas de grãos.",
    categoria: "Cases",
    data: "18 abr 2025",
    leitura: "8 min",
  },
];

const categorias: Categoria[] = ["Técnico", "Logística", "Sustentabilidade", "Cases", "Novidades"];

const corCategoria: Record<Categoria, string> = {
  Técnico: "bg-cobersteel-blue/20 text-cobersteel-blue border-cobersteel-blue/30",
  Logística: "bg-cobersteel-gold/20 text-cobersteel-gold border-cobersteel-gold/30",
  Sustentabilidade: "bg-green-900/30 text-green-400 border-green-800/50",
  Cases: "bg-purple-900/30 text-purple-400 border-purple-800/50",
  Novidades: "bg-orange-900/30 text-orange-400 border-orange-800/50",
};

function TagBadge({ categoria }: { categoria: Categoria }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded border ${corCategoria[categoria]}`}
    >
      <Tag className="w-3 h-3" aria-hidden="true" />
      {categoria}
    </span>
  );
}

export default function BlogPage() {
  const destaques = artigos.filter((a) => a.destaque);
  const demais = artigos.filter((a) => !a.destaque);

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/blog-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Conhecimento
          </p>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            BLOG <span className="text-cobersteel-blue">COBERSTEEL</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-xl leading-relaxed">
            Artigos técnicos, cases de sucesso e conteúdo especializado em infraestrutura industrial.
          </p>
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Feed de artigos */}
            <div className="lg:col-span-2 space-y-8">
              {/* Destaques */}
              {destaques.map((artigo) => (
                <article
                  key={artigo.slug}
                  className="bg-dark-mid border border-dark-border rounded-xl overflow-hidden hover:border-cobersteel-blue/50 transition-colors group"
                >
                  {/* Placeholder imagem */}
                  <div className="h-48 bg-gradient-to-br from-dark-border to-dark-steel flex items-center justify-center">
                    <span
                      className="text-4xl font-black uppercase text-white/10"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      aria-hidden="true"
                    >
                      CoberSteel
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TagBadge categoria={artigo.categoria} />
                      <span className="flex items-center gap-1 text-xs text-[#94A3B8]">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {artigo.data}
                      </span>
                      <span className="text-xs text-[#94A3B8]">{artigo.leitura} de leitura</span>
                    </div>
                    <h2
                      className="text-xl font-black uppercase text-white mb-3 group-hover:text-cobersteel-blue transition-colors"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {artigo.titulo}
                    </h2>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">{artigo.resumo}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-cobersteel-blue font-semibold uppercase tracking-wider">
                      Ler artigo <ChevronRight className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              ))}

              {/* Demais artigos */}
              {demais.map((artigo) => (
                <article
                  key={artigo.slug}
                  className="bg-dark-mid border border-dark-border rounded-xl p-6 hover:border-cobersteel-blue/50 transition-colors group flex gap-5"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <TagBadge categoria={artigo.categoria} />
                      <span className="flex items-center gap-1 text-xs text-[#94A3B8]">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {artigo.data}
                      </span>
                    </div>
                    <h2
                      className="text-lg font-black uppercase text-white mb-2 group-hover:text-cobersteel-blue transition-colors"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {artigo.titulo}
                    </h2>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">{artigo.resumo}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-cobersteel-blue font-semibold uppercase tracking-wider">
                      Ler artigo <ChevronRight className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categorias */}
              <div className="bg-dark-mid border border-dark-border rounded-xl p-6">
                <h3
                  className="text-sm font-black uppercase text-white mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Categorias
                </h3>
                <ul className="space-y-2">
                  {categorias.map((cat) => (
                    <li key={cat}>
                      <button className="flex items-center justify-between w-full text-sm text-[#94A3B8] hover:text-white transition-colors py-1.5 border-b border-dark-border last:border-0">
                        <span>{cat}</span>
                        <ChevronRight className="w-3 h-3" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Artigos recentes */}
              <div className="bg-dark-mid border border-dark-border rounded-xl p-6">
                <h3
                  className="text-sm font-black uppercase text-white mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Artigos Recentes
                </h3>
                <ul className="space-y-4">
                  {artigos.slice(0, 4).map((a) => (
                    <li key={a.slug} className="pb-4 border-b border-dark-border last:border-0 last:pb-0">
                      <p className="text-xs text-[#94A3B8] mb-1">{a.data}</p>
                      <p className="text-sm text-white leading-snug hover:text-cobersteel-blue transition-colors cursor-pointer">
                        {a.titulo}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA orçamento */}
              <div className="bg-cobersteel-blue rounded-xl p-6 text-center">
                <h3
                  className="text-lg font-black uppercase text-white mb-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  PRECISA DE UM GALPÃO?
                </h3>
                <p className="text-white/80 text-xs mb-4">
                  Fale com nossos especialistas e receba um projeto personalizado.
                </p>
                <Link
                  href="/orcamento"
                  className="inline-flex items-center justify-center w-full py-3 bg-cobersteel-gold text-dark-steel font-bold text-xs uppercase rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
