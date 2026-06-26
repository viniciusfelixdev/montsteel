import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CoberSteel — Galpões e Coberturas Industriais",
    short_name: "CoberSteel",
    description:
      "Galpões e coberturas industriais para locação e venda. Projetos conforme normas ABNT.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F1923",
    theme_color: "#0F1923",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any", purpose: "any" },
      { src: "/apple-icon", type: "image/png", sizes: "180x180" },
    ],
  };
}
