"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const diferenciais = [
  { icon: Clock, text: "Mais de 25 anos de experiência no mercado" },
  { icon: ShieldCheck, text: "Projetos calculados conforme normas ABNT" },
  { icon: Award, text: "Cada projeto desenvolvido sob medida para você" },
  { icon: Users, text: "Equipe especializada em todo o Brasil" },
];

export default function AboutSummary() {
  return (
    <section className="bg-dark-mid border-t border-dark-border py-20" aria-labelledby="sobre-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Sobre Nós
            </p>
            <h2
              id="sobre-titulo"
              className="text-4xl sm:text-5xl font-black uppercase text-white mb-6 leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              INFRAESTRUTURA INDUSTRIAL
              <br />
              <span className="text-cobersteel-blue">COM QUEM ENTENDE DO NEGÓCIO</span>
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-4">
              A CoberSteel é especializada em infraestrutura industrial flexível, oferecendo galpões de lona, metálicos e híbridos para locação e venda em todo o Brasil. Fundada há mais de 25 anos, construímos nossa reputação sobre três pilares: segurança estrutural, agilidade na entrega e compromisso com o cliente.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-8">
              Atendemos os maiores setores da indústria nacional — do agronegócio ao petroquímico — com soluções <span className="text-white font-medium">desenvolvidas sob medida para você</span>, conforme normas ABNT e a realidade específica da sua operação.
            </p>
            <Link
              href="/institucional/quem-somos"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 hover:border-white text-white font-semibold text-sm rounded-lg transition-colors group"
            >
              Conheça nossa história
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* Diferenciais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {diferenciais.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4 items-start p-5 bg-dark-steel border border-dark-border rounded-xl"
              >
                <item.icon className="w-6 h-6 text-cobersteel-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-white leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
