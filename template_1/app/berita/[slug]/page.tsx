import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdBanner } from "@/components/ad-banner";
import { ArticleCard } from "@/components/article-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ShareButtons } from "@/components/share-buttons";
import { articles, formatDate, getArticle } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const article = getArticle((await params).slug); if (!article) return {}; return { title: article.title, description: article.excerpt, alternates: { canonical: `/berita/${article.slug}` }, openGraph: { type: "article", title: article.title, description: article.excerpt, images: [article.image], publishedTime: article.publishedAt, authors: [article.author] } }; }

export default async function ArticlePage({ params }: Props) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.category.slug === article.category.slug && item.slug !== article.slug).slice(0, 3);
  const jsonLd = { "@context": "https://schema.org", "@type": "NewsArticle", headline: article.title, description: article.excerpt, image: [article.image], datePublished: article.publishedAt, author: { "@type": "Person", name: article.author }, publisher: { "@type": "Organization", name: "NusaKabar" } };
  const publishedAt = formatDate(article.publishedAt, { hour: "2-digit", minute: "2-digit" });
  const suggested = related.length ? related : articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return <>
    <Header />
    <main>
      <article className="container-page pt-8 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-6 text-xs text-slate-500"><Link href="/" className="hover:text-brand">Beranda</Link><span className="mx-2">/</span><Link href={`/kategori/${article.category.slug}`} className="hover:text-brand">{article.category.name}</Link></nav>
          <Link href={`/kategori/${article.category.slug}`} className="eyebrow" style={{ color: article.category.accent }}>{article.category.name}</Link>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink md:text-6xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-7 text-slate-600 md:text-xl">{article.excerpt}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-slate-200 py-4 text-sm"><span className="font-bold text-ink">{article.author}</span><span className="text-slate-500">{publishedAt} WITA</span><span className="text-slate-500">{article.views.toLocaleString("id-ID")} pembaca</span></div>
        </div>
        <figure className="mx-auto mt-8 max-w-5xl"><div className="relative aspect-[1.72] overflow-hidden rounded-2xl bg-slate-200"><Image src={article.image} alt={article.imageCaption} fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" /></div><figcaption className="mt-2 text-xs leading-5 text-slate-500">{article.imageCaption}</figcaption></figure>
        <div className="mx-auto grid max-w-3xl gap-8 py-9 md:grid-cols-[115px_1fr]">
          <aside className="md:pt-1"><p className="mb-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Bagikan</p><ShareButtons title={article.title} /></aside>
          <div className="article-copy" dangerouslySetInnerHTML={{ __html: article.content }} />
          <div className="md:col-start-2"><AdBanner label="Iklan dalam artikel" className="min-h-[120px]" /></div>
        </div>
      </article>
      <section className="container-page pb-10"><div className="border-t border-slate-200 pt-10"><p className="eyebrow">Berita terkait</p><h2 className="mt-1 font-display text-3xl font-bold">Masih dari {article.category.name}</h2><div className="mt-6 grid gap-7 md:grid-cols-3">{suggested.map((item) => <ArticleCard article={item} key={item.slug} />)}</div></div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Footer />
  </>;
}
