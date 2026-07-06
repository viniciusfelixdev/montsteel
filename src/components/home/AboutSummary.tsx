"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutSummary() {
  return (
    <section className="bg-white dark:bg-dark-mid py-20" aria-labelledby="sobre-titulo">
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
              className="text-4xl sm:text-5xl font-black uppercase text-dark-steel dark:text-white mb-6 leading-tight font-display"
            >
              INFRAESTRUTURA INDUSTRIAL
              <br />
              <span className="text-cobersteel-blue">COM QUEM ENTENDE DO NEGÓCIO</span>
            </h2>
            <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed mb-4">
              A CoberSteel é especializada em infraestrutura industrial flexível, oferecendo galpões de lona, metálicos e híbridos para locação e venda em todo o Brasil. Construímos nossa reputação sobre três pilares: segurança estrutural, agilidade na entrega e compromisso com o cliente.
            </p>
            <p className="text-slate-600 dark:text-[#94A3B8] leading-relaxed mb-8">
              Atendemos os maiores setores da indústria nacional, do agronegócio ao petroquímico, com soluções <span className="text-dark-steel dark:text-white font-medium">desenvolvidas sob medida para você</span>, conforme normas ABNT e a realidade específica da sua operação.
            </p>
            <Link
              href="/institucional/quem-somos"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-dark-steel/30 dark:border-white/30 hover:border-dark-steel dark:hover:border-white text-dark-steel dark:text-white font-semibold text-sm rounded-lg transition-colors group"
            >
              Conheça nossa história
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/geral/cobersteel.png"
              alt="Equipe CoberSteel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
