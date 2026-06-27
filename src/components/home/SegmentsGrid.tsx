"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wheat, UtensilsCrossed, Car, Building2, Factory, Mountain,
  FileText, Flame, Anchor, Layers, Leaf, ShoppingCart,
} from "lucide-react";
import { SEGMENTS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: "true" }>> = {
  Wheat, UtensilsCrossed, Car, Building2, Factory, Mountain,
  FileText, Flame, Anchor, Layers, Leaf, ShoppingCart,
};

export default function SegmentsGrid() {
  return (
    <section
      className="bg-light-bg py-20"
      aria-labelledby="segmentos-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p
            className="text-cobersteel-blue text-xs font-semibold uppercase tracking-widest mb-3"
          >
            Presença Nacional
          </p>
          <h2
            id="segmentos-titulo"
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-dark-steel"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            ATENDEMOS OS PRINCIPAIS SETORES
            <br />
            DA INDÚSTRIA
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {SEGMENTS.map((seg, i) => {
            const Icon = iconMap[seg.icon] || Factory;
            return (
              <motion.div
                key={seg.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/segmentos/${seg.slug}`}
                  className="group flex flex-col items-center gap-3 p-5 bg-white rounded-xl hover:shadow-md transition-all text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-cobersteel-blue/10 flex items-center justify-center group-hover:bg-cobersteel-blue transition-colors">
                    <Icon
                      className="w-6 h-6 text-cobersteel-blue group-hover:text-white transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className="text-sm font-bold uppercase text-dark-steel group-hover:text-cobersteel-blue transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {seg.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
