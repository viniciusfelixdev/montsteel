"use client";

import dynamic from "next/dynamic";

// Nenhum dos dois tem valor de SSR (WhatsApp é só um link fixo; CookieConsent
// só decide se renderiza depois de ler o localStorage no cliente) — carregar
// o chunk de cada um sob demanda no cliente tira ambos do bundle inicial que
// roda em toda página do site.
const WhatsAppButton = dynamic(() => import("./WhatsAppButton"), { ssr: false });
const CookieConsent = dynamic(() => import("./CookieConsent"), { ssr: false });

export default function DeferredWidgets() {
  return (
    <>
      <WhatsAppButton />
      <CookieConsent />
    </>
  );
}
