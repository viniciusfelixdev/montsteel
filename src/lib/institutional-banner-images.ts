/**
 * Banner de cada página institucional, indexado pelo href da própria página.
 * Usado para prefetch on-hover/focus dos links de menu (Navbar/Footer) — essas
 * páginas não têm uma seção com cards na home (como Produtos/Segmentos têm) para
 * disparar o prefetch ao entrar na viewport, então o gatilho aqui é a intenção do
 * usuário (mouse sobre o link) em vez de scroll.
 */
export const INSTITUTIONAL_BANNER_IMAGES: Record<string, string> = {
  "/institucional/quem-somos": "/images/quem-somos-banner.webp",
  "/institucional/portfolio": "/images/geral/montsteel.webp",
  "/institucional/normas-abnt": "/images/normas-abnt-banner.webp",
  "/institucional/trabalhe-conosco": "/images/quem-somos-banner.webp",
  "/institucional/fornecedores": "/images/fornecedores-banner.webp",
  "/institucional/privacidade": "/images/privacidade-banner.webp",
  "/institucional/termos-de-uso": "/images/privacidade-banner.webp",
};
