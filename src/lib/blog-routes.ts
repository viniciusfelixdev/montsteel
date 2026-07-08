/**
 * Categoria/paginação do blog vivem no caminho da URL (/blog/categoria/[slug],
 * /blog/pagina/[n]) em vez de query string (?categoria=&page=) — só assim as
 * páginas podem ser pré-renderizadas e cacheadas. Ler searchParams no servidor
 * forçaria a rota inteira a renderizar do zero a cada visita, que era o motivo
 * do /blog carregar mais devagar que o resto do site. "pagina" e "categoria" são
 * segmentos estáticos (pastas de verdade, não `[dynamic]`), então convivem sem
 * conflito com /blog/[slug] (o post individual).
 */
export function blogPageHref(page: number, categorySlug?: string): string {
  if (categorySlug) {
    return page > 1 ? `/blog/categoria/${categorySlug}/pagina/${page}` : `/blog/categoria/${categorySlug}`;
  }
  return page > 1 ? `/blog/pagina/${page}` : "/blog";
}

/** Converte o segmento de URL /blog/pagina/[page] num número válido (>= 2) ou null. */
export function parsePageParam(raw: string): number | null {
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 2) return null;
  return n;
}
