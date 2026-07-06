"use client";

import { useState, useRef, useEffect, useId } from "react";
import { ChevronDown, Check } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

type Variant = "gold" | "blue";

interface CustomSelectProps {
  label?: string;
  required?: boolean;
  error?: string;
  variant?: Variant;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  name?: string;
  onBlur?: () => void;
}

const accent: Record<Variant, { ring: string; chevron: string; active: string; check: string }> = {
  gold: {
    ring: "focus:border-montsteel-gold focus:ring-1 focus:ring-montsteel-gold/20 hover:border-montsteel-gold/40",
    chevron: "text-montsteel-gold",
    active: "bg-montsteel-gold/15 text-montsteel-gold",
    check: "text-montsteel-gold",
  },
  blue: {
    ring: "focus:border-montsteel-blue focus:ring-1 focus:ring-montsteel-blue/20 hover:border-montsteel-blue/40",
    chevron: "text-montsteel-blue",
    active: "bg-montsteel-blue/15 text-montsteel-blue",
    check: "text-montsteel-blue",
  },
};

export default function CustomSelect({
  label,
  required,
  error,
  variant = "blue",
  value,
  onChange,
  options,
  placeholder = "Selecione",
  name,
  onBlur,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listId = useId();
  const styles = accent[variant];

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-1.5"
      ref={ref}
      onBlur={(e) => {
        // Só dispara quando o foco sai do componente inteiro (não ao mover
        // do botão-gatilho para uma opção da lista, que também é um blur do botão).
        if (onBlur && !ref.current?.contains(e.relatedTarget as Node)) {
          onBlur();
        }
      }}
    >
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-[#94A3B8]">
          {label} {required && <span className="text-montsteel-gold">*</span>}
        </label>
      )}

      <div className="relative">
        {/* hidden input para envio nativo de formulário, se necessário */}
        {name && <input type="hidden" name={name} value={value} />}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          className={`
            w-full flex items-center justify-between gap-2 bg-light-bg dark:bg-dark-steel border rounded-lg
            px-4 py-3 text-sm text-left transition-all cursor-pointer focus:outline-none
            ${selected ? "text-dark-steel dark:text-white" : "text-slate-500 dark:text-[#64748B]"}
            ${error ? "border-red-500/60" : "border-slate-300 dark:border-dark-border"}
            ${styles.ring}
          `}
        >
          <span className="truncate">{selected ? selected.label : placeholder}</span>
          <ChevronDown
            className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""} ${styles.chevron}`}
            aria-hidden="true"
          />
        </button>

        {open && (
          <ul
            id={listId}
            role="listbox"
            className="absolute z-30 mt-2 w-full bg-white dark:bg-dark-mid border border-slate-200 dark:border-dark-border rounded-lg shadow-xl py-1.5"
          >
            {options.map((opt) => {
              const isActive = opt.value === value;
              return (
                <li key={opt.value} role="option" aria-selected={isActive}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={`
                      w-full flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-left transition-colors
                      ${isActive ? styles.active : "text-dark-steel/80 dark:text-white/80 hover:bg-light-bg dark:hover:bg-dark-steel hover:text-dark-steel dark:hover:text-white"}
                    `}
                  >
                    <span className="truncate">{opt.label}</span>
                    {isActive && <Check className={`w-4 h-4 flex-shrink-0 ${styles.check}`} aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
