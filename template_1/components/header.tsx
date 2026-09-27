"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-paper/95 backdrop-blur">
    <div className="container-page flex h-[76px] items-center justify-between gap-5">
      <Logo />
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigasi utama">
        {categories.slice(0, 5).map((item) => <Link className="text-sm font-semibold text-slate-600 transition hover:text-brand" href={`/kategori/${item.slug}`} key={item.slug}>{item.name}</Link>)}
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/search" className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-ink hover:border-brand" aria-label="Cari berita"><SearchIcon /></Link>
        <button type="button" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white lg:hidden" aria-expanded={open} aria-label="Buka menu"><span className="text-lg">{open ? "×" : "☰"}</span></button>
      </div>
    </div>
    {open && <nav className="container-page border-t border-slate-200 py-4 lg:hidden" aria-label="Navigasi seluler">
      <div className="grid grid-cols-2 gap-2">{categories.map((item) => <Link onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-white" href={`/kategori/${item.slug}`} key={item.slug}>{item.name}</Link>)}</div>
    </nav>}
  </header>;
}

export function SearchIcon() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>; }
