"use client";

import { useRouter } from "next/navigation";
import type { ReactNode, MouseEvent } from "react";

/**
 * Botão "Voltar" que usa histórico do navegador (router.back()) em vez de
 * navegar direto pra `fallbackHref` — um <Link> normal sempre abre a página de
 * destino do zero, no topo, mesmo se o usuário veio rolado até o meio dela.
 * router.back() é uma navegação "para trás" de verdade, e o Next.js já restaura
 * a posição de scroll exata de onde a pessoa estava antes de entrar aqui.
 * Cai para uma navegação normal só quando não há histórico de navegação nesta
 * aba (ex.: alguém abriu o link do estudo de caso direto, sem passar pelo
 * portfólio antes) — nesse caso não existe posição pra restaurar mesmo.
 */
export default function BackLink({
  fallbackHref,
  className,
  children,
}: {
  fallbackHref: string;
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (typeof window !== "undefined" && window.history.length > 1) {
      e.preventDefault();
      router.back();
    }
  }

  return (
    <a href={fallbackHref} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
