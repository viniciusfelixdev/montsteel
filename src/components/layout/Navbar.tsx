"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_PRODUCTS, NAV_INSTITUCIONAL, SEGMENTS } from "@/lib/constants";
import SocialLinks from "@/components/shared/SocialLinks";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { trackButtonClick } from "@/components/shared/Analytics";
import PrefetchBannerLink from "@/components/shared/PrefetchBannerLink";
import { PAGE_BANNER_IMAGES } from "@/lib/page-banner-images";
import { prefetchBanner } from "@/lib/image-preload";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);
  const [instOpen, setInstOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const productsRef = useRef<HTMLDivElement>(null);
  const segmentsRef = useRef<HTMLDivElement>(null);
  const instRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Só sabemos o tema real após montar no cliente (evita mismatch de hidratação).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Antes de montar (SSR), assume-se o tema escuro padrão do site — o header
  // só ganha fundo sólido antes do scroll quando o tema claro está ativo,
  // já que o logo/texto branco do header transparente depende de um fundo
  // escuro por trás (hero com overlay escuro fixo, independente do tema).
  const isLight = mounted && resolvedTheme === "light";
  const solidHeader = scrolled || isLight;
  // Só usa texto/logo escuros quando o fundo sólido do header é claro (tema claro).
  // Quando o header fica sólido no tema escuro (rolando a página), o fundo continua
  // escuro — então o texto precisa continuar branco, não escurecer junto.
  const useDarkText = solidHeader && isLight;

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

  // Ao abrir um dropdown (ou o menu mobile, que já lista todos os links), já
  // começa a baixar o banner/hero de cada página listada nele — mesmo princípio
  // do prefetch da grade de Segmentos na home: quando o usuário efetivamente
  // clicar num item, a imagem já está no cache HTTP e aparece nítida na hora,
  // em vez do flash borrado do placeholder.
  useEffect(() => {
    const hrefs = mobileOpen
      ? [...NAV_PRODUCTS.map((p) => p.href), ...SEGMENTS.map((s) => `/segmentos/${s.slug}`), ...NAV_INSTITUCIONAL.map((i) => i.href), "/servicos", "/blog"]
      : productsOpen
      ? NAV_PRODUCTS.map((p) => p.href)
      : segmentsOpen
      ? SEGMENTS.map((s) => `/segmentos/${s.slug}`)
      : instOpen
      ? NAV_INSTITUCIONAL.map((i) => i.href)
      : [];
    for (const href of hrefs) {
      const src = PAGE_BANNER_IMAGES[href];
      if (src) prefetchBanner(src, 50);
    }
  }, [productsOpen, segmentsOpen, instOpen, mobileOpen]);

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
      className={`fixed top-0 inset-x-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        solidHeader ? "bg-light-bg dark:bg-dark-steel shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="MontSteel — Página inicial">
          <Image
            src={useDarkText ? "/logo-escura.svg" : "/logo-branca.svg"}
            alt="MontSteel"
            width={155}
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
              className={`flex items-center gap-1 text-sm font-medium hover:text-montsteel-gold transition-colors ${useDarkText ? "text-dark-steel/90" : "text-white/90"}`}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Produtos <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border rounded-lg shadow-xl py-2">
                {NAV_PRODUCTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={() => setProductsOpen(false)}
                    className="block px-4 py-2.5 text-sm text-dark-steel/80 dark:text-white/80 hover:text-montsteel-gold hover:bg-light-bg dark:hover:bg-dark-steel transition-colors"
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
              className={`flex items-center gap-1 text-sm font-medium hover:text-montsteel-gold transition-colors ${useDarkText ? "text-dark-steel/90" : "text-white/90"}`}
              aria-expanded={segmentsOpen}
              aria-haspopup="true"
            >
              Segmentos <ChevronDown className={`w-4 h-4 transition-transform ${segmentsOpen ? "rotate-180" : ""}`} />
            </button>
            {segmentsOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border rounded-lg shadow-xl py-3 px-3">
                <div className="grid grid-cols-2 gap-1">
                  {SEGMENTS.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/segmentos/${s.slug}`}
                      onClick={() => setSegmentsOpen(false)}
                      className="block px-3 py-2 text-sm text-dark-steel/80 dark:text-white/80 hover:text-montsteel-gold hover:bg-light-bg dark:hover:bg-dark-steel rounded transition-colors"
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
              className={`flex items-center gap-1 text-sm font-medium hover:text-montsteel-gold transition-colors ${useDarkText ? "text-dark-steel/90" : "text-white/90"}`}
              aria-expanded={instOpen}
              aria-haspopup="true"
            >
              Institucional <ChevronDown className={`w-4 h-4 transition-transform ${instOpen ? "rotate-180" : ""}`} />
            </button>
            {instOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border rounded-lg shadow-xl py-2">
                {NAV_INSTITUCIONAL.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setInstOpen(false)}
                    className="block px-4 py-2.5 text-sm text-dark-steel/80 dark:text-white/80 hover:text-montsteel-gold hover:bg-light-bg dark:hover:bg-dark-steel transition-colors"
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
                className={`text-sm font-medium hover:text-montsteel-gold transition-colors ${useDarkText ? "text-dark-steel/90" : "text-white/90"}`}
              >
                {l.label}
              </a>
            ) : (
              <PrefetchBannerLink
                key={l.href}
                href={l.href}
                className={`text-sm font-medium hover:text-montsteel-gold transition-colors ${useDarkText ? "text-dark-steel/90" : "text-white/90"}`}
              >
                {l.label}
              </PrefetchBannerLink>
            )
          )}

          {/* Separador + redes sociais */}
          <div className={`w-px h-5 ${useDarkText ? "bg-dark-steel/20" : "bg-white/20"}`} aria-hidden="true" />
          <SocialLinks
            className="flex items-center gap-3"
            linkClassName={`hover:text-montsteel-gold transition-colors ${useDarkText ? "text-dark-steel/80" : "text-white/80"}`}
          />
          <ThemeToggle />
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/orcamento"
            onClick={() => trackButtonClick("solicitar_orcamento", "navbar_desktop")}
            className="bg-montsteel-gold text-dark-steel font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-amber-400 transition-colors uppercase"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 ${useDarkText ? "text-dark-steel" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-light-bg dark:bg-dark-steel flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-slate-200 dark:border-dark-border">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/logo-escura.svg" alt="MontSteel" width={58} height={35} className="h-9 w-auto dark:hidden" />
              <Image src="/logo-branca.svg" alt="MontSteel" width={58} height={35} className="h-9 w-auto hidden dark:block" />
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button onClick={() => setMobileOpen(false)} aria-label="Fechar menu" className="text-dark-steel dark:text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            <p className="text-xs uppercase tracking-widest text-montsteel-silver mb-2 px-3">Produtos</p>
            {NAV_PRODUCTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-dark-steel/90 dark:text-white/90 hover:text-montsteel-gold rounded-lg hover:bg-white dark:hover:bg-dark-mid transition-colors"
              >
                {p.label}
              </Link>
            ))}
            <div className="border-t border-slate-200 dark:border-dark-border my-4" />
            <p className="text-xs uppercase tracking-widest text-montsteel-silver mb-2 px-3">Segmentos</p>
            <div className="grid grid-cols-2 gap-1">
              {SEGMENTS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/segmentos/${s.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm text-dark-steel/80 dark:text-white/80 hover:text-montsteel-gold rounded hover:bg-white dark:hover:bg-dark-mid transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-slate-200 dark:border-dark-border my-4" />
            <p className="text-xs uppercase tracking-widest text-montsteel-silver mb-2 px-3">Institucional</p>
            {NAV_INSTITUCIONAL.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-dark-steel/90 dark:text-white/90 hover:text-montsteel-gold rounded-lg hover:bg-white dark:hover:bg-dark-mid transition-colors"
              >
                {i.label}
              </Link>
            ))}
            <div className="border-t border-slate-200 dark:border-dark-border my-4" />
            {navLinks.map((l) =>
              l.external ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-dark-steel/90 dark:text-white/90 hover:text-montsteel-gold rounded-lg hover:bg-white dark:hover:bg-dark-mid transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <PrefetchBannerLink
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-dark-steel/90 dark:text-white/90 hover:text-montsteel-gold rounded-lg hover:bg-white dark:hover:bg-dark-mid transition-colors"
                >
                  {l.label}
                </PrefetchBannerLink>
              )
            )}
            <div className="pt-4">
              <Link
                href="/orcamento"
                onClick={() => {
                  trackButtonClick("solicitar_orcamento", "navbar_mobile");
                  setMobileOpen(false);
                }}
                className="block w-full text-center bg-montsteel-gold text-dark-steel font-bold text-sm py-3 rounded-lg uppercase hover:bg-amber-400 transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </div>

            {/* Redes sociais */}
            <div className="border-t border-slate-200 dark:border-dark-border mt-6 pt-6">
              <SocialLinks className="flex items-center justify-center gap-6" iconClassName="w-5 h-5" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
