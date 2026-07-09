"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { trackButtonClick } from "@/components/shared/Analytics";
import { IMAGE_BLUR } from "@/lib/image-blur";

function scrollToProdutos(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
}

function scrollToClientes(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("clientes")?.scrollIntoView({ behavior: "smooth" });
}

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
          fetchPriority="high"
          quality={50}
          placeholder="blur"
          blurDataURL={IMAGE_BLUR["/images/image.webp"]}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/75 via-[#1A1A1A]/55 to-[#1A1A1A]" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-hero-enter">
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
              prefetch={false}
              onClick={() => trackButtonClick("solicitar_orcamento", "hero")}
              className="inline-flex items-center justify-center px-8 py-4 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento
            </Link>
            <a
              href="#produtos"
              onClick={scrollToProdutos}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold text-sm uppercase rounded-lg hover:bg-white/20 transition-colors"
            >
              Conhecer Produtos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#clientes"
        onClick={scrollToClientes}
        aria-label="Explorar: rolar até empresas que confiam na MontSteel"
        className="animate-hero-scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest">Explorar</span>
        <div className="animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </a>
    </section>
  );
}
