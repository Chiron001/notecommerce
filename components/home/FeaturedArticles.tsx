import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedArticles } from "@/lib/articles";
import { CONTENT_PILLARS } from "@/lib/pillars";

function pillarTitle(slug: string) {
  return CONTENT_PILLARS.find((p) => p.slug === slug)?.title ?? slug;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function FeaturedArticles() {
  const articles = getFeaturedArticles();

  return (
    <section className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Latest Research
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
              Category intelligence,{" "}
              <span className="text-navy-900/40">straight from the shelf.</span>
            </h2>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-950 hover:gap-3 transition-all"
          >
            Read all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col rounded-2xl bg-white overflow-hidden ring-1 ring-navy-900/10 hover:ring-navy-900/20 hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl"
            >
              <div
                className="h-40 w-full"
                style={{
                  background: `linear-gradient(135deg, ${article.cover.from}, ${article.cover.to})`,
                }}
              />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wide text-indigo-600">
                  {pillarTitle(article.pillar)}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy-950 leading-snug group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-navy-900/60 leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-navy-900/40">
                  <span>{formatDate(article.date)}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
