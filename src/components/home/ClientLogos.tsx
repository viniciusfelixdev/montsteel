"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "ArcelorMittal", file: "arcelor.png" },
  { name: "Heineken", file: "heineken.png" },
  { name: "Usina Furlan", file: "usina furlan.png" },
];

export default function ClientLogos() {
  return (
    <section className="bg-dark-steel py-16" aria-labelledby="clientes-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2
            id="clientes-titulo"
            className="text-3xl font-black uppercase text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            EMPRESAS QUE CONFIAM NA COBERSTEEL
          </h2>
          <p className="mt-3 text-sm text-[#94A3B8]">
            Mais de 25 anos entregando soluções para os maiores players da indústria nacional
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl px-8 py-5 flex items-center justify-center"
            >
              <Image
                src={`/images/clients/${client.file}`}
                alt={client.name}
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
