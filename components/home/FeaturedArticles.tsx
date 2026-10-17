"use client";

import { useRef } from "react";
import type { CaseStudy } from "@/payload-types";
import ArticleCard from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SwipeProgress from "@/components/SwipeProgress";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function FeaturedArticles({ articles }: { articles: CaseStudy[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isCarousel = !useMediaQuery("(min-width: 768px)");

  if (articles.length === 0) return null;

  return (
    <section className="bg-[color:var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Research & Insights"
          title="Category intelligence,"
          accent="straight from the data."
          subtitle="Independent analysis of the platforms, categories and economics shaping Indian ecommerce."
          link={{ href: "/articles", label: "View all research" }}
        />

        <div
          ref={scrollRef}
          className="mt-14 -mx-6 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto scroll-smooth px-6 pb-4 no-scrollbar scroll-pl-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0"
        >
          {articles.map((article, i) => (
            <Reveal
              key={article.slug}
              delay={i * 0.1}
              triggerOnMount={isCarousel}
              className="w-[82%] shrink-0 snap-start md:w-auto"
            >
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>

        <SwipeProgress
          scrollRef={scrollRef}
          count={articles.length}
          className="mt-5 md:hidden"
        />
      </div>
    </section>
  );
}
