// =============================================================================
// MODELO PADRÃO — Estudo de Caso (Portfólio)
// -----------------------------------------------------------------------------
// Este arquivo NÃO é usado pelo site (não é importado em nenhuma página).
// Ele existe apenas como referência salva do formato de um estudo de caso
// completo, para copiar a estrutura quando formos criar novos cases no futuro.
//
// Como usar: copie o objeto TEMPLATE_CASE abaixo, cole em PORTFOLIO_DATA
// (em src/lib/portfolio.ts), troque o slug e todos os valores pelo caso real,
// e remova os campos opcionais (cliente, depoimento) se não se aplicarem.
// =============================================================================

import type { PortfolioCase } from "./portfolio";

export const TEMPLATE_CASE: PortfolioCase = {
  slug: "slug-do-caso-aqui",
  titulo: "Nome do Produto — Resumo do Projeto",
  setor: "Setor do Cliente",
  local: "Região ou Cidade/UF",
  area: "0.000 m²",
  ano: "2026",
  cliente: "Nome do Cliente (opcional — omita se confidencial)",
  img: "/images/produtos/PRODUTO.webp",
  produtoSlug: "slug-do-produto-relacionado",
  resumo: "Uma frase que resume o projeto — aparece no card da listagem e logo abaixo do título na página do caso.",
  desafio: [
    "Primeiro parágrafo: contexto do cliente e o problema/gargalo que ele enfrentava antes da MontSteel.",
    "Segundo parágrafo (opcional): detalhe adicional do desafio — prazo, orçamento, restrições técnicas etc.",
  ],
  solucao: [
    "Primeiro parágrafo: o que a MontSteel especificou/projetou/instalou e por quê.",
    "Segundo parágrafo (opcional): detalhe de execução — normas seguidas, fases da obra, diferencial técnico.",
  ],
  resultados: [
    { valor: "0.000 m²", label: "descrição do primeiro número de destaque" },
    { valor: "X dias/%%", label: "descrição do segundo número de destaque" },
    { valor: "0", label: "descrição do terceiro número de destaque" },
  ],
  specs: [
    { label: "Produto", value: "Nome do Produto" },
    { label: "Área total", value: "0.000 m²" },
    { label: "Aplicação", value: "Uso final da estrutura" },
    { label: "Cobertura", value: "Material da cobertura" },
    { label: "Estrutura", value: "Material/sistema estrutural" },
    { label: "Normas", value: "Conforme ABNT NBR ..." },
  ],
  depoimento: {
    texto: "Frase de depoimento do cliente, entre aspas, sobre o resultado do projeto (opcional — remova o campo inteiro se não houver depoimento).",
    autor: "Cargo do responsável (ex.: Diretor Industrial)",
    cargo: "Setor/porte da empresa — evite nome pessoal se preferir mais discrição",
  },
};
