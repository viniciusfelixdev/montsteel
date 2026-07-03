"use client";

import { motion } from "framer-motion";
import { Shield, Zap, DollarSign, Leaf } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Normas ABNT",
    desc: "Projetos calculados conforme normas nacionais e internacionais",
  },
  {
    icon: Zap,
    title: "Montagem Ágil",
    desc: "Instalação rápida com mão de obra especializada",
  },
  {
    icon: DollarSign,
    title: "Projetos Sob Medida",
    desc: "Cada projeto é desenvolvido sob medida para você — nenhuma solução é igual à outra",
  },
  {
    icon: Leaf,
    title: "Responsabilidade ESG",
    desc: "Economia Circular e compromisso socioambiental",
  },
];

export default function AdvantagesBanner() {
  return (
    <section className="bg-dark-mid border-y border-dark-border" aria-label="Vantagens">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cobersteel-blue/20 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-cobersteel-blue" aria-hidden="true" />
              </div>
              <div>
                <h3
                  className="font-bold text-white text-sm uppercase tracking-wide mb-1 font-display"
                >
                  {item.title}
                </h3>
                <p className="text-[16px] text-[#94A3B8] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
