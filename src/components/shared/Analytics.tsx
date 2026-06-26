"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { CONSENT_KEY, CONSENT_EVENT } from "./CookieConsent";

/**
 * Google Analytics 4 com consentimento (LGPD).
 * Só carrega os scripts após o usuário aceitar os cookies E se
 * NEXT_PUBLIC_GA_ID estiver definido.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const read = () => setConsented(localStorage.getItem(CONSENT_KEY) === "accepted");
    read();
    window.addEventListener(CONSENT_EVENT, read);
    return () => window.removeEventListener(CONSENT_EVENT, read);
  }, []);

  if (!gaId || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
