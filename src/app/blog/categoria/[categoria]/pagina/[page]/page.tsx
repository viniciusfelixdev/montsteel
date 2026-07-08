import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import { getCategories, getPosts } from "@/lib/wordpress";
import { blogPageHref, parsePageParam } from "@/lib/blog-routes";

export const revalidate = 300;

export async function generateStaticParams() {
  const categories = await getCategories();
  const params: { categoria: string; page: string }[] = [];

  const pageCounts = await Promise.all(
    categories.map((cat) => getPosts({ page: 1, categoryId: cat.id }))
  );

  categories.forEach((cat, i) => {
    const { totalPages } = pageCounts[i];
    for (let p = 2; p <= totalPages; p++) {
      params.push({ categoria: cat.slug, page: String(p) });
    }
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; page: string }>;
}): Promise<Metadata> {
  const { categoria, page: pageParam } = await params;
  const page = parsePageParam(pageParam);
  if (!page) return {};
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) return {};
  return {
    title: `${cat.name} — Página ${page} | Blog MontSteel`,
    description: `Artigos da categoria ${cat.name} no blog da MontSteel.`,
    alternates: { canonical: blogPageHref(page, categoria) },
  };
}

export default async function BlogCategoriaPaginaPage({
  params,
}: {
  params: Promise<{ categoria: string; page: string }>;
}) {
  const { categoria, page: pageParam } = await params;
  const page = parsePageParam(pageParam);
  if (!page) notFound();

  const categories = await getCategories();
  if (!categories.some((c) => c.slug === categoria)) notFound();

  return <BlogListing page={page} categorySlug={categoria} />;
}
