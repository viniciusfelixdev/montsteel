"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const productImages: Record<string, string> = {
  "galpao-de-lona":               "/images/produtos/galpao-de-lona.png",
  "galpao-metalico":              "/images/produtos/galpao-metalico.png",
  "galpao-coberecosteeel-hibrido":"/images/produtos/galpao-coberecosteeel-hibrido.png",
  "mezaninos-metalicos":          "/images/produtos/mezaninos-metalicos.png",
  "projetos-especiais":           "/images/produtos/projetos-especiais.png",
};

export default function ProductsOverview() {
  return (
    <section
      id="produtos"
      className="bg-dark-steel py-20"
      aria-labelledby="produtos-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2
            id="produtos-titulo"
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white font-display"
          >
            NOSSOS PRODUTOS
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-xl mx-auto">
            Cada solução é desenvolvida sob medida para você e está disponível para locação e venda em todo o Brasil.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <Link key={product.slug} href={`/produtos/${product.slug}`} className="group flex flex-col bg-dark-mid rounded-xl overflow-hidden cursor-pointer">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col flex-1"
              >
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden">
                  {productImages[product.slug] ? (
                    <Image
                      src={productImages[product.slug]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    />
                  ) : (
                    <div className="w-full h-full bg-dark-steel flex items-center justify-center">
                      <div className="w-8 h-1 bg-cobersteel-blue/40 rounded" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-mid/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="text-xl font-bold uppercase text-white mb-2 group-hover:text-cobersteel-gold transition-colors font-display"
                  >
                    {product.name}
                  </h3>
                  <p className="text-[16px] text-[#94A3B8] mb-6 leading-relaxed flex-1">
                    {product.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-2 border border-cobersteel-blue text-cobersteel-blue text-sm font-semibold px-4 py-2 rounded-lg hover:bg-cobersteel-blue hover:text-white group-hover:bg-cobersteel-blue group-hover:text-white transition-all self-start">
                    Saiba mais <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}

          {/* Niveladoras de Doca */}
          <Link href="/produtos/niveladoras-de-doca" className="group flex flex-col bg-dark-mid rounded-xl overflow-hidden cursor-pointer">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: PRODUCTS.length * 0.08 }}
              className="flex flex-col flex-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/produtos/niveladoras-de-doca.png"
                  alt="Niveladora de Doca"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-mid/60 to-transparent" />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-xl font-bold uppercase text-white mb-2 group-hover:text-cobersteel-gold transition-colors font-display"
                >
                  Niveladoras de Doca
                </h3>
                <p className="text-[16px] text-[#94A3B8] mb-6 leading-relaxed flex-1">
                  Equipamentos logísticos para otimizar o carregamento e descarregamento de veículos
                </p>
                <span className="inline-flex items-center gap-2 border border-cobersteel-blue text-cobersteel-blue text-sm font-semibold px-4 py-2 rounded-lg hover:bg-cobersteel-blue hover:text-white group-hover:bg-cobersteel-blue group-hover:text-white transition-all self-start">
                  Saiba mais <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </motion.article>
          </Link>
        </div>
      </div>
    </section>
  );
}
