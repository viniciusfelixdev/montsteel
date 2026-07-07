"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Wheat, UtensilsCrossed, Car, Building2, Factory, Mountain,
  FileText, Flame, Anchor, Layers, Leaf, ShoppingCart,
} from "lucide-react";
import { SEGMENTS } from "@/lib/constants";
import Reveal from "@/components/shared/Reveal";

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
  return (
    <section
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SEGMENTS.map((seg, i) => {
            const Icon = iconMap[seg.icon] || Factory;
            const bgImage = SEGMENT_CARD_IMAGES[seg.slug];
            return (
              <Reveal
                key={seg.slug}
                y={0}
                scale={0.95}
                duration={0.4}
                delay={i * 0.05}
              >
                <Link
                  href={`/segmentos/${seg.slug}`}
                  className={`group relative flex h-full flex-col items-center justify-center gap-3 p-5 rounded-xl shadow-[0_6px_20px_rgba(15,25,35,0.18)] hover:shadow-[0_14px_32px_rgba(15,25,35,0.28)] hover:-translate-y-1 transition-all text-center overflow-hidden ${
                    bgImage ? "" : "bg-white dark:bg-dark-mid dark:border dark:border-dark-border"
                  }`}
                >
                  {bgImage && (
                    <>
                      <Image
                        src={bgImage}
                        alt=""
                        fill
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
