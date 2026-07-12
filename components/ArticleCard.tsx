import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/articles";
import { CONTENT_PILLARS } from "@/lib/pillars";
import { photoUrl } from "@/lib/images";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ArticleCard({ article }: { article: Article }) {
  const pillar = CONTENT_PILLARS.find((p) => p.slug === article.pillar);

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex h-full flex-col rounded-2xl bg-white overflow-hidden ring-1 ring-navy-900/10 hover:ring-navy-900/20 hover:-translate-y-1 transition-all shadow-sm hover:shadow-xl"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={photoUrl(article.slug, 600, 400)}
          alt=""
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: `linear-gradient(135deg, ${article.cover.from}, ${article.cover.to})`,
            opacity: 0.55,
          }}
        />
        <span className="glass absolute left-3 bottom-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-navy-900">
          {pillar?.title}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="line-clamp-2 font-display text-lg font-bold text-navy-950 leading-snug group-hover:text-indigo-600 transition-colors">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-navy-900/60 leading-relaxed flex-1">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between text-xs text-navy-900/40">
          <span>{formatDate(article.date)}</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
