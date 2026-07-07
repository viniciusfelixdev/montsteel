"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Warehouse, KeyRound, Maximize2, Wrench } from "lucide-react";
import { COMPANY_NUMBERS } from "@/lib/constants";
import Reveal from "@/components/shared/Reveal";
import { useInViewOnce, usePrefersReducedMotion } from "@/hooks/useInViewOnce";

const numberIcons = [Warehouse, KeyRound, Maximize2, Wrench];

function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCount(target);
      return;
    }
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration, reduce]);

  return <span ref={ref}>{count.toLocaleString("pt-BR")}</span>;
}

export default function NumbersSection() {
  return (
    <section aria-labelledby="numeros-titulo" className="cv-auto relative overflow-hidden">
      {/* Fundo: next/image otimiza automaticamente para WebP/AVIF e redimensiona
          por breakpoint — a versão anterior (background-image CSS direto) servia
          um PNG de 1.46MB sem nenhuma otimização. */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/data.webp"
          alt=""
          fill
          quality={65}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Reveal className="text-center mb-14">
            <h2
              id="numeros-titulo"
              className="text-4xl sm:text-5xl font-black uppercase text-white font-display"
            >
              NÚMEROS QUE COMPROVAM
              <br />
              <span className="text-montsteel-blue">NOSSA EXPERIÊNCIA</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_NUMBERS.map((item, i) => {
              const Icon = numberIcons[i];
              return (
                <Reveal
                  key={item.label}
                  y={30}
                  delay={i * 0.1}
                  className="text-center p-6 bg-black/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-8 h-8 text-montsteel-blue" aria-hidden="true" />
                  </div>
                  <div
                    className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-1 font-display whitespace-nowrap"
                    aria-label={`Mais de ${parseInt(item.value).toLocaleString("pt-BR")} ${item.unit}`}
                  >
                    +<Counter target={parseInt(item.value)} />
                    <span className="text-xl sm:text-2xl ml-1">{item.unit}</span>
                  </div>
                  <p className="text-sm text-[#94A3B8] mt-2">{item.label}</p>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
