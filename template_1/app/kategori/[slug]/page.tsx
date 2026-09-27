import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NewsList } from "@/components/news-list";
import { articles, categories } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const category = categories.find((item) => item.slug === slug);
  return category ? { title: category.name, description: category.description } : {};
}

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params; const category = categories.find((item) => item.slug === slug); if (!category) notFound();
  const categoryArticles = articles.filter((article) => article.category.slug === slug);
  return <><Header /><main className="container-page py-12 md:py-16"><div className="border-b border-slate-200 pb-8"><p className="eyebrow" style={{ color: category.accent }}>Kanal NusaKabar</p><h1 className="mt-1 font-display text-5xl font-bold tracking-tight text-ink">{category.name}</h1><p className="mt-3 max-w-xl text-base leading-7 text-slate-600">{category.description}</p></div><div className="py-10"><NewsList articles={categoryArticles.length ? categoryArticles : articles.slice(0, 3)} /></div><nav className="flex items-center justify-center gap-2" aria-label="Pagination"><span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-bold text-white">1</span><span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-sm">2</span><span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-sm">→</span></nav></main><Footer /></>;
}
