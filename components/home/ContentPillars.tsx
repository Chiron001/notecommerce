import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CONTENT_PILLARS } from "@/lib/pillars";

const ACCENT_STYLES: Record<string, { bar: string; text: string; chip: string }> = {
  emerald: { bar: "bg-emerald-500", text: "text-emerald-600", chip: "bg-emerald-500/10" },
  amber: { bar: "bg-amber-500", text: "text-amber-600", chip: "bg-amber-500/10" },
  violet: { bar: "bg-violet-500", text: "text-violet-600", chip: "bg-violet-500/10" },
  indigo: { bar: "bg-indigo-600", text: "text-indigo-600", chip: "bg-indigo-600/10" },
};

export default function ContentPillars() {
  return (
    <section id="pillars" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            What We Cover
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
            Six Content Pillars,{" "}
            <span className="text-navy-900/40">One Learning Partner.</span>
          </h2>
          <p className="mt-4 text-navy-900/60 leading-relaxed">
            Every article, teardown, and briefing we publish maps back to one
            of six pillars — so you always know exactly where to go for the
            expertise you need.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT_PILLARS.map((pillar) => {
            const accent = ACCENT_STYLES[pillar.accent] ?? ACCENT_STYLES.indigo;
            return (
              <Link
                key={pillar.slug}
                href={`/articles?pillar=${pillar.slug}`}
                className="group relative flex flex-col rounded-2xl bg-white p-6 ring-1 ring-navy-900/10 hover:ring-navy-900/20 hover:-translate-y-1 transition-all shadow-sm hover:shadow-lg"
              >
                <span className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl ${accent.bar}`} />
                <div className="flex items-start justify-between">
                  <span className={`inline-flex rounded-lg ${accent.chip} px-2.5 py-1 text-[11px] font-bold ${accent.text}`}>
                    {pillar.stat}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-navy-900/30 group-hover:text-navy-900 transition-colors" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-950">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-navy-900/60 leading-relaxed flex-1">
                  {pillar.description}
                </p>
                <span className="mt-4 text-xs font-semibold text-navy-900/40">
                  {pillar.statLabel}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
