"use client";

import Reveal from "@/components/Reveal";

export default function NewsletterCTA() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="gradient-cta rounded-3xl px-8 sm:px-16 py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero-blob opacity-60 pointer-events-none" />
          <div className="relative">
            <span className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-white">
              The Monday Read
            </span>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
              Get one good email a week, that&apos;s it.
            </h2>
            <p className="mt-4 text-white/80 max-w-lg mx-auto leading-relaxed">
              We send out what we&apos;re seeing in the market and what we think
              it means for you. No daily spam, no sponsored placements
              pretending to be advice.
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
