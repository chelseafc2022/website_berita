import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header, SearchIcon } from "@/components/header";
import { NewsList } from "@/components/news-list";
import { articles } from "@/lib/data";

export const metadata: Metadata = { title: "Pencarian berita", description: "Temukan berita dan cerita yang Anda cari di NusaKabar." };
type Props = { searchParams: Promise<{ q?: string }> };
export default async function SearchPage({ searchParams }: Props) {
  const query = (await searchParams).q?.trim() || ""; const results = query ? articles.filter((article) => `${article.title} ${article.excerpt} ${article.content}`.toLocaleLowerCase("id-ID").includes(query.toLocaleLowerCase("id-ID"))) : articles;
  return <><Header /><main className="container-page min-h-[58vh] py-12 md:py-16"><p className="eyebrow">Telusuri NusaKabar</p><h1 className="mt-1 font-display text-4xl font-bold md:text-5xl">Pencarian berita</h1><form className="relative mt-7 max-w-2xl"><input name="q" defaultValue={query} placeholder="Cari topik, tokoh, atau peristiwa..." className="h-14 w-full rounded-2xl border border-slate-200 bg-white px-5 pr-14 text-base shadow-sm outline-none ring-brand focus:ring-2" /><button aria-label="Cari" className="absolute right-2 top-2 grid h-10 w-10 place-items-center rounded-xl bg-ink text-white"><SearchIcon /></button></form><div className="mt-10"><p className="mb-6 text-sm text-slate-500">{query ? <>Menampilkan <b className="text-ink">{results.length}</b> hasil untuk “<b className="text-ink">{query}</b>”</> : "Berita terbaru dari semua kanal"}</p>{results.length ? <NewsList articles={results} /> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><p className="font-display text-2xl font-bold">Belum ada hasil yang cocok.</p><p className="mt-2 text-sm text-slate-500">Coba gunakan kata kunci yang lebih umum.</p></div>}</div></main><Footer /></>;
}
