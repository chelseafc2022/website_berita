import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/lib/data";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl; const q = searchParams.get("q")?.toLowerCase(); const category = searchParams.get("category");
  const data = articles.filter((article) => (!q || `${article.title} ${article.excerpt}`.toLowerCase().includes(q)) && (!category || article.category.slug === category));
  return NextResponse.json({ data, meta: { total: data.length } });
}
