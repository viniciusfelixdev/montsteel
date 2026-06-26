# CoberSteel — Especificação do Site

> Arquivo de instruções para o Claude Code. Leia este documento inteiro antes de criar qualquer arquivo.

---

## 1. Visão Geral do Projeto

Construir o site institucional e comercial da **CoberSteel**, empresa especializada em infraestrutura industrial flexível (galpões e coberturas) e equipamentos logísticos. O público-alvo é B2B — gestores industriais, logísticos e de compras nos setores listados na seção 6.

O site deve transmitir: **robustez, precisão técnica e confiança**. Não deve parecer genérico. O setor tem sites pesados e antiquados — esta é a oportunidade de se destacar com um design moderno, sólido e profissional.

---

## 2. Stack Técnica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion (scroll reveals, transições de página)
- **Formulários:** React Hook Form + Zod
- **Ícones:** Lucide React
- **Fontes (Google Fonts):**
  - Display/Headlines: `Barlow Condensed` (700, 800) — industrial, impactante
  - Corpo: `Inter` (400, 500, 600) — limpo e legível
- **Deploy target:** Vercel

---

## 3. Identidade Visual (Design System)

### 3.1 Paleta de Cores

Extraída diretamente do logo SVG da empresa:

```css
:root {
  /* Primárias */
  --cobersteel-blue:    #5C88B5;   /* Azul principal do logo */
  --cobersteel-gold:    #D7A03B;   /* Dourado/âmbar — acento de energia */
  --cobersteel-silver:  #B0B8BD;   /* Cinza metálico */

  /* Neutros */
  --dark-steel:    #0F1923;   /* Fundo escuro principal (quase preto azulado) */
  --dark-mid:      #1A2535;   /* Fundo de cards/seções escuras */
  --dark-border:   #2A3A50;   /* Bordas sutis no escuro */
  --light-bg:      #F4F7FA;   /* Fundo de seções claras */
  --white:         #FFFFFF;

  /* Semânticas */
  --primary:       var(--cobersteel-blue);
  --accent:        var(--cobersteel-gold);
  --text-primary:  #FFFFFF;
  --text-muted:    #94A3B8;
}
```

### 3.2 Uso das Cores

- **Fundo principal do site:** `--dark-steel` (#0F1923) — tema escuro dominante
- **CTAs primários (botões):** `--cobersteel-gold` com texto escuro
- **Links e destaques:** `--cobersteel-blue`
- **Seções alternadas:** `--light-bg` para quebrar o ritmo escuro (ex.: seção "Segmentos")
- **Cards em fundo escuro:** `--dark-mid` com borda `--dark-border`

### 3.3 Tipografia

```css
/* Headlines grandes */
font-family: 'Barlow Condensed', sans-serif;
font-weight: 800;
text-transform: uppercase;
letter-spacing: -0.02em;

/* Subheadings e labels */
font-family: 'Barlow Condensed', sans-serif;
font-weight: 700;

/* Corpo de texto */
font-family: 'Inter', sans-serif;
font-weight: 400;
```

### 3.4 Elemento Signature

A **estrutura diagonal em "V" invertido** do logo da CoberSteel (que representa o telhado de um galpão) deve ser usada como elemento gráfico recorrente em divisórias de seção, fundos e separadores — criando consistência visual e reforçando a identidade industrial.

### 3.5 Logo

O arquivo `logo-branca.svg` está na raiz do projeto. Use-o no header (navbar) e no footer. Em fundos claros, use uma versão com as cores originais; em fundos escuros, a versão branca já está correta.

---

## 4. Estrutura de Arquivos

```
cobersteel/
├── public/
│   ├── logo-branca.svg
│   └── images/           # Imagens de produtos e obras (placeholders por ora)
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Layout global (navbar + footer)
│   │   ├── page.tsx      # Home
│   │   ├── institucional/
│   │   │   ├── quem-somos/page.tsx
│   │   │   ├── missao-visao-valores/page.tsx
│   │   │   ├── cobersteel-no-brasil/page.tsx
│   │   │   ├── normas-abnt/page.tsx
│   │   │   ├── portfolio/page.tsx
│   │   │   ├── trabalhe-conosco/page.tsx
│   │   │   └── privacidade/page.tsx
│   │   ├── produtos/
│   │   │   ├── galpao-de-lona/page.tsx
│   │   │   ├── galpao-metalico/page.tsx
│   │   │   ├── galpao-coberecosteeel-hibrido/page.tsx
│   │   │   ├── projetos-especiais/page.tsx
│   │   │   └── mezaninos-metalicos/page.tsx
│   │   ├── segmentos/
│   │   │   ├── agronegocio/page.tsx
│   │   │   ├── alimentos-bebidas/page.tsx
│   │   │   ├── automotivo/page.tsx
│   │   │   ├── construcao-civil/page.tsx
│   │   │   ├── industria/page.tsx
│   │   │   ├── mineracao/page.tsx
│   │   │   ├── papel-celulose/page.tsx
│   │   │   ├── petroquimico/page.tsx
│   │   │   ├── portuario/page.tsx
│   │   │   ├── siderurgico/page.tsx
│   │   │   ├── sucroalcooleiro/page.tsx
│   │   │   └── varejo-atacado/page.tsx
│   │   ├── servicos/page.tsx
│   │   ├── blog/page.tsx
│   │   └── orcamento/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ProductsOverview.tsx
│   │   │   ├── AdvantagesBanner.tsx
│   │   │   ├── NumbersSection.tsx
│   │   │   ├── SegmentsGrid.tsx
│   │   │   └── ClientLogos.tsx
│   │   └── shared/
│   │       ├── SectionDivider.tsx   # Divisória diagonal (elemento signature)
│   │       ├── CTAButton.tsx
│   │       ├── ProductCard.tsx
│   │       ├── WhatsAppButton.tsx   # Botão flutuante do WhatsApp
│   │       └── PageHeader.tsx       # Header padrão de páginas internas
│   ├── lib/
│   │   └── constants.ts            # Dados estáticos (produtos, segmentos, contatos)
│   └── styles/
│       └── globals.css
├── CLAUDE.md
└── package.json
```

---

## 5. Componentes Críticos

### 5.1 Navbar

- **Fundo:** Transparente no topo → `dark-steel` sólido ao rolar (scroll effect)
- **Logo:** `logo-branca.svg` à esquerda
- **Menu desktop:** Links com dropdown para "Produtos" e "Segmentos"
- **CTA no canto direito:** Botão dourado "Solicitar Orçamento" que leva a `/orcamento`
- **Menu mobile:** Hambúrguer que abre drawer lateral completo
- **Dropdown Produtos** (dividido em duas colunas: Locação | Venda):
  - Galpão de Lona
  - Galpão Metálico
  - Galpão CoberECOsteel Híbrido
  - Projetos Especiais
  - Mezaninos Metálicos
  - Niveladoras de Doca
- **Dropdown Segmentos:** Grid 3×4 com todas as indústrias

### 5.2 Footer

- Fundo: `--dark-steel` com borda superior `--dark-border`
- Logo + tagline à esquerda
- 4 colunas: Empresa | Produtos | Segmentos | Contato
- Redes sociais: YouTube e Instagram
- Endereço: Rua Júlio Gonzaga, 317 - Distrito Industrial Antonio Guaraty - Ibaté/SP
- Horário: Seg–Sex, 8h às 18h
- Rodapé: copyright + link para Política de Privacidade

### 5.3 Botão WhatsApp Flutuante

- Fixo no canto inferior direito
- Ícone do WhatsApp verde sobre fundo escuro
- Link: `https://wa.me/5516997977613`
- Tooltip ao hover: "Fale conosco no WhatsApp"

### 5.4 SectionDivider (Elemento Signature)

```tsx
// Divisória em formato de telhado/chevron — remete ao logo
<div className="w-full overflow-hidden">
  <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-12">
    <polygon points="0,48 720,0 1440,48" fill="currentColor" />
  </svg>
</div>
```

Use entre seções para criar transição visual elegante, alternando as cores do fill conforme as seções adjacentes.

---

## 6. Páginas — Especificação de Conteúdo

### 6.1 HOME (`/`)

#### Hero Section
- **Altura:** 100vh
- **Fundo:** Vídeo ou imagem de drone de galpão industrial com overlay escuro (gradient de `--dark-steel` 70% de opacidade)
- **Título principal:**
  ```
  INFRAESTRUTURA
  QUE SUSTENTA
  SUA OPERAÇÃO
  ```
  (Barlow Condensed, 800, maiúsculas, ~96px, branco)
- **Subtítulo:** "Galpões e coberturas industriais para locação e venda. Projetos desenvolvidos conforme normas ABNT, com mais de 25 anos de experiência no mercado."
- **CTAs:**
  - Primário (dourado): "Solicitar Orçamento"
  - Secundário (outline branco): "Conhecer Produtos"
- **Scroll indicator** animado na base

#### Vantagens Rápidas (abaixo do hero)
Bar horizontal com 4 ícones + texto:
| Ícone | Título | Descrição |
|---|---|---|
| Shield | Normas ABNT | Projetos calculados conforme normas nacionais e internacionais |
| Zap | Montagem Ágil | Instalação rápida com mão de obra especializada |
| DollarSign | Melhor Custo-Benefício | Preços competitivos sem abrir mão da qualidade |
| Leaf | Responsabilidade ESG | Economia Circular e compromisso socioambiental |

#### Produtos em Destaque
- Título de seção: "NOSSOS PRODUTOS"
- Grid 3 colunas (desktop), 1 coluna (mobile)
- Cards com: imagem de placeholder, nome do produto, descrição curta, link "Saiba mais"
- Produtos: Galpão de Lona | Galpão Metálico | Galpão Híbrido | Mezaninos | Niveladoras | Projetos Especiais

#### Números da Empresa
- Fundo escuro com acento dourado nos números
- Animação de contador ao entrar na viewport
```
+750 m²    →  Galpões instalados
+350 m²    →  Galpões alugados
+150 m²    →  Ampliações realizadas
+200 m²    →  Manutenções executadas
```

#### Segmentos
- Título: "ATENDEMOS OS PRINCIPAIS SETORES DA INDÚSTRIA"
- Grid de cards com ícone + nome do segmento
- 12 segmentos (ver seção 8 deste documento)
- Fundo claro (`--light-bg`) para contraste

#### Clientes / Prova Social
- Seção "Empresas que confiam na CoberSteel"
- Carrossel ou grid de logos (placeholders por ora)
- Texto de apoio: "Mais de 25 anos entregando soluções para os maiores players da indústria nacional"

#### CTA Final
- Fundo azul (`--cobersteel-blue`)
- Título: "PRONTO PARA ESCALAR SUA OPERAÇÃO?"
- Subtítulo: "Fale com nossos especialistas e receba um projeto personalizado para o seu negócio."
- Botão: "Solicitar Orçamento Gratuito"

---

### 6.2 QUEM SOMOS (`/institucional/quem-somos`)

- **PageHeader** com foto aérea de galpão + título "Nossa Jornada"
- Texto sobre os fundadores e os mais de 25 anos de atuação
- Timeline visual da empresa (marcos históricos — use anos fictícios plausíveis se necessário)
- Cards com diferenciais competitivos
- Foto da equipe (placeholder)

---

### 6.3 MISSÃO, VISÃO E VALORES (`/institucional/missao-visao-valores`)

Layout em três blocos grandes:

**Missão:**
> "Ser o principal parceiro dos clientes na busca contínua pela excelência na logística e armazenamento de produtos."

**Visão:**
> "Ser reconhecida como a melhor empresa nacional e internacional no ramo de coberturas e equipamentos logísticos para a indústria."

**Valores:**
- Qualidade, segurança e o cliente em primeiro lugar
- Agilidade no atendimento e nas instalações
- Planejamento logístico otimizado
- Preços competitivos (melhor custo-benefício)
- Responsabilidade social, ambiental e Economia Circular
- Conformidade técnica rigorosa (ABNT)

---

### 6.4 NORMAS ABNT (`/institucional/normas-abnt`)

- Explicar que todos os projetos da CoberSteel são desenvolvidos e calculados em conformidade com as normas da ABNT (nacionais e internacionais)
- Listar as principais normas técnicas aplicáveis a galpões e estruturas metálicas
- Reforçar segurança e responsabilidade técnica
- CTA: "Solicite um projeto normatizado"

---

### 6.5 GALPÃO DE LONA (`/produtos/galpao-de-lona`)

**Hero:** Imagem do produto + título "GALPÃO DE LONA"

**Seções:**
1. **O que é:** Estrutura flexível e resistente, ideal para armazenagem temporária ou rápida expansão de capacidade. Instalação ágil, sem obras de alvenaria.
2. **Vantagens:** (cards com ícones)
   - Instalação rápida
   - Alta resistência à intempérie
   - Disponível para locação e venda
   - Diversas dimensões e configurações
   - Custo-benefício excepcional
3. **Aplicações:** Agronegócio, logística, eventos, obras, depósitos temporários
4. **Especificações Técnicas:** Tabela com dimensões disponíveis (placeholders)
5. **CTA:** "Solicitar Orçamento para Galpão de Lona"

---

### 6.6 GALPÃO METÁLICO (`/produtos/galpao-metalico`)

**Hero:** Imagem do produto + título "GALPÃO METÁLICO"

**Seções:**
1. **O que é:** Estrutura permanente de alta resistência, ideal para operações industriais exigentes. Foco em durabilidade, climatização e aproveitamento de luz natural.
2. **Vantagens:**
   - Alta resistência estrutural para equipamentos pesados
   - Projeto conforme ABNT
   - Climatização eficiente
   - Iluminação natural com telhas translúcidas
   - Ampliável e relocável
3. **Aplicações:** Indústria, mineração, siderúrgico, petroquímico
4. **Especificações Técnicas:** Tabela com vãos e alturas disponíveis (placeholders)
5. **CTA:** "Solicitar Orçamento para Galpão Metálico"

---

### 6.7 GALPÃO COBERECOSTEEEL HÍBRIDO (`/produtos/galpao-coberecosteeel-hibrido`)

**Hero:** Título "GALPÃO CoberECOsteel HÍBRIDO"

**Seções:**
1. **O que é:** Solução inovadora que mescla estrutura metálica e cobertura de lona para combinar o melhor dos dois mundos: resistência e eficiência com menor custo e menor pegada ambiental.
2. **Proposta de Valor ESG:** Destaque para Economia Circular e responsabilidade ambiental
3. **Vantagens:**
   - Eficiência energética
   - Menor custo de materiais
   - Sustentabilidade
   - Instalação rápida
4. **CTA:** "Conhecer o Projeto Híbrido"

---

### 6.8 MEZANINOS METÁLICOS (`/produtos/mezaninos-metalicos`)

**Hero:** Título "MEZANINOS METÁLICOS"

**Seções:**
1. **O que é:** Solução inteligente para expandir a área útil industrial verticalmente, sem necessidade de grandes obras de alvenaria. Ideal para aproveitar o pé-direito alto de galpões existentes.
2. **Vantagens:**
   - Dobra a área útil sem ampliar a planta
   - Instalação rápida e limpa
   - Alta capacidade de carga
   - Projeto estrutural calculado
3. **Aplicações:** Escritórios industriais, armazenagem em altura, mezzanines de produção
4. **CTA:** "Solicitar Projeto de Mezanino"

---

### 6.9 PROJETOS ESPECIAIS (`/produtos/projetos-especiais`)

**Hero:** Título "PROJETOS EM GALPÕES ESPECIAIS"

**Seções:**
1. **O que é:** Engenharia flexível com desenvolvimento exclusivo sob medida para demandas não atendidas por produtos padrão.
2. **Processo:**
   - Levantamento de requisitos
   - Projeto técnico (ABNT)
   - Modelagem e cálculo estrutural
   - Fabricação e instalação
3. **Casos de Uso:** Cargas especiais, geometrias irregulares, ambientes corrosivos, alturas incomuns
4. **CTA:** "Descreva Seu Projeto Especial"

---

### 6.10 SERVIÇOS E MANUTENÇÕES (`/servicos`)

**Seções:**
1. **Instalação e Montagem:** Mão de obra especializada para montagem segura e dentro do prazo
2. **Manutenção Preventiva:** Inspeções periódicas para garantir a vida útil da estrutura
3. **Manutenção Corretiva:** Atendimento rápido para restaurar a integridade estrutural
4. **Ampliações:** Expansão das estruturas existentes conforme crescimento da operação
5. **Deslocamento de Estruturas:** Relocação de galpões inteiros para novos endereços
6. **CTA:** "Agendar Serviço de Manutenção"

---

### 6.11 PÁGINAS DE SEGMENTOS

Cada segmento tem sua própria página com a mesma estrutura:

```
/segmentos/[nome-do-segmento]
```

Estrutura padrão de cada página de segmento:
1. **PageHeader:** Nome do segmento + ícone representativo
2. **Desafios do Setor:** 2-3 parágrafos sobre os desafios logísticos e de armazenagem do segmento
3. **Soluções CoberSteel para este segmento:** Cards com produtos aplicáveis
4. **Por que a CoberSteel:** Lista de benefícios específicos para o setor
5. **CTA:** "Falar com um especialista em [Segmento]"

**Segmentos e seus ícones (Lucide):**
| Segmento | Ícone Sugerido |
|---|---|
| Agronegócio | `Wheat` |
| Alimentos e Bebidas | `UtensilsCrossed` |
| Automobilístico | `Car` |
| Construção Civil | `Building2` |
| Indústria (Geral) | `Factory` |
| Mineração | `Mountain` |
| Papel e Celulose | `FileText` |
| Petroquímico | `Flame` |
| Portuário | `Anchor` |
| Siderúrgico | `Layers` |
| Sucroalcooleiro | `Leaf` |
| Varejo e Atacado | `ShoppingCart` |

---

### 6.12 ORÇAMENTO / CONTATO (`/orcamento`)

**Formulário completo com campos:**
- Nome completo *
- E-mail *
- Telefone / WhatsApp *
- Empresa *
- Segmento de atuação (select com os 12 segmentos) *
- Tipo de interesse (select): Locação | Venda | Manutenção | Outro
- Produto de interesse (select): Galpão de Lona | Galpão Metálico | Híbrido | Mezanino | Projeto Especial | Nivelandora de Doca | Não sei ainda
- Área aproximada necessária (m²)
- Mensagem / Detalhes adicionais
- Checkbox LGPD *

**Validação:** React Hook Form + Zod

**Informações de contato ao lado do formulário:**
- 📍 Rua Júlio Gonzaga, 317 - Distrito Industrial Antonio Guaraty - Ibaté/SP
- 📞 (16) 2120-0477
- 📱 (16) 99797-7613 (WhatsApp)
- 📱 (11) 95045-6268
- ✉️ contato@cobersteel.com.br
- 🕐 Seg–Sex, 8h às 18h

---

### 6.13 BLOG (`/blog`)

- Grid de artigos com cards (imagem, título, data, categoria, resumo, link)
- Categorias sugeridas: Técnico | Logística | Sustentabilidade | Cases | Novidades
- Sidebar com categorias e artigos recentes
- Artigos de exemplo (3-5 placeholders com conteúdo real coerente com a empresa):
  1. "Como escolher entre galpão de lona e metálico para sua operação"
  2. "Normas ABNT para estruturas de galpões: o que sua empresa precisa saber"
  3. "Mezaninos metálicos: como dobrar a área útil sem ampliar o terreno"
  4. "Sustentabilidade na construção industrial: o caso do galpão híbrido"

---

## 7. Dados e Constantes (`src/lib/constants.ts`)

```typescript
export const CONTACT_INFO = {
  address: "Rua Júlio Gonzaga, 317 - Distrito Industrial Antonio Guaraty - Ibaté/SP",
  hours: "Segunda a Sexta, das 8h às 18h",
  phone1: "(16) 2120-0477",
  whatsapp: "(16) 99797-7613",
  phone2: "(11) 95045-6268",
  email: "contato@cobersteel.com.br",
  whatsappLink: "https://wa.me/5516997977613",
  instagram: "https://instagram.com/cobersteel", // confirmar handle real
  youtube: "https://youtube.com/@cobersteel",    // confirmar handle real
};

export const COMPANY_NUMBERS = [
  { value: "750", unit: "m²", label: "Galpões instalados" },
  { value: "350", unit: "m²", label: "Galpões alugados" },
  { value: "150", unit: "m²", label: "Ampliações e deslocamentos" },
  { value: "200", unit: "m²", label: "Manutenções realizadas" },
];

export const PRODUCTS = [
  { slug: "galpao-de-lona", name: "Galpão de Lona", shortDesc: "Estrutura flexível e ágil para armazenagem rápida" },
  { slug: "galpao-metalico", name: "Galpão Metálico", shortDesc: "Alta resistência para operações industriais exigentes" },
  { slug: "galpao-coberecosteeel-hibrido", name: "Galpão Híbrido", shortDesc: "O melhor dos dois mundos: eficiência e sustentabilidade" },
  { slug: "mezaninos-metalicos", name: "Mezaninos Metálicos", shortDesc: "Expanda verticalmente sem obras de alvenaria" },
  { slug: "projetos-especiais", name: "Projetos Especiais", shortDesc: "Engenharia exclusiva sob medida" },
];

export const SEGMENTS = [
  { slug: "agronegocio", name: "Agronegócio", icon: "Wheat" },
  { slug: "alimentos-bebidas", name: "Alimentos e Bebidas", icon: "UtensilsCrossed" },
  { slug: "automotivo", name: "Automobilístico", icon: "Car" },
  { slug: "construcao-civil", name: "Construção Civil", icon: "Building2" },
  { slug: "industria", name: "Indústria", icon: "Factory" },
  { slug: "mineracao", name: "Mineração", icon: "Mountain" },
  { slug: "papel-celulose", name: "Papel e Celulose", icon: "FileText" },
  { slug: "petroquimico", name: "Petroquímico", icon: "Flame" },
  { slug: "portuario", name: "Portuário", icon: "Anchor" },
  { slug: "siderurgico", name: "Siderúrgico", icon: "Layers" },
  { slug: "sucroalcooleiro", name: "Sucroalcooleiro", icon: "Leaf" },
  { slug: "varejo-atacado", name: "Varejo e Atacado", icon: "ShoppingCart" },
];
```

---

## 8. Animações e Interações

Use **Framer Motion** para:
- `fadeInUp` em títulos de seção ao entrar na viewport
- `staggerChildren` em grids de cards
- Contador numérico animado na seção "Números"
- Navbar com transição de transparente → sólido no scroll
- Transições de página com `AnimatePresence`

Respeite `prefers-reduced-motion` — todos os efeitos devem ter fallback sem movimento.

---

## 9. SEO e Metadata

Cada página deve ter metadata apropriada usando o `metadata` object do Next.js App Router:

```typescript
// Padrão para todas as páginas
export const metadata: Metadata = {
  title: "[Título da Página] | CoberSteel — Galpões e Coberturas Industriais",
  description: "[Descrição de 150-160 caracteres específica para a página]",
  openGraph: { /* ... */ },
};
```

Páginas prioritárias para SEO:
- Home: "CoberSteel | Galpões de Lona, Metálicos e Coberturas Industriais — Ibaté/SP"
- Produto: "Galpão de Lona para Locação e Venda | CoberSteel"
- Segmento: "Galpões para Agronegócio | CoberSteel"

---

## 10. Responsividade

Breakpoints (Tailwind padrão):
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop pequeno)
- `xl`: 1280px (desktop)
- `2xl`: 1536px (desktop grande)

Prioridades mobile:
- Navbar com menu hambúrguer funcional
- Hero com texto legível e CTAs acessíveis
- Cards em coluna única
- Formulário em tela cheia
- Botão WhatsApp sempre visível

---

## 11. Acessibilidade

- Contraste mínimo WCAG AA em todos os textos
- `alt` descritivo em todas as imagens
- Foco visível em todos os elementos interativos
- Aria labels nos ícones sem texto
- Semântica HTML correta (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`)
- Skip to content link

---

## 12. Próximos Passos Após o Scaffold

1. Substituir imagens placeholder por fotos reais de obras/produtos
2. Confirmar handles do Instagram e YouTube
3. Conectar formulário a serviço de e-mail (Resend ou similar)
4. Adicionar Google Analytics 4
5. Configurar Google Search Console
6. Adicionar mapa Google Maps na página de contato
7. Criar conteúdo real para o Blog

---

## 13. Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Verificar tipos
npm run type-check
```

---

*Briefing criado por Claude (Anthropic). Última atualização: Junho 2025.*
