"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Elemento HTML a renderizar (default "div"). */
  as?: "div" | "article";
  delay?: number;
  duration?: number;
  /** Deslocamento inicial em px (eixo Y). Negativo desloca para cima. */
  y?: number;
  /** Deslocamento inicial em px (eixo X). */
  x?: number;
  /** Escala inicial (1 = sem escala). */
  scale?: number;
  /** rootMargin do IntersectionObserver — antecipa/atrasa o disparo. */
  margin?: string;
};

/**
 * Fade/translate/scale disparado por scroll (IntersectionObserver), em CSS puro.
 * Substitui `motion.div`/`whileInView` do framer-motion nas seções da home e
 * institucionais — essas eram só fade-ins simples, então não precisam da lib
 * inteira (~230KB) no bundle compartilhado por todas as rotas do site.
 * `prefers-reduced-motion` já é tratado globalmente em globals.css (zera
 * transition-duration), então não precisa de lógica extra aqui.
 */
export default function Reveal({
  children,
  className,
  as = "div",
  delay = 0,
  duration = 0.5,
  y = 20,
  x = 0,
  scale = 1,
  margin = "-60px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}s`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}s`,
  };

  const Tag = as;
  return (
    <Tag ref={ref} className={["js-reveal", className].filter(Boolean).join(" ")} style={style}>
      {children}
    </Tag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
  delay?: number;
  duration?: number;
  /** Deslocamento inicial em px (eixo Y) de cada item. */
  y?: number;
  /** Escala inicial de cada item (1 = sem escala). */
  scale?: number;
  /** Intervalo entre o início da animação de cada item, em segundos. */
  stagger?: number;
  /** rootMargin do IntersectionObserver — antecipa/atrasa o disparo. */
  margin?: string;
};

/**
 * Mesma animação do `Reveal` (fade + translate via CSS, disparado por
 * IntersectionObserver), mas com UM único observer para o grupo inteiro em
 * vez de um por item — isso é o que fazia produtos/segmentos "aparecerem em
 * partes" conforme cada fileira entrava na tela. Ao entrar na viewport, cada
 * filho direto recebe a mesma animação do `Reveal` (inline style, igual ao
 * original) com um `transition-delay` escalonado por índice para manter o
 * efeito de stagger, só que todos disparados pelo mesmo evento de scroll.
 */
export function RevealGroup({
  children,
  className,
  as = "div",
  delay = 0,
  duration = 0.7,
  y = 30,
  scale = 1,
  stagger = 0.12,
  margin = "-60px",
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement & HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  const Tag = as;
  const items = Children.toArray(children);

  return (
    <Tag ref={ref} className={className}>
      {items.map((child, i) => {
        if (!isValidElement<{ style?: CSSProperties; className?: string }>(child)) {
          return child;
        }
        const style: CSSProperties = {
          ...child.props.style,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : `translate3d(0, ${y}px, 0) scale(${scale})`,
          transitionProperty: "opacity, transform",
          transitionDuration: `${duration}s`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          transitionDelay: `${delay + i * stagger}s`,
        };
        return cloneElement(child, {
          style,
          className: ["js-reveal", child.props.className].filter(Boolean).join(" "),
        });
      })}
    </Tag>
  );
}
