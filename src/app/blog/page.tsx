import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Clock, Tag, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import {
  getPosts,
  getCategories,
  formatarData,
  getFeaturedImage,
  getCategoryName,
  stripHtml,
  sanitizeTitle,
  estimateReadingTime,
} from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog | MontSteel — Galpões e Coberturas Industriais",
  description:
    "Artigos técnicos, cases e novidades sobre galpões industriais, logística, normas ABNT e sustentabilidade na construção industrial.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 300;

function pageHref(page: number, categoryId?: number) {
  const params = new URLSearchParams();
  if (categoryId) params.set("categoria", String(categoryId));
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return `/blog${qs ? `?${qs}` : ""}`;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; categoria?: string }>;
}) {
  const { page: pageParam, categoria } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const categoryId = categoria ? Number(categoria) : undefined;

  const [{ posts, totalPages }, categories, { posts: recentPosts }] = await Promise.all([
    getPosts({ page, categoryId }),
    getCategories(),
    getPosts({ page: 1, perPage: 4 }),
  ]);

  const activeCategory = categoryId ? categories.find((c) => c.id === categoryId) : undefined;
  const showDestaque = page === 1 && !categoryId;
  const destaque = showDestaque ? posts[0] : undefined;
  const demais = showDestaque ? posts.slice(1) : posts;

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/blog-banner.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/80" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-steel to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Blog" }]} />
          <Link
            href="/"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Início
          </Link>
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-4 font-display">
            BLOG <span className="text-montsteel-blue">MONTSTEEL</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Conteúdo técnico, cases e novidades sobre infraestrutura industrial, logística e sustentabilidade.
          </p>
        </div>
      </section>

      {destaque && (
        <section className="bg-light-bg dark:bg-dark-steel py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${destaque.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white dark:bg-dark-mid"
            >
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                <Image
                  src={getFeaturedImage(destaque)}
                  alt={stripHtml(destaque.title.rendered)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded border text-montsteel-blue border-montsteel-blue/40 bg-montsteel-blue/10 uppercase">
                    {getCategoryName(destaque)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-[#64748B]">Destaque</span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-black uppercase text-dark-steel dark:text-white mb-4 leading-tight group-hover:text-montsteel-gold transition-colors font-display"
                  dangerouslySetInnerHTML={{ __html: sanitizeTitle(destaque.title.rendered) }}
                />
                <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed mb-6 flex-1 line-clamp-3">
                  {stripHtml(destaque.excerpt.rendered)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-[#64748B]">
                    <span>{formatarData(destaque.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {estimateReadingTime(destaque.content.rendered)} min de leitura
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-montsteel-blue group-hover:text-montsteel-gold transition-colors">
                    Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid + Sidebar */}
      <section className="bg-light-bg dark:bg-dark-steel pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-2xl font-black uppercase text-dark-steel dark:text-white font-display">
              {activeCategory ? (
                <>
                  ARTIGOS EM <span className="text-montsteel-blue">{activeCategory.name.toUpperCase()}</span>
                </>
              ) : (
                "TODOS OS ARTIGOS"
              )}
            </h2>
            {activeCategory && (
              <Link
                href="/blog"
                className="text-sm font-semibold text-montsteel-blue hover:text-dark-steel dark:hover:text-white transition-colors"
              >
                Ver todas as categorias
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Artigos */}
            <div className="lg:col-span-2">
              {demais.length === 0 ? (
                <div className="bg-white dark:bg-dark-mid rounded-xl p-10 text-center">
                  <p className="text-dark-steel dark:text-white font-semibold mb-2">
                    {activeCategory ? "Nenhum artigo nessa categoria ainda." : "Nenhum artigo publicado no momento."}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-[#94A3B8]">Volte em breve para conferir nosso conteúdo.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {demais.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col bg-white dark:bg-dark-mid rounded-xl overflow-hidden"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={getFeaturedImage(post)}
                          alt={stripHtml(post.title.rendered)}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col flex-1 p-5">
                        <span className="inline-block self-start text-xs font-bold font-mono px-3 py-1 rounded border text-montsteel-blue border-montsteel-blue/40 bg-montsteel-blue/10 uppercase mb-3">
                          {getCategoryName(post)}
                        </span>
                        <h3
                          className="font-black uppercase text-dark-steel dark:text-white text-base mb-2 leading-tight group-hover:text-montsteel-gold transition-colors flex-1 font-display"
                          dangerouslySetInnerHTML={{ __html: sanitizeTitle(post.title.rendered) }}
                        />
                        <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] leading-relaxed mb-4 line-clamp-2">
                          {stripHtml(post.excerpt.rendered)}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-[#64748B]">
                          <span>{formatarData(post.date)}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            {estimateReadingTime(post.content.rendered)} min
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Paginação */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <Link
                    href={pageHref(page - 1, categoryId)}
                    aria-disabled={page <= 1}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      page <= 1
                        ? "pointer-events-none opacity-30 bg-white dark:bg-dark-mid text-slate-600 dark:text-[#94A3B8]"
                        : "bg-white dark:bg-dark-mid text-dark-steel dark:text-white hover:bg-montsteel-blue/20"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    Anterior
                  </Link>
                  <span className="text-sm text-slate-600 dark:text-[#94A3B8] px-2">
                    Página {page} de {totalPages}
                  </span>
                  <Link
                    href={pageHref(page + 1, categoryId)}
                    aria-disabled={page >= totalPages}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      page >= totalPages
                        ? "pointer-events-none opacity-30 bg-white dark:bg-dark-mid text-slate-600 dark:text-[#94A3B8]"
                        : "bg-white dark:bg-dark-mid text-dark-steel dark:text-white hover:bg-montsteel-blue/20"
                    }`}
                  >
                    Próxima
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-20 lg:self-start">
              {/* Categorias */}
              {categories.length > 0 && (
                <div className="bg-white dark:bg-dark-mid rounded-xl p-6">
                  <h3 className="text-lg font-black uppercase text-dark-steel dark:text-white mb-5 font-display">
                    CATEGORIAS
                  </h3>
                  <ul className="space-y-0">
                    {categories.map((cat) => {
                      const isActive = cat.id === categoryId;
                      return (
                        <li key={cat.id}>
                          <Link
                            href={isActive ? "/blog" : pageHref(1, cat.id)}
                            className={`flex items-center justify-between py-2.5 text-sm transition-colors ${
                              isActive ? "text-montsteel-gold" : "text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <Tag className="w-3.5 h-3.5 text-montsteel-gold" aria-hidden="true" />
                              {cat.name}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-[#64748B]">{cat.count}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* Artigos recentes */}
              {recentPosts.length > 0 && (
                <div className="bg-white dark:bg-dark-mid rounded-xl p-6">
                  <h3 className="text-lg font-black uppercase text-dark-steel dark:text-white mb-5 font-display">
                    RECENTES
                  </h3>
                  <ul className="space-y-4">
                    {recentPosts.map((post) => (
                      <li key={post.id}>
                        <Link href={`/blog/${post.slug}`} className="group flex gap-3 items-start">
                          <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={getFeaturedImage(post)}
                              alt={stripHtml(post.title.rendered)}
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-montsteel-blue mb-1">{getCategoryName(post)}</p>
                            <p
                              className="text-sm text-dark-steel dark:text-white group-hover:text-montsteel-gold transition-colors leading-snug line-clamp-2"
                              dangerouslySetInnerHTML={{ __html: sanitizeTitle(post.title.rendered) }}
                            />
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="bg-montsteel-blue rounded-xl p-6 text-center">
                <h3 className="text-xl font-black uppercase text-white mb-3 font-display">
                  PRECISA DE UM GALPÃO?
                </h3>
                <p className="text-white/80 text-sm mb-5">
                  Fale com nossos especialistas e receba uma proposta sob medida.
                </p>
                <TrackedLink
                  href="/orcamento"
                  trackName="solicitar_orcamento"
                  trackLocation="blog_sidebar"
                  className="block w-full py-3 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Solicitar Orçamento
                </TrackedLink>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
