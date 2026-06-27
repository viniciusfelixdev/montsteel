"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CalendarClock, Warehouse, LayoutGrid, ShieldCheck } from "lucide-react";

const stats = [
  { value: "+25", label: "Anos de mercado", Icon: CalendarClock },
  { value: "+75.000", label: "m² instalados", Icon: Warehouse },
  { value: "12", label: "Segmentos atendidos", Icon: LayoutGrid },
  { value: "100%", label: "Conforme ABNT", Icon: ShieldCheck },
];

function parseValue(value: string) {
  return {
    prefix: value.startsWith("+") ? "+" : "",
    suffix: value.endsWith("%") ? "%" : "",
    numeric: parseInt(value.replace(/\D/g, ""), 10) || 0,
  };
}

function StatValue({ value }: { value: string }) {
  const { prefix, suffix, numeric } = parseValue(value);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce) {
      setCount(numeric);
      return;
    }
    if (!inView) return;

    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, reduce]);

  return (
    <div
      ref={ref}
      className="text-4xl sm:text-5xl font-black text-white mb-1.5"
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      aria-label={`${prefix}${numeric.toLocaleString("pt-BR")}${suffix}`}
    >
      <span aria-hidden="true">
        {prefix}
        {count.toLocaleString("pt-BR")}
        {suffix}
      </span>
    </div>
  );
}

export default function StatsGrid() {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-2 divide-x divide-y divide-dark-border border-y border-dark-border">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="flex flex-col items-center text-center px-6 py-10"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
        >
          <stat.Icon
            className="w-8 h-8 text-cobersteel-blue mb-4"
            strokeWidth={1.25}
            aria-hidden="true"
          />
          <StatValue value={stat.value} />
          <p className="text-sm text-[#94A3B8]">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
