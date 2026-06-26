import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PRODUCTS, SEGMENTS, NAV_PRODUCTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/orcamento",
    "/servicos",
    "/institucional/quem-somos",
    "/institucional/normas-abnt",
    "/institucional/portfolio",
    "/institucional/trabalhe-conosco",
    "/institucional/fornecedores",
    "/institucional/privacidade",
  ];

  // Produtos: usa NAV_PRODUCTS (inclui niveladoras) com fallback em PRODUCTS.
  const productSlugs = new Set<string>([
    ...PRODUCTS.map((p) => `/produtos/${p.slug}`),
    ...NAV_PRODUCTS.map((p) => p.href),
  ]);

  const entries: MetadataRoute.Sitemap = [
    ...staticRoutes,
    ...productSlugs,
    ...SEGMENTS.map((s) => `/segmentos/${s.slug}`),
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/produtos") || path === "/orcamento" ? 0.8 : 0.6,
  }));

  return entries;
}
