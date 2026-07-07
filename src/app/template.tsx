// Fade de transição de página em CSS puro (sem framer-motion): evita forçar
// essa lib no bundle compartilhado por TODAS as rotas só por causa deste
// wrapper global. A keyframe "page-fade-in" está em globals.css e já respeita
// prefers-reduced-motion (ver regra @media global que zera animation-duration).
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-fade-in">{children}</div>;
}
