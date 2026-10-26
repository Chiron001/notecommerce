import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { CaseStudy, Pillar } from "@/payload-types";
import { getAllCaseStudies, getCaseStudiesByPillar, getCaseStudyBySlug, getRecentCaseStudies } from "@/lib/payload";
import { countWords, splitAfterParagraph } from "@/lib/lexical";
import InitialsAvatar from "@/components/InitialsAvatar";
import ShareButtons from "@/components/articles/ShareButtons";
import InlineNewsletter from "@/components/articles/InlineNewsletter";
import ReadNextCarousel from "@/components/articles/ReadNextCarousel";

export const revalidate = 60;

export async function generateStaticParams() {
  const articles = await getAllCaseStudies();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getCaseStudyBySlug(slug);
  if (!article) return {};
  return {
    title: article.meta?.title || `${article.title}: NotEcommerce`,
    description: article.meta?.description || article.excerpt,
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Same-pillar articles first, topped up with the latest so the grid is always full. */
async function getReadNext(article: CaseStudy, pillar: Pillar | null): Promise<CaseStudy[]> {
  const [samePillar, recent] = await Promise.all([
    pillar ? getCaseStudiesByPillar(String(pillar.id), article.slug, 6) : Promise.resolve([]),
    getRecentCaseStudies(7),
  ]);
  const seen = new Set([article.slug]);
  const picks: CaseStudy[] = [];
  for (const candidate of [...samePillar, ...recent]) {
    if (picks.length === 6) break;
    if (seen.has(candidate.slug)) continue;
    seen.add(candidate.slug);
    picks.push(candidate);
  }
  return picks;
}

function TitleBlock({ article, pillar, onImage }: { article: CaseStudy; pillar: Pillar | null; onImage: boolean }) {
  return (
    <>
      {pillar && (
        <Link
          href={`/pillars/${pillar.slug}`}
          className={`text-xs font-bold uppercase tracking-widest transition-colors ${
            onImage ? "text-white/80 hover:text-white" : "text-indigo-600 hover:text-indigo-700"
          }`}
        >
          {pillar.title}
        </Link>
      )}
      <h1
        className={`mx-auto mt-3 max-w-4xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl ${
          onImage ? "text-white" : "text-navy-950"
        }`}
      >
        {article.title}
      </h1>
      <p
        className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed ${
          onImage ? "text-white/85" : "text-[color:var(--ink-muted)]"
        }`}
      >
        {article.excerpt}
      </p>
    </>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getCaseStudyBySlug(slug);
  if (!article) notFound();

  const pillar = typeof article.pillar === "object" ? (article.pillar as Pillar) : null;
  const readNext = await getReadNext(article, pillar);
  const authorPhoto = typeof article.authorPhoto === "object" ? article.authorPhoto : null;
  const cover = typeof article.coverImage === "object" ? article.coverImage : null;
  const gradientFrom = article.coverGradientFrom || "#003466";
  const gradientTo = article.coverGradientTo || "#0b4a82";
  const wordCount = countWords(article.body);
  const { before, after } = splitAfterParagraph(article.body, 4);

  return (
    <article>
      {/* Hero: the cover at its own aspect ratio (never cropped), with the title over it on large screens. */}
      <header className="pt-20 lg:pt-24">
        {cover?.url ? (
          <>
            <div className="mx-auto max-w-[1360px] lg:px-8">
              <div className="relative overflow-hidden bg-navy-950 lg:rounded-2xl">
                <Image
                  src={cover.url}
                  alt={cover.alt || ""}
                  width={cover.width || 1600}
                  height={cover.height || 900}
                  sizes="(min-width: 1360px) 1296px, 100vw"
                  priority
                  className="h-auto w-full"
                />
                <div className="absolute inset-0 hidden flex-col items-center justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent px-10 pb-14 text-center lg:flex">
                  <TitleBlock article={article} pillar={pillar} onImage />
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-3xl px-6 pt-10 text-center lg:hidden">
              <TitleBlock article={article} pillar={pillar} onImage={false} />
            </div>
          </>
        ) : (
          // No real cover uploaded yet: a brand-colour band carries the title instead of a stock photo.
          <div className="mx-auto max-w-[1360px] lg:px-8">
            <div
              className="relative overflow-hidden px-6 py-20 text-center sm:py-24 lg:rounded-2xl lg:py-32"
              style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
            >
              <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />
              <div className="relative">
                <TitleBlock article={article} pillar={pillar} onImage />
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 xl:gap-24">
          <aside className="mb-10 border-b border-[color:var(--border-soft)] pb-8 lg:mb-0 lg:border-0 lg:pb-0">
            <div className="lg:sticky lg:top-28">
              <Link
                href="/articles"
                className="hidden items-center gap-2 text-sm font-semibold text-navy-900/60 transition-colors hover:text-navy-950 lg:inline-flex"
              >
                <ArrowLeft className="h-4 w-4" />
                All Articles
              </Link>

              <div className="flex items-center gap-3 lg:mt-8">
                {authorPhoto?.url ? (
                  <Image
                    src={authorPhoto.url}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : (
                  <InitialsAvatar name={article.authorName} />
                )}
                <div>
                  <div className="text-sm font-semibold text-navy-950">{article.authorName}</div>
                  <div className="text-xs text-navy-900/50">{article.authorRole}</div>
                </div>
              </div>

              <dl className="mt-6 space-y-1.5 text-sm text-[color:var(--ink-muted)]">
                <div>
                  <dt className="sr-only">Published</dt>
                  <dd>{formatDate(article.publishedDate)}</dd>
                </div>
                <div>
                  <dt className="sr-only">Length</dt>
                  <dd>
                    {article.readTime} · {wordCount.toLocaleString("en-US")} words
                  </dd>
                </div>
              </dl>

              {pillar && (
                <Link
                  href={`/pillars/${pillar.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-indigo-600 underline decoration-indigo-600/30 underline-offset-4 transition-colors hover:decoration-indigo-600"
                >
                  {pillar.title}
                </Link>
              )}

              <div className="mt-6">
                <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-900/45">
                  Share
                </div>
                <ShareButtons title={article.title} />
              </div>
            </div>
          </aside>

          <div className="max-w-[680px]">
            <div className="prose-article prose-essay drop-cap">
              <RichText data={before} />
            </div>
            <InlineNewsletter />
            {after && (
              <div className="prose-article prose-essay">
                <RichText data={after} />
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="bg-cream-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-extrabold leading-tight text-navy-950 sm:text-3xl">
              Independent research, written by people who run ecommerce growth for a living.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-[color:var(--ink-muted)]">
              Everything we publish comes out of the data and the brands we work with every day.
              If it was useful, the same team can look at your numbers.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {readNext.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-navy-950">Read next</h2>
            <ReadNextCarousel articles={readNext} />
          </div>
        </section>
      )}
    </article>
  );
}
