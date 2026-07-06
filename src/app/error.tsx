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
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-light-bg to-white dark:from-dark-steel dark:to-dark-mid px-4">
      <div className="text-center max-w-xl">
        <p
          className="text-6xl sm:text-7xl font-black text-montsteel-gold/30 mb-2 font-display"
        >
          OPS
        </p>
        <h1
          className="text-3xl sm:text-4xl font-black uppercase text-dark-steel dark:text-white mb-4 font-display"
        >
          Algo deu errado
        </h1>
        <p className="text-slate-600 dark:text-[#94A3B8] mb-8 leading-relaxed">
          Encontramos um problema inesperado ao carregar esta página. Tente novamente — se o erro persistir, fale com a gente.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            Tentar novamente
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-dark-steel/25 dark:border-white/25 text-dark-steel dark:text-white font-bold text-sm uppercase rounded-lg hover:border-dark-steel dark:hover:border-white transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Voltar para a Home
          </Link>
        </div>
      </div>
    </section>
  );
}
