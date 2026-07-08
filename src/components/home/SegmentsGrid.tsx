"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wheat, UtensilsCrossed, Car, Building2, Factory, Mountain,
  FileText, Flame, Anchor, Layers, Leaf, ShoppingCart,
} from "lucide-react";
import { SEGMENTS } from "@/lib/constants";
import Reveal, { RevealGroup } from "@/components/shared/Reveal";
import { getSegmentBannerPreloadUrl } from "@/lib/segment-banner-images";

const iconMap: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: "true" }>> = {
  Wheat, UtensilsCrossed, Car, Building2, Factory, Mountain,
  FileText, Flame, Anchor, Layers, Leaf, ShoppingCart,
};

// Imagem de fundo por segmento (mesma foto usada no banner da página do segmento).
const SEGMENT_CARD_IMAGES: Record<string, string> = {
  "agronegocio": "/images/segmentos/agronegocio.webp",
  "alimentos-bebidas": "/images/segmentos/alimentos-bebidas.webp",
  "automotivo": "/images/segmentos/automotivo.webp",
  "construcao-civil": "/images/segmentos/construcao-civil.webp",
  "industria": "/images/segmentos/industria.webp",
  "mineracao": "/images/segmentos/mineracao.webp",
  "papel-celulose": "/images/segmentos/papel-celulose.webp",
  "petroquimico": "/images/segmentos/petroquimico.webp",
  "portuario": "/images/segmentos/portuario.webp",
  "siderurgico": "/images/segmentos/siderurgico.webp",
  "sucroalcooleiro": "/images/segmentos/sucroalcooleiro.webp",
  "varejo-atacado": "/images/segmentos/varejo-atacado.webp",
};

export default function SegmentsGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Não esquenta o cache em conexões lentas/com "economia de dados" ligada —
    // nesse caso o usuário prefere menos bytes a mais velocidade na próxima página.
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (connection?.saveData || connection?.effectiveType === "2g" || connection?.effectiveType === "slow-2g") {
      return;
    }

    // Ao a seção de Segmentos entrar na viewport, começa a baixar (prioridade baixa,
    // sem travar nada) o banner de cada página de segmento na MESMA resolução que
    // essa página vai pedir. Assim, quando o usuário clica num card, o banner já
    // está no cache HTTP do navegador e aparece nítido na hora — sem o flash borrado.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        for (const seg of SEGMENTS) {
          const url = getSegmentBannerPreloadUrl(seg.slug);
          if (!url) continue;
          const img = new window.Image();
          img.fetchPriority = "low";
          img.decoding = "async";
          img.src = url;
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="segmentos"
      className="cv-auto bg-white dark:bg-dark-mid py-20 scroll-mt-16"
      aria-labelledby="segmentos-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <h2
            id="segmentos-titulo"
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-dark-steel dark:text-white font-display"
          >
            ATENDEMOS OS PRINCIPAIS SETORES
            <br />
            DA INDÚSTRIA
          </h2>
        </Reveal>

        <RevealGroup
          as="div"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          y={0}
          scale={0.95}
          duration={0.6}
          stagger={0.08}
        >
          {SEGMENTS.map((seg) => {
            const Icon = iconMap[seg.icon] || Factory;
            const bgImage = SEGMENT_CARD_IMAGES[seg.slug];
            return (
              <div key={seg.slug} className="h-full">
                <Link
                  href={`/segmentos/${seg.slug}`}
                  className={`group relative flex h-full flex-col items-center justify-center gap-3 p-5 rounded-xl shadow-[0_6px_20px_rgba(15,25,35,0.18)] hover:shadow-[0_14px_32px_rgba(15,25,35,0.28)] hover:-translate-y-1 transition-all text-center overflow-hidden ${
                    bgImage ? "" : "bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border"
                  }`}
                >
                  {bgImage && (
                    <>
                      <Image
                        src={bgImage}
                        alt=""
                        fill
                        quality={65}
                        loading="eager"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-0 bg-[#1A1A1A]/60 group-hover:bg-[#1A1A1A]/50 transition-colors" aria-hidden="true" />
                    </>
                  )}
                  <div
                    className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      bgImage
                        ? "bg-white/15 group-hover:bg-montsteel-blue"
                        : "bg-montsteel-blue/10 dark:bg-montsteel-blue/15 group-hover:bg-montsteel-blue"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 transition-colors ${bgImage ? "text-white" : "text-montsteel-blue"} group-hover:text-white`}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className={`relative text-lg font-bold uppercase transition-colors font-display ${
                      bgImage ? "text-white" : "text-dark-steel dark:text-white group-hover:text-montsteel-blue"
                    }`}
                  >
                    {seg.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
