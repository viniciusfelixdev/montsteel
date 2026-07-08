"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export const CONSENT_KEY = "montsteel-cookie-consent";
export const CONSENT_EVENT = "montsteel-consent-changed";
// Nome da custom property lida por WhatsAppButton/ScrollToTop para se
// empurrarem para cima enquanto o banner ocupa o canto inferior da tela.
const BANNER_OFFSET_VAR = "--cookie-banner-h";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lido só no efeito (não no initializer do useState) de propósito: localStorage
    // não existe durante a renderização no servidor, e ler aqui evita divergência
    // de hidratação entre o HTML do servidor e o primeiro render no cliente.
    const stored = localStorage.getItem(CONSENT_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!stored) setVisible(true);
  }, []);

  // Publica a altura real do banner numa custom property no <html> enquanto ele
  // está visível, para que o botão de WhatsApp e o de voltar ao topo — ambos
  // fixos no canto inferior — subam o suficiente para não ficarem cobertos.
  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.style.removeProperty(BANNER_OFFSET_VAR);
      return;
    }
    const el = bannerRef.current;
    if (!el) return;
    const update = () => {
      root.style.setProperty(BANNER_OFFSET_VAR, `${el.offsetHeight + 12}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      ro.disconnect();
      root.style.removeProperty(BANNER_OFFSET_VAR);
    };
  }, [visible]);

  function decide(choice: "accepted" | "rejected") {
    localStorage.setItem(CONSENT_KEY, choice);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-4 inset-x-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border rounded-xl shadow-2xl p-5"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-montsteel-gold/15 border border-montsteel-gold/30 flex items-center justify-center flex-shrink-0">
          <Cookie className="w-5 h-5 text-montsteel-gold" aria-hidden="true" />
        </div>
        <div>
          <h2
            className="text-sm font-black uppercase text-dark-steel dark:text-white mb-1 font-display"
          >
            Sua privacidade
          </h2>
          <p className="text-xs text-slate-600 dark:text-[#94A3B8] leading-relaxed">
            Usamos cookies para analisar o tráfego e melhorar sua experiência. Você pode aceitar ou recusar os cookies de análise. Saiba mais na nossa{" "}
            <Link href="/institucional/privacidade" className="text-[#96600A] dark:text-montsteel-blue underline underline-offset-2">
              Privacidade
            </Link>
            .
          </p>
        </div>
        <button
          onClick={() => decide("rejected")}
          aria-label="Fechar e recusar"
          className="flex items-center justify-center w-11 h-11 -mt-2.5 -mr-2.5 text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => decide("rejected")}
          className="flex-1 py-3.5 text-xs font-bold uppercase tracking-wide text-dark-steel dark:text-white border border-dark-steel/25 dark:border-white/25 hover:border-dark-steel dark:hover:border-white rounded-lg transition-colors"
        >
          Recusar
        </button>
        <button
          onClick={() => decide("accepted")}
          className="flex-1 py-3.5 text-xs font-bold uppercase tracking-wide bg-montsteel-gold text-dark-steel hover:bg-amber-400 rounded-lg transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
