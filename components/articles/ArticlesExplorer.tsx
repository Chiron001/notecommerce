"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ARTICLES } from "@/lib/articles";
import { CONTENT_PILLARS, type PillarSlug } from "@/lib/pillars";
import ArticleCard from "@/components/ArticleCard";
import Reveal from "@/components/Reveal";

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
              : "bg-white/70 backdrop-blur-sm text-navy-900/60 hover:text-navy-950"
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
                : "bg-white/70 backdrop-blur-sm text-navy-900/60 hover:text-navy-950"
            }`}
          >
            {pillar.title}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filtered.map((article, i) => (
          <Reveal key={article.slug} delay={(i % 3) * 0.08} className="h-full">
            <ArticleCard article={article} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-navy-900/50">
          Nothing here yet. Check back soon.
        </p>
      )}
    </div>
  );
}
