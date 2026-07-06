// =============================================================================
// PORTFÓLIO — Estudos de Caso
// -----------------------------------------------------------------------------
// Este conteúdo é mantido por código (não pelo CMS do blog).
// Para adicionar uma nova obra ao portfólio, copie um bloco abaixo, troque os
// valores e salve. Campos com "?" são opcionais — podem ser omitidos.
// =============================================================================

interface PortfolioMetric {
  /** Número de destaque. Ex.: "+60%", "47 dias", "5.000 m²" */
  valor: string;
  /** Descrição curta do número. Ex.: "de capacidade de armazenagem" */
  label: string;
}

interface PortfolioSpec {
  label: string;
  value: string;
}

interface PortfolioDepoimento {
  texto: string;
  autor: string;
  cargo: string;
}

export interface PortfolioCase {
  /** Identificador na URL: /institucional/portfolio/[slug] */
  slug: string;
  titulo: string;
  /** Setor — aparece como badge no card e no hero */
  setor: string;
  local: string;
  area: string;
  /** Ano de entrega. Ex.: "2023" */
  ano: string;
  /** Opcional — omita se o cliente for confidencial */
  cliente?: string;
  /** Imagem principal (card + hero) */
  img: string;
  /** Produto relacionado (slug em /produtos) — gera link cruzado */
  produtoSlug?: string;
  /** Uma frase — aparece no card e abaixo do título */
  resumo: string;
  /** O desafio do cliente — um parágrafo por item */
  desafio: string[];
  /** A solução entregue pela CoberSteel — um parágrafo por item */
  solucao: string[];
  /** Resultados em números — vira cards de destaque */
  resultados: PortfolioMetric[];
  /** Ficha técnica da obra */
  specs: PortfolioSpec[];
  /** Opcional — depoimento do cliente */
  depoimento?: PortfolioDepoimento;
}

export const PORTFOLIO_DATA: PortfolioCase[] = [
  {
    slug: "galpao-metalico-industrial-sul",
    titulo: "Galpão Metálico Industrial",
    setor: "Indústria",
    local: "Região Sul",
    area: "5.000 m²",
    ano: "2023",
    img: "/images/produtos/galpao-metalico.webp",
    produtoSlug: "galpao-metalico",
    resumo:
      "Ampliação de linha produtiva com galpão metálico de grande vão livre, executada sem interromper a operação existente.",
    desafio: [
      "Uma indústria do Sul do país precisava ampliar sua capacidade fabril em 5.000 m² para acomodar uma nova linha de produção. O desafio era duplo: o novo galpão exigia grandes vãos livres para circulação de equipamentos pesados e ponte rolante, e a obra não podia paralisar a operação em andamento ao lado.",
      "A estrutura também precisava atender a critérios rigorosos de aproveitamento de luz natural e ventilação, reduzindo o custo operacional do novo setor.",
    ],
    solucao: [
      "A CoberSteel desenvolveu um galpão metálico com vão livre de 30 metros, calculado conforme as normas ABNT para suportar a carga da ponte rolante e dos equipamentos previstos. O projeto incluiu telhas translúcidas para iluminação natural e sistema de ventilação por exaustores.",
      "A montagem foi planejada em fases, com isolamento da frente de obra, permitindo que a fábrica seguisse produzindo durante toda a execução.",
    ],
    resultados: [
      { valor: "5.000 m²", label: "de nova área industrial" },
      { valor: "30 m", label: "de vão livre sem pilares internos" },
      { valor: "0", label: "paradas na operação existente" },
    ],
    specs: [
      { label: "Produto", value: "Galpão Metálico" },
      { label: "Área total", value: "5.000 m²" },
      { label: "Vão livre", value: "30 m" },
      { label: "Pé-direito", value: "8 m" },
      { label: "Cobertura", value: "Telha metálica + translúcidas" },
      { label: "Normas", value: "Conforme ABNT NBR 8800 / 14762" },
    ],
    depoimento: {
      texto:
        "Conseguimos ampliar a fábrica sem parar um único dia de produção. O nível de planejamento da equipe fez toda a diferença.",
      autor: "Diretor Industrial",
      cargo: "Indústria de transformação — Região Sul",
    },
  },
];

export function getPortfolioCase(slug: string): PortfolioCase | undefined {
  return PORTFOLIO_DATA.find((c) => c.slug === slug);
}
