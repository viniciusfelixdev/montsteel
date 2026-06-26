import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import Analytics from "@/components/shared/Analytics";
import CookieConsent from "@/components/shared/CookieConsent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CoberSteel | Galpões de Lona, Metálicos e Coberturas Industriais — Ibaté/SP",
  description:
    "Galpões e coberturas industriais para locação e venda. Projetos conforme normas ABNT, com mais de 25 anos de experiência. Atendemos todo o Brasil.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CoberSteel | Galpões e Coberturas Industriais",
    description:
      "Infraestrutura industrial flexível: galpões de lona, metálicos e híbridos para locação e venda.",
    type: "website",
    locale: "pt_BR",
    siteName: "CoberSteel",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "CoberSteel | Galpões e Coberturas Industriais",
    description:
      "Infraestrutura industrial flexível: galpões de lona, metálicos e híbridos para locação e venda.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-dark-steel text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cobersteel-gold focus:text-dark-steel focus:font-semibold focus:rounded"
        >
          Ir para o conteúdo principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
