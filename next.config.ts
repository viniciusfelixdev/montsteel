import type { NextConfig } from "next";

// CSP calibrada para os serviços de terceiros que o site realmente carrega:
// GA4 (gtag.js + endpoints de coleta), pixel de audiências do Google Ads
// (ga-audiences, servido em www.google.com.br para usuários no Brasil),
// Google Fonts, embed do Google Maps e imagens destacadas do WordPress
// Headless (blog). 'unsafe-inline' em script-src
// é necessário porque o projeto não usa nonces do Next.js para os scripts
// inline do Consent Mode (ga4-consent-default/ga4-init em Analytics.tsx) —
// troca consciente de uma CSP estrita por uma funcional; migrar para nonces
// removeria essa concessão caso vire prioridade no futuro.
//
// Em desenvolvimento, o Fast Refresh/HMR do Next.js (via webpack-eval-source-map
// e o runtime do React Refresh) usa eval() para os módulos, o que o console do
// React aponta como violação de CSP sem 'unsafe-eval'. Isso só é necessário no
// dev server — em produção o bundle é pré-compilado e não usa eval.
const isDev = process.env.NODE_ENV === "development";

const CSP_DIRECTIVES = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "img-src 'self' data: https://*.wordpress.com https://*.wp.com https://www.google-analytics.com https://www.google.com https://www.google.com.br",
  `connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://www.google.com${isDev ? " ws://localhost:* ws://127.0.0.1:*" : ""}`,
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  // Define a raiz do workspace para evitar a detecção incorreta de lockfile.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Next 16 só serve as qualidades explicitamente listadas aqui — sem isso,
    // um quality={65} num <Image> é ignorado e cai de volta para 75.
    qualities: [50, 65, 75],
    remotePatterns: [
      // Imagens destacadas dos posts do WordPress Headless (blog).
      { protocol: "https", hostname: "*.wordpress.com" },
      { protocol: "https", hostname: "*.wp.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: CSP_DIRECTIVES },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
