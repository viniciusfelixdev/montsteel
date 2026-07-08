"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

// dark: true → card com fundo escuro (para logos brancas)
const clients: { name: string; file: string; dark?: boolean }[] = [
  { name: "ArcelorMittal", file: "arcelor.png" },
  { name: "Heineken", file: "heineken.svg" },
  { name: "Usina Furlan", file: "usina-furlan.png" },
  { name: "Denusa — Destilaria Nova União", file: "denusa.png" },
  { name: "Suzano", file: "suzano.svg" },
  { name: "Santa Isabel", file: "santaisabel.svg" },
  { name: "Vale", file: "vale.png" },
  { name: "Zilor", file: "zilor.svg" },
  { name: "Grupo Agronelli", file: "agroneli.png" },
  { name: "MR Lit", file: "mrlit.svg" },
  { name: "Katrium Indústrias Químicas", file: "katrium.png" },
  { name: "Luft Logistics", file: "luft.png" },
  { name: "CSN", file: "csn.png" },
  { name: "Barbosa Mello", file: "barbosamelo.webp", dark: true },
];

export default function ClientLogos({ showTitle = true }: { showTitle?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  // Lista duplicada para o loop infinito ser contínuo.
  const loop = [...clients, ...clients];

  // Rolagem automática contínua com loop perfeito. Só roda enquanto o
  // carrossel está visível na tela (IntersectionObserver) — sem isso, o RAF
  // ficava escrevendo scrollLeft (força layout a cada frame) indefinidamente,
  // mesmo com a seção fora da viewport ou a aba em segundo plano.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf: number | null = null;
    let half = el.scrollWidth / 2;
    const speed = 0.5; // px por frame

    const step = () => {
      if (el && !pausedRef.current) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };

    const resizeObserver = new ResizeObserver(() => {
      half = el.scrollWidth / 2;
    });
    resizeObserver.observe(el);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && raf === null) {
        raf = requestAnimationFrame(step);
      } else if (!entry.isIntersecting && raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    });
    intersectionObserver.observe(el);

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  const nudge = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    const children = Array.from(el.children) as HTMLElement[];

    // Mantém a posição na primeira metade e garante espaço para rolar
    // nos dois sentidos, pulando para a cópia idêntica (invisível).
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    if (dir < 0 && el.scrollLeft < el.clientWidth) el.scrollLeft += half;

    // Como os cards têm larguras diferentes (logos com proporções distintas),
    // localizamos o próximo/anterior card real pelo seu centro em vez de usar
    // um deslocamento fixo em px, e centralizamos ele na viewport do carrossel.
    const center = el.scrollLeft + el.clientWidth / 2;
    const eps = 1;
    const target =
      dir > 0
        ? children.find((c) => c.offsetLeft + c.offsetWidth / 2 > center + eps)
        : [...children].reverse().find((c) => c.offsetLeft + c.offsetWidth / 2 < center - eps);

    if (!target) return;

    const destination = target.offsetLeft + target.offsetWidth / 2 - el.clientWidth / 2;
    el.scrollBy({ left: destination - el.scrollLeft, behavior: "smooth" });
  };

  return (
    <section
      className="cv-auto bg-light-bg dark:bg-dark-steel py-16 overflow-hidden"
      aria-labelledby={showTitle ? "clientes-titulo" : undefined}
      aria-label={showTitle ? undefined : "Empresas que confiam na MontSteel"}
    >
      {showTitle && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <h2
              id="clientes-titulo"
              className="text-3xl font-black uppercase text-dark-steel dark:text-white font-display"
            >
              EMPRESAS QUE CONFIAM NA MONTSTEEL
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-[#94A3B8]">
              Soluções para os maiores players da indústria nacional
            </p>
          </Reveal>
        </div>
      )}

      {/* Carrossel */}
      <div
        className="relative"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Fades laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-light-bg dark:from-dark-steel to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-light-bg dark:from-dark-steel to-transparent" aria-hidden="true" />

        {/* Setas */}
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Logos anteriores"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-mid/90 border border-slate-200 dark:border-dark-border text-dark-steel dark:text-white flex items-center justify-center shadow-lg hover:bg-montsteel-blue hover:border-montsteel-blue transition-colors"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Próximos logos"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-dark-mid/90 border border-slate-200 dark:border-dark-border text-dark-steel dark:text-white flex items-center justify-center shadow-lg hover:bg-montsteel-blue hover:border-montsteel-blue transition-colors"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>

        <div
          ref={trackRef}
          className="no-scrollbar flex items-center gap-6 overflow-x-auto px-14"
        >
          {loop.map((client, i) => (
            <div
              key={`${client.file}-${i}`}
              className={`shrink-0 rounded-xl px-8 py-5 flex items-center justify-center border shadow-sm ${
                client.dark ? "bg-dark-steel border-dark-border" : "bg-white border-slate-200 dark:border-dark-border"
              }`}
              aria-hidden={i >= clients.length}
            >
              <Image
                src={`/images/clients/${client.file}`}
                alt={client.name}
                width={160}
                height={80}
                quality={50}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
