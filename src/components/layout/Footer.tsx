import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { CONTACT_INFO, COMPANY_INFO, PRODUCTS, SEGMENTS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="cv-auto-tall bg-light-bg dark:bg-dark-steel border-t border-slate-200 dark:border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Coluna 1 — Marca */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="MontSteel — Início">
              <Image
                src="/logo-escura.svg"
                alt="MontSteel"
                width={66}
                height={40}
                className="mb-4 dark:hidden"
              />
              <Image
                src="/logo-branca.svg"
                alt="MontSteel"
                width={66}
                height={40}
                className="mb-4 hidden dark:block"
              />
            </Link>
            <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed mb-6">
              Infraestrutura industrial flexível. Galpões e coberturas para locação e venda em todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da MontSteel"
                className="w-11 h-11 rounded-lg bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-600 dark:text-[#94A3B8] hover:text-montsteel-gold hover:border-montsteel-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href={CONTACT_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da MontSteel"
                className="w-11 h-11 rounded-lg bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-600 dark:text-[#94A3B8] hover:text-montsteel-gold hover:border-montsteel-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da MontSteel"
                className="w-11 h-11 rounded-lg bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-600 dark:text-[#94A3B8] hover:text-montsteel-gold hover:border-montsteel-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da MontSteel"
                className="w-11 h-11 rounded-lg bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border flex items-center justify-center text-slate-600 dark:text-[#94A3B8] hover:text-montsteel-gold hover:border-montsteel-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03H7.898v-2.909h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.475h-1.26c-1.243 0-1.63.775-1.63 1.57v1.889h2.773l-.443 2.909h-2.33V22c4.781-.755 8.437-4.917 8.437-9.939z"/>
                </svg>
              </a>
            </div>
            <div className="mt-3 flex gap-3">
              <a
                href="https://abnt.org.br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Projetos desenvolvidos conforme normas ABNT — visitar site da ABNT"
                title="Projetos conforme normas ABNT"
                className="inline-flex w-11 h-11 rounded-lg bg-white/90 items-center justify-center hover:bg-white transition-colors"
              >
                <Image
                  src="/images/normas/abnt-logo-blue.png"
                  alt="ABNT"
                  width={24}
                  height={24}
                  className="w-5 h-5 object-contain"
                />
              </a>
              <a
                href="https://www.corpodebombeiros.sp.gov.br/#/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Corpo de Bombeiros de São Paulo"
                title="Corpo de Bombeiros de São Paulo"
                className="inline-flex w-11 h-11 rounded-lg bg-white/90 items-center justify-center overflow-hidden hover:bg-white transition-colors"
              >
                <Image
                  src="/images/Brasao-CB.svg"
                  alt="Corpo de Bombeiros de São Paulo"
                  width={24}
                  height={24}
                  className="w-7 h-7 object-contain scale-125"
                />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Empresa */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-amber-800 dark:text-montsteel-gold mb-4 font-display"
            >
              Empresa
            </h3>
            <ul className="space-y-0">
              <li>
                <Link href="/institucional/quem-somos" className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/institucional/portfolio" className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/institucional/normas-abnt" className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors">
                  Normas ABNT
                </Link>
              </li>
              <li>
                <Link href="/institucional/trabalhe-conosco" className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="/institucional/fornecedores" className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors">
                  Seja um Fornecedor
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/institucional/privacidade" className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/institucional/termos-de-uso" className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Produtos */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-amber-800 dark:text-montsteel-gold mb-4 font-display"
            >
              Produtos
            </h3>
            <ul className="space-y-0">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/produtos/${p.slug}`}
                    className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicos" className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors">
                  Serviços e Manutenções
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Segmentos (primeiros 6) */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-amber-800 dark:text-montsteel-gold mb-4 font-display"
            >
              Segmentos
            </h3>
            <ul className="space-y-0">
              {SEGMENTS.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/segmentos/${s.slug}`}
                    className="block py-2.5 text-sm text-slate-600 dark:text-[#94A3B8] hover:text-dark-steel dark:hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Contato */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-amber-800 dark:text-montsteel-gold mb-4 font-display"
            >
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-sm text-slate-600 dark:text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-montsteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-2.5 text-sm text-slate-600 dark:text-[#94A3B8]">
                <Clock className="w-4 h-4 text-montsteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
              <li className="flex gap-2.5 text-sm text-slate-600 dark:text-[#94A3B8]">
                <Phone className="w-4 h-4 text-montsteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <a href={`tel:${CONTACT_INFO.phone1.replace(/\D/g, "")}`} className="hover:text-dark-steel dark:hover:text-white transition-colors block py-2.5">
                    {CONTACT_INFO.phone1}
                  </a>
                  <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-dark-steel dark:hover:text-white transition-colors block py-2.5">
                    {CONTACT_INFO.whatsapp} (WhatsApp)
                  </a>
                </div>
              </li>
              <li className="flex gap-2.5 text-sm text-slate-600 dark:text-[#94A3B8]">
                <Mail className="w-4 h-4 text-montsteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-dark-steel dark:hover:text-white transition-colors inline-block py-2.5">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 dark:text-[#94A3B8]">
            © {year} {COMPANY_INFO.razaoSocial} — CNPJ {COMPANY_INFO.cnpj}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/institucional/privacidade"
              className="text-xs font-semibold text-slate-600 dark:text-[#94A3B8] hover:text-montsteel-blue transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/institucional/termos-de-uso"
              className="text-xs font-semibold text-slate-600 dark:text-[#94A3B8] hover:text-montsteel-blue transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
