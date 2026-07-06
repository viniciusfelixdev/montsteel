"use client";

import { Barlow_Condensed, Inter } from "next/font/google";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

// Captura erros que acontecem no próprio layout raiz. Como substitui o
// layout inteiro, precisa renderizar suas próprias tags <html> e <body>.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A1A1A",
          color: "#fff",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <p className={barlowCondensed.className} style={{ fontSize: 64, fontWeight: 800, color: "#CC8000", margin: 0 }}>OPS</p>
          <h1 className={barlowCondensed.className} style={{ fontSize: 26, textTransform: "uppercase", marginTop: 8 }}>
            Algo deu errado
          </h1>
          <p style={{ color: "#94A3B8", lineHeight: 1.6, marginBottom: 28 }}>
            Encontramos um problema inesperado. Tente recarregar a página.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: "12px 28px",
              background: "#FFA500",
              color: "#1A1A1A",
              fontWeight: 700,
              textTransform: "uppercase",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            Tentar novamente
          </button>
        </div>
      </body>
    </html>
  );
}
