import { Suspense } from "react";
import type { Metadata } from "next";
import ArticlesExplorer from "@/components/articles/ArticlesExplorer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Articles: NotEcommerce",
  description:
    "Market intelligence, growth strategy, and platform breakdowns for founders and operators building in D2C, marketplaces, and quick commerce.",
};

export default function ArticlesPage() {
  return (
    <section className="bg-cream-50 pt-32 pb-20 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              The Library
            </span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
              Everything we&apos;ve written
            </h1>
            <p className="mt-4 text-navy-900/60 leading-relaxed">
              Every breakdown and briefing we&apos;ve published, in one place.
              Filter by topic if you already know what you&apos;re after.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <Suspense fallback={null}>
            <ArticlesExplorer />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
