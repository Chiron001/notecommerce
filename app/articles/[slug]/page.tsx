import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ARTICLES, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { CONTENT_PILLARS } from "@/lib/pillars";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — NotEcommerce`,
    description: article.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const pillar = CONTENT_PILLARS.find((p) => p.slug === article.pillar);
  const related = getRelatedArticles(article.slug, article.pillar);

  return (
    <article>
      <div className="bg-cream-50 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900/60 hover:text-navy-950 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All Articles
          </Link>

          <span className="mt-8 flex text-xs font-bold uppercase tracking-widest text-indigo-600">
            {pillar?.title}
          </span>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-950 leading-tight">
            {article.title}
          </h1>
          <p className="mt-5 text-lg text-navy-900/60 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: article.cover.from }}
            >
              {article.author.name.charAt(0)}
            </span>
            <div>
              <div className="text-sm font-semibold text-navy-950">
                {article.author.name}
              </div>
              <div className="text-xs text-navy-900/50">
                {article.author.role}
              </div>
            </div>
            <span className="ml-auto text-xs text-navy-900/40 text-right">
              {formatDate(article.date)}
              <br />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>

      <div
        className="h-64 sm:h-80 w-full"
        style={{
          background: `linear-gradient(135deg, ${article.cover.from}, ${article.cover.to})`,
        }}
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
        <div className="prose-article">
          {article.blocks.map((block, i) => {
            if (block.type === "h2") {
              return <h2 key={i}>{block.text}</h2>;
            }
            if (block.type === "ul") {
              return (
                <ul key={i}>
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}
        </div>
      </div>

      {related.length > 0 && (
        <div className="bg-cream-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-navy-950">
              More on {pillar?.title}
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/articles/${r.slug}`}
                  className="group flex flex-col rounded-2xl bg-white overflow-hidden ring-1 ring-navy-900/10 hover:ring-navy-900/20 transition-all shadow-sm hover:shadow-lg"
                >
                  <div
                    className="h-32 w-full"
                    style={{
                      background: `linear-gradient(135deg, ${r.cover.from}, ${r.cover.to})`,
                    }}
                  />
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-navy-950 leading-snug group-hover:text-indigo-600 transition-colors">
                      {r.title}
                    </h3>
                    <span className="mt-3 inline-block text-xs text-navy-900/40">
                      {r.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <NewsletterCTA />
    </article>
  );
}
