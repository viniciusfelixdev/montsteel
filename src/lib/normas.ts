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
    slug: "nbr-6118",
    codigo: "ABNT NBR 6118",
    titulo: "Projeto de Estruturas de Concreto",
    resumo:
      "Define os requisitos para projeto, execução e controle de estruturas de concreto — incluindo as fundações que sustentam os galpões industriais.",
    categoria: "Fundações e Concreto",
    conteudo: [
      {
        subtitulo: "O que é a NBR 6118",
        texto:
          "A ABNT NBR 6118 é a principal norma brasileira para o projeto de estruturas de concreto armado e protendido. Ela estabelece os critérios de dimensionamento, os coeficientes de segurança e os métodos de cálculo para garantir que estruturas de concreto atendam aos requisitos de resistência, durabilidade e desempenho ao longo de toda a sua vida útil.",
      },
      {
        subtitulo: "Por que ela importa para galpões industriais",
        texto:
          "Embora galpões de lona e metálicos sejam estruturas predominantemente em aço, toda estrutura precisa de fundações — e fundações são feitas de concreto. A NBR 6118 é a referência para o dimensionamento das sapatas, blocos, vigas de fundação e pisos de concreto que recebem as cargas da estrutura metálica e as transmitem ao solo de forma segura. Uma fundação subdimensionada pode causar recalques diferenciais, deformações estruturais e colapso.",
      },
      {
        subtitulo: "Principais requisitos da norma",
        texto:
          "A norma exige que o projetista considere as combinações de ações (cargas permanentes, variáveis e excepcionais), os estados limites últimos (resistência à ruptura) e de serviço (deformações e fissuração aceitáveis). Ela também define classes de agressividade ambiental — fundamental para galpões em regiões costeiras, ambientes industriais corrosivos ou com contato com substâncias químicas.",
      },
      {
        subtitulo: "Durabilidade e vida útil",
        texto:
          "A NBR 6118 estabelece cobrimentos mínimos de armadura, relação água/cimento máxima e resistência mínima do concreto conforme a classe de agressividade ambiental. Esses parâmetros garantem que a fundação mantenha sua integridade pelo período de projeto — tipicamente 50 anos para estruturas industriais.",
      },
    ],
    aplicacaoCoberSteel:
      "Na CoberSteel, o dimensionamento das fundações de cada projeto é realizado por engenheiro estrutural com base na NBR 6118, considerando as cargas da estrutura específica, as condições do solo (laudo de sondagem) e a agressividade ambiental do local de instalação. Entregamos o projeto de fundações com ART inclusa.",
    pontosCriticos: [
      "Classe de agressividade ambiental define o cobrimento mínimo das armaduras",
      "Sondagem do solo é indispensável para dimensionamento correto das fundações",
      "Combinações de ações devem incluir cargas de vento (NBR 6123) e sobrecargas de uso",
      "Resistência do concreto (fck) mínima varia conforme a classe de agressividade",
    ],
  },
  {
    slug: "nbr-6120",
    codigo: "ABNT NBR 6120",
    titulo: "Ações para o Cálculo de Estruturas de Edificações",
    resumo:
      "Define todas as cargas que devem ser consideradas no dimensionamento de uma estrutura — o ponto de partida de qualquer projeto seguro.",
    categoria: "Cargas e Ações",
    conteudo: [
      {
        subtitulo: "O que é a NBR 6120",
        texto:
          "A ABNT NBR 6120 estabelece os valores mínimos das ações (cargas) que devem ser consideradas no projeto estrutural de edificações. Ela classifica as ações em permanentes (peso próprio da estrutura, revestimentos fixos), variáveis (cargas de uso, equipamentos, vento, temperatura) e excepcionais (impactos acidentais, explosões). Sem ela, o projetista não tem base técnica para saber quanto de carga a estrutura precisa suportar.",
      },
      {
        subtitulo: "Cargas em galpões industriais",
        texto:
          "Galpões industriais têm cargas de uso muito diferentes de edificações residenciais. A NBR 6120 define sobrecargas mínimas para pisos de depósitos, oficinas, áreas de produção e garagens pesadas. Para coberturas, define a sobrecarga de manutenção e a carga de granizo em regiões de altitude elevada. Esses valores são somados ao peso próprio da estrutura e às cargas de vento para compor o carregamento total de projeto.",
      },
      {
        subtitulo: "Por que projetos sem essa referência são perigosos",
        texto:
          "É comum em galpões informais o dimensionamento ser feito apenas com base no peso da cobertura, ignorando cargas de uso, equipamentos suspensos (como pontes rolantes e talhas), acúmulo de água em coberturas com baixa declividade e variações térmicas que geram dilatação e contração dos elementos metálicos. A NBR 6120 existe justamente para padronizar o que não pode ser ignorado.",
      },
      {
        subtitulo: "Combinações de ações",
        texto:
          "A norma é usada em conjunto com a NBR 8681 (segurança nas estruturas) para definir as combinações de carga normais, especiais e de construção. O projetista testa qual combinação gera o maior esforço em cada elemento estrutural e dimensiona para esse caso mais desfavorável.",
      },
    ],
    aplicacaoCoberSteel:
      "Em todo projeto CoberSteel, o memorial de cálculo lista todas as ações consideradas conforme a NBR 6120, incluindo cargas permanentes da estrutura e cobertura, sobrecargas de uso, cargas de equipamentos informadas pelo cliente e ações climáticas. Esse memorial faz parte da documentação técnica entregue com ART.",
    pontosCriticos: [
      "Sobrecargas mínimas em pisos de depósitos: 3 kN/m² (sem equipamentos específicos)",
      "Carga de manutenção de cobertura: 1 kN/m² concentrada ou 0,25 kN/m² distribuída",
      "Equipamentos suspensos (pontes rolantes, talhas) exigem cargas dinâmicas adicionais",
      "Variações térmicas devem ser consideradas em estruturas com grandes vãos",
    ],
  },
  {
    slug: "nbr-6123",
    codigo: "ABNT NBR 6123",
    titulo: "Forças Devidas ao Vento em Edificações",
    resumo:
      "A norma mais crítica para coberturas industriais: determina as pressões de vento sobre estruturas conforme a região, geometria e altura da edificação.",
    categoria: "Cargas Climáticas",
    conteudo: [
      {
        subtitulo: "O que é a NBR 6123",
        texto:
          "A ABNT NBR 6123 é a norma que define como calcular as forças do vento sobre edificações no Brasil. Ela divide o território nacional em zonas de velocidade básica do vento (isopletas de V0), define fatores de correção conforme a rugosidade do terreno, a altura da edificação e as dimensões da estrutura, e estabelece coeficientes de pressão para diferentes geometrias de cobertura.",
      },
      {
        subtitulo: "Por que é a norma mais crítica para galpões",
        texto:
          "Galpões industriais têm características que os tornam especialmente vulneráveis ao vento: grandes superfícies planas ou levemente inclinadas, pé-direito elevado, aberturas laterais frequentes e ausência de paredes em alguns casos. O vento age simultaneamente como pressão (empurrando) e sucção (puxando para cima a cobertura), e em certas configurações a sucção é o esforço dominante — o que causa o arrancamento de telhas e o colapso de coberturas mal dimensionadas.",
      },
      {
        subtitulo: "Zonas de vento no Brasil",
        texto:
          "A velocidade básica do vento no Brasil varia de 30 m/s no interior do Amazonas a 50 m/s em regiões do litoral sul e sudeste. Um galpão em Santa Catarina, por exemplo, está sujeito a forças de vento muito maiores do que um galpão idêntico no Mato Grosso do Sul. Ignorar esse fator é uma das causas mais comuns de colapso de coberturas industriais durante vendavais.",
      },
      {
        subtitulo: "Fatores de correção",
        texto:
          "A norma define três fatores multiplicadores da velocidade básica: S1 (topografia do terreno), S2 (rugosidade, dimensões e altura) e S3 (fator estatístico baseado na vida útil e ocupação). O produto desses fatores com V0 resulta na velocidade de projeto, que é então convertida em pressão dinâmica para o cálculo das forças sobre a estrutura.",
      },
    ],
    aplicacaoCoberSteel:
      "A NBR 6123 é aplicada em 100% dos projetos CoberSteel. Verificamos a zona de vento do local de instalação informado pelo cliente, aplicamos os fatores de correção adequados e calculamos os esforços de pressão e sucção sobre a cobertura, paredes e estrutura. Projetos em regiões de maior velocidade de vento recebem ancoragens e contraventamentos reforçados.",
    pontosCriticos: [
      "Velocidade básica do vento varia de 30 a 50 m/s no território brasileiro — consulte as isopletas",
      "Sucção na cobertura pode superar a pressão — é o esforço de arranque das telhas",
      "Abertura de portas durante evento de vento altera drasticamente os coeficientes internos",
      "Galpões com altura superior a 15m exigem atenção especial ao fator S2",
    ],
  },
  {
    slug: "nbr-8681",
    codigo: "ABNT NBR 8681",
    titulo: "Ações e Segurança nas Estruturas",
    resumo:
      "Define os critérios de segurança, as combinações de ações e os coeficientes de ponderação que garantem que uma estrutura não vai falhar durante sua vida útil.",
    categoria: "Segurança Estrutural",
    conteudo: [
      {
        subtitulo: "O que é a NBR 8681",
        texto:
          "A ABNT NBR 8681 estabelece os princípios gerais de segurança das estruturas. Ela define o conceito de estado limite (situação a partir da qual a estrutura deixa de atender aos requisitos para os quais foi projetada), os coeficientes de ponderação das ações e das resistências, e as combinações de ações que devem ser verificadas em cada fase do projeto.",
      },
      {
        subtitulo: "Estados limites",
        texto:
          "A norma distingue dois tipos de estados limites: os últimos (ELU), que representam o colapso ou ruptura da estrutura, e os de serviço (ELS), que representam condições inaceitáveis de uso como deformações excessivas, vibrações incômodas ou fissuração além do permitido. O projeto deve garantir que nem um nem outro seja atingido sob as combinações de carga previstas.",
      },
      {
        subtitulo: "Coeficientes de ponderação",
        texto:
          "Como as cargas e as resistências dos materiais têm variabilidade natural, a NBR 8681 introduz coeficientes de segurança que amplificam as ações (tornando-as mais severas no cálculo) e reduzem as resistências (tornando-as mais conservadoras). Isso cria uma margem de segurança que absorve incertezas de projeto, execução e uso.",
      },
      {
        subtitulo: "Combinações de ações",
        texto:
          "A norma define combinações normais (uso corrente), especiais (ações variáveis de baixa probabilidade simultânea) e de construção (fases provisórias). Para galpões industriais, a combinação mais crítica geralmente envolve peso próprio + sobrecarga de uso + vento — e o projetista deve verificar todas as variações possíveis para encontrar o caso mais desfavorável para cada elemento da estrutura.",
      },
    ],
    aplicacaoCoberSteel:
      "O memorial de cálculo de cada projeto CoberSteel demonstra a verificação dos estados limites últimos e de serviço conforme a NBR 8681, com as combinações de ações explicitadas para cada elemento estrutural. Esse rigor é o que garante que a estrutura entregue ao cliente tem a segurança calculada — não estimada.",
    pontosCriticos: [
      "ELU: coeficiente de ponderação das ações variáveis γf = 1,4 nas combinações normais",
      "ELS: deformação máxima admissível em vigas é L/250 (vão livre dividido por 250)",
      "Combinações devem incluir todos os casos de carga simultânea plausíveis",
      "Ações excepcionais (impactos, explosões) têm coeficientes específicos",
    ],
  },
  {
    slug: "nbr-14762",
    codigo: "ABNT NBR 14762",
    titulo: "Dimensionamento de Estruturas de Aço Constituídas por Perfis Formados a Frio",
    resumo:
      "A norma específica para perfis de aço galvanizado — o principal componente estrutural dos galpões de lona e sistemas híbridos CoberSteel.",
    categoria: "Estruturas Metálicas",
    conteudo: [
      {
        subtitulo: "O que é a NBR 14762",
        texto:
          "A ABNT NBR 14762 estabelece os requisitos para dimensionamento de estruturas formadas por perfis de aço dobrados a frio — também chamados de perfis leves ou perfis galvanizados. Diferente dos perfis laminados a quente (I, H, U), os perfis formados a frio têm geometria mais variada (Z, U, Ômega, cartola) e comportamento estrutural específico, que exige métodos de cálculo próprios.",
      },
      {
        subtitulo: "Por que perfis formados a frio são usados em galpões",
        texto:
          "Perfis formados a frio têm excelente relação resistência/peso, são facilmente galvanizados para proteção anticorrosiva, permitem vãos significativos com seções compactas e são produzidos em série, o que reduz custos. São o elemento estrutural padrão em galpões de lona industriais, sistemas de terça para coberturas e estruturas híbridas como o CoberECOsteel.",
      },
      {
        subtitulo: "Modos de falha específicos",
        texto:
          "A norma aborda modos de falha que não existem em perfis laminados, como a flambagem local das paredes do perfil (paredes finas são mais susceptíveis), a flambagem distorcional (torção da seção transversal) e a flambagem global (flambagem lateral com torção). O dimensionamento correto verifica cada um desses modos para garantir que o perfil escolhido não falhe antes de atingir sua resistência nominal.",
      },
      {
        subtitulo: "Conexões e fixações",
        texto:
          "A NBR 14762 também trata das conexões entre perfis — parafusos, rebites e solda — com requisitos específicos para a menor espessura do material. Fixações mal dimensionadas em estruturas de perfil leve são uma causa frequente de falha local, especialmente nas regiões de apoio de terças e travamentos laterais.",
      },
    ],
    aplicacaoCoberSteel:
      "Todos os sistemas de terças, travamentos e estruturas secundárias dos galpões CoberSteel são dimensionados conforme a NBR 14762. O cálculo considera os modos de falha específicos de cada seção, a classe de espessura do aço e as condições de fixação, garantindo que cada elemento trabalhe dentro dos limites seguros estabelecidos pela norma.",
    pontosCriticos: [
      "Perfis muito esbeltos (paredes finas) são susceptíveis à flambagem local antes da flambagem global",
      "Galvanização mínima recomendada: Z275 (275 g/m² de zinco) para ambientes industriais normais",
      "Ligações com parafusos autobrocantes têm resistência específica — não deve ser superdimensionada por intuição",
      "Espaçamento entre travamentos laterais influencia diretamente a capacidade da terça",
    ],
  },
  {
    slug: "nbr-6355",
    codigo: "ABNT NBR 6355",
    titulo: "Perfis Estruturais de Aço Formados a Frio — Configuração e Dimensões",
    resumo:
      "Define os padrões dimensionais dos perfis de aço galvanizado, garantindo que os materiais usados no seu projeto atendam às especificações do cálculo estrutural.",
    categoria: "Estruturas Metálicas",
    conteudo: [
      {
        subtitulo: "O que é a NBR 6355",
        texto:
          "A ABNT NBR 6355 padroniza as configurações geométricas e as dimensões nominais dos perfis estruturais de aço formados a frio produzidos no Brasil. Ela define os tipos de perfis (U, Z, cartola, Ômega, entre outros), suas dimensões nominais, tolerâncias de fabricação e os raios de dobramento mínimos.",
      },
      {
        subtitulo: "A importância da padronização",
        texto:
          "Sem uma norma de padronização, fabricantes diferentes produziriam perfis com dimensões ligeiramente distintas, impossibilitando que o calculista estrutural projete com dados confiáveis. A NBR 6355 garante que um perfil U 200x75x3,0 de qualquer fabricante nacional tenha as mesmas dimensões e propriedades geométricas — área, momento de inércia, módulo de resistência — usadas no cálculo.",
      },
      {
        subtitulo: "Propriedades geométricas e tabelas",
        texto:
          "A norma disponibiliza tabelas com as propriedades geométricas de cada perfil padronizado: área da seção transversal, momentos de inércia nas duas direções, módulo de resistência elástico e plástico, raio de giração e posição do centro de cisalhamento. Esses dados são os insumos diretos do dimensionamento conforme a NBR 14762.",
      },
      {
        subtitulo: "Tolerâncias de fabricação",
        texto:
          "A norma define as tolerâncias aceitáveis para espessura, largura e comprimento dos perfis. Perfis fora de tolerância podem ter resistência inferior ao previsto em projeto — o que é especialmente crítico em elementos esbeltos, onde pequenas variações dimensionais afetam significativamente a resistência à flambagem.",
      },
    ],
    aplicacaoCoberSteel:
      "A CoberSteel especifica os perfis de acordo com a NBR 6355 em todos os projetos, garantindo que o material fornecido pelo fabricante corresponda ao calculado pelo engenheiro. Os projetos indicam o tipo de perfil, dimensões nominais e espessura mínima de forma padronizada e rastreável.",
    pontosCriticos: [
      "Perfis fora de tolerância comprometem a resistência calculada — exija certificado de qualidade do fabricante",
      "A espessura nominal inclui a galvanização — a espessura de aço base é menor",
      "Raio de dobramento mínimo deve ser respeitado para evitar fissuração do aço na dobra",
      "Comprimentos comerciais padrão afetam o planejamento de emendas e conexões",
    ],
  },
  {
    slug: "nbr-7008",
    codigo: "ABNT NBR 7008",
    titulo: "Chapas e Bobinas de Aço Revestidas com Zinco ou com Liga Zinco-Ferro",
    resumo:
      "Define os requisitos de qualidade do aço galvanizado — o material base das coberturas e estruturas metálicas industriais.",
    categoria: "Materiais",
    conteudo: [
      {
        subtitulo: "O que é a NBR 7008",
        texto:
          "A ABNT NBR 7008 especifica os requisitos para chapas e bobinas de aço revestidas com zinco (galvanizadas) ou com liga zinco-ferro (galvannealed), produzidas por imersão a quente em contínuo. Ela define as designações de revestimento (Z100 a Z600), as propriedades mecânicas mínimas, as tolerâncias dimensionais e os ensaios de qualidade exigidos.",
      },
      {
        subtitulo: "Por que a galvanização importa para galpões",
        texto:
          "O aço sem proteção enferruja rapidamente em ambientes industriais, especialmente onde há umidade, vapores químicos ou alternância de temperatura. A galvanização cria uma barreira de zinco que protege o aço de duas formas: fisicamente (impedindo o contato com o ambiente) e eletroquimicamente (o zinco se corrói no lugar do aço quando a camada é riscada). A espessura e qualidade dessa camada determinam a vida útil da estrutura.",
      },
      {
        subtitulo: "Designações de revestimento",
        texto:
          "A norma define o revestimento pelo símbolo Z seguido da massa de zinco em g/m² (soma das duas faces). Z275, por exemplo, indica 275 g/m² de zinco total. Para ambientes industriais moderados, Z275 é o mínimo recomendado. Ambientes corrosivos (setor portuário, petroquímico, frigoríficos) exigem Z350 ou Z450, e em alguns casos revestimento adicional com tinta de alta performance.",
      },
      {
        subtitulo: "Propriedades mecânicas",
        texto:
          "A NBR 7008 define a resistência mínima ao escoamento e à ruptura, o alongamento mínimo e o dobramento sem fissuração para cada grau de aço. Esses valores são usados como base de cálculo na NBR 14762. A designação completa de um material inclui o grau do aço (ex: ZAR 280) e o revestimento (ex: Z275).",
      },
    ],
    aplicacaoCoberSteel:
      "A CoberSteel especifica o grau de aço e a designação de revestimento conforme a NBR 7008 em todos os projetos, adequando a proteção anticorrosiva ao ambiente de instalação informado pelo cliente. Exigimos dos fornecedores o certificado de qualidade com os resultados dos ensaios previstos na norma.",
    pontosCriticos: [
      "Z275 é o mínimo para ambientes industriais com baixa agressividade",
      "Ambientes com presença de cloro, amônia ou ácidos exigem proteção adicional além da galvanização",
      "Furos e cortes em campo rompem a camada de zinco — use spray de zinco frio para reparos",
      "Certificado de qualidade do fabricante deve acompanhar o fornecimento para rastreabilidade",
    ],
  },
  {
    slug: "nbr-9077",
    codigo: "ABNT NBR 9077",
    titulo: "Saídas de Emergência em Edifícios",
    resumo:
      "Define as rotas de fuga, dimensionamento de saídas e sinalização de emergência — obrigatória em galpões com ocupação humana permanente.",
    categoria: "Segurança e Emergência",
    conteudo: [
      {
        subtitulo: "O que é a NBR 9077",
        texto:
          "A ABNT NBR 9077 estabelece os requisitos para saídas de emergência em edificações, incluindo o dimensionamento de portas, corredores, escadas e rotas de fuga, a distância máxima a percorrer até uma saída e os requisitos de iluminação e sinalização de emergência. Ela é a base técnica para o projeto preventivo contra incêndio em galpões.",
      },
      {
        subtitulo: "Quando se aplica a galpões industriais",
        texto:
          "A NBR 9077 se aplica a qualquer edificação com ocupação humana. Em galpões industriais, é especialmente relevante quando há ocupação permanente de funcionários, estoques de materiais inflamáveis, processos com risco de incêndio ou quando o galpão exige aprovação no Corpo de Bombeiros para fins de AVCB (Auto de Vistoria do Corpo de Bombeiros) — documento obrigatório para funcionamento em muitos municípios.",
      },
      {
        subtitulo: "Distância máxima de caminhamento",
        texto:
          "A norma define a distância máxima que uma pessoa deve percorrer para atingir uma saída de emergência, variando conforme o risco da edificação e a existência de chuveiros automáticos (sprinklers). Em galpões de armazenagem sem sprinklers, essa distância é tipicamente de 30 metros. Galpões muito grandes podem exigir múltiplas saídas laterais.",
      },
      {
        subtitulo: "Largura mínima de saídas",
        texto:
          "A norma estabelece larguras mínimas de portas e vias de saída com base na capacidade de evacuação. Para galpões industriais, portas de emergência devem ter largura mínima de 90 cm e abrir no sentido do fluxo de saída. Corredores de evacuação têm largura mínima de 1,20 m.",
      },
    ],
    aplicacaoCoberSteel:
      "Em projetos onde o cliente necessita de AVCB ou onde há ocupação permanente, a CoberSteel posiciona as saídas de emergência e dimensiona as aberturas conforme a NBR 9077. Indicamos claramente no projeto as rotas de fuga e colaboramos com o projetista de prevenção de incêndio do cliente para garantir conformidade com o Corpo de Bombeiros local.",
    pontosCriticos: [
      "AVCB é exigido pela maioria dos municípios para concessão do alvará de funcionamento",
      "Portas de emergência não podem ser bloqueadas por estantes, equipamentos ou empilhadeiras",
      "Iluminação de emergência autônoma é obrigatória nas rotas de fuga",
      "Distância máxima de caminhamento cai para 15m em ambientes de alto risco sem sprinklers",
    ],
  },
  {
    slug: "nbr-15575",
    codigo: "ABNT NBR 15575",
    titulo: "Edificações Habitacionais — Desempenho",
    resumo:
      "Norma de desempenho que estabelece critérios de durabilidade, conforto térmico e acústico aplicáveis a estruturas industriais de ocupação continuada.",
    categoria: "Desempenho",
    conteudo: [
      {
        subtitulo: "O que é a NBR 15575",
        texto:
          "A ABNT NBR 15575 é a norma de desempenho de edificações habitacionais, mas seus conceitos e critérios de durabilidade, conforto térmico, estanqueidade e comportamento estrutural são amplamente adotados como referência técnica para edificações industriais, especialmente quando há ocupação humana permanente, escritórios integrados ao galpão ou requisitos de conforto ambiental.",
      },
      {
        subtitulo: "Vida útil de projeto",
        texto:
          "A norma estabelece o conceito de Vida Útil de Projeto (VUP) — o período para o qual o sistema é projetado para funcionar adequadamente. Para estruturas, a VUP mínima é de 50 anos para obras permanentes. Esse conceito guia as escolhas de materiais, tratamentos anticorrosivos e espessuras de revestimento em projetos industriais de longa duração.",
      },
      {
        subtitulo: "Desempenho térmico",
        texto:
          "Em galpões com escritórios integrados ou com trabalhadores fixos, o desempenho térmico da cobertura é determinante para o conforto e a produtividade. A norma define transmitâncias térmicas e capacidades térmicas mínimas para coberturas e paredes, servindo de referência para a escolha de telhas termoacústicas, lã de rocha ou outros isolamentos.",
      },
      {
        subtitulo: "Estanqueidade",
        texto:
          "A norma define critérios de estanqueidade à água de chuva para coberturas e vedações. Em galpões industriais, infiltrações podem causar danos a produtos estocados, corrosão de equipamentos e contaminação de processos produtivos. O correto detalhamento das calhas, rufos e sobreposições de telhas é essencial para atender a esse requisito.",
      },
    ],
    aplicacaoCoberSteel:
      "A CoberSteel adota os critérios de durabilidade e desempenho da NBR 15575 como referência para especificação de materiais, vida útil declarada dos sistemas e detalhamento de estanqueidade. Quando o cliente tem requisitos específicos de conforto térmico, indicamos as soluções de isolamento adequadas para que o galpão atenda ao desempenho esperado.",
    pontosCriticos: [
      "Telhas simples de aço têm transmitância térmica muito alta — exigem isolamento para conforto térmico",
      "Sobreposição mínima de telhas varia conforme a declividade da cobertura",
      "Calhas subdimensionadas causam transbordamento e infiltração em eventos de chuva intensa",
      "VUP de 50 anos exige escolhas de material que resistam à corrosão pelo período projetado",
    ],
  },
];

export function getNorma(slug: string): Norma | undefined {
  return NORMAS.find((n) => n.slug === slug);
}
