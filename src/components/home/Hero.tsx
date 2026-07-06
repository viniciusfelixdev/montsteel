"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { trackButtonClick } from "@/components/shared/Analytics";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/image.webp"
          alt=""
          fill
          priority
          quality={65}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/75 via-[#0F0F0F]/55 to-[#0F0F0F]" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          {/* Headline */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] mb-6 font-display text-balance"
          >
            Infraestrutura Que Sustenta Sua Operação
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Galpões e coberturas industriais para locação e venda, com cada projeto
            desenvolvido sob medida para você, conforme normas ABNT.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/orcamento"
              onClick={() => trackButtonClick("solicitar_orcamento", "hero")}
              className="inline-flex items-center justify-center px-8 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase tracking-wide rounded hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento
            </Link>
            <Link
              href="#produtos"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold text-sm uppercase tracking-wide rounded hover:bg-white/10 transition-colors"
            >
              Conhecer Produtos
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#produtos"
        aria-label="Explorar: rolar para conhecer os produtos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest">Explorar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
