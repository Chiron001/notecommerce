import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import type { CaseStudy, Pillar } from "@/payload-types";
import { PillarIcon } from "@/lib/pillarIcons";

/** Flat, image-led card for the "Read next" grid under an article. */
export default function ReadNextCard({ article }: { article: CaseStudy }) {
  const pillar = typeof article.pillar === "object" ? (article.pillar as Pillar) : null;
  const cover = typeof article.coverImage === "object" ? article.coverImage : null;
  const gradientFrom = article.coverGradientFrom || "#003466";
  const gradientTo = article.coverGradientTo || "#0b4a82";

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
        {cover?.url ? (
          <Image
            src={cover.url}
            alt={cover.alt || ""}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})` }}
          >
            <div className="absolute inset-0 bg-grid-dark opacity-70" />
            <div className="absolute -right-4 -bottom-6 text-white/10">
              <PillarIcon slug={pillar?.slug ?? ""} className="h-32 w-32" strokeWidth={1.25} />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-900/50">
        <BookOpen className="h-3.5 w-3.5" />
        Research{pillar && <> / {pillar.title}</>}
      </div>
      <h3 className="mt-2 font-display text-xl font-bold leading-snug text-navy-950 transition-colors group-hover:text-indigo-600">
        {article.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[color:var(--ink-muted)]">
        {article.excerpt}
      </p>
      <p className="mt-3 text-sm text-navy-900/45">{article.authorName}</p>
    </Link>
  );
}
