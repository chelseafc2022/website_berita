import Image from "next/image";
import Link from "next/link";
import { AdBanner } from "@/components/ad-banner";
import { ArticleCard } from "@/components/article-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { articles } from "@/lib/data";

export default function HomePage() {
  const [hero, ...latest] = articles;
  const popular = [...articles].sort((a, b) => b.views - a.views).slice(0, 4);
  return <>
    <Header />
    <main>
      <section className="bg-ink py-3 text-white"><div className="container-page flex items-center gap-3 overflow-hidden"><span className="shrink-0 rounded bg-brand px-2 py-1 text-[10px] font-bold uppercase tracking-wider">Breaking</span><Link href={`/berita/${hero.slug}`} className="truncate text-sm font-medium text-slate-100 hover:text-white">{hero.title}</Link><span className="ml-auto hidden shrink-0 text-xs text-slate-400 sm:block">Selasa, 9 September 2026</span></div></section>
      <div className="container-page pt-7"><AdBanner label="Advertisement" className="min-h-[96px]" /></div>
      <section className="container-page py-12 md:py-16">
        <div className="mb-6 flex items-end justify-between"><div><p className="eyebrow">Sorotan hari ini</p><h1 className="section-title mt-1">Cerita utama</h1></div><Link href="/kategori/daerah" className="hidden text-sm font-bold text-brand sm:block">Lihat semua →</Link></div>
        <div className="grid gap-6 lg:grid-cols-[1.62fr_.85fr]">
          <article className="group overflow-hidden rounded-3xl bg-ink shadow-card">
            <Link href={`/berita/${hero.slug}`} className="relative block aspect-[1.72] overflow-hidden"><Image src={hero.image} alt={hero.imageCaption} fill priority sizes="(max-width: 1024px) 100vw, 760px" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-9"><span className="rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{hero.category.name}</span><h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl"><span className="transition group-hover:text-[#FFD0C9]">{hero.title}</span></h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200 md:text-base">{hero.excerpt}</p></div></Link>
          </article>
          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card md:p-7"><p className="eyebrow">Paling banyak dibaca</p><h2 className="mt-1 font-display text-3xl font-bold">Populer</h2><div className="mt-5 divide-y divide-slate-100">{popular.map((article, index) => <Link href={`/berita/${article.slug}`} key={article.slug} className="group/item flex gap-4 py-4 first:pt-0"><span className="font-display text-3xl font-bold text-slate-200">0{index + 1}</span><div><p className="text-[10px] font-bold uppercase tracking-[.14em] text-brand">{article.category.name}</p><h3 className="mt-1 text-sm font-bold leading-5 text-ink group-hover/item:text-brand">{article.title}</h3><p className="mt-1 text-xs text-slate-400">{article.views.toLocaleString("id-ID")} pembaca</p></div></Link>)}</div></aside>
        </div>
      </section>
      <section className="container-page pb-12"><div className="mb-7 flex items-end justify-between"><div><p className="eyebrow">Update terbaru</p><h2 className="section-title mt-1">Kabar hari ini</h2></div><Link href="/search" className="text-sm font-bold text-brand">Telusuri berita →</Link></div><div className="grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{latest.slice(0, 3).map((article) => <ArticleCard article={article} key={article.slug} />)}</div></section>
      <section className="container-page grid gap-8 py-8 lg:grid-cols-[1fr_290px]"><div className="rounded-3xl bg-[#E7F4F3] p-7 md:p-10"><p className="eyebrow text-sea">Perspektif</p><h2 className="mt-2 max-w-2xl font-display text-3xl font-bold leading-tight text-ink md:text-4xl">Membaca Indonesia lewat orang-orang yang memilih untuk terus bergerak.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">Kami merawat kabar baik dan peristiwa penting agar tetap dekat dengan kehidupan Anda.</p><Link href="/kategori/pendidikan" className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-brand">Baca perspektif kami</Link></div><AdBanner label="Iklan sidebar" className="min-h-[220px]" /></section>
      <section className="container-page py-12"><div className="mb-7"><p className="eyebrow">Pilihan redaksi</p><h2 className="section-title mt-1">Layak Anda ikuti</h2></div><div className="grid gap-7 md:grid-cols-2">{latest.slice(3).map((article) => <ArticleCard article={article} compact key={article.slug} />)}</div></section>
      <section className="bg-white"><div className="container-page flex flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between"><div><p className="eyebrow">Jangan ketinggalan</p><h2 className="mt-1 font-display text-3xl font-bold">Kabar baik, setiap pagi.</h2></div><form className="flex w-full max-w-md gap-2"><input type="email" aria-label="Email" placeholder="email@anda.com" className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-paper px-4 text-sm outline-none ring-brand focus:ring-2" /><button className="rounded-xl bg-brand px-5 text-sm font-bold text-white hover:bg-[#d73e2d]">Berlangganan</button></form></div></section>
    </main>
    <Footer />
  </>;
}
