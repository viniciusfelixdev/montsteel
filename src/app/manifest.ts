import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MontSteel — Galpões e Coberturas Industriais",
    short_name: "MontSteel",
    description:
      "Galpões e coberturas industriais para locação e venda. Projetos conforme normas ABNT.",
    start_url: "/",
    display: "standalone",
    background_color: "#1A1A1A",
    theme_color: "#1A1A1A",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
