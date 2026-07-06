---
name: MontSteel
description: Galpões e coberturas industriais — locação e venda, com precisão técnica ABNT
colors:
  montsteel-blue: "#5C88B5"
  montsteel-gold: "#D7A03B"
  montsteel-silver: "#B0B8BD"
  dark-steel: "#0F0F0F"
  dark-mid: "#1A1A1A"
  dark-border: "#2A2A2A"
  light-bg: "#F4F4F4"
  white: "#FFFFFF"
  text-muted: "#94A3B8"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.75rem"
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.montsteel-gold}"
    textColor: "{colors.dark-steel}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#fbbf24"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  input-field:
    backgroundColor: "{colors.dark-steel}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  card:
    backgroundColor: "{colors.dark-mid}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: MontSteel

## 1. Overview

**Creative North Star: "The Night Foundry"**

A MontSteel opera num galpão à noite: fundo quase-preto dominante (#0F0F0F), com o dourado (#D7A03B) surgindo como pontos de energia — solda, luz de segurança, o CTA que não se pode ignorar — e o azul do logo (#5C88B5) como o aço frio, técnico, confiável. Nada aqui é decorativo por decoração; cada elemento existe porque um gestor industrial, avaliando fornecedores às 22h num notebook corporativo, precisa acreditar que essa empresa constrói coisas que não caem.

O sistema rejeita explicitamente o que o resto do setor faz: sites pesados, datados, sem hierarquia, que parecem catálogo de PDF escaneado. Não há gradientes decorativos, não há ilustração fofa, não há textura de "tech genérico". A estrutura visual central é o "V invertido" do logo — o telhado do galpão — usado como divisor de seção recorrente, não como enfeite pontual.

**Key Characteristics:**
- Tema escuro dominante (#0F0F0F) como padrão; claro (#F4F4F4) só em Segmentos, para quebrar ritmo deliberadamente
- Dourado usado com extrema disciplina — reservado para CTAs de conversão, nunca decoração geral
- Barlow Condensed maiúsculo e comprimido para todo display/headline; Inter para corpo, sempre 18px (não o padrão 16px)
- Elevação por camadas tonais (dark-steel → dark-mid → dark-border), não por sombra pesada
- Sólido e direto: sem frescura, sem animação decorativa sem propósito

## 2. Colors

Paleta extraída diretamente do logo: azul técnico, dourado de energia, prata metálico — sobre uma base quase-preta.

### Primary
- **Foundry Gold** (#D7A03B): CTA de conversão ("Solicitar Orçamento", "Falar no WhatsApp"). É a cor da ação — usada com disciplina, nunca em texto de corpo ou fundo de seção.

### Secondary
- **Steel Blue** (#5C88B5): links, destaques, ícones de segmento, hover states de navegação. Representa precisão técnica e confiança — a cor "fria" que contrapõe o dourado "quente".

### Tertiary
- **Metal Silver** (#B0B8BD): acentos metálicos discretos, divisores, elementos secundários que remetem à estrutura física do galpão sem competir com o dourado.

### Neutral
- **Foundry Black** (#0F0F0F): fundo dominante do site — o "chão de fábrica à noite".
- **Foundry Mid** (#1A1A1A): fundo de cards e seções elevadas sobre o preto.
- **Foundry Border** (#2A2A2A): bordas sutis entre camadas — o único "shadow" real do sistema é essa diferença tonal.
- **Daylight Bg** (#F4F4F4): fundo claro, usado exclusivamente na seção Segmentos para quebrar o ritmo escuro.
- **Muted Slate** (#94A3B8): texto secundário/descrições sobre fundo escuro — nunca cinza claro genérico, sempre com contraste WCAG AA verificado.

### Named Rules
**The Gold Discipline Rule.** Dourado aparece em CTAs de conversão e nada mais — nunca em headings, nunca em fundos de seção inteira, nunca como decoração. Se o dourado está em toda parte, parou de significar "aja agora".

## 3. Typography

**Display Font:** Barlow Condensed (700, 800), com fallback sans-serif
**Body Font:** Inter (400, 500, 600), com fallback sans-serif

**Character:** Condensada e maiúscula no display (impacto industrial, como uma placa de obra), limpa e legível no corpo (Inter carrega toda a confiança técnica sem cansar o leitor B2B).

### Hierarchy
- **Display** (800, `clamp(2.5rem, 6vw, 6rem)`, line-height 1, letter-spacing -0.02em, uppercase): Títulos de Hero e headers de página. Teto de 6rem — nunca maior, ou a página passa a gritar em vez de comunicar.
- **Headline** (700, `clamp(1.5rem, 3vw, 2.25rem)`, line-height 1.1): Títulos de seção ("NOSSOS PRODUTOS", "ATENDEMOS OS PRINCIPAIS SETORES").
- **Body** (400, 18px / 1.75rem line-height): Corpo de texto padrão do site — 18px, não os 16px default do Tailwind, decisão deliberada de legibilidade. Máximo 65-75ch por linha em blocos de texto longo.
- **Label** (700, 14px, letter-spacing 0.05em, uppercase): Labels de formulário, badges de categoria, botões.

### Named Rules
**The All-Caps Display Rule.** Todo texto em Barlow Condensada 700/800 é maiúsculo. Minúsculas nessa família quebram o efeito de "placa industrial" que o peso condensado busca.

## 4. Elevation

O sistema não usa sombra como mecanismo primário de profundidade — usa **camadas de contraste tonal**: dark-steel (base) → dark-mid (card/seção elevada) → dark-border (borda entre camadas). Sombra (`shadow-lg`, `shadow-xl`) aparece apenas como reforço de **estado** (navbar sólida ao rolar, dropdown aberto, card em hover), nunca como a fonte principal de hierarquia visual.

### Shadow Vocabulary
- **Scroll state** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1)` via `shadow-lg`): navbar ganha sombra só depois de scroll > 20px, reforçando a transição transparente → sólida.
- **Dropdown / overlay** (`shadow-xl`): menus suspensos (Produtos, Segmentos, Institucional, CustomSelect) — sinaliza "isso flutua sobre o conteúdo".

### Named Rules
**The Tonal-First Rule.** Se dois elementos precisam se diferenciar em profundidade, a primeira ferramenta é mudar de dark-steel para dark-mid (ou adicionar dark-border), não adicionar sombra. Sombra é reforço de interação, não estrutura.

## 5. Components

### Buttons
- **Shape:** `rounded-lg` (8px) na maioria; `rounded` (4px) no CTA do navbar.
- **Primary:** fundo `montsteel-gold`, texto `dark-steel`, `font-bold`/`font-semibold`, uppercase, `hover:bg-amber-400`. Reservado para a ação de conversão (Solicitar Orçamento, Falar no WhatsApp).
- **Secondary / Outline:** borda branca 2px, texto branco, `hover:bg-white hover:text-montsteel-blue`. Usado ao lado do primário quando duas ações coexistem (Hero: "Solicitar Orçamento" + "Conhecer Produtos").
- **Hover / Focus:** transições de cor em ~200-300ms; foco visível consistente via `outline: 2px solid #D7A03B` em todo elemento interativo (link, button, input, select).

### Cards
- **Corner Style:** `rounded-xl` (16px).
- **Background:** `dark-mid` sobre fundo `dark-steel`.
- **Shadow Strategy:** nenhuma por padrão — a diferenciação vem do próprio fundo `dark-mid` contra `dark-steel`; `border border-dark-border` quando precisa de mais definição.
- **Internal Padding:** 24px (`p-6`) a 40px (`p-10`) dependendo do peso do conteúdo.

### Inputs / Fields
- **Style:** fundo `dark-steel`, borda `dark-border`, `rounded-lg`, `px-4 py-3`, texto branco, placeholder em `#64748B`.
- **Focus:** borda muda para `montsteel-blue` (ou `montsteel-gold` em contextos de conversão como CustomSelect) + leve ring de cor.
- **Error:** borda `red-500/60` + texto de erro `red-400` com ícone `AlertCircle`.

### Navigation
- **Style:** `header fixed` full-width, fundo transparente no topo → `dark-steel` sólido + `shadow-lg` após 20px de scroll (transição só de `background-color`/`box-shadow`, nunca de altura — a barra tem altura fixa de 64px sempre).
- **Desktop:** dropdowns (Produtos, Segmentos, Institucional) em `absolute` sob o trigger, fundo `dark-mid`, `shadow-xl`, fecham ao clicar fora ou Escape.
- **Mobile:** drawer `fixed inset-0` full-screen ao abrir o hambúrguer; sempre posicionado relativo à viewport (nunca aplicar `transform` num ancestral do header — quebra o `position: fixed` do drawer).

### CustomSelect (componente de assinatura)
Dropdown customizado usado em formulários (Segmento, Tipo de Interesse, Produto). Botão-gatilho com chevron rotativo, lista `role="listbox"`/`role="option"` para acessibilidade, fecha em clique-fora ou Escape. Variante `gold` (foco dourado) para formulários de conversão, `blue` para contextos gerais.

## 6. Do's and Don'ts

### Do:
- **Do** manter o corpo de texto em 18px (`text-base` = 1.125rem) — decisão deliberada de legibilidade sobre o padrão de 16px.
- **Do** usar camadas tonais (`dark-steel` → `dark-mid` → `dark-border`) como mecanismo primário de profundidade.
- **Do** reservar o dourado (`montsteel-gold`) exclusivamente para CTAs de conversão.
- **Do** manter a altura da navbar fixa em 64px (`h-16`) sempre — só a cor de fundo transiciona no scroll, nunca a altura.
- **Do** respeitar `prefers-reduced-motion` em toda animação Framer Motion, com fallback sem movimento.
- **Do** verificar contraste WCAG AA em todo texto sobre fundo escuro — `text-muted` (#94A3B8) já foi calibrado para isso, não escurecer ainda mais "por elegância".

### Don't:
- **Don't** deixar o site "pesado e antiquado" como os concorrentes do setor — sem catálogo-PDF-escaneado, sem hierarquia confusa, sem visual genérico de "site de empresa de 2010".
- **Don't** usar gradiente decorativo em texto (`background-clip: text`) — nunca meaningful aqui, emphasis vem de peso/tamanho.
- **Don't** aplicar `transform`/`will-change: transform` num ancestral do `<header>` — quebra o `position: fixed` de qualquer drawer/modal filho (bug já corrigido nesse projeto).
- **Don't** estilizar `::-webkit-scrollbar` sem escopo `@media (pointer: fine)` — em mobile isso reserva gutter indevido e pode disparar zoom-to-fit do navegador.
- **Don't** usar dourado em headings, fundos de seção inteira ou qualquer lugar que não seja um CTA de ação direta.
- **Don't** deixar hero display typography passar de `6rem` — acima disso a página grita em vez de comunicar solidez.
