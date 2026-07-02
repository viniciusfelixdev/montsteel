const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

/** Imagem usada quando o post não tem imagem destacada definida no WordPress. */
export const FALLBACK_POST_IMAGE = "/images/blog-banner.png";

interface WordPressTerm {
  id: number;
  name: string;
  taxonomy: string;
}

interface WordPressEmbedded {
  "wp:featuredmedia"?: { source_url: string }[];
  "wp:term"?: WordPressTerm[][];
}

export interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: WordPressEmbedded;
}

/** Lista os posts publicados no WordPress, mais recentes primeiro. */
export async function getPosts(): Promise<WordPressPost[]> {
  if (!API_URL) return [];

  const res = await fetch(`${API_URL}/posts?_embed`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return [];

  return res.json();
}

/** Busca um post pelo slug. Retorna null se não existir. */
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  if (!API_URL) return null;

  const res = await fetch(`${API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return null;

  const posts: WordPressPost[] = await res.json();
  return posts[0] ?? null;
}

export function formatarData(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/** URL da imagem destacada do post, ou um fallback caso o post não tenha uma. */
export function getFeaturedImage(post: WordPressPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_POST_IMAGE;
}

/** Nome da primeira categoria do post, ou "Blog" caso não tenha nenhuma. */
export function getCategoryName(post: WordPressPost): string {
  const terms = post._embedded?.["wp:term"] || [];
  const categorias = terms.flat().filter((t) => t.taxonomy === "category");
  return categorias[0]?.name || "Blog";
}

/** Remove tags HTML de um trecho de conteúdo (ex.: excerpt.rendered). */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

/** Estima o tempo de leitura em minutos a partir do HTML do conteúdo. */
export function estimateReadingTime(html: string): number {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
