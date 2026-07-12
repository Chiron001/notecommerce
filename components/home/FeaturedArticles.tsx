import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";

export default function FeaturedArticles() {
  const articles = getFeaturedArticles();

  return (
    <section className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                Insights &amp; Case Studies
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
                Proprietary research,{" "}
                <span className="text-navy-900/40">applied.</span>
              </h2>
            </div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-950 hover:gap-3 transition-all"
            >
              View all insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {articles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.1} className="h-full">
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
