import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import ProductsOverview from "@/components/home/ProductsOverview";
import TrackedLink from "@/components/shared/TrackedLink";

// Seções abaixo da dobra: mantidas fora do bundle inicial da home (ssr:true
// preserva o conteúdo no HTML para SEO, só o JS de animação carrega sob demanda).
const sectionSkeleton = <div className="h-96" aria-hidden="true" />;
const NumbersSection = dynamic(() => import("@/components/home/NumbersSection"), {
  loading: () => sectionSkeleton,
});
const SegmentsGrid = dynamic(() => import("@/components/home/SegmentsGrid"), {
  loading: () => sectionSkeleton,
});
const ClientLogos = dynamic(() => import("@/components/home/ClientLogos"), {
  loading: () => sectionSkeleton,
});
const AboutSummary = dynamic(() => import("@/components/home/AboutSummary"), {
  loading: () => sectionSkeleton,
});

export const metadata: Metadata = {
  title: "CoberSteel | Galpões de Lona, Metálicos e Coberturas Industriais — Ibaté/SP",
  description:
    "Galpões e coberturas industriais para locação e venda. Mais de 25 anos de experiência. Projetos conforme normas ABNT. Atendemos todo o Brasil.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsOverview />

      <NumbersSection />

      <SegmentsGrid />

      <ClientLogos />

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-dark-steel to-[#101E30] py-20" aria-labelledby="cta-titulo">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-titulo"
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-display"
          >
            PRONTO PARA ESCALAR
            <br />
            SUA OPERAÇÃO?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Fale com nossos especialistas e receba um projeto desenvolvido sob medida para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              href="/orcamento"
              trackName="solicitar_orcamento_gratuito"
              trackLocation="home_cta_final"
              className="inline-flex items-center justify-center px-10 py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase tracking-wide rounded hover:bg-amber-400 transition-colors"
            >
              Solicitar Orçamento Gratuito
            </TrackedLink>
            <a
              href="https://wa.me/5516997977613"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-wide rounded hover:bg-white hover:text-cobersteel-blue transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <AboutSummary />

    </>
  );
}
