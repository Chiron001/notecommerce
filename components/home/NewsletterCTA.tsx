"use client";

import Reveal from "@/components/Reveal";

export default function NewsletterCTA() {
  return (
    <section id="newsletter" className="py-24 bg-cream-50 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="gradient-cta rounded-3xl px-8 sm:px-16 py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero-blob opacity-60 pointer-events-none" />
          <div className="relative">
            <span className="glass-dark inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-white">
              The Intelligence Briefing
            </span>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
              Proprietary intelligence, delivered weekly.
            </h2>
            <p className="mt-4 text-white/80 max-w-lg mx-auto leading-relaxed">
              The same research our advisory clients pay for, distilled into
              one weekly briefing. No sponsored placements, no noise.
            </p>
            <form
              className="mt-8 mx-auto flex max-w-md flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-full bg-white px-5 py-3.5 text-sm text-navy-950 placeholder:text-navy-900/40 outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="rounded-full bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-900 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-white/60">
              Free forever. Unsubscribe anytime.
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
