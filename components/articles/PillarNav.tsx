import Link from "next/link";
import { CONTENT_PILLARS, type PillarSlug } from "@/lib/pillars";

export default function PillarNav({ active }: { active: PillarSlug | "all" }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/articles"
        className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
          active === "all"
            ? "bg-navy-950 text-white"
            : "bg-white/70 backdrop-blur-sm text-navy-900/60 hover:text-navy-950"
        }`}
      >
        All Articles
      </Link>
      {CONTENT_PILLARS.map((pillar) => (
        <Link
          key={pillar.slug}
          href={`/pillars/${pillar.slug}`}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            active === pillar.slug
              ? "bg-navy-950 text-white"
              : "bg-white/70 backdrop-blur-sm text-navy-900/60 hover:text-navy-950"
          }`}
        >
          {pillar.title}
        </Link>
      ))}
    </div>
  );
}
