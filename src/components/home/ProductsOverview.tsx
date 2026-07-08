"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import Reveal, { RevealGroup } from "@/components/shared/Reveal";
import PrefetchBannerLink from "@/components/shared/PrefetchBannerLink";

const productImages: Record<string, string> = {
  "galpao-de-lona":               "/images/produtos/galpao-de-lona.webp",
  "galpao-metalico":              "/images/produtos/galpao-metalico.webp",
  "galpao-coberecosteeel-hibrido":"/images/produtos/galpao-coberecosteeel-hibrido.webp",
  "mezaninos-metalicos":          "/images/produtos/mezaninos-metalicos.webp",
  "projetos-especiais":           "/images/produtos/projetos-especiais.webp",
};

export default function ProductsOverview() {
  return (
    <section
      id="produtos"
      className="cv-auto bg-light-bg dark:bg-dark-steel py-20 scroll-mt-16"
      aria-labelledby="produtos-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <Reveal className="text-center mb-14">
          <h2
            id="produtos-titulo"
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-dark-steel dark:text-white font-display"
          >
            NOSSOS PRODUTOS
          </h2>
          <p className="mt-4 text-slate-600 dark:text-[#94A3B8] max-w-xl mx-auto">
            Cada solução é desenvolvida sob medida para você e está disponível para locação e venda em todo o Brasil.
          </p>
        </Reveal>

        {/* Grid */}
        <RevealGroup as="div" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <article key={product.slug}>
              <PrefetchBannerLink href={`/produtos/${product.slug}`} className="group flex flex-col h-full bg-white dark:bg-dark-mid rounded-xl overflow-hidden cursor-pointer border border-slate-200 dark:border-dark-border shadow-sm hover:shadow-lg transition-shadow">
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden">
                  {productImages[product.slug] ? (
                    <Image
                      src={productImages[product.slug]}
                      alt={product.name}
                      fill
                      quality={65}
                      loading="eager"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 50vw, 420px"
                    />
                  ) : (
                    <div className="w-full h-full bg-light-bg dark:bg-dark-steel flex items-center justify-center">
                      <div className="w-8 h-1 bg-montsteel-blue/40 rounded" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent dark:from-dark-mid/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="text-xl font-bold uppercase text-dark-steel dark:text-white mb-2 group-hover:text-montsteel-gold transition-colors font-display"
                  >
                    {product.name}
                  </h3>
                  <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] mb-6 leading-relaxed flex-1">
                    {product.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 border border-montsteel-blue text-montsteel-blue text-sm font-semibold px-4 py-2 rounded-lg hover:bg-montsteel-blue hover:text-white group-hover:bg-montsteel-blue group-hover:text-white transition-all self-start">
                    Saiba mais <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </PrefetchBannerLink>
            </article>
          ))}

          {/* Niveladoras de Doca */}
          <article>
            <PrefetchBannerLink href="/produtos/niveladoras-de-doca" className="group flex flex-col h-full bg-white dark:bg-dark-mid rounded-xl overflow-hidden cursor-pointer border border-slate-200 dark:border-dark-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/produtos/niveladoras-de-doca.webp"
                  alt="Niveladora de Doca"
                  fill
                  quality={65}
                  loading="eager"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent dark:from-dark-mid/60 to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-xl font-bold uppercase text-dark-steel dark:text-white mb-2 group-hover:text-montsteel-gold transition-colors font-display"
                >
                  Niveladoras de Doca
                </h3>
                <p className="text-[16px] text-slate-600 dark:text-[#94A3B8] mb-6 leading-relaxed flex-1">
                  Equipamentos logísticos para otimizar o carregamento e descarregamento de veículos
                </p>
                <span className="inline-flex items-center gap-2 border border-montsteel-blue text-montsteel-blue text-sm font-semibold px-4 py-2 rounded-lg hover:bg-montsteel-blue hover:text-white group-hover:bg-montsteel-blue group-hover:text-white transition-all self-start">
                  Saiba mais <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </PrefetchBannerLink>
          </article>
        </RevealGroup>
      </div>
    </section>
  );
}
