import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { CONTACT_INFO, PRODUCTS, SEGMENTS, BLOG_URL } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-steel border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Coluna 1 — Marca */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="CoberSteel — Início">
              <Image
                src="/logo-branca.svg"
                alt="CoberSteel"
                width={160}
                height={40}
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Infraestrutura industrial flexível com mais de 25 anos de experiência. Galpões e coberturas para locação e venda em todo o Brasil.
            </p>
            <div className="flex gap-3">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da CoberSteel"
                className="w-9 h-9 rounded-lg bg-dark-mid border border-dark-border flex items-center justify-center text-[#94A3B8] hover:text-cobersteel-gold hover:border-cobersteel-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href={CONTACT_INFO.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da CoberSteel"
                className="w-9 h-9 rounded-lg bg-dark-mid border border-dark-border flex items-center justify-center text-[#94A3B8] hover:text-cobersteel-gold hover:border-cobersteel-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2 — Empresa */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-cobersteel-gold mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Empresa
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/institucional/quem-somos" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/institucional/portfolio" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/institucional/normas-abnt" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  Normas ABNT
                </Link>
              </li>
              <li>
                <Link href="/institucional/trabalhe-conosco" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="/institucional/fornecedores" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  Seja um Fornecedor
                </Link>
              </li>
              <li>
                <a
                  href={BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link href="/institucional/privacidade" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Produtos */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-cobersteel-gold mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Produtos
            </h3>
            <ul className="space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/produtos/${p.slug}`}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicos" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  Serviços e Manutenções
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Segmentos (primeiros 6) */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-cobersteel-gold mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Segmentos
            </h3>
            <ul className="space-y-2">
              {SEGMENTS.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/segmentos/${s.slug}`}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
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
              className="text-sm font-bold uppercase tracking-widest text-cobersteel-gold mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-sm text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-cobersteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-2.5 text-sm text-[#94A3B8]">
                <Clock className="w-4 h-4 text-cobersteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{CONTACT_INFO.hours}</span>
              </li>
              <li className="flex gap-2.5 text-sm text-[#94A3B8]">
                <Phone className="w-4 h-4 text-cobersteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <a href={`tel:${CONTACT_INFO.phone1.replace(/\D/g, "")}`} className="hover:text-white transition-colors block">
                    {CONTACT_INFO.phone1}
                  </a>
                  <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">
                    {CONTACT_INFO.whatsapp} (WhatsApp)
                  </a>
                </div>
              </li>
              <li className="flex gap-2.5 text-sm text-[#94A3B8]">
                <Mail className="w-4 h-4 text-cobersteel-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#94A3B8]">
            © {year} CoberSteel. Todos os direitos reservados.
          </p>
          <Link href="/institucional/privacidade" className="text-xs text-[#94A3B8] hover:text-white transition-colors">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
