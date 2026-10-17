import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import type { CaseStudy, Pillar } from "@/payload-types";
import { PillarIcon } from "@/lib/pillarIcons";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ArticleCard({ article }: { article: CaseStudy }) {
  const pillar = typeof article.pillar === "object" ? (article.pillar as Pillar) : null;
  const cover = typeof article.coverImage === "object" ? article.coverImage : null;
  const gradientFrom = article.coverGradientFrom || "#003466";
  const gradientTo = article.coverGradientTo || "#0b4a82";

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group card-elegant card-elegant-hover flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-44 w-full overflow-hidden">
        {cover?.url ? (
          <Image
            src={cover.sizes?.card?.url || cover.url}
            alt={cover.alt || ""}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // No real cover uploaded yet: a designed brand-colour "report cover", never a stock photo standing in for real imagery.
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
          >
            <div className="absolute inset-0 bg-grid-dark opacity-70" />
            <div className="absolute -right-6 -bottom-8 text-white/10">
              <PillarIcon slug={pillar?.slug ?? ""} className="h-40 w-40" strokeWidth={1.25} />
            </div>
            <div className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
              NotEcommerce Research
            </div>
          </div>
        )}
        {pillar && (
          <span className="absolute left-4 bottom-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-navy-900 backdrop-blur">
            {pillar.title}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[11px] font-medium text-navy-900/45">
          <span>{formatDate(article.publishedDate)}</span>
          <span className="h-1 w-1 rounded-full bg-navy-900/25" />
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime}
          </span>
        </div>
        <h3 className="mt-3 line-clamp-2 font-display text-lg font-bold leading-snug text-navy-950 transition-colors group-hover:text-indigo-600">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-[color:var(--ink-muted)]">
          {article.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600">
          Read the analysis
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
