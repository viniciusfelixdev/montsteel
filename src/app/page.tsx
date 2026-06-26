import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProductsOverview from "@/components/home/ProductsOverview";
import SectionDivider from "@/components/shared/SectionDivider";
import NumbersSection from "@/components/home/NumbersSection";
import SegmentsGrid from "@/components/home/SegmentsGrid";
import ClientLogos from "@/components/home/ClientLogos";
import AboutSummary from "@/components/home/AboutSummary";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CoberSteel | Galpões de Lona, Metálicos e Coberturas Industriais — Ibaté/SP",
  description:
    "Galpões e coberturas industriais para locação e venda. Mais de 25 anos de experiência. Projetos conforme normas ABNT. Atendemos todo o Brasil.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsOverview />

      <SectionDivider fromColor="#0F0F0F" toColor="#1A1A1A" />
      <NumbersSection />
      <SectionDivider fromColor="#1A1A1A" toColor="#F4F4F4" />

      <SegmentsGrid />

      <SectionDivider fromColor="#F4F4F4" toColor="#0F0F0F" />
      <ClientLogos />
      <AboutSummary />

      {/* CTA Final */}
      <section className="bg-cobersteel-blue py-20" aria-labelledby="cta-titulo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-titulo"
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            PRONTO PARA ESCALAR
            <br />
            SUA OPERAÇÃO?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Fale com nossos especialistas e receba um projeto desenvolvido sob medida para você.
          </p>
          <Link
            href="/orcamento"
            className="inline-flex items-center justify-center px-10 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase tracking-wide rounded hover:bg-amber-400 transition-colors"
          >
            Solicitar Orçamento Gratuito
          </Link>
        </div>
      </section>

    </>
  );
}
