import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { getAllPillars } from "@/lib/payload";

export default async function NotFound() {
  const pillars = await getAllPillars();
  return (
    <section className="relative overflow-hidden bg-cream-50 pt-32 pb-24 lg:pt-40">
      <div className="absolute inset-0 gradient-hero-blob pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-navy-800 shadow-sm">
          <Search className="h-3.5 w-3.5" />
          Error 404
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-navy-950">
          This page didn&apos;t make the cut.
        </h1>
        <p className="mt-5 text-lg text-navy-900/70 leading-relaxed max-w-xl mx-auto">
          Either the page moved, the link is stale, or it never existed. Let&apos;s
          get you back to something useful.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/articles"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-navy-950 hover:bg-white/70 transition-colors"
          >
            Explore Insights
          </Link>
        </div>

        <div className="mt-16 rounded-3xl bg-white/70 backdrop-blur-sm ring-1 ring-navy-900/10 p-8 text-left">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-navy-900/40">
            Or jump to a practice area
          </h2>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {pillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/pillars/${pillar.slug}`}
                className="rounded-xl bg-cream-50 px-4 py-3 text-sm font-semibold text-navy-900 ring-1 ring-navy-900/5 hover:ring-navy-900/15 transition-all"
              >
                {pillar.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
