"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_PRODUCTS, NAV_INSTITUCIONAL, SEGMENTS } from "@/lib/constants";
import SocialLinks from "@/components/shared/SocialLinks";
import { trackButtonClick } from "@/components/shared/Analytics";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);
  const [instOpen, setInstOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const segmentsRef = useRef<HTMLDivElement>(null);
  const instRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (segmentsRef.current && !segmentsRef.current.contains(e.target as Node)) {
        setSegmentsOpen(false);
      }
      if (instRef.current && !instRef.current.contains(e.target as Node)) {
        setInstOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { href: "/servicos", label: "Serviços", external: false },
    { href: "/blog", label: "Blog", external: false },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-dark-steel shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="CoberSteel — Página inicial">
          <Image
            src="/logo-branca.svg"
            alt="CoberSteel"
            width={370}
            height={94}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Produtos dropdown */}
          <div ref={productsRef} className="relative">
            <button
              onClick={() => { setProductsOpen(!productsOpen); setSegmentsOpen(false); }}
              className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-cobersteel-gold transition-colors"
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Produtos <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-mid border border-dark-border rounded-lg shadow-xl py-2">
                {NAV_PRODUCTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setProductsOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/80 hover:text-cobersteel-gold hover:bg-dark-steel transition-colors"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Segmentos dropdown */}
          <div ref={segmentsRef} className="relative">
            <button
              onClick={() => { setSegmentsOpen(!segmentsOpen); setProductsOpen(false); }}
              className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-cobersteel-gold transition-colors"
              aria-expanded={segmentsOpen}
              aria-haspopup="true"
            >
              Segmentos <ChevronDown className={`w-4 h-4 transition-transform ${segmentsOpen ? "rotate-180" : ""}`} />
            </button>
            {segmentsOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-dark-mid border border-dark-border rounded-lg shadow-xl py-3 px-3">
                <div className="grid grid-cols-2 gap-1">
                  {SEGMENTS.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/segmentos/${s.slug}`}
                      onClick={() => setSegmentsOpen(false)}
                      className="block px-3 py-2 text-sm text-white/80 hover:text-cobersteel-gold hover:bg-dark-steel rounded transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Institucional dropdown */}
          <div ref={instRef} className="relative">
            <button
              onClick={() => { setInstOpen(!instOpen); setProductsOpen(false); setSegmentsOpen(false); }}
              className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-cobersteel-gold transition-colors"
              aria-expanded={instOpen}
              aria-haspopup="true"
            >
              Institucional <ChevronDown className={`w-4 h-4 transition-transform ${instOpen ? "rotate-180" : ""}`} />
            </button>
            {instOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-mid border border-dark-border rounded-lg shadow-xl py-2">
                {NAV_INSTITUCIONAL.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setInstOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/80 hover:text-cobersteel-gold hover:bg-dark-steel transition-colors"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/90 hover:text-cobersteel-gold transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/90 hover:text-cobersteel-gold transition-colors"
              >
                {l.label}
              </Link>
            )
          )}

          {/* Separador + redes sociais */}
          <div className="w-px h-5 bg-white/20" aria-hidden="true" />
          <SocialLinks className="flex items-center gap-3" />
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/5516997977613"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackButtonClick("falar_whatsapp", "navbar_desktop")}
            className="bg-cobersteel-gold text-dark-steel font-semibold text-sm px-5 py-2.5 rounded hover:bg-amber-400 transition-colors uppercase tracking-wide"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-dark-steel flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-dark-border">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/logo-branca.svg" alt="CoberSteel" width={140} height={35} className="h-9 w-auto" />
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Fechar menu" className="text-white p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            <p className="text-xs uppercase tracking-widest text-cobersteel-silver mb-2 px-3">Produtos</p>
            {NAV_PRODUCTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-white/90 hover:text-cobersteel-gold rounded-lg hover:bg-dark-mid transition-colors"
              >
                {p.label}
              </Link>
            ))}
            <div className="border-t border-dark-border my-4" />
            <p className="text-xs uppercase tracking-widest text-cobersteel-silver mb-2 px-3">Segmentos</p>
            <div className="grid grid-cols-2 gap-1">
              {SEGMENTS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/segmentos/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-white/80 hover:text-cobersteel-gold rounded hover:bg-dark-mid transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-dark-border my-4" />
            <p className="text-xs uppercase tracking-widest text-cobersteel-silver mb-2 px-3">Institucional</p>
            {NAV_INSTITUCIONAL.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-white/90 hover:text-cobersteel-gold rounded-lg hover:bg-dark-mid transition-colors"
              >
                {i.label}
              </Link>
            ))}
            <div className="border-t border-dark-border my-4" />
            {navLinks.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-white/90 hover:text-cobersteel-gold rounded-lg hover:bg-dark-mid transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-white/90 hover:text-cobersteel-gold rounded-lg hover:bg-dark-mid transition-colors"
                >
                  {l.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <a
                href="https://wa.me/5516997977613"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackButtonClick("falar_whatsapp", "navbar_mobile");
                  setMobileOpen(false);
                }}
                className="block w-full text-center bg-cobersteel-gold text-dark-steel font-semibold py-3 rounded uppercase tracking-wide hover:bg-amber-400 transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Redes sociais */}
            <div className="border-t border-dark-border mt-6 pt-6">
              <SocialLinks className="flex items-center justify-center gap-6" iconClassName="w-5 h-5" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
