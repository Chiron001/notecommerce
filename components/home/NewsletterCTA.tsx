"use client";

import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export default function NewsletterCTA({
  latestArticle,
}: {
  latestArticle?: { title: string; slug: string } | null;
}) {
  return (
    <section id="newsletter" className="bg-[color:var(--surface)] py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gradient-cta shadow-elegant">
            <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

            {latestArticle && (
              <Link
                href={`/articles/${latestArticle.slug}`}
                className="group relative flex items-center gap-3 border-b border-white/15 px-6 py-4 text-sm text-white sm:px-12"
              >
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  <Sparkles className="h-3 w-3" />
                  Latest
                </span>
                <span className="truncate font-medium">{latestArticle.title}</span>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            )}

            <div className="relative grid items-center gap-10 px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  <Mail className="h-3.5 w-3.5" />
                  The Intelligence Briefing
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold leading-tight text-white">
                  Ready to grow
                  <span className="block font-light italic text-white/85">across every marketplace?</span>
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-white/75">
                  The research our advisory clients rely on, distilled into one
                  weekly briefing. No sponsored placements, no noise.
                </p>
              </div>

              <div>
                <form
                  className="flex flex-col gap-3 rounded-2xl bg-white/10 p-2 ring-1 ring-white/20 backdrop-blur sm:flex-row"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="newsletter-email" className="sr-only">
                    Work email
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Your work email"
                    className="min-w-0 flex-1 rounded-xl bg-white px-5 py-3.5 text-sm text-navy-950 placeholder:text-navy-900/40 outline-none focus:ring-2 focus:ring-white"
                  />
                  <MagneticButton className="shrink-0">
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-900 transition-colors"
                    >
                      Subscribe
                    </button>
                  </MagneticButton>
                </form>
                <p className="mt-3 text-xs text-white/60">Free. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
