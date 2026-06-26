import type { Metadata } from "next";

// Página não listada (acesso apenas por link direto). Não deve ser
// indexada pelos buscadores enquanto estiver desconectada do menu.
export const metadata: Metadata = {
  title: "Planejamento 2027 | CoberSteel",
  robots: { index: false, follow: false },
};

export default function PlanejamentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
