// Defaults de `images.deviceSizes` do Next.js (não sobrescritos em next.config.ts).
// Precisa bater com o array real usado pelo otimizador para o prefetch abaixo
// resultar na MESMA URL que a página de destino vai pedir — só assim o navegador
// serve a imagem do cache HTTP em vez de baixar de novo.
const NEXT_DEVICE_SIZES = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

/**
 * Monta a URL do otimizador de imagens do Next para um banner `fill sizes="100vw"`,
 * escolhendo a mesma largura que a página de destino vai pedir para o viewport atual.
 */
export function getBannerPreloadUrl(src: string, quality = 65): string | undefined {
  if (typeof window === "undefined") return undefined;
  const target = window.innerWidth * (window.devicePixelRatio || 1);
  const width = NEXT_DEVICE_SIZES.find((w) => w >= target) ?? NEXT_DEVICE_SIZES[NEXT_DEVICE_SIZES.length - 1];
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

function shouldSkipPrefetch(): boolean {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  return !!connection?.saveData || connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g";
}

/**
 * Começa a baixar (prioridade baixa, sem travar nada) o banner de uma página de
 * destino antes do usuário navegar até ela — ex.: ao passar o mouse/focar num link
 * de menu. Quando a navegação de fato acontece, a imagem já está no cache HTTP do
 * navegador e aparece nítida na hora, sem o flash borrado do placeholder.
 */
export function prefetchBanner(src: string, quality = 65) {
  if (shouldSkipPrefetch()) return;
  const url = getBannerPreloadUrl(src, quality);
  if (!url) return;
  const img = new window.Image();
  img.fetchPriority = "low";
  img.decoding = "async";
  img.src = url;
}
