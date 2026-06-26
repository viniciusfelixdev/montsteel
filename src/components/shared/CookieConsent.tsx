"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export const CONSENT_KEY = "cobersteel-cookie-consent";
export const CONSENT_EVENT = "cobersteel-consent-changed";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Só mostra se o usuário ainda não escolheu.
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function decide(choice: "accepted" | "rejected") {
    localStorage.setItem(CONSENT_KEY, choice);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-4 inset-x-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-dark-mid border border-dark-border rounded-xl shadow-2xl p-5"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-cobersteel-gold/15 border border-cobersteel-gold/30 flex items-center justify-center flex-shrink-0">
          <Cookie className="w-5 h-5 text-cobersteel-gold" aria-hidden="true" />
        </div>
        <div>
          <h2
            className="text-sm font-black uppercase text-white mb-1"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Sua privacidade
          </h2>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Usamos cookies para analisar o tráfego e melhorar sua experiência. Você pode aceitar ou recusar os cookies de análise. Saiba mais na nossa{" "}
            <Link href="/institucional/privacidade" className="text-cobersteel-blue hover:underline">
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
        <button
          onClick={() => decide("rejected")}
          aria-label="Fechar e recusar"
          className="text-[#94A3B8] hover:text-white transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => decide("rejected")}
          className="flex-1 py-2.5 text-xs font-bold uppercase tracking-wide text-white border border-white/25 hover:border-white rounded-lg transition-colors"
        >
          Recusar
        </button>
        <button
          onClick={() => decide("accepted")}
          className="flex-1 py-2.5 text-xs font-bold uppercase tracking-wide bg-cobersteel-gold text-dark-steel hover:bg-amber-400 rounded-lg transition-colors"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
