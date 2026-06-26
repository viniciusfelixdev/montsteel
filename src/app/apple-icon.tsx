import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F1923",
        }}
      >
        <svg width="130" height="130" viewBox="0 0 64 64">
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="11,21 32,46 53,21" stroke="#5C88B5" strokeWidth="7.5" />
            <polyline points="21,19 32,34 43,19" stroke="#D7A03B" strokeWidth="6.5" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
