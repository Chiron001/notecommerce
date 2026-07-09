"use client";

import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const POINTS = [
  "Tested against real brand data, not just theory",
  "Independent. Nobody's paying us to say nice things about their platform",
  "Updated when we're wrong or when the market moves on",
  "Written by people who've actually done this work",
];

export default function FinalCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="grid lg:grid-cols-2 gap-12 items-center rounded-3xl bg-noise bg-navy-950 p-8 sm:p-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
              Why Bother Reading Us
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Because you already have enough to skim.
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Anyone can reword a headline. We&apos;d rather tell you what it
              actually means for your business, and give you something you
              can act on before your next standup.
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

          <div className="glass rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-navy-950">
              Start with this week&apos;s briefing
            </h3>
            <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
              No account needed, no paywall. Just subscribe and start reading.
            </p>
            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/40 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full rounded-xl gradient-cta px-4 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Subscribe for free
              </button>
            </form>
            <p className="mt-4 text-[11px] text-navy-900/40">
              Already read by a few thousand people who run ecommerce
              businesses for a living.
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
