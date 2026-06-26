import { CONTACT_INFO } from "@/lib/constants";
import { SITE_URL } from "@/lib/site";

/**
 * Dados estruturados (JSON-LD) — ajuda o Google a entender a empresa
 * para SEO local (endereço, telefone, horário, redes).
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "CoberSteel",
    description:
      "Galpões e coberturas industriais para locação e venda. Projetos conforme normas ABNT, com mais de 25 anos de experiência.",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/opengraph-image`,
    email: CONTACT_INFO.email,
    telephone: "+551621200477",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Júlio Gonzaga, 317 - Distrito Industrial Antonio Guaraty",
      addressLocality: "Ibaté",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: "BR",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [CONTACT_INFO.instagram, CONTACT_INFO.youtube],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
