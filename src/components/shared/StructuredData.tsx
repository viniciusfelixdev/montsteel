import { CONTACT_INFO, COMPANY_INFO } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

/**
 * Dados estruturados (JSON-LD) — ajuda o Google a entender a empresa
 * para SEO local (endereço, telefone, horário, redes).
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "MontSteel",
    legalName: COMPANY_INFO.razaoSocial,
    foundingDate: COMPANY_INFO.fundacao,
    taxID: COMPANY_INFO.cnpj,
    description:
      "Galpões e coberturas industriais para locação e venda. Projetos conforme normas ABNT.",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/opengraph-image`,
    email: CONTACT_INFO.email,
    telephone: "+" + CONTACT_INFO.whatsappLink.replace("https://wa.me/", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Prolongamento Júlio Gonzaga, nº 317 - Barracão Industrial - Parque Industrial Antônio Guará",
      addressLocality: "Ibaté",
      addressRegion: "SP",
      postalCode: "14817-474",
      addressCountry: "BR",
    },
    areaServed: "BR",
    sameAs: [CONTACT_INFO.instagram, CONTACT_INFO.youtube],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
