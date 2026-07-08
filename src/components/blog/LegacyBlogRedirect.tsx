"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryRef {
  id: number;
  slug: string;
}

/**
 * O filtro de categoria/paginação do blog era feito via ?categoria=ID&page=N —
 * isso impedia a página de ser pré-renderizada (ler searchParams no servidor
 * força a rota inteira a renderizar a cada request, sem cache). Migramos para
 * /blog/categoria/[slug] e /blog/pagina/[n], que podem ser estáticos. Este
 * componente só existe para não quebrar links antigos (favoritos, resultados já
 * indexados no Google): detecta o formato velho no navegador e troca pro novo —
 * fazer essa leitura no cliente (useSearchParams, dentro de Suspense) não anula
 * o ganho da migração, porque não obriga o servidor a renderizar dinamicamente.
 */
export default function LegacyBlogRedirect({ categories }: { categories: CategoryRef[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoriaId = searchParams.get("categoria");
    const pageParam = searchParams.get("page");
    if (!categoriaId && !pageParam) return;

    const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);
    const cat = categoriaId ? categories.find((c) => String(c.id) === categoriaId) : undefined;

    const target = cat
      ? page > 1
        ? `/blog/categoria/${cat.slug}/pagina/${page}`
        : `/blog/categoria/${cat.slug}`
      : page > 1
      ? `/blog/pagina/${page}`
      : "/blog";

    router.replace(target);
  }, [searchParams, categories, router]);

  return null;
}
