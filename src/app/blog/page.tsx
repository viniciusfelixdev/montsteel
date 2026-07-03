import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { Clock, Tag, ArrowRight } from "lucide-react";
import {
  getPosts,
  formatarData,
  getFeaturedImage,
  getCategoryName,
  stripHtml,
  estimateReadingTime,
} from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Artigos técnicos, cases e novidades sobre galpões industriais, logística, normas ABNT e sustentabilidade na construção industrial.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 300;

export default async function BlogPage() {
  const posts = await getPosts();
  const destaque = posts[0];
  const demais = posts.slice(1);

  const categorias = Array.from(new Set(posts.map((p) => getCategoryName(p))));

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/blog-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/80" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-steel to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            BLOG <span className="text-cobersteel-blue">COBERSTEEL</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Conteúdo técnico, cases e novidades sobre infraestrutura industrial, logística e sustentabilidade.
          </p>
        </div>
      </section>

      {!destaque ? (
        <section className="bg-dark-steel py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-dark-mid rounded-xl p-10 text-center">
              <p className="text-white font-semibold mb-2">Nenhum artigo publicado no momento.</p>
              <p className="text-sm text-[#94A3B8]">Volte em breve para conferir nosso conteúdo.</p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Artigo em destaque */}
          <section className="bg-dark-steel py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href={`/blog/${destaque.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-dark-mid"
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
                    <span className="text-xs font-bold font-mono px-3 py-1 rounded border text-cobersteel-blue border-cobersteel-blue/40 bg-cobersteel-blue/10 uppercase">
                      {getCategoryName(destaque)}
                    </span>
                    <span className="text-xs text-[#64748B]">Destaque</span>
                  </div>
                  <h2
                    className="text-3xl sm:text-4xl font-black uppercase text-white mb-4 leading-tight group-hover:text-cobersteel-gold transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: destaque.title.rendered }}
                  />
                  <p className="text-[16px] text-[#94A3B8] leading-relaxed mb-6 flex-1 line-clamp-3">
                    {stripHtml(destaque.excerpt.rendered)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-[#64748B]">
                      <span>{formatarData(destaque.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                        {estimateReadingTime(destaque.content.rendered)} min de leitura
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobersteel-blue group-hover:text-cobersteel-gold transition-colors">
                      Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Grid + Sidebar */}
          <section className="bg-dark-steel pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                className="text-2xl font-black uppercase text-white mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                TODOS OS ARTIGOS
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                {/* Artigos */}
                <div className="lg:col-span-2">
                  {demais.length === 0 ? (
                    <p className="text-sm text-[#94A3B8]">Novos artigos em breve.</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {demais.map((post) => (
                        <Link
                          key={post.id}
                          href={`/blog/${post.slug}`}
                          className="group flex flex-col bg-dark-mid rounded-xl overflow-hidden"
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
                            <span className="inline-block self-start text-xs font-bold font-mono px-3 py-1 rounded border text-cobersteel-blue border-cobersteel-blue/40 bg-cobersteel-blue/10 uppercase mb-3">
                              {getCategoryName(post)}
                            </span>
                            <h3
                              className="font-black uppercase text-white text-base mb-2 leading-tight group-hover:text-cobersteel-gold transition-colors flex-1"
                              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                            <p className="text-[16px] text-[#94A3B8] leading-relaxed mb-4 line-clamp-2">
                              {stripHtml(post.excerpt.rendered)}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-[#64748B]">
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
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-20 lg:self-start">

                  {/* Categorias */}
                  {categorias.length > 0 && (
                    <div className="bg-dark-mid rounded-xl p-6">
                      <h3
                        className="text-lg font-black uppercase text-white mb-5"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        CATEGORIAS
                      </h3>
                      <ul className="space-y-2">
                        {categorias.map((cat) => {
                          const count = posts.filter((p) => getCategoryName(p) === cat).length;
                          return (
                            <li key={cat}>
                              <span className="flex items-center justify-between py-2 text-sm text-[#94A3B8]">
                                <span className="flex items-center gap-2">
                                  <Tag className="w-3.5 h-3.5 text-cobersteel-gold" aria-hidden="true" />
                                  {cat}
                                </span>
                                <span className="text-xs text-[#64748B]">{count}</span>
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {/* Artigos recentes */}
                  <div className="bg-dark-mid rounded-xl p-6">
                    <h3
                      className="text-lg font-black uppercase text-white mb-5"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      RECENTES
                    </h3>
                    <ul className="space-y-4">
                      {posts.slice(0, 4).map((post) => (
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
                              <p className="text-xs font-semibold text-cobersteel-blue mb-1">{getCategoryName(post)}</p>
                              <p
                                className="text-sm text-white group-hover:text-cobersteel-gold transition-colors leading-snug line-clamp-2"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                              />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="bg-cobersteel-blue rounded-xl p-6 text-center">
                    <h3
                      className="text-xl font-black uppercase text-white mb-3"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      PRECISA DE UM GALPÃO?
                    </h3>
                    <p className="text-white/80 text-sm mb-5">
                      Fale com nossos especialistas e receba uma proposta sob medida.
                    </p>
                    <TrackedLink
                      href="/orcamento"
                      trackName="solicitar_orcamento"
                      trackLocation="blog_sidebar"
                      className="block w-full py-3 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
                    >
                      Solicitar Orçamento
                    </TrackedLink>
                  </div>

                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
