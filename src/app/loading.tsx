export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 bg-dark-steel">
      {/* Chevron da marca pulsando */}
      <svg width="72" height="29" viewBox="0 0 120 48" className="animate-pulse" aria-hidden="true">
        <polyline points="11,40 60,6 109,40" fill="none" stroke="#5C88B5" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="30,40 60,19 90,40" fill="none" stroke="#D7A03B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="text-xs uppercase tracking-widest text-[#94A3B8]" role="status">
        Carregando…
      </p>
    </div>
  );
}
