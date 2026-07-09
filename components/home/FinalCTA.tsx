"use client";

import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "Frameworks tested against real brand data, not theory",
  "Independent analysis — not sponsored by any single platform",
  "Continuously updated as markets and platforms shift",
  "Built by operators with hands-on ecommerce experience",
];

export default function FinalCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center rounded-3xl bg-navy-950 p-8 sm:p-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
              Why NotEcommerce
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Get expertise. Not just information.
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Anyone can aggregate headlines. We turn signal into strategy —
              with the practical confidence to actually act on it.
            </p>
            <ul className="mt-8 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-400 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <h3 className="font-display text-xl font-bold text-navy-950">
              Start with our latest briefing
            </h3>
            <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
              No account, no paywall — just subscribe and start reading.
            </p>
            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl bg-cream-50 px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/40 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full rounded-xl gradient-cta px-4 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Subscribe for free
              </button>
            </form>
            <p className="mt-4 text-[11px] text-navy-900/40">
              Join operators already reading NotEcommerce every week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
