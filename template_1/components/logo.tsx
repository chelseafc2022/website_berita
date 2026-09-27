import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="NusaKabar, beranda">
    <span className={`grid h-9 w-9 place-items-center rounded-xl ${light ? "bg-white text-ink" : "bg-ink text-white"}`}><span className="font-display text-xl font-black">N</span></span>
    <span className={`font-display text-2xl font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>Nusa<span className={light ? "text-[#FE9D8E]" : "text-brand"}>Kabar</span></span>
  </Link>;
}
