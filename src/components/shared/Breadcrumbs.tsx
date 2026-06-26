import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Migalhas de navegação + JSON-LD (BreadcrumbList) para SEO.
 * tone: "dark" para headers escuros (texto claro), "light" para headers claros.
 */
export default function Breadcrumbs({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  const muted = tone === "light" ? "text-[#475569]" : "text-[#94A3B8]";
  const hover = tone === "light" ? "hover:text-dark-steel" : "hover:text-white";
  const current = tone === "light" ? "text-dark-steel" : "text-white";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Trilha de navegação" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              {c.href && !isLast ? (
                <Link href={c.href} className={`${muted} ${hover} transition-colors`}>
                  {c.label}
                </Link>
              ) : (
                <span className={`${isLast ? `${current} font-semibold` : muted}`} aria-current={isLast ? "page" : undefined}>
                  {c.label}
                </span>
              )}
              {!isLast && <ChevronRight className={`w-3 h-3 ${muted}`} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
