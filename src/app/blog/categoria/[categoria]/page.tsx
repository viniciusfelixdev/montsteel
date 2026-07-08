import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import { getCategories } from "@/lib/wordpress";
import { blogPageHref } from "@/lib/blog-routes";

export const revalidate = 300;

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({ categoria: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === categoria);
  if (!cat) return {};
  return {
    title: `${cat.name} | Blog MontSteel`,
    description: `Artigos da categoria ${cat.name} no blog da MontSteel.`,
    alternates: { canonical: blogPageHref(1, categoria) },
  };
}

export default async function BlogCategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const categories = await getCategories();
  if (!categories.some((c) => c.slug === categoria)) notFound();

  return <BlogListing page={1} categorySlug={categoria} />;
}
