"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Só sabemos o tema real após montar no cliente (evita mismatch de hidratação
    // entre o HTML do servidor, sempre renderizado como se fosse tema escuro, e o
    // valor real vindo do localStorage/next-themes).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={`w-9 h-9 ${className}`} aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className={`flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 dark:border-dark-border text-dark-steel/70 dark:text-white/80 hover:text-cobersteel-gold hover:border-cobersteel-gold transition-colors ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
