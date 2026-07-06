interface ProductVantagem {
  titulo: string;
  desc: string;
}

interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  /** Meta description longa (150-160 caracteres) com variações de busca. Opcional — se ausente, usa a tagline. */
  metaDescription?: string;
  /** Gênero gramatical do nome do produto — usado para concordância (ex.: "desenvolvido" x "desenvolvida"). */
  feminino?: boolean;
  /** Nome do produto está no plural — usado para concordância (ex.: "desenvolvido" x "desenvolvidos"). */
  plural?: boolean;
  /** Valor correspondente no select "Produto de Interesse" do formulário de orçamento (src/app/orcamento/OrcamentoForm.tsx). */
  orcamentoValue: string;
  img: string;
  gallery: string[];
  descricao: string[];
  vantagens: ProductVantagem[];
  aplicacoes: string[];
  specs: ProductSpec[];
  ctaLabel: string;
}

export const PRODUCTS_DATA: Product[] = [
  {
    slug: "galpao-de-lona",
    name: "Galpão de Lona",
    orcamentoValue: "galpao-lona",
    tagline: "Estrutura flexível e ágil para armazenagem rápida",
    metaDescription:
      "Galpão de lona (galpão lonado, barracão de lona) para locação e venda, com instalação rápida e projeto conforme ABNT. Peça um orçamento.",
    img: "/images/produtos/galpao-de-lona.webp",
    gallery: ["/images/produtos/galpao-de-lona.webp"],
    descricao: [
      "O Galpão de Lona da CoberSteel é uma estrutura flexível e de alta resistência, ideal para armazenagem temporária ou para rápida expansão de capacidade operacional. Com instalação ágil e sem necessidade de obras de alvenaria, é a solução perfeita para quem precisa de espaço com rapidez e custo controlado.",
      "Disponível para locação e venda, o galpão de lona se adapta a diferentes dimensões e configurações, atendendo desde pequenas operações até grandes complexos industriais e agrícolas.",
      "Também conhecido no mercado como galpão lonado, barracão de lona ou tenda industrial, esse modelo é a opção mais ágil quando o prazo é curto e a operação não pode esperar por uma obra convencional.",
    ],
    vantagens: [
      { titulo: "Instalação Rápida", desc: "Montagem ágil com mão de obra especializada, sem obra civil." },
      { titulo: "Alta Resistência", desc: "Lona de alta densidade resistente a chuva, vento e radiação UV." },
      { titulo: "Locação e Venda", desc: "Flexibilidade para locar ou adquirir conforme a necessidade." },
      { titulo: "Diversas Dimensões", desc: "Configurações sob medida para qualquer área e altura necessária." },
      { titulo: "Custo-Benefício", desc: "Solução mais econômica sem abrir mão de qualidade e segurança." },
      { titulo: "Relocável", desc: "Estrutura pode ser desmontada e reinstalada em outro local." },
    ],
    aplicacoes: [
      "Agronegócio e armazenagem de grãos",
      "Logística e centros de distribuição",
      "Depósitos temporários em obras",
      "Eventos e feiras industriais",
      "Expansão rápida de capacidade",
      "Mineração e construção civil",
    ],
    specs: [
      { label: "Vãos disponíveis", value: "10m a 60m de largura" },
      { label: "Comprimento", value: "Sob medida" },
      { label: "Pé-direito", value: "A partir de 4m" },
      { label: "Cobertura", value: "Lona de alta densidade (PVC)" },
      { label: "Estrutura", value: "Perfis metálicos galvanizados" },
      { label: "Normas", value: "Conforme ABNT NBR 7190 e NBR 6118" },
    ],
    ctaLabel: "Solicitar Orçamento para Galpão de Lona",
  },
  {
    slug: "galpao-metalico",
    name: "Galpão Metálico",
    orcamentoValue: "galpao-metalico",
    tagline: "Alta resistência para operações industriais exigentes",
    metaDescription:
      "Galpão metálico (galpão de aço, barracão metálico) para operações industriais pesadas, com projeto estrutural conforme ABNT. Peça um orçamento.",
    img: "/images/produtos/galpao-metalico.webp",
    gallery: ["/images/produtos/galpao-metalico.webp"],
    descricao: [
      "O Galpão Metálico CoberSteel é uma estrutura permanente de alta resistência, projetada para atender operações industriais que exigem durabilidade, capacidade de carga elevada e eficiência no uso do espaço. Ideal para abrigar maquinários pesados, linhas de produção e grandes estoques.",
      "Todos os projetos são desenvolvidos e calculados conforme normas ABNT, garantindo segurança estrutural e conformidade técnica. A estrutura é ampliável e pode ser relocada conforme a expansão do negócio.",
      "Também chamado de galpão de aço, barracão metálico ou pavilhão industrial, esse modelo é a escolha certa para operações que exigem estrutura permanente, alta capacidade de carga e conformidade técnica rigorosa.",
    ],
    vantagens: [
      { titulo: "Alta Resistência Estrutural", desc: "Suporta cargas pesadas de equipamentos e maquinários industriais." },
      { titulo: "Projeto conforme ABNT", desc: "Cálculo estrutural rigoroso seguindo normas nacionais e internacionais." },
      { titulo: "Climatização Eficiente", desc: "Projeto compatível com sistemas de ventilação e climatização industrial." },
      { titulo: "Iluminação Natural", desc: "Telhas translúcidas para aproveitamento máximo de luz natural." },
      { titulo: "Ampliável", desc: "Estrutura modular que permite expansão conforme o crescimento." },
      { titulo: "Durabilidade", desc: "Aço galvanizado com tratamento anticorrosão para longa vida útil." },
    ],
    aplicacoes: [
      "Indústrias e fábricas",
      "Mineração",
      "Setor siderúrgico",
      "Petroquímico",
      "Papel e celulose",
      "Automotivo",
    ],
    specs: [
      { label: "Vãos disponíveis", value: "10m a 80m de largura" },
      { label: "Comprimento", value: "Sob medida" },
      { label: "Pé-direito", value: "A partir de 5m" },
      { label: "Cobertura", value: "Telha metálica termoacústica ou simples" },
      { label: "Estrutura", value: "Aço carbono com tratamento anticorrosão" },
      { label: "Normas", value: "ABNT NBR 8681, NBR 7190 e NBR 6118" },
    ],
    ctaLabel: "Solicitar Orçamento para Galpão Metálico",
  },
  {
    slug: "galpao-coberecosteeel-hibrido",
    name: "Galpão CoberECOsteel Híbrido",
    orcamentoValue: "galpao-hibrido",
    tagline: "Eficiência, sustentabilidade e melhor custo-benefício",
    metaDescription:
      "Galpão híbrido CoberECOsteel: aço e lona para unir resistência, economia e sustentabilidade. Solução ESG para a indústria. Conheça o projeto.",
    img: "/images/produtos/galpao-coberecosteeel-hibrido.webp",
    gallery: ["/images/produtos/galpao-coberecosteeel-hibrido.webp"],
    descricao: [
      "O Galpão CoberECOsteel Híbrido é a solução inovadora da CoberSteel que combina estrutura metálica com cobertura de lona de alta performance. O resultado é uma estrutura que reúne o melhor dos dois mundos: a robustez do metal com a flexibilidade e o custo reduzido da lona.",
      "Com menor pegada ambiental e maior eficiência no uso de materiais, o modelo híbrido é a escolha ideal para empresas que buscam aliar desempenho operacional com responsabilidade ESG e economia circular.",
      "Também conhecido como galpão híbrido ou cobertura híbrida aço-lona, esse modelo é ideal para quem busca equilíbrio entre robustez estrutural, economia de material e responsabilidade ambiental.",
    ],
    vantagens: [
      { titulo: "Eficiência Energética", desc: "Melhor aproveitamento de luz natural e ventilação, reduzindo custos operacionais." },
      { titulo: "Menor Custo", desc: "Combinação inteligente de materiais reduz o custo total da estrutura." },
      { titulo: "Sustentabilidade ESG", desc: "Menor uso de aço e materiais pesados, alinhado à Economia Circular." },
      { titulo: "Instalação Rápida", desc: "Montagem mais ágil que o galpão metálico convencional." },
      { titulo: "Alta Performance", desc: "Resistência estrutural próxima ao metálico puro com custo reduzido." },
      { titulo: "Relocável", desc: "Pode ser desmontado e reinstalado em novos endereços." },
    ],
    aplicacoes: [
      "Empresas com metas ESG",
      "Agronegócio",
      "Logística e distribuição",
      "Indústrias com orçamento otimizado",
      "Operações temporárias e permanentes",
      "Construção civil",
    ],
    specs: [
      { label: "Vãos disponíveis", value: "12m a 60m de largura" },
      { label: "Comprimento", value: "Sob medida" },
      { label: "Pé-direito", value: "A partir de 4,5m" },
      { label: "Cobertura", value: "Lona de alta densidade (PVC)" },
      { label: "Estrutura", value: "Aço carbono + perfis galvanizados" },
      { label: "Normas", value: "Conforme ABNT NBR 7190 e NBR 6118" },
    ],
    ctaLabel: "Conhecer o Projeto Híbrido",
  },
  {
    slug: "mezaninos-metalicos",
    name: "Mezaninos Metálicos",
    plural: true,
    orcamentoValue: "mezanino",
    tagline: "Expanda verticalmente sem obras de alvenaria",
    metaDescription:
      "Mezanino metálico (piso intermediário industrial) para dobrar a área útil do galpão sem obras de alvenaria. Projeto conforme ABNT.",
    img: "/images/produtos/mezaninos-metalicos.webp",
    gallery: ["/images/produtos/mezaninos-metalicos.webp"],
    descricao: [
      "Os Mezaninos Metálicos da CoberSteel são a solução inteligente para empresas que precisam ampliar sua área útil sem expandir a planta física. Aproveitando o pé-direito alto de galpões existentes, o mezanino cria um novo pavimento interno com alta capacidade de carga e instalação rápida.",
      "Ideal para escritórios industriais, mezzanines de produção e armazenagem em altura, o projeto é calculado estruturalmente e executado com aço de alta qualidade, garantindo segurança e durabilidade.",
      "Também chamado de piso intermediário industrial, sobreloja ou mezanino industrial, esse sistema aproveita o pé-direito do galpão para criar um novo pavimento sem ampliar a área construída.",
    ],
    vantagens: [
      { titulo: "Dobra a Área Útil", desc: "Aproveitamento vertical do galpão sem ampliar o terreno ou a planta." },
      { titulo: "Instalação Rápida e Limpa", desc: "Montagem sem obras civis pesadas, com mínima interferência na operação." },
      { titulo: "Alta Capacidade de Carga", desc: "Projeto estrutural calculado para suportar cargas industriais." },
      { titulo: "Projeto Calculado", desc: "Cálculo estrutural específico para cada aplicação, conforme normas ABNT." },
      { titulo: "Versátil", desc: "Adaptável para escritórios, armazenagem, produção ou áreas técnicas." },
      { titulo: "Custo-Benefício", desc: "Muito mais econômico que construir uma edificação nova." },
    ],
    aplicacoes: [
      "Escritórios industriais e administrativos",
      "Armazenagem em altura",
      "Mezzanines de produção",
      "Áreas técnicas e de manutenção",
      "Vestiários e refeitórios industriais",
      "Centros de distribuição",
    ],
    specs: [
      { label: "Vãos disponíveis", value: "Conforme projeto" },
      { label: "Carga distribuída", value: "A partir de 300 kg/m²" },
      { label: "Altura livre", value: "Mínimo 2,5m inferior e superior" },
      { label: "Acabamento", value: "Piso xadrez, liso ou grelha metálica" },
      { label: "Estrutura", value: "Aço carbono com tratamento anticorrosão" },
      { label: "Normas", value: "ABNT NBR 7190, NBR 6118 e NR 12" },
    ],
    ctaLabel: "Solicitar Projeto de Mezanino",
  },
  {
    slug: "projetos-especiais",
    name: "Projetos Especiais",
    plural: true,
    orcamentoValue: "projeto-especial",
    tagline: "Engenharia exclusiva sob medida para demandas únicas",
    metaDescription:
      "Projetos especiais de galpões sob medida para geometrias irregulares, cargas extremas ou ambientes corrosivos. Descreva seu projeto.",
    img: "/images/produtos/projetos-especiais.webp",
    gallery: ["/images/produtos/projetos-especiais.webp"],
    descricao: [
      "Quando os produtos padrão não atendem, a CoberSteel desenvolve Projetos Especiais sob medida. Nossa equipe de engenharia projeta e executa estruturas para demandas que fogem ao convencional: geometrias irregulares, cargas extremas, ambientes corrosivos ou alturas incomuns.",
      "Do levantamento de requisitos à instalação final, cada projeto especial é tratado com rigor técnico, cálculo estrutural conforme normas ABNT e acompanhamento próximo da nossa equipe.",
      "Também chamado de galpão sob medida, estrutura especial industrial ou projeto estrutural personalizado, esse serviço atende demandas que fogem do padrão de mercado, com engenharia dedicada do início ao fim.",
    ],
    vantagens: [
      { titulo: "Totalmente Personalizado", desc: "Desenvolvimento exclusivo para cada necessidade específica do cliente." },
      { titulo: "Engenharia Especializada", desc: "Equipe técnica dedicada ao projeto desde a concepção até a entrega." },
      { titulo: "Conformidade ABNT", desc: "Todo o projeto calculado e documentado conforme normas técnicas." },
      { titulo: "Geometrias Complexas", desc: "Solução para plantas irregulares, terrenos desafiadores e formatos únicos." },
      { titulo: "Ambientes Especiais", desc: "Projetos para ambientes corrosivos, explosivos ou com requisitos especiais." },
      { titulo: "Suporte Completo", desc: "Acompanhamento técnico do projeto à instalação e pós-obra." },
    ],
    aplicacoes: [
      "Cargas e equipamentos especiais",
      "Geometrias e plantas irregulares",
      "Ambientes corrosivos (petroquímico, portuário)",
      "Alturas incomuns e vãos extremos",
      "Coberturas para equipamentos críticos",
      "Estruturas com requisitos normativos especiais",
    ],
    specs: [
      { label: "Dimensões", value: "Totalmente sob medida" },
      { label: "Processo", value: "Levantamento → Projeto → Fabricação → Instalação" },
      { label: "Prazo", value: "A definir conforme complexidade" },
      { label: "Materiais", value: "Aço, lona, híbrido ou combinações" },
      { label: "Documentação", value: "ART de projeto e execução incluída" },
      { label: "Normas", value: "Conforme exigência de cada projeto" },
    ],
    ctaLabel: "Descrever Meu Projeto Especial",
  },
  {
    slug: "niveladoras-de-doca",
    name: "Niveladoras de Doca",
    feminino: true,
    plural: true,
    orcamentoValue: "niveladora",
    tagline: "Equipamento logístico para otimizar o carregamento e descarregamento de veículos",
    metaDescription:
      "Niveladora de doca (dock leveler, plataforma niveladora) para carregar e descarregar veículos com segurança e agilidade. Peça um orçamento.",
    img: "/images/produtos/niveladoras-de-doca.webp",
    gallery: ["/images/produtos/niveladoras-de-doca.webp"],
    descricao: [
      "As Niveladoras de Doca da CoberSteel são equipamentos logísticos que eliminam a diferença de nível entre a plataforma de carga e a carroceria do veículo, permitindo a movimentação segura e eficiente de mercadorias com empilhadeiras e transpaletes.",
      "Disponíveis nos modelos mecânico, hidráulico e elétrico, as niveladoras se adaptam a diferentes volumes de operação e tipos de veículo — de caminhões leves a carretas de grande porte. A instalação é feita pela equipe CoberSteel com mínima interrupção das operações.",
      "Também conhecida como dock leveler, plataforma niveladora ou rampa niveladora de doca, esse equipamento é essencial para operações logísticas que exigem segurança e agilidade na expedição.",
    ],
    vantagens: [
      { titulo: "Segurança Operacional", desc: "Elimina desnível entre doca e veículo, reduzindo risco de acidentes com empilhadeiras e operadores." },
      { titulo: "Agilidade no Carregamento", desc: "Reduz o tempo de carga e descarga, aumentando a produtividade do seu centro de distribuição." },
      { titulo: "Modelos para Todo Porte", desc: "Mecânica, hidráulica ou elétrica — escolha conforme o volume e tipo de operação." },
      { titulo: "Alta Capacidade de Carga", desc: "Suporta o tráfego de empilhadeiras pesadas com segurança e durabilidade." },
      { titulo: "Instalação Rápida", desc: "Instalação pela equipe CoberSteel com mínima interrupção das atividades." },
      { titulo: "Manutenção Simples", desc: "Componentes acessíveis e manutenção preventiva com plano de revisão periódica." },
    ],
    aplicacoes: [
      "Centros de distribuição e atacadistas",
      "Indústrias com expedição de grande volume",
      "Frigoríficos e câmaras frias",
      "Operações com carretas e caminhões baú",
      "Plataformas de cross-docking",
      "E-commerce e logística de última milha",
    ],
    specs: [
      { label: "Modelos", value: "Mecânico, Hidráulico, Elétrico" },
      { label: "Capacidade de Carga", value: "Até 6.000 kg (conforme modelo)" },
      { label: "Largura Padrão", value: "1.800 mm / 2.000 mm / 2.200 mm" },
      { label: "Curso de Nivelamento", value: "± 300 mm a ± 450 mm" },
      { label: "Acabamento", value: "Aço carbono com pintura epóxi ou galvanizado" },
      { label: "Garantia", value: "12 meses contra defeitos de fabricação" },
    ],
    ctaLabel: "Solicitar Orçamento para Niveladora",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS_DATA.find((p) => p.slug === slug);
}
