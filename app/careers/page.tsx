import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Careers: NotEcommerce",
  description:
    "We hire rarely and selectively. If you're a senior ecommerce operator who wants to do the best work of your career, we want to hear from you.",
};

const QUALITIES = [
  {
    title: "You've actually done the work",
    description:
      "You've run growth, built a P&L, or operated a storefront yourself. You're not learning ecommerce on the job here.",
  },
  {
    title: "You're comfortable with data, not just decks",
    description:
      "You'd rather build the model than describe it. Rigor isn't optional on this team.",
  },
  {
    title: "You can hold an independent line",
    description:
      "Clients pay us to tell them the truth, including when it's inconvenient. That only works if you're willing to say it.",
  },
  {
    title: "You want ownership, not a role",
    description:
      "We're a small team. Everyone here runs real engagements and real research, not just a slice of one.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-50 pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 gradient-hero-blob pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                Careers
              </span>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
                Work with a small, senior team.
              </h1>
              <p className="mt-5 text-lg text-navy-900/70 leading-relaxed">
                We don&apos;t hire often, and we don&apos;t hire junior. Every
                person on this team runs real client engagements and real
                research from day one, so we&apos;re careful about who joins.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                What We Look For
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950">
                Fewer, better people.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {QUALITIES.map((q, i) => (
              <Reveal key={q.title} delay={(i % 2) * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-2xl bg-cream-50 p-6 ring-1 ring-navy-900/5">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-500 shrink-0" />
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-950">
                      {q.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
                      {q.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-noise bg-navy-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center rounded-3xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                  How We Hire
                </span>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white">
                  No open roles board. That&apos;s intentional.
                </h2>
                <p className="mt-4 text-white/60 leading-relaxed max-w-xl">
                  We hire when a specific engagement or practice area needs
                  someone exceptional, not on a schedule. If that&apos;s you,
                  the best way in is to tell us directly what you&apos;d work
                  on and why you&apos;re the right person for it.
                </p>
              </div>
              <Link
                href="/connect"
                className="lg:justify-self-end inline-flex items-center justify-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Tell Us About Yourself
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
