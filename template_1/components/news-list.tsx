import type { Article } from "@/lib/data";
import { ArticleCard } from "./article-card";

export function NewsList({ articles }: { articles: Article[] }) {
  return <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{articles.map((article) => <ArticleCard article={article} key={article.slug} />)}</div>;
}
