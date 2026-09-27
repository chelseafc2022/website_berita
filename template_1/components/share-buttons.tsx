"use client";

export function ShareButtons({ title }: { title: string }) {
  const shareUrl = typeof window === "undefined" ? "" : window.location.href;
  async function copy() { await navigator.clipboard.writeText(shareUrl); alert("Tautan artikel disalin."); }
  return <div className="flex flex-wrap gap-2"><a href={`https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`} target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white">WhatsApp</a><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" className="rounded-full bg-[#1877F2] px-4 py-2 text-xs font-bold text-white">Facebook</a><button onClick={copy} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-ink">Salin link</button></div>;
}
