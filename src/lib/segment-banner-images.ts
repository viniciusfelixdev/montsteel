import { getBannerPreloadUrl } from "@/lib/image-preload";

/**
 * Banners do topo de /segmentos/[slug]. `blur` é um LQIP (16px, gerado via sharp)
 * embutido como data URI — faz o Image renderizar algo nítido o bastante desde o
 * primeiro paint em vez de ficar em branco/overlay sólido até o WebP grande (150–300KB)
 * terminar de baixar, o que é a maior parte da demora percebida no banner.
 */
export const SEGMENT_BANNER_IMAGES: Record<string, { src: string; blur: string }> = {
  agronegocio: {
    src: "/images/segmentos/agronegocio.webp",
    blur: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoQAAkAA4BaJbACdLoAAribWRAA/ZgW84YpG+Kdou25OqD0ZD/5pMas8zCjwCl1XAvi/wZjAsrs/i2JJB4AAA==",
  },
  "alimentos-bebidas": {
    src: "/images/segmentos/alimentos-bebidas.webp",
    blur: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADwAQCdASoQAAkAA4BaJQBOgCbhViH5ZyAA/vM5w7SIZ9rRaZ9u2xCd/uxPS7dEqZP5sTFWnOBA+RiWtM5456K/2uEe0eUpOTs5v8hCLb9u/eWkRdgUAA==",
  },
  automotivo: {
    src: "/images/segmentos/automotivo.webp",
    blur: "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAADwAQCdASoQAAkAA4BaJYgCdAD0rPZYzIAA/uxWckUAvNhi4cypbrHiDXQLGmnPHfp9H6l5dkTnSqqpvAEcQwMHo7F2uxdwiA/ch+vJcFX7lYhoBm73X4UsAAA=",
  },
  "construcao-civil": {
    src: "/images/segmentos/construcao-civil.webp",
    blur: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoQAAkAA4BaJYwCdAC3xM+k8AD+6iYQue0z1k64T4u0qXcdiAkwTsB7IZuKxQJchcmnMkxAG8SZzgYLSA3W4AgjvjFcagAA",
  },
  industria: {
    src: "/images/segmentos/industria.webp",
    blur: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoQAAkAA4BaJZACdADZnt6cAP7w+1EuPLlktAzZq6LrgdCIEZFYb9YM4qMMlOEwoWUOZEX0fUZj9JIMYAA=",
  },
  mineracao: {
    src: "/images/segmentos/mineracao.webp",
    blur: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAAAQAgCdASoQAAkAA4BaJZgCdAEVYkGw7SAAAP6Hz9jrbZ/lKCokIFGqeVzd3nZMPXHw6TQfu4msggy4LdxiAAAA",
  },
  "papel-celulose": {
    src: "/images/segmentos/papel-celulose.webp",
    blur: "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoQAAgAA4BaJZACdAEOvFLwhAAA/tBvRWpudRtpG18dUXK8shm1d4NU22YoJoI75/gR7j+acSN2IAAA",
  },
  petroquimico: {
    src: "/images/segmentos/petroquimico.webp",
    blur: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoQAAkAA4BaJZgCdAEfbfdeguAA/u9lBFbzV9TPUqtjZb46rIu8MtOlCTMm0RD6mmQOt+WzM7C94LtFSerizTSWxY/oAA==",
  },
  portuario: {
    src: "/images/segmentos/portuario.webp",
    blur: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoQAAkAA4BaJQBOgCHc9SctEADOLR6Su5j1vyGG8zhTDgZB39red+4pBBnpPnQ6XXp6ENcLGPXEYU9ShfNWUAAA",
  },
  siderurgico: {
    src: "/images/segmentos/siderurgico.webp",
    blur: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoQAAkAA4BaJQBOgCa77aX1WsAA/vbXqVWmqaxxQ0acLW1VMabAXOnlP4wfyqrqH/RCmz3kQQwG7+4FUYUsunFQiYAAAA==",
  },
  sucroalcooleiro: {
    src: "/images/segmentos/sucroalcooleiro.webp",
    blur: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoQAAkAA4BaJbACdADbqiXDwAD9470EVrvdATRLEIRY0xGej6b62STQJIa3A3wBjRIJ9nfrTtjWBPeMV7VIoAAA",
  },
  "varejo-atacado": {
    src: "/images/segmentos/varejo-atacado.webp",
    blur: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoQAAkAA4BaJZQC7ADiSUpymADLCgx4LkgSJ5ZCsgX8DMV64OIU2hGbQ5GYHMI3PSiL1fUvNUYbuMKZMAA=",
  },
};

/**
 * Monta a URL do otimizador de imagens do Next para o banner de um segmento,
 * escolhendo a mesma largura que o <Image sizes="100vw"> da página de destino
 * vai pedir para o viewport atual — para o navegador reaproveitar do cache.
 */
export function getSegmentBannerPreloadUrl(slug: string): string | undefined {
  const entry = SEGMENT_BANNER_IMAGES[slug];
  if (!entry) return undefined;
  return getBannerPreloadUrl(entry.src, 50);
}
