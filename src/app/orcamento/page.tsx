import type { Metadata } from "next";
import OrcamentoForm from "./OrcamentoForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solicitar Orçamento | CoberSteel — Galpões e Coberturas Industriais",
  description:
    "Solicite um orçamento gratuito para galpões de lona, metálicos, híbridos, mezaninos e projetos especiais. Fale com nossos especialistas.",
  alternates: { canonical: "/orcamento" },
};

const contactItems = [
  {
    icon: MapPin,
    label: "Endereço",
    value: CONTACT_INFO.address,
    href: undefined,
  },
  {
    icon: Clock,
    label: "Horário de Atendimento",
    value: CONTACT_INFO.hours,
    href: undefined,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: CONTACT_INFO.phone1,
    href: `tel:${CONTACT_INFO.phone1.replace(/\D/g, "")}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT_INFO.whatsapp,
    href: CONTACT_INFO.whatsappLink,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
];

export default function OrcamentoPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/orcamento-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Fale com um especialista
          </p>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            SOLICITAR ORÇAMENTO
          </h1>
          <p className="mt-4 text-lg text-[#94A3B8] max-w-xl">
            Preencha o formulário e nossa equipe retornará em até 24 horas úteis com uma proposta personalizada.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-dark-steel py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <OrcamentoForm />
            </div>

            {/* Contact sidebar */}
            <aside>
              <div className="bg-dark-mid rounded-xl p-6 sticky top-24">
                <h2
                  className="text-xl font-bold uppercase text-white mb-6"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Informações de Contato
                </h2>
                <ul className="space-y-5">
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <item.icon
                        className="w-5 h-5 text-cobersteel-blue mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-sm text-white hover:text-cobersteel-gold transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-white">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-dark-border">
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1ebe57] transition-colors text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Falar no WhatsApp agora
                  </a>
                </div>

                <div className="mt-6 rounded-lg overflow-hidden border border-dark-border">
                  <iframe
                    title="Localização da CoberSteel no mapa"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_INFO.address)}&output=embed`}
                    width="100%"
                    height="220"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
                    allowFullScreen
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
