import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/data";
import { formatDate } from "@/lib/data";

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  return <article className={`group ${compact ? "grid grid-cols-[112px_1fr] gap-4" : ""}`}>
    <Link href={`/berita/${article.slug}`} className={`relative block overflow-hidden rounded-xl bg-slate-200 ${compact ? "h-[92px]" : "aspect-[1.42]"}`}>
      <Image src={article.image} alt={article.imageCaption} fill sizes={compact ? "112px" : "(max-width: 768px) 100vw, 33vw"} className="object-cover transition duration-500 group-hover:scale-105" />
    </Link>
    <div className={compact ? "pt-1" : "pt-4"}>
      <Link href={`/kategori/${article.category.slug}`} className="eyebrow" style={{ color: article.category.accent }}>{article.category.name}</Link>
      <h3 className={`${compact ? "mt-1 text-base leading-5" : "mt-2 font-display text-xl leading-6"} font-bold text-ink`}><Link href={`/berita/${article.slug}`} className="transition hover:text-brand">{article.title}</Link></h3>
      {!compact && <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">{article.excerpt}</p>}
      {!compact && <p className="mt-3 text-xs text-slate-500">{formatDate(article.publishedAt)} · {article.author}</p>}
    </div>
  </article>;
}
