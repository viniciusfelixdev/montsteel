"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackButtonClick } from "@/components/shared/Analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  trackName: string;
  trackLocation: string;
};

/** Link do Next.js que dispara trackButtonClick ao ser clicado — para uso em Server Components. */
export default function TrackedLink({ trackName, trackLocation, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackButtonClick(trackName, trackLocation);
        onClick?.(e);
      }}
    />
  );
}
