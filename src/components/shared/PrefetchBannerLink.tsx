"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { PAGE_BANNER_IMAGES } from "@/lib/page-banner-images";
import { prefetchBanner } from "@/lib/image-preload";

type Props = ComponentProps<typeof Link>;

// Todo banner/hero do site é servido em quality=50 — precisa bater com o que a
// página de destino pede, senão o navegador baixa a imagem duas vezes.
const BANNER_QUALITY = 50;

/**
 * Link para qualquer página com banner/hero (produto, segmento, institucional,
 * serviços, orçamento, blog, estudo de caso) que começa a baixar essa imagem ao
 * passar o mouse/focar/tocar — para quando a navegação de fato acontecer, a
 * imagem já estar no cache HTTP e aparecer nítida na hora, sem o flash borrado
 * do placeholder. Use em qualquer Link de menu/rodapé/card que aponte pra uma
 * dessas páginas (fora de listas com prefetch em massa por scroll, como a grade
 * de Segmentos da home).
 */
export default function PrefetchBannerLink({ href, onMouseEnter, onFocus, ...props }: Props) {
  const hrefStr = typeof href === "string" ? href : href.pathname;
  const src = hrefStr ? PAGE_BANNER_IMAGES[hrefStr] : undefined;

  const handlePrefetch = () => {
    if (src) prefetchBanner(src, BANNER_QUALITY);
  };

  return (
    <Link
      href={href}
      onMouseEnter={(e) => { handlePrefetch(); onMouseEnter?.(e); }}
      onFocus={(e) => { handlePrefetch(); onFocus?.(e); }}
      onTouchStart={handlePrefetch}
      {...props}
    />
  );
}
