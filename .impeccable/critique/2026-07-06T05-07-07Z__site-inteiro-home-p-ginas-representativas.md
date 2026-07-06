---
target: site inteiro (home + páginas representativas)
total_score: 26
p0_count: 1
p1_count: 2
timestamp: 2026-07-06T05-07-07Z
slug: site-inteiro-home-p-ginas-representativas
---
# Crítica de Design — Site CoberSteel

## Design Health Score
Total: 26/40 (Aceitável)
- Visibilidade do Status: 3/4
- Correspondência Mundo Real: 3/4
- Controle e Liberdade: 3/4
- Consistência e Padrões: 3/4
- Prevenção de Erros: 2/4
- Reconhecimento vs Memorização: 3/4
- Flexibilidade e Eficiência: 2/4
- Design Estético/Minimalista: 3/4
- Ajuda a Reconhecer Erros: 2/4
- Ajuda e Documentação: 2/4

## Veredito Anti-Padrões IA
Eyebrow dourado maiúsculo repetido 8+ vezes viola a própria "Gold Discipline Rule" do DESIGN.md. Chevron (elemento assinatura) só existe em opengraph-image.tsx e not-found.tsx, ausente em toda página real. Frase "desenvolvido(a) sob medida para você" repetida 11x em 9 arquivos. Scanner: 0 side-stripe borders, 0 gradient-text (confirma ausência dos clichês clássicos). detect.mjs achou #E8B657 não documentado (globals.css:249) e Arial fora do sistema tipográfico (global-error.tsx:22).

## O Que Está Funcionando
1. Tipografia Barlow Condensed + Inter 18px cria hierarquia de "placa industrial"
2. Grid Aplicações/Vantagens/Especificações com cor por categoria é design de informação real
3. Tema escuro dominante com quebra deliberada em Segmentos evita armadilhas do setor

## Problemas Prioritários

[P0] Eyebrows dourados ilegíveis (contraste ~2,3:1, abaixo do AA 4,5:1) — AboutSummary.tsx:20, trabalhe-conosco/page.tsx:100, fornecedores/page.tsx:341/427/445/478, normas-abnt/page.tsx:75. Mesma classe de bug já corrigida no footer, não replicada. Fix: text-amber-800 dark:text-cobersteel-gold ou recolorir pra azul/prata.

[P1] Dourado vazou da regra "só CTA" pra decoração geral — eyebrows, asteriscos de formulário, CustomSelect variant="gold" em 3 campos, bullets de /servicos (14x), barra "VANTAGENS". Fix: recolorir usos não-CTA pra azul/prata.

[P1] Chevron (elemento assinatura da marca) ausente de toda página real, só existe em opengraph-image.tsx e not-found.tsx. Fix: usar como divisor de seção real na home e heroes de produto/segmento.

[P2] Nenhum reforço de confiança (selo ABNT) no formulário de orçamento, só no footer. Fix: mover selo/garantia pra barra lateral do formulário.

[P2] Erro do formulário com baixo contraste (text-red-400 ~3:1) e validação só no submit (noValidate). Fix: text-red-700 dark:text-red-400 + validação onBlur.

## Alertas por Persona
Jordan: eyebrow ilegível como primeira microimpressão; banner de cookies pode cobrir WhatsApp no mobile.
Riley: portfólio com 1 card solto num grid de 3 colunas lê como "pouca prova"; erro do formulário quase invisível.
Casey: setas da galeria só em group-hover (não funciona em touch); mesmo problema do cookie banner sobre o WhatsApp.

## Observações Menores
- SegmentsGrid sem variante dark: (idêntico nos dois temas)
- #E8B657 não documentado (hover de botão WP no blog)
- global-error.tsx usa Arial em vez de Barlow Condensed/Inter
- Contexto ?from=segmentos/... se perde antes do formulário de orçamento
