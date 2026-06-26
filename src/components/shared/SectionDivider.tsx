"use client";

interface SectionDividerProps {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
}

export default function SectionDivider({
  fromColor = "#0F0F0F",
  toColor = "#F4F4F4",
  flip = false,
}: SectionDividerProps) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ backgroundColor: fromColor, lineHeight: 0 }}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="w-full h-12"
        style={{ transform: flip ? "scaleY(-1)" : "none" }}
        aria-hidden="true"
      >
        <polygon points="0,48 720,0 1440,48" fill={toColor} />
      </svg>
    </div>
  );
}
