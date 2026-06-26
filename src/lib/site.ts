/** URL pública canônica do site (sem barra final). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.cobersteel.com.br"
).replace(/\/$/, "");
