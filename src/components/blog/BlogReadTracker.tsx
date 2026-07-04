"use client";

import { useEffect } from "react";
import { trackBlogReadProgress } from "@/components/shared/Analytics";

const READ_MILESTONES_SECONDS = [30, 60, 120] as const;

interface BlogReadTrackerProps {
  articleSlug: string;
}

/** Componente invisível: dispara marcos de tempo de leitura (30s/60s/120s) para o GA4. */
export default function BlogReadTracker({ articleSlug }: BlogReadTrackerProps) {
  useEffect(() => {
    const timers = READ_MILESTONES_SECONDS.map((seconds) =>
      setTimeout(() => trackBlogReadProgress(articleSlug, seconds), seconds * 1000)
    );
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [articleSlug]);

  return null;
}
