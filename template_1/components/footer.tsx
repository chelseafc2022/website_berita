import Link from "next/link";
import { categories } from "@/lib/data";
import { Logo } from "./logo";

export function Footer() {
  return <footer className="mt-20 bg-ink text-white">
    <div className="container-page grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><Logo light /><p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">Kabar yang jernih, dekat, dan memberi arah. Kami percaya cerita yang baik membantu kita memahami Indonesia dengan lebih utuh.</p></div>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#FE9D8E]">Jelajahi</p><div className="grid gap-3">{["Tentang Kami", "Pedoman Media Siber", "Kebijakan Privasi"].map((item) => <Link href="/" className="text-sm text-slate-300 hover:text-white" key={item}>{item}</Link>)}</div></div>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#FE9D8E]">Kategori</p><div className="grid grid-cols-2 gap-3">{categories.slice(0, 6).map((item) => <Link href={`/kategori/${item.slug}`} className="text-sm text-slate-300 hover:text-white" key={item.slug}>{item.name}</Link>)}</div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-page flex flex-col justify-between gap-2 py-5 text-xs text-slate-400 sm:flex-row"><span>© 2026 NusaKabar. Seluruh hak cipta dilindungi.</span><span>Redaksi@nusakabar.id · +62 21 555 0188</span></div></div>
  </footer>;
}
