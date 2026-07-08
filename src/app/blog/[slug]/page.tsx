import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlogReadTracker from "@/components/blog/BlogReadTracker";
import BlogCTALink from "@/components/blog/BlogCTALink";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import {
  getPosts,
  getPostBySlug,
  formatarData,
  getFeaturedImage,
  getCategoryName,
  stripHtml,
  sanitizeContent,
  sanitizeTitle,
  estimateReadingTime,
} from "@/lib/wordpress";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${stripHtml(post.title.rendered)} | Blog MontSteel`,
    description: stripHtml(post.excerpt.rendered),
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const { posts } = await getPosts({ perPage: 100 });
  const categoria = getCategoryName(post);
  const relacionados = posts
    .filter((p) => p.slug !== post.slug && getCategoryName(p) === categoria)
    .slice(0, 2);
  const outros = posts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <BlogReadTracker articleSlug={slug} />

      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${getFeaturedImage(post)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/80" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark-steel to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: stripHtml(post.title.rendered) },
            ]}
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold font-mono px-3 py-1 rounded border text-montsteel-blue border-montsteel-blue/40 bg-montsteel-blue/10 uppercase">
              {categoria}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {estimateReadingTime(post.content.rendered)} min de leitura
            </span>
          </div>
          <h1
            className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-4 max-w-3xl leading-tight font-display"
            dangerouslySetInnerHTML={{ __html: sanitizeTitle(post.title.rendered) }}
          />
          <p className="text-[#94A3B8] text-sm">{formatarData(post.date)}</p>
        </div>
      </section>

      {/* Conteúdo + Sidebar */}
      <section className="bg-light-bg dark:bg-dark-steel py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Artigo */}
            <article className="lg:col-span-2">
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content.rendered) }}
              />

              {/* CTA inline */}
              <div className="mt-12 p-6 bg-white dark:bg-dark-mid rounded-xl border border-slate-200 dark:border-dark-border shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="flex-1">
                  <p className="text-dark-steel dark:text-white font-semibold mb-1">Precisa de uma solução como essa?</p>
                  <p className="text-sm text-slate-600 dark:text-[#94A3B8]">Fale com nossos especialistas e receba uma proposta personalizada.</p>
                </div>
                <BlogCTALink
                  href="/orcamento"
                  articleSlug={slug}
                  ctaLocation="inline_body"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Solicitar Orçamento
                </BlogCTALink>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-20 lg:self-start">

              {/* Artigos relacionados */}
              {relacionados.length > 0 && (
                <div className="bg-white dark:bg-dark-mid rounded-xl p-6 border border-slate-200 dark:border-dark-border shadow-sm">
                  <h3
                    className="text-lg font-black uppercase text-dark-steel dark:text-white mb-5 font-display"
                  >
                    RELACIONADOS
                  </h3>
                  <ul className="space-y-4">
                    {relacionados.map((r) => (
                      <li key={r.id}>
                        <Link href={`/blog/${r.slug}`} className="group flex gap-3 items-start">
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            <Image src={getFeaturedImage(r)} alt={stripHtml(r.title.rendered)} fill className="object-cover" sizes="56px" />
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-montsteel-blue mb-1">{getCategoryName(r)}</p>
                            <p
                              className="text-sm text-dark-steel dark:text-white group-hover:text-montsteel-gold transition-colors leading-snug line-clamp-2"
                              dangerouslySetInnerHTML={{ __html: sanitizeTitle(r.title.rendered) }}
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Todos os artigos */}
              {outros.length > 0 && (
                <div className="bg-white dark:bg-dark-mid rounded-xl p-6 border border-slate-200 dark:border-dark-border shadow-sm">
                  <h3
                    className="text-lg font-black uppercase text-dark-steel dark:text-white mb-5 font-display"
                  >
                    TODOS OS ARTIGOS
                  </h3>
                  <ul className="space-y-3">
                    {outros.map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="group flex items-center gap-2 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors"
                        >
                          <Tag className="w-3 h-3 text-montsteel-gold flex-shrink-0" aria-hidden="true" />
                          <span
                            className="line-clamp-1"
                            dangerouslySetInnerHTML={{ __html: sanitizeTitle(p.title.rendered) }}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="bg-montsteel-blue rounded-xl p-6 text-center">
                <h3
                  className="text-xl font-black uppercase text-white mb-3 font-display"
                >
                  PRECISA DE UM GALPÃO?
                </h3>
                <p className="text-white/80 text-sm mb-5">
                  Fale com nossos especialistas e receba uma proposta sob medida.
                </p>
                <BlogCTALink
                  href="/orcamento"
                  articleSlug={slug}
                  ctaLocation="sidebar"
                  className="block w-full py-3 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Solicitar Orçamento
                </BlogCTALink>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
