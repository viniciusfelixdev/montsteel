"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-[calc(6rem+var(--cookie-banner-h,0px))] right-7 z-50 w-12 h-12 bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border text-dark-steel dark:text-white rounded-full flex items-center justify-center shadow-lg hover:bg-montsteel-blue hover:border-montsteel-blue hover:text-white transition-all duration-300 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <ChevronUp className="w-6 h-6" aria-hidden="true" />
    </button>
  );
}
