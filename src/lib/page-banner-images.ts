import { PRODUCTS_DATA } from "@/lib/products";
import { SEGMENTS_DATA } from "@/lib/segments";
import { PORTFOLIO_DATA } from "@/lib/portfolio";
import { INSTITUTIONAL_BANNER_IMAGES } from "@/lib/institutional-banner-images";

/**
 * Registro único de "href de página → imagem do banner/hero dessa página",
 * cobrindo todo o site (não só institucional). Usado pelo prefetch on-hover/
 * on-open dos links de menu, rodapé e cards — derivado direto das mesmas fontes
 * de dados das páginas (PRODUCTS_DATA, SEGMENTS_DATA, PORTFOLIO_DATA), então um
 * produto/segmento/case novo já entra automaticamente, sem precisar editar isto.
 */
export const PAGE_BANNER_IMAGES: Record<string, string> = {
  ...INSTITUTIONAL_BANNER_IMAGES,
  "/servicos": "/images/servicos/banner.webp",
  "/orcamento": "/images/orcamento-banner.webp",
  "/blog": "/images/blog-banner.webp",
  ...Object.fromEntries(PRODUCTS_DATA.map((p) => [`/produtos/${p.slug}`, p.img])),
  ...Object.fromEntries(SEGMENTS_DATA.map((s) => [`/segmentos/${s.slug}`, `/images/segmentos/${s.slug}.webp`])),
  ...Object.fromEntries(PORTFOLIO_DATA.map((c) => [`/institucional/portfolio/${c.slug}`, c.img])),
};
