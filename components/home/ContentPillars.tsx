import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CONTENT_PILLARS } from "@/lib/pillars";
import Reveal from "@/components/Reveal";

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
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              What We Cover
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
              The six things{" "}
              <span className="text-navy-900/40">we actually write about.</span>
            </h2>
            <p className="mt-4 text-navy-900/60 leading-relaxed">
              Everything we publish falls under one of these. If you only
              care about one of them, the tag on each article will get you
              there directly.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTENT_PILLARS.map((pillar, i) => {
            const accent = ACCENT_STYLES[pillar.accent] ?? ACCENT_STYLES.indigo;
            return (
              <Reveal key={pillar.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/articles?pillar=${pillar.slug}`}
                  className="group relative flex flex-col h-full rounded-2xl bg-white/80 backdrop-blur-sm p-6 ring-1 ring-navy-900/10 hover:ring-navy-900/20 hover:-translate-y-1 transition-all shadow-sm hover:shadow-lg"
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
