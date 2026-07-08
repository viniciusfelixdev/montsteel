"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSegment } from "@/lib/segments";
import TrackedLink from "@/components/shared/TrackedLink";

function useOriginSegment() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const segmentSlug = from?.startsWith("segmentos/") ? from.replace("segmentos/", "") : null;
  return segmentSlug ? getSegment(segmentSlug) : undefined;
}

/**
 * Lê o segmento de origem (?from=segmentos/x) no cliente via useSearchParams em vez
 * de searchParams no Server Component da página — ler searchParams no server torna a
 * rota inteira dinâmica (perde o prerender de generateStaticParams), forçando um
 * round-trip ao servidor em toda navegação. Isso fazia a página "abrir" ainda com o
 * scroll da página anterior (ex.: rodapé) e só pular pro topo depois que o conteúdo
 * dinâmico chegava. Isolado aqui e envolto em <Suspense> na página, o resto do produto
 * continua 100% estático e troca de página instantaneamente.
 */
export function ProductOriginBadges() {
  const originSegment = useOriginSegment();
  return (
    <>
      {originSegment && (
        <Link
          href={`/segmentos/${originSegment.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all group"
        >
          <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
          Voltar para {originSegment.name}
        </Link>
      )}
      <Link
        href="/#produtos"
        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all group"
      >
        {originSegment ? (
          <>
            Ir para Produtos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </>
        ) : (
          <>
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Voltar para Produtos
          </>
        )}
      </Link>
    </>
  );
}

export function ProductOrcamentoCta({
  orcamentoValue,
  ctaLabel,
  className,
}: {
  orcamentoValue: string;
  ctaLabel: string;
  className: string;
}) {
  const originSegment = useOriginSegment();
  const href = `/orcamento?produto=${orcamentoValue}${originSegment ? `&segmento=${originSegment.slug}` : ""}`;
  return (
    <TrackedLink
      href={href}
      trackName={ctaLabel}
      trackLocation="produto_cta_final"
      className={className}
    >
      {ctaLabel}
    </TrackedLink>
  );
}
