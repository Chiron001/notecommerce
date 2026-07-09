import Link from "next/link";
import { ArrowRight, TrendingUp, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      <div className="absolute inset-0 gradient-hero-blob pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy-800 shadow-sm ring-1 ring-navy-900/5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Ecommerce intelligence, published weekly
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 leading-[1.05]">
              Ecommerce expertise,{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                made accessible.
              </span>
            </h1>

            <p className="mt-6 text-lg text-navy-900/70 leading-relaxed max-w-xl">
              NotEcommerce is a market intelligence and growth strategy
              platform for founders and operators building in D2C,
              marketplaces, and quick commerce — practical, expert-led, and
              always current.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity"
              >
                Explore Insights
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#process"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-950 ring-1 ring-navy-900/10 hover:ring-navy-900/20 transition-all"
              >
                See Our Process
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-navy-900/50">
              <span>Trusted by operators at</span>
              <span className="font-display font-semibold text-navy-900/70">D2C Brands</span>
              <span className="font-display font-semibold text-navy-900/70">Growth Teams</span>
              <span className="font-display font-semibold text-navy-900/70">Marketplace Sellers</span>
              <span className="font-display font-semibold text-navy-900/70">Quick Commerce Ops</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-md rounded-3xl bg-white p-6 shadow-2xl shadow-navy-900/10 ring-1 ring-navy-900/5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-navy-900/40">
                  Featured Briefing
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-500">
                  Market Intelligence
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy-950 leading-snug">
                Agentic Commerce: How AI Shopping Agents Are Rewiring Retail
              </h3>
              <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
                AI agents are starting to browse, compare, and check out on
                behalf of consumers. Here's what that means for brands.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-navy-900/40">
                <BookOpen className="h-3.5 w-3.5" />
                9 min read
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-navy-950 p-4 text-white">
                  <div className="font-display text-2xl font-extrabold">6</div>
                  <div className="text-[11px] text-white/60 mt-1">Content pillars</div>
                </div>
                <div className="rounded-xl bg-cream-100 p-4">
                  <div className="font-display text-2xl font-extrabold text-navy-950">45+</div>
                  <div className="text-[11px] text-navy-900/50 mt-1">Platforms covered</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 hidden sm:flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-navy-900/5">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <div>
                <div className="text-xs font-bold text-navy-950">220+</div>
                <div className="text-[10px] text-navy-900/50">Articles &amp; case studies</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden sm:block rounded-2xl bg-navy-900 px-4 py-3 shadow-xl">
              <div className="text-xs font-bold text-white">Weekly Briefing</div>
              <div className="text-[10px] text-white/50">New drop every Monday</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
