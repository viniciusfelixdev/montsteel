"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackBlogToConversionClick } from "@/components/shared/Analytics";

type BlogCTALinkProps = ComponentProps<typeof Link> & {
  articleSlug: string;
  ctaLocation: string;
};

/** Link para o orçamento usado dentro de artigos do blog — dispara clique_conversao_blog ao ser clicado. */
export default function BlogCTALink({ articleSlug, ctaLocation, onClick, ...props }: BlogCTALinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackBlogToConversionClick(articleSlug, ctaLocation);
        onClick?.(e);
      }}
    />
  );
}
