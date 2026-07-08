import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogListing from "@/components/blog/BlogListing";
import { getPosts } from "@/lib/wordpress";
import { blogPageHref, parsePageParam } from "@/lib/blog-routes";

export const revalidate = 300;

export async function generateStaticParams() {
  const { totalPages } = await getPosts({ page: 1 });
  const params: { page: string }[] = [];
  for (let p = 2; p <= totalPages; p++) params.push({ page: String(p) });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page: pageParam } = await params;
  const page = parsePageParam(pageParam);
  if (!page) return {};
  return {
    title: `Blog — Página ${page} | MontSteel`,
    description: "Artigos técnicos, cases e novidades sobre galpões industriais, logística e sustentabilidade.",
    alternates: { canonical: blogPageHref(page) },
  };
}

export default async function BlogPaginaPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageParam } = await params;
  const page = parsePageParam(pageParam);
  if (!page) notFound();

  return <BlogListing page={page} />;
}
