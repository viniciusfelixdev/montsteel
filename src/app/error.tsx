"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-dark-steel to-dark-mid px-4">
      <div className="text-center max-w-xl">
        <p
          className="text-6xl sm:text-7xl font-black text-cobersteel-gold/30 mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          OPS
        </p>
        <h1
          className="text-3xl sm:text-4xl font-black uppercase text-white mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Algo deu errado
        </h1>
        <p className="text-[#94A3B8] mb-8 leading-relaxed">
          Encontramos um problema inesperado ao carregar esta página. Tente novamente — se o erro persistir, fale com a gente.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            Tentar novamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/25 text-white font-bold text-sm uppercase rounded-lg hover:border-white transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Voltar para a Home
          </Link>
        </div>
      </div>
    </section>
  );
}
