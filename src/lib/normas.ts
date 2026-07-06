export interface Norma {
  slug: string;
  codigo: string;
  titulo: string;
  resumo: string;
  categoria: string;
  conteudo: {
    subtitulo: string;
    texto: string;
  }[];
  aplicacaoCoberSteel: string;
  pontosCriticos: string[];
}

export const NORMAS: Norma[] = [
  {
    slug: "nbr-17010-1",
    codigo: "ABNT NBR 17010-1",
    titulo: "Estruturas Modulares Revestidas com Membranas Técnicas — Terminologia e Classificação",
    resumo:
      "Padroniza os termos técnicos e os critérios de classificação das estruturas cobertas com membranas técnicas — a norma que define oficialmente o que é um galpão de lona no Brasil.",
    categoria: "Estruturas com Membrana Técnica",
    conteudo: [
      {
        subtitulo: "O que é a NBR 17010-1",
        texto:
          "A ABNT NBR 17010-1 estabelece a terminologia e os critérios de classificação para estruturas modulares revestidas com membranas técnicas — o que o mercado costuma chamar de galpão de lona, galpão lonado ou estrutura tensionada. Ela cria um vocabulário técnico comum entre fabricantes, projetistas e clientes, algo que o setor não tinha de forma padronizada até a publicação dessa norma.",
      },
      {
        subtitulo: "Por que a padronização de termos importa",
        texto:
          "Antes de normas específicas para esse tipo de estrutura, cada fornecedor usava sua própria nomenclatura para descrever componentes, sistemas de fixação e tipos de membrana. Isso gerava ambiguidade em contratos, memoriais descritivos e comparações entre propostas. A NBR 17010-1 resolve isso ao definir formalmente os termos que devem ser usados na documentação técnica e comercial desse tipo de obra.",
      },
      {
        subtitulo: "Classificação das estruturas",
        texto:
          "A norma organiza as estruturas cobertas com membrana técnica conforme critérios como o sistema estrutural de sustentação, o tipo de membrana utilizada e a finalidade de uso (temporária, sazonal ou permanente). Essa classificação orienta qual conjunto de requisitos de projeto — tratados na NBR 17010-2 — se aplica a cada caso específico.",
      },
      {
        subtitulo: "Base para as demais normas do conjunto",
        texto:
          "A terminologia e a classificação definidas aqui são o alicerce para a NBR 17010-2, que trata dos requisitos de projeto propriamente ditos. Sem essa padronização inicial, seria impossível redigir requisitos técnicos objetivos que se apliquem de forma consistente a diferentes fabricantes e projetos.",
      },
    ],
    aplicacaoCoberSteel:
      "A CoberSteel adota a terminologia e a classificação da NBR 17010-1 em toda a documentação técnica e comercial dos galpões de lona e do modelo híbrido CoberECOsteel, garantindo que a proposta, o memorial descritivo e o contrato usem exatamente os termos técnicos reconhecidos pelo mercado.",
    pontosCriticos: [
      "Padroniza o vocabulário técnico entre fabricante, projetista e cliente",
      "Classifica as estruturas conforme sistema estrutural, tipo de membrana e finalidade de uso",
      "Reduz ambiguidades em contratos e especificações técnicas",
      "Serve de base normativa para a NBR 17010-2 (requisitos de projeto)",
    ],
  },
  {
    slug: "nbr-17010-2",
    codigo: "ABNT NBR 17010-2",
    titulo: "Estruturas Modulares Revestidas com Membranas Técnicas — Requisitos de Projeto",
    resumo:
      "Define os requisitos técnicos de projeto para estruturas cobertas com membranas técnicas — a norma central que orienta o dimensionamento dos galpões de lona CoberSteel.",
    categoria: "Estruturas com Membrana Técnica",
    conteudo: [
      {
        subtitulo: "O que é a NBR 17010-2",
        texto:
          "A ABNT NBR 17010-2 estabelece os requisitos de projeto para estruturas modulares revestidas com membranas técnicas, complementando a terminologia definida na NBR 17010-1. Ela trata dos critérios estruturais, dos requisitos de material da membrana e da estrutura de sustentação, e das verificações de segurança específicas para esse tipo de cobertura.",
      },
      {
        subtitulo: "Por que essa norma é essencial para galpões de lona",
        texto:
          "Durante muito tempo, o mercado de galpões de lona projetava suas estruturas adaptando critérios genéricos de outras normas, sem uma referência brasileira dedicada ao conjunto membrana técnica + estrutura de sustentação. A NBR 17010-2 preenche essa lacuna, estabelecendo requisitos próprios para um tipo de estrutura que se comporta de forma diferente de um galpão metálico convencional ou de uma edificação em concreto.",
      },
      {
        subtitulo: "Requisitos estruturais e de materiais",
        texto:
          "A norma trata do dimensionamento conjunto entre a membrana técnica (resistência mecânica, estabilidade dimensional, proteção UV) e a estrutura de sustentação metálica ou híbrida, incluindo os sistemas de fixação e ancoragem. O cálculo das ações de vento sobre essas estruturas continua sendo verificado com base na NBR 6123, aplicada em conjunto com os requisitos específicos da NBR 17010-2.",
      },
      {
        subtitulo: "Segurança e vida útil",
        texto:
          "A norma orienta os critérios de segurança e a expectativa de vida útil para esse tipo de estrutura, distinguindo uma instalação projetada e calculada de uma simples cobertura improvisada. Isso inclui recomendações de manutenção periódica da membrana e dos pontos de fixação, fundamentais para manter o desempenho da estrutura ao longo do tempo.",
      },
    ],
    aplicacaoCoberSteel:
      "Todo projeto de Galpão de Lona e do modelo Híbrido CoberECOsteel desenvolvido pela CoberSteel segue os requisitos da NBR 17010-2, combinados com o cálculo de cargas de vento da NBR 6123. Isso garante que a estrutura entregue atenda aos critérios normativos específicos para esse tipo de cobertura — algo que nem todos os fornecedores do mercado seguem.",
    pontosCriticos: [
      "Estabelece requisitos de projeto específicos para estruturas com membrana técnica, complementando normas gerais como a NBR 6123",
      "Exige verificação conjunta da resistência da membrana e da estrutura de sustentação",
      "Fornecedores que ignoram essa norma tendem a usar critérios genéricos e subdimensionar a estrutura",
      "É a referência normativa mais específica do mercado brasileiro para galpões de lona",
    ],
  },
];

export function getNorma(slug: string): Norma | undefined {
  return NORMAS.find((n) => n.slug === slug);
}
