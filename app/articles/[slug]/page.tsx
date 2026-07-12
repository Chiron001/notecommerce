import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ARTICLES, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { CONTENT_PILLARS } from "@/lib/pillars";
import { photoUrl, avatarUrl } from "@/lib/images";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import ArticleCard from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";

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
    title: `${article.title}: NotEcommerce`,
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
  const authorAvatarId = (article.slug.length % 60) + 1;

  return (
    <article>
      <div className="bg-cream-50 pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
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
              <Image
                src={avatarUrl(authorAvatarId)}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
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
          </Reveal>
        </div>
      </div>

      <div className="relative h-64 sm:h-80 w-full overflow-hidden">
        <Image
          src={photoUrl(article.slug, 1600, 700)}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: `linear-gradient(135deg, ${article.cover.from}, ${article.cover.to})`,
            opacity: 0.5,
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
        <Reveal>
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
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="bg-cream-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy-950">
                More on {pillar?.title}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.08} className="h-full">
                  <ArticleCard article={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      )}

      <NewsletterCTA />
    </article>
  );
}
