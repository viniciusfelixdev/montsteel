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
    slug: "armazenagem-graos-agronegocio-sp",
    titulo: "Galpão de Lona — Armazenagem de Grãos",
    setor: "Agronegócio",
    local: "Interior de SP",
    area: "2.400 m²",
    ano: "2023",
    img: "/images/produtos/galpao-de-lona.png",
    produtoSlug: "galpao-de-lona",
    resumo:
      "Expansão emergencial de capacidade de armazenagem de grãos antes do pico da safra, com instalação concluída em poucas semanas.",
    desafio: [
      "Um produtor rural do interior paulista enfrentava um gargalo logístico recorrente: a capacidade de armazenagem própria não acompanhava o volume da colheita, obrigando a venda antecipada de parte da produção a preços desfavoráveis ou o aluguel caro de armazéns de terceiros.",
      "A janela era apertada — a estrutura precisava estar operacional antes do início da safra, em um prazo que inviabilizava qualquer obra de alvenaria convencional.",
    ],
    solucao: [
      "A CoberSteel especificou um galpão de lona de 2.400 m² com pé-direito ampliado, dimensionado para o armazenamento a granel e para a circulação de maquinário de carga. O projeto foi calculado considerando as cargas de vento da região e a sobrecarga do produto ensacado.",
      "A montagem foi executada por equipe própria, sem necessidade de fundação em concreto, permitindo que a estrutura entrasse em operação dentro da janela da safra.",
    ],
    resultados: [
      { valor: "2.400 m²", label: "de área coberta entregue" },
      { valor: "< 30 dias", label: "do projeto à operação" },
      { valor: "100%", label: "da safra armazenada na própria estrutura" },
    ],
    specs: [
      { label: "Produto", value: "Galpão de Lona" },
      { label: "Área total", value: "2.400 m²" },
      { label: "Aplicação", value: "Armazenagem de grãos a granel" },
      { label: "Cobertura", value: "Lona de PVC de alta densidade" },
      { label: "Estrutura", value: "Perfis metálicos galvanizados" },
      { label: "Modalidade", value: "Locação" },
    ],
  },
  {
    slug: "galpao-metalico-industrial-sul",
    titulo: "Galpão Metálico Industrial",
    setor: "Indústria",
    local: "Região Sul",
    area: "5.000 m²",
    ano: "2023",
    img: "/images/produtos/galpao-metalico.png",
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
  {
    slug: "galpao-hibrido-logistica-centro-oeste",
    titulo: "Galpão CoberECOsteel Híbrido",
    setor: "Logística",
    local: "Centro-Oeste",
    area: "3.200 m²",
    ano: "2022",
    img: "/images/produtos/galpao-coberecosteeel-hibrido.png",
    produtoSlug: "galpao-coberecosteeel-hibrido",
    resumo:
      "Centro de distribuição com solução híbrida que uniu estrutura metálica e cobertura de lona para equilibrar custo, prazo e sustentabilidade.",
    desafio: [
      "Um operador logístico do Centro-Oeste precisava de um centro de distribuição de 3.200 m² com prazo curto e orçamento controlado, mas sem abrir mão de durabilidade. A operação buscava ainda reduzir a pegada ambiental do projeto como parte de sua política ESG.",
      "Soluções 100% metálicas atendiam à durabilidade, mas pesavam no custo e no prazo; soluções 100% em lona não davam a robustez desejada para uma operação permanente.",
    ],
    solucao: [
      "A CoberSteel propôs o galpão híbrido CoberECOsteel, combinando estrutura metálica calculada com cobertura de lona técnica. A solução entregou a robustez de uma estrutura permanente com menor consumo de aço, menor custo de material e instalação mais rápida.",
      "O resultado é um centro de distribuição com eficiência energética superior — graças à translucidez parcial da cobertura — e menor impacto ambiental no ciclo de vida da obra.",
    ],
    resultados: [
      { valor: "3.200 m²", label: "de centro de distribuição" },
      { valor: "-30%", label: "de aço frente ao galpão metálico pleno" },
      { valor: "ESG", label: "alinhado à política de economia circular" },
    ],
    specs: [
      { label: "Produto", value: "Galpão CoberECOsteel Híbrido" },
      { label: "Área total", value: "3.200 m²" },
      { label: "Aplicação", value: "Centro de distribuição" },
      { label: "Cobertura", value: "Lona técnica translúcida" },
      { label: "Estrutura", value: "Metálica otimizada" },
      { label: "Destaque", value: "Menor pegada ambiental" },
    ],
  },
  {
    slug: "mezanino-metalico-varejo-sp",
    titulo: "Mezanino Metálico — Expansão Vertical",
    setor: "Varejo e Atacado",
    local: "Grande SP",
    area: "1.100 m²",
    ano: "2022",
    img: "/images/produtos/mezaninos-metalicos.png",
    produtoSlug: "mezaninos-metalicos",
    resumo:
      "Dobra da área útil de um centro de distribuição aproveitando o pé-direito existente, sem ampliar o terreno.",
    desafio: [
      "Uma operação de varejo na Grande São Paulo havia esgotado a capacidade de armazenagem de seu galpão, mas não tinha terreno disponível para expansão horizontal — e a mudança de endereço estava fora de cogitação pela localização estratégica.",
      "O galpão, porém, tinha pé-direito alto e subaproveitado: havia volume vertical ocioso acima das prateleiras.",
    ],
    solucao: [
      "A CoberSteel projetou e instalou um mezanino metálico de 1.100 m² aproveitando o pé-direito existente, com cálculo estrutural para a carga de armazenagem prevista. A instalação foi limpa e rápida, sem obras de alvenaria e com mínima interferência na operação.",
      "A nova área criou um segundo pavimento para estoque e área administrativa, praticamente dobrando a capacidade útil do mesmo galpão.",
    ],
    resultados: [
      { valor: "+1.100 m²", label: "de área útil sem ampliar o terreno" },
      { valor: "~2x", label: "de capacidade no mesmo espaço" },
      { valor: "0", label: "obras de alvenaria" },
    ],
    specs: [
      { label: "Produto", value: "Mezanino Metálico" },
      { label: "Área criada", value: "1.100 m²" },
      { label: "Aplicação", value: "Estoque + área administrativa" },
      { label: "Estrutura", value: "Perfis metálicos calculados" },
      { label: "Instalação", value: "Sem alvenaria, baixa interferência" },
      { label: "Normas", value: "Conforme ABNT NBR 8800" },
    ],
  },
  {
    slug: "projeto-especial-petroquimico-nordeste",
    titulo: "Projeto Especial sob Medida",
    setor: "Petroquímico",
    local: "Nordeste",
    area: "Sob projeto",
    ano: "2021",
    img: "/images/produtos/projetos-especiais.png",
    produtoSlug: "projetos-especiais",
    resumo:
      "Cobertura sob medida para ambiente corrosivo do setor petroquímico, com geometria e materiais especiais.",
    desafio: [
      "Uma planta petroquímica no Nordeste precisava cobrir uma área de processo com requisitos que nenhum produto padrão atendia: ambiente altamente corrosivo, geometria irregular do terreno e exigências específicas de segurança do setor.",
      "Era necessário um desenvolvimento de engenharia exclusivo, com materiais resistentes à corrosão e conformidade técnica rigorosa.",
    ],
    solucao: [
      "A equipe de engenharia da CoberSteel desenvolveu um projeto especial sob medida, partindo do levantamento de requisitos até a modelagem e o cálculo estrutural. Foram especificados materiais com tratamento anticorrosivo adequado à atmosfera da planta.",
      "Cada etapa foi documentada com memorial técnico e ART, garantindo a aprovação nas auditorias de segurança internas do cliente.",
    ],
    resultados: [
      { valor: "100%", label: "sob medida para o ambiente corrosivo" },
      { valor: "ART", label: "e documentação técnica completa" },
      { valor: "Aprovado", label: "nas auditorias de segurança do cliente" },
    ],
    specs: [
      { label: "Produto", value: "Projeto Especial" },
      { label: "Área", value: "Sob projeto" },
      { label: "Aplicação", value: "Cobertura de área de processo" },
      { label: "Ambiente", value: "Atmosfera corrosiva" },
      { label: "Materiais", value: "Tratamento anticorrosivo" },
      { label: "Documentação", value: "Memorial técnico + ART" },
    ],
  },
  {
    slug: "niveladoras-doca-logistica-sudeste",
    titulo: "Niveladoras de Doca",
    setor: "Logística e Distribuição",
    local: "Sudeste",
    area: "8 docas",
    ano: "2023",
    img: "/images/produtos/niveladoras-de-doca.png",
    produtoSlug: "niveladoras-de-doca",
    resumo:
      "Equipamento de docas que padronizou e acelerou o carregamento e descarregamento de um centro de distribuição.",
    desafio: [
      "Um centro de distribuição no Sudeste enfrentava perdas de tempo e riscos de segurança no carregamento e descarregamento de caminhões. A diferença de altura entre o piso da doca e os diferentes tipos de veículos tornava a operação lenta e dependente de improvisos.",
      "A operação precisava padronizar o fluxo de docas para ganhar produtividade e reduzir o risco de acidentes com empilhadeiras.",
    ],
    solucao: [
      "A CoberSteel forneceu e instalou niveladoras de doca em 8 posições de carregamento, dimensionadas para a faixa de veículos da operação. O equipamento elimina o desnível entre o piso e a carroceria, permitindo a passagem segura e contínua das empilhadeiras.",
      "A padronização das docas trouxe previsibilidade ao fluxo logístico e reduziu o tempo de cada operação de carga e descarga.",
    ],
    resultados: [
      { valor: "8", label: "docas equipadas e padronizadas" },
      { valor: "+ produtividade", label: "no carregamento e descarregamento" },
      { valor: "+ segurança", label: "na operação de empilhadeiras" },
    ],
    specs: [
      { label: "Produto", value: "Niveladoras de Doca" },
      { label: "Quantidade", value: "8 docas" },
      { label: "Aplicação", value: "Carga e descarga de veículos" },
      { label: "Benefício", value: "Eliminação de desnível piso/carroceria" },
      { label: "Ganho", value: "Produtividade e segurança" },
      { label: "Setor", value: "Logística e distribuição" },
    ],
  },
];

export function getPortfolioCase(slug: string): PortfolioCase | undefined {
  return PORTFOLIO_DATA.find((c) => c.slug === slug);
}
