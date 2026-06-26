export interface Segment {
  slug: string;
  name: string;
  icon: string;
  desafios: string[];
  solucoes: string[];
  beneficios: string[];
  produtos: string[];
}

export const SEGMENTS_DATA: Segment[] = [
  {
    slug: "agronegocio",
    name: "Agronegócio",
    icon: "Wheat",
    desafios: [
      "O agronegócio brasileiro exige infraestrutura de armazenagem robusta e flexível para proteger grãos, insumos e maquinários das intempéries, especialmente em regiões com altos índices de chuva e variação climática.",
      "A sazonalidade da produção demanda soluções que possam ser ampliadas rapidamente na época da colheita e redimensionadas nos períodos de entressafra, sem gerar custos fixos excessivos.",
      "Muitas propriedades rurais estão distantes de centros urbanos, tornando a agilidade na instalação e a logística de montagem fatores críticos na escolha da solução de armazenagem.",
    ],
    solucoes: [
      "Galpões de lona para armazenagem temporária de grãos e insumos",
      "Galpões metálicos para silos e estruturas permanentes de beneficiamento",
      "Galpão híbrido CoberECOsteel para operações com foco em ESG",
      "Projetos especiais para geometrias irregulares de terrenos rurais",
    ],
    beneficios: [
      "Instalação rápida em áreas remotas com mão de obra especializada",
      "Estruturas relocáveis conforme a necessidade da safra",
      "Alta resistência a vento, chuva e radiação UV",
      "Custo-benefício ideal para o setor rural",
      "Projetos conforme normas ABNT para segurança estrutural",
    ],
    produtos: ["galpao-de-lona", "galpao-metalico", "galpao-coberecosteeel-hibrido"],
  },
  {
    slug: "alimentos-bebidas",
    name: "Alimentos e Bebidas",
    icon: "UtensilsCrossed",
    desafios: [
      "O setor de alimentos e bebidas exige ambientes de armazenagem com controle rigoroso de temperatura, umidade e higiene, além de conformidade com normas sanitárias específicas.",
      "A necessidade de expansão rápida da capacidade de estoque em períodos de alta demanda — sem interromper as operações — é um desafio constante para indústrias do setor.",
      "A rastreabilidade e a segregação de produtos exigem espaços bem dimensionados e com fluxo logístico otimizado.",
    ],
    solucoes: [
      "Galpões metálicos com telhas termoacústicas para controle de temperatura",
      "Mezaninos metálicos para segregação e organização do estoque",
      "Galpões de lona para expansão rápida de capacidade",
      "Projetos especiais com requisitos sanitários específicos",
    ],
    beneficios: [
      "Ambientes adaptados ao controle de temperatura e umidade",
      "Fluxo logístico otimizado com mezaninos e áreas segregadas",
      "Ampliação rápida sem parada da produção",
      "Estruturas conformes às normas ABNT e regulamentações sanitárias",
      "Manutenção preventiva para garantir integridade da estrutura",
    ],
    produtos: ["galpao-metalico", "mezaninos-metalicos", "galpao-de-lona"],
  },
  {
    slug: "automotivo",
    name: "Automobilístico",
    icon: "Car",
    desafios: [
      "O setor automotivo demanda espaços amplos com pé-direito elevado para acomodar veículos, linhas de montagem e equipamentos de grande porte, além de alta resistência de piso e estrutura.",
      "Montadoras e fornecedores automotivos precisam de infraestrutura flexível para adaptar os layouts de produção conforme mudanças nos modelos e volumes produzidos.",
      "A necessidade de conformidade com normas de segurança do trabalho (NR 12) e ambientais é crítica no setor.",
    ],
    solucoes: [
      "Galpões metálicos de grande vão para linhas de produção e montagem",
      "Mezaninos metálicos para escritórios industriais e áreas técnicas",
      "Projetos especiais para geometrias e requisitos específicos do setor",
      "Galpões de lona para armazenagem temporária de componentes",
    ],
    beneficios: [
      "Grandes vãos livres sem colunas intermediárias",
      "Alta capacidade de carga para equipamentos pesados",
      "Flexibilidade de layout para mudanças de produção",
      "Conformidade com NR 12 e normas de segurança industrial",
      "Projetos calculados por engenheiros especializados",
    ],
    produtos: ["galpao-metalico", "mezaninos-metalicos", "projetos-especiais"],
  },
  {
    slug: "construcao-civil",
    name: "Construção Civil",
    icon: "Building2",
    desafios: [
      "Obras de grande porte demandam espaços temporários para armazenagem de materiais, ferramentas e equipamentos, muitas vezes em locais de difícil acesso e com prazos apertados.",
      "A construção civil necessita de soluções de infraestrutura que possam ser rapidamente instaladas e relocadas conforme o avanço das obras e mudança de canteiros.",
      "A proteção de materiais sensíveis — como aço, madeira e equipamentos elétricos — contra chuva e umidade é fundamental para evitar perdas e retrabalho.",
    ],
    solucoes: [
      "Galpões de lona para depósito temporário em canteiros de obra",
      "Galpões metálicos para centrais de produção e pré-fabricação",
      "Estruturas relocáveis para múltiplos canteiros",
      "Projetos especiais para terrenos irregulares e acessos difíceis",
    ],
    beneficios: [
      "Instalação rápida em qualquer tipo de terreno",
      "Relocação fácil conforme evolução das obras",
      "Proteção eficiente contra intempéries",
      "Custo reduzido em comparação com estruturas permanentes",
      "Disponível para locação de curto e longo prazo",
    ],
    produtos: ["galpao-de-lona", "galpao-metalico", "projetos-especiais"],
  },
  {
    slug: "industria",
    name: "Indústria",
    icon: "Factory",
    desafios: [
      "Indústrias de manufatura em geral necessitam de espaços robustos com alta capacidade de carga, pé-direito elevado e flexibilidade para reorganização de layouts produtivos.",
      "A necessidade de expansão da capacidade instalada sem interrupção das operações é um desafio recorrente em indústrias em crescimento.",
      "Ambientes industriais exigem estruturas com alta durabilidade e resistência a vibrações, impactos e cargas dinâmicas geradas pelos processos produtivos.",
    ],
    solucoes: [
      "Galpões metálicos para produção, montagem e armazenagem industrial",
      "Mezaninos metálicos para aproveitamento vertical do espaço",
      "Galpão híbrido CoberECOsteel para redução de custos e sustentabilidade",
      "Projetos especiais para necessidades industriais específicas",
    ],
    beneficios: [
      "Alta resistência estrutural para cargas e equipamentos pesados",
      "Expansão modular sem parar a produção",
      "Projetos calculados conforme normas ABNT",
      "Soluções para todas as fases: instalação, ampliação e manutenção",
      "Atendimento em todo o Brasil com equipe especializada",
    ],
    produtos: ["galpao-metalico", "mezaninos-metalicos", "galpao-coberecosteeel-hibrido", "projetos-especiais"],
  },
  {
    slug: "mineracao",
    name: "Mineração",
    icon: "Mountain",
    desafios: [
      "O setor de mineração opera em ambientes extremos, com exposição constante a poeira, umidade, substâncias abrasivas e variações climáticas severas, exigindo estruturas de altíssima resistência.",
      "Minas e plantas de beneficiamento estão frequentemente em locais remotos e de difícil acesso, demandando soluções logísticas eficientes para instalação e manutenção.",
      "A necessidade de armazenar minérios, equipamentos de grande porte e insumos químicos exige espaços amplos e seguros, com projetos estruturais rigorosos.",
    ],
    solucoes: [
      "Galpões metálicos com tratamento anticorrosão reforçado",
      "Projetos especiais para ambientes agressivos e cargas extremas",
      "Galpões de lona para armazenagem temporária em frentes de lavra",
      "Estruturas para cobertura de equipamentos críticos",
    ],
    beneficios: [
      "Alta resistência a ambientes agressivos e corrosivos",
      "Capacidade de carga para equipamentos de grande porte",
      "Instalação em locais remotos com logística especializada",
      "Projetos com ART de engenharia incluída",
      "Manutenção preventiva e corretiva no local",
    ],
    produtos: ["galpao-metalico", "projetos-especiais", "galpao-de-lona"],
  },
  {
    slug: "papel-celulose",
    name: "Papel e Celulose",
    icon: "FileText",
    desafios: [
      "A indústria de papel e celulose trabalha com matérias-primas e produtos acabados de grandes volumes, exigindo espaços amplos com proteção eficiente contra umidade.",
      "O processo produtivo gera ambientes com alta umidade e agentes corrosivos, demandando estruturas com tratamento especial e alta durabilidade.",
      "A necessidade de armazenar rolos de papel, fardos de celulose e produtos químicos em condições controladas é crítica para a qualidade do produto final.",
    ],
    solucoes: [
      "Galpões metálicos com tratamento anticorrosão para ambientes úmidos",
      "Grandes vãos livres para movimentação de rolos e fardos",
      "Mezaninos para escritórios e áreas de controle de qualidade",
      "Projetos especiais para plantas industriais de grande porte",
    ],
    beneficios: [
      "Resistência à umidade e agentes corrosivos",
      "Grandes vãos para movimentação de cargas volumosas",
      "Ventilação e iluminação natural otimizadas",
      "Conformidade com normas ambientais do setor",
      "Durabilidade superior em ambientes industriais agressivos",
    ],
    produtos: ["galpao-metalico", "projetos-especiais", "mezaninos-metalicos"],
  },
  {
    slug: "petroquimico",
    name: "Petroquímico",
    icon: "Flame",
    desafios: [
      "O setor petroquímico opera com produtos inflamáveis, tóxicos e corrosivos, exigindo estruturas com requisitos especiais de segurança, ventilação e resistência química.",
      "Refinarias e plantas petroquímicas necessitam de coberturas e galpões para abrigar equipamentos críticos, com projetos que respeitem as normas regulatórias específicas do setor.",
      "A manutenção da integridade estrutural em ambientes com variações extremas de temperatura e exposição a hidrocarbonetos é um desafio constante.",
    ],
    solucoes: [
      "Projetos especiais com materiais resistentes a agentes químicos",
      "Galpões metálicos para armazenagem de equipamentos e insumos",
      "Estruturas para cobertura de áreas de processo e utilidades",
      "Coberturas para proteção de tubulações e instrumentação",
    ],
    beneficios: [
      "Materiais e tratamentos adequados a ambientes químicos",
      "Projetos com ART e conformidade às normas regulatórias",
      "Alta resistência a temperaturas extremas",
      "Atendimento com equipe treinada para ambientes críticos",
      "Documentação técnica completa para auditorias e certificações",
    ],
    produtos: ["projetos-especiais", "galpao-metalico"],
  },
  {
    slug: "portuario",
    name: "Portuário",
    icon: "Anchor",
    desafios: [
      "Terminais portuários operam em ambientes de alta salinidade e umidade, que aceleram a corrosão de estruturas metálicas, exigindo tratamentos especiais e manutenção frequente.",
      "A necessidade de armazenar grandes volumes de cargas diversas — contêineres, granéis, cargas gerais — exige estruturas de grande porte e alta capacidade de carga.",
      "Operações portuárias ininterruptas demandam soluções de instalação e manutenção que minimizem a interferência nas atividades do terminal.",
    ],
    solucoes: [
      "Galpões metálicos com tratamento anticorrosão marinho",
      "Grandes vãos para armazenagem de cargas e contêineres",
      "Projetos especiais para galpões de carga geral e frigoríficos",
      "Estruturas para cobertura de pátios e áreas de triagem",
    ],
    beneficios: [
      "Tratamento anticorrosão específico para ambiente marinho",
      "Grandes vãos para operação de guindastes e empilhadeiras",
      "Alta durabilidade em condições climáticas adversas",
      "Instalação e manutenção com mínima interrupção das operações",
      "Projetos adequados às normas portuárias e de segurança",
    ],
    produtos: ["galpao-metalico", "projetos-especiais"],
  },
  {
    slug: "siderurgico",
    name: "Siderúrgico",
    icon: "Layers",
    desafios: [
      "O setor siderúrgico trabalha com temperaturas extremas, materiais pesadíssimos e ambientes com presença de gases e particulados, exigindo estruturas de altíssima resistência e durabilidade.",
      "Usinas siderúrgicas necessitam de grandes galpões para armazenar bobinas de aço, tarugos e outros produtos semi-acabados, com infraestrutura adequada para movimentação por pontes rolantes.",
      "A manutenção contínua das estruturas é crítica em ambientes onde a exposição a calor, vapor e óxidos acelera a degradação dos materiais.",
    ],
    solucoes: [
      "Galpões metálicos de grande vão para armazenagem de aço",
      "Projetos especiais para ambientes de alta temperatura",
      "Estruturas compatíveis com pontes rolantes e equipamentos pesados",
      "Mezaninos para escritórios industriais e áreas de controle",
    ],
    beneficios: [
      "Estruturas calculadas para cargas extremas e pontes rolantes",
      "Alta resistência a calor, vapor e particulados",
      "Grandes vãos sem colunas para movimentação de cargas",
      "Manutenção preventiva e corretiva especializada",
      "Projetos com ART de engenharia estrutural",
    ],
    produtos: ["galpao-metalico", "projetos-especiais", "mezaninos-metalicos"],
  },
  {
    slug: "sucroalcooleiro",
    name: "Sucroalcooleiro",
    icon: "Leaf",
    desafios: [
      "Usinas de açúcar e etanol operam com volumes enormes de matéria-prima (cana-de-açúcar) e produtos acabados, exigindo estruturas de armazenagem de grande capacidade e rápida instalação para a época de safra.",
      "A sazonalidade intensa do setor demanda soluções flexíveis que possam ser ampliadas no período de colheita e reduzidas na entressafra, sem gerar custos desnecessários.",
      "Ambientes com presença de bagaço de cana, vapor e substâncias corrosivas exigem estruturas com tratamento adequado e manutenção preventiva rigorosa.",
    ],
    solucoes: [
      "Galpões de lona para armazenagem temporária de insumos e produtos",
      "Galpões metálicos para estruturas permanentes de beneficiamento",
      "Galpão híbrido CoberECOsteel alinhado às metas de sustentabilidade",
      "Estruturas relocáveis para diferentes unidades produtivas",
    ],
    beneficios: [
      "Instalação rápida antes do início da safra",
      "Soluções relocáveis e escaláveis conforme a produção",
      "Alta resistência a ambientes úmidos e com bagaço",
      "Alinhamento com metas ESG e sustentabilidade do setor",
      "Atendimento em todo o cinturão canavieiro brasileiro",
    ],
    produtos: ["galpao-de-lona", "galpao-metalico", "galpao-coberecosteeel-hibrido"],
  },
  {
    slug: "varejo-atacado",
    name: "Varejo e Atacado",
    icon: "ShoppingCart",
    desafios: [
      "Redes de varejo e atacado precisam de centros de distribuição eficientes e escaláveis para suportar o crescimento das operações, especialmente com o avanço do e-commerce.",
      "A necessidade de armazenar produtos de diferentes categorias — alimentos, eletrodomésticos, vestuário — exige espaços versáteis e bem organizados.",
      "A pressão por redução de custos operacionais faz do custo-benefício da infraestrutura um fator determinante na escolha da solução.",
    ],
    solucoes: [
      "Galpões metálicos para centros de distribuição de grande porte",
      "Mezaninos metálicos para otimização do espaço vertical",
      "Galpões de lona para expansão rápida de capacidade",
      "Projetos especiais para layouts de picking e sortição",
    ],
    beneficios: [
      "Grandes áreas livres para organização e movimentação de produtos",
      "Mezaninos que dobram a área útil sem ampliar o terreno",
      "Expansão rápida para atender picos de demanda",
      "Custo-benefício superior a construções convencionais",
      "Instalação com mínima interrupção das operações",
    ],
    produtos: ["galpao-metalico", "mezaninos-metalicos", "galpao-de-lona"],
  },
];

export function getSegment(slug: string): Segment | undefined {
  return SEGMENTS_DATA.find((s) => s.slug === slug);
}
