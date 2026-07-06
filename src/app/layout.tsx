import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

// Fontes self-hosted via next/font: elimina o @import render-blocking do Google Fonts
// e usa fallback com métricas ajustadas automaticamente, reduzindo o CLS causado pela
// troca de fonte (crítico aqui porque Barlow Condensed aparece em headings de até 96px).
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DeferredWidgets from "@/components/shared/DeferredWidgets";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Analytics from "@/components/shared/Analytics";
import StructuredData from "@/components/shared/StructuredData";
import ThemeProvider from "@/components/shared/ThemeProvider";
import { SITE_URL } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" },
    { media: "(prefers-color-scheme: light)", color: "#F8F8F8" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MontSteel | Galpões de Lona, Metálicos e Coberturas Industriais — Ibaté/SP",
  description:
    "Galpões e coberturas industriais para locação e venda. Projetos conforme normas ABNT. Atendemos todo o Brasil.",
  openGraph: {
    title: "MontSteel | Galpões e Coberturas Industriais",
    description:
      "Infraestrutura industrial flexível: galpões de lona, metálicos e híbridos para locação e venda.",
    type: "website",
    locale: "pt_BR",
    siteName: "MontSteel",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "MontSteel | Galpões e Coberturas Industriais",
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
    <html
      lang="pt-BR"
      className={`h-full antialiased ${barlowCondensed.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-light-bg dark:bg-dark-steel text-dark-steel dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-montsteel-gold focus:text-dark-steel focus:font-semibold focus:rounded"
          >
            Ir para o conteúdo principal
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <DeferredWidgets />
          <ScrollToTop />
          <Analytics />
          <StructuredData />
        </ThemeProvider>
      </body>
    </html>
  );
}
