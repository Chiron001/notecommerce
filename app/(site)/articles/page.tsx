import type { Metadata } from "next";
import { getAllCaseStudies, getAllPillars } from "@/lib/payload";
import ArticleCard from "@/components/ArticleCard";
import PillarNav from "@/components/articles/PillarNav";
import Reveal from "@/components/Reveal";
import { resolvePageMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("articles", {
    title: "Insights & Case Studies: NotEcommerce",
    description:
      "Proprietary research, case studies, and market intelligence for founders and operators building in D2C, marketplaces, and quick commerce.",
  });
}

export default async function ArticlesPage() {
  const [articles, pillars] = await Promise.all([getAllCaseStudies(), getAllPillars()]);

  return (
    <section className="relative overflow-hidden bg-cream-50 pt-32 pb-20 lg:pt-40">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Insights &amp; Case Studies
            </span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
              Proprietary research, published.
            </h1>
            <p className="mt-4 text-navy-900/60 leading-relaxed">
              The same intelligence behind our advisory work, in one place.
              Jump to a practice area if you already know what you&apos;re
              after.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <PillarNav active="all" pillars={pillars} />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={(i % 3) * 0.08} className="h-full">
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
