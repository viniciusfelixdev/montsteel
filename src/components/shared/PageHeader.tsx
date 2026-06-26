import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative bg-dark-mid pt-32 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #5C88B5 0, #5C88B5 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
