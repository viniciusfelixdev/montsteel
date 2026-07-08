import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";

export const metadata: Metadata = {
  title: "Blog | MontSteel — Galpões e Coberturas Industriais",
  description:
    "Artigos técnicos, cases e novidades sobre galpões industriais, logística, normas ABNT e sustentabilidade na construção industrial.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 300;

export default function BlogPage() {
  return <BlogListing page={1} />;
}
