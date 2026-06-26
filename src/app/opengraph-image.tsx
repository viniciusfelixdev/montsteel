import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CoberSteel — Galpões e Coberturas Industriais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0F1923 0%, #1A2535 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Chevron / telhado — elemento signature */}
        <div style={{ display: "flex", marginBottom: 32 }}>
          <svg width="120" height="48" viewBox="0 0 120 48">
            <polygon points="0,48 60,0 120,48" fill="#D7A03B" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            color: "#5C88B5",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          CoberSteel
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#FFFFFF",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          <span>Infraestrutura que</span>
          <span>sustenta sua operação</span>
        </div>
        <div
          style={{
            display: "flex",
            color: "#94A3B8",
            fontSize: 30,
            marginTop: 28,
          }}
        >
          Galpões e coberturas industriais · Locação e venda · Normas ABNT
        </div>
      </div>
    ),
    { ...size }
  );
}
