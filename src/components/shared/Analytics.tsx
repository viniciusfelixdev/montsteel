"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_KEY, CONSENT_EVENT } from "./CookieConsent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/** Dispara evento de clique em botão personalizado no GA4. */
export function trackButtonClick(buttonName: string, location: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "clique_botao_personalizado", {
    button_name: buttonName,
    button_location: location,
  });
}

/** Dispara evento de envio de formulário com sucesso no GA4. */
export function trackFormSubmit(formName: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "envio_formulario_sucesso", { form_name: formName });
}

/**
 * Google Analytics 4 com Consent Mode v2 (LGPD).
 *
 * O script do gtag é sempre carregado (necessário para o Consent Mode funcionar),
 * mas com `analytics_storage: 'denied'` por padrão — nenhum cookie é gravado e
 * nenhuma métrica de usuário é registrada até o consentimento ser concedido.
 * Ao aceitar o banner de cookies, disparamos `gtag('consent', 'update', ...)`
 * liberando o rastreamento normalmente.
 *
 * Também dispara `page_view` manualmente a cada navegação client-side, já que
 * o App Router não recarrega a página (o `gtag('config', ...)` inicial só
 * captura a primeira visualização).
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Aplica o consentimento salvo sempre que o usuário decide no banner.
  useEffect(() => {
    if (!gaId) return;

    const applyConsent = () => {
      if (typeof window.gtag !== "function") return;
      const granted = localStorage.getItem(CONSENT_KEY) === "accepted";
      window.gtag("consent", "update", {
        analytics_storage: granted ? "granted" : "denied",
      });
    };

    applyConsent();
    window.addEventListener(CONSENT_EVENT, applyConsent);
    return () => window.removeEventListener(CONSENT_EVENT, applyConsent);
  }, [gaId]);

  // Envia page_view a cada troca de rota (navegação client-side do App Router).
  // A primeira visualização já é enviada pelo script "ga4-init" — aqui só as trocas seguintes.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!gaId || typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [gaId, pathname]);

  if (!gaId) return null;

  return (
    <>
      {/* Consent default: precisa rodar antes do gtag.js carregar. */}
      <Script id="ga4-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ window.dataLayer.push(arguments); }
          window.gtag = gtag;
          var granted = localStorage.getItem('${CONSENT_KEY}') === 'accepted';
          gtag('consent', 'default', {
            analytics_storage: granted ? 'granted' : 'denied'
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true, send_page_view: false });
          gtag('event', 'page_view', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
