import sanitizeHtmlLib from "sanitize-html";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

/** Imagem usada quando o post não tem imagem destacada definida no WordPress. */
const FALLBACK_POST_IMAGE = "/images/blog-banner.webp";

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

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const POSTS_PER_PAGE = 9;

/**
 * Lista os posts publicados no WordPress, mais recentes primeiro, com paginação real
 * (a API do WordPress limita por padrão a 10 por página — sem isso, posts além do
 * limite somem silenciosamente da listagem).
 */
export async function getPosts({
  page = 1,
  perPage = POSTS_PER_PAGE,
  categoryId,
}: { page?: number; perPage?: number; categoryId?: number } = {}): Promise<{
  posts: WordPressPost[];
  totalPages: number;
}> {
  if (!API_URL) return { posts: [], totalPages: 0 };

  const params = new URLSearchParams({
    _embed: "",
    page: String(page),
    per_page: String(perPage),
  });
  if (categoryId) params.set("categories", String(categoryId));

  try {
    const res = await fetch(`${API_URL}/posts?${params.toString()}`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return { posts: [], totalPages: 0 };

    const posts: WordPressPost[] = await res.json();
    const totalPages = Number(res.headers.get("X-WP-TotalPages")) || 1;
    return { posts, totalPages };
  } catch {
    // WordPress fora do ar ou lento demais (>5s) — a página do blog degrada pra
    // lista vazia em vez de travar o <Suspense> esperando indefinidamente.
    return { posts: [], totalPages: 0 };
  }
}

/** Lista as categorias do WordPress que têm ao menos um post publicado. */
export async function getCategories(): Promise<WordPressCategory[]> {
  if (!API_URL) return [];

  try {
    const res = await fetch(`${API_URL}/categories?per_page=100&orderby=count&order=desc`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return [];

    const categories: WordPressCategory[] = await res.json();
    return categories.filter((c) => c.count > 0);
  } catch {
    return [];
  }
}

/** Busca um post pelo slug. Retorna null se não existir. */
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  if (!API_URL) return null;

  try {
    const res = await fetch(`${API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;

    const posts: WordPressPost[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
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

/**
 * Sanitiza o HTML do corpo de um post vindo do WordPress antes de renderizar com
 * dangerouslySetInnerHTML. O conteúdo vem de um CMS externo — qualquer editor com
 * acesso ao WordPress (ou uma conta/plugin comprometido) poderia injetar <script>
 * ou atributos on*= que rodariam no navegador de quem visita o site (XSS
 * armazenado). Permite só as tags de formatação usadas pelo .prose-custom.
 */
export function sanitizeContent(html: string): string {
  return sanitizeHtmlLib(html, {
    allowedTags: [
      "p", "br", "strong", "b", "em", "i", "u", "s", "a",
      "h1", "h2", "h3", "h4", "h5", "h6",
      "ul", "ol", "li", "blockquote", "img", "figure", "figcaption",
      "table", "thead", "tbody", "tr", "th", "td", "hr", "span", "pre", "code",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading"],
      "*": ["class"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: sanitizeHtmlLib.simpleTransform("a", { rel: "noopener noreferrer", target: "_blank" }),
    },
  });
}

/** Mesma sanitização, mas para títulos: só formatação inline simples, sem links/imagens. */
export function sanitizeTitle(html: string): string {
  return sanitizeHtmlLib(html, {
    allowedTags: ["strong", "b", "em", "i", "span", "br"],
    allowedAttributes: {},
  });
}

/** Estima o tempo de leitura em minutos a partir do HTML do conteúdo. */
export function estimateReadingTime(html: string): number {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
