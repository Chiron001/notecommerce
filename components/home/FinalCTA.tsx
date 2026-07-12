"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const POINTS = [
  "Every recommendation tested against real data, not theory",
  "Independent. Nobody pays us to say nice things about their platform",
  "Senior-led engagements, not junior analysts on a template",
  "We execute alongside your team, not just advise from the sidelines",
];

export default function FinalCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="grid lg:grid-cols-2 gap-12 items-center rounded-3xl bg-noise bg-navy-950 p-8 sm:p-14">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
              Why Partner With Us
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Intelligence is worthless without execution.
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Anyone can hand you a report. We build the strategy, then stay
              in the work with your team until it&apos;s actually delivered.
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

          <div className="rounded-2xl bg-white shadow-2xl shadow-navy-950/30 p-8">
            <h3 className="font-display text-xl font-bold text-navy-950">
              Ready to talk strategy?
            </h3>
            <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
              Tell us about your business and we&apos;ll map where our
              expertise creates the most leverage for you.
            </p>
            <Link
              href="/connect"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl gradient-cta px-4 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-4 text-center text-[11px] text-navy-900/50">
              Trusted by growth teams at ambitious ecommerce brands.
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
