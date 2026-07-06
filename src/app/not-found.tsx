import Link from "next/link";
import TrackedLink from "@/components/shared/TrackedLink";
import { Home, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Página não encontrada | MontSteel",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-light-bg to-white dark:from-dark-steel dark:to-dark-mid overflow-hidden px-4">
      {/* Chevron signature de fundo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]" aria-hidden="true">
        <svg width="600" height="240" viewBox="0 0 120 48">
          <polyline points="0,48 60,0 120,48" fill="none" stroke="#CC8000" strokeWidth="6" />
        </svg>
      </div>

      <div className="relative text-center max-w-xl">
        <p
          className="text-[8rem] sm:text-[11rem] font-black leading-none text-montsteel-blue/30 font-display"
        >
          404
        </p>
        <h1
          className="text-3xl sm:text-4xl font-black uppercase text-dark-steel dark:text-white mb-4 -mt-4 font-display"
        >
          Página não encontrada
        </h1>
        <p className="text-slate-600 dark:text-[#94A3B8] mb-8 leading-relaxed">
          O endereço que você acessou não existe ou foi movido. Mas a estrutura continua de pé — vamos te levar de volta ao caminho certo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-montsteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Voltar para a Home
          </Link>
          <TrackedLink
            href="/orcamento"
            trackName="solicitar_orcamento"
            trackLocation="404"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-dark-steel/25 dark:border-white/25 text-dark-steel dark:text-white font-bold text-sm uppercase rounded-lg hover:border-dark-steel dark:hover:border-white transition-colors"
          >
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
