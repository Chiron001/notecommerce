"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ARTICLES } from "@/lib/articles";
import { CONTENT_PILLARS, type PillarSlug } from "@/lib/pillars";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ArticlesExplorer() {
  const searchParams = useSearchParams();
  const initialPillar = searchParams.get("pillar") as PillarSlug | null;
  const [active, setActive] = useState<PillarSlug | "all">(
    initialPillar && CONTENT_PILLARS.some((p) => p.slug === initialPillar)
      ? initialPillar
      : "all"
  );

  const filtered = useMemo(() => {
    if (active === "all") return ARTICLES;
    return ARTICLES.filter((a) => a.pillar === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === "all"
              ? "bg-navy-950 text-white"
              : "bg-cream-50 text-navy-900/60 hover:text-navy-950"
          }`}
        >
          All Articles
        </button>
        {CONTENT_PILLARS.map((pillar) => (
          <button
            key={pillar.slug}
            onClick={() => setActive(pillar.slug)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === pillar.slug
                ? "bg-navy-950 text-white"
                : "bg-cream-50 text-navy-900/60 hover:text-navy-950"
            }`}
          >
            {pillar.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((article) => (
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
                {CONTENT_PILLARS.find((p) => p.slug === article.pillar)?.title}
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

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-navy-900/50">
          No articles in this pillar yet — check back soon.
        </p>
      )}
    </div>
  );
}
