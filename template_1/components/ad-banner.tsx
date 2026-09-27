export function AdBanner({ label = "Iklan", className = "" }: { label?: string; className?: string }) {
  return <aside className={`ad-pattern flex min-h-[110px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 p-4 text-center ${className}`} aria-label={label}>
    <div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">{label}</p><p className="mt-1 text-sm text-slate-500">Ruang untuk cerita brand Anda</p></div>
  </aside>;
}
