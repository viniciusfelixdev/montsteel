import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowLeft } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

// react-hook-form + zod só são necessários nesta rota: code-split evita que
// esse peso vá para o chunk compartilhado carregado por todas as páginas.
const OrcamentoForm = dynamic(() => import("./OrcamentoForm"));

export const metadata: Metadata = {
  title: "Solicitar Orçamento | MontSteel — Galpões e Coberturas Industriais",
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
            backgroundImage: "url('/images/orcamento-banner.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/75" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Orçamento" }]} />
          <Link
            href="/"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2.5 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Início
          </Link>
          <h1
            className="text-5xl sm:text-6xl font-black uppercase tracking-tight text-white font-display"
          >
            SOLICITAR ORÇAMENTO
          </h1>
          <p className="mt-4 text-lg text-[#94A3B8] max-w-xl">
            Preencha o formulário e nossa equipe retornará em até 24 horas úteis com uma proposta personalizada.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-light-bg dark:bg-dark-steel py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={null}>
                <OrcamentoForm />
              </Suspense>
            </div>

            {/* Contact sidebar */}
            <aside>
              <div className="bg-white dark:bg-dark-mid rounded-xl p-6 sticky top-24">
                <h2
                  className="text-xl font-bold uppercase text-dark-steel dark:text-white mb-6 font-display"
                >
                  Informações de Contato
                </h2>
                <ul className="space-y-5">
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <item.icon
                        className="w-5 h-5 text-montsteel-blue mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs text-slate-600 dark:text-[#94A3B8] uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-block py-2.5 -my-2.5 text-sm text-dark-steel dark:text-white hover:text-montsteel-gold transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-dark-steel dark:text-white">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-dark-border">
                  <a
                    href={CONTACT_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-8 py-3 bg-dark-steel/10 dark:bg-white/10 text-dark-steel dark:text-white font-bold text-sm uppercase rounded-lg hover:bg-dark-steel dark:hover:bg-white hover:text-white dark:hover:text-montsteel-blue transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Falar no WhatsApp agora
                  </a>
                </div>

                <div className="mt-6 rounded-lg overflow-hidden border border-slate-200 dark:border-dark-border">
                  <iframe
                    title="Localização da MontSteel no mapa"
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
