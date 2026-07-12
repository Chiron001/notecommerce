import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTENT_PILLARS, PILLAR_ACCENT_STYLES } from "@/lib/pillars";
import { avatarUrl } from "@/lib/images";
import { SOCIAL_LINKS } from "@/lib/nav";
import SocialIcon from "@/components/SocialIcon";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export const metadata: Metadata = {
  title: "About: NotEcommerce",
  description:
    "NotEcommerce is a small team of ecommerce operators writing about what's actually working in D2C, marketplaces, and quick commerce.",
};

const TEAM = [
  { name: "Ananya Rao", role: "Lead Analyst, Brand Strategy", avatar: 8 },
  { name: "Rohan Mehta", role: "Head of Market Intelligence", avatar: 21 },
  { name: "Karan Bhatia", role: "Platforms Editor", avatar: 39 },
  { name: "Diya Kapoor", role: "Performance Marketing Lead", avatar: 52 },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-50 pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 gradient-hero-blob pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                About Us
              </span>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
                We&apos;re not another ecommerce blog.
              </h1>
              <p className="mt-5 text-lg text-navy-900/70 leading-relaxed">
                NotEcommerce started because most ecommerce content is either
                recycled LinkedIn takes or vendor marketing dressed up as
                advice. We wanted something written by people who&apos;ve
                actually run these businesses, updated as often as the market
                actually changes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: 220, suffix: "+", label: "Articles published" },
                { value: 6, suffix: "", label: "Content pillars" },
                { value: 45, suffix: "+", label: "Platforms covered" },
                { value: 4, suffix: "", label: "People behind it" },
              ].map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} className="font-display text-3xl font-extrabold text-navy-950" />
                  <div className="mt-1 text-sm text-navy-900/50">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                What We Actually Do
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950">
                Market intelligence and growth strategy, minus the fluff.
              </h2>
              <p className="mt-4 text-navy-900/60 leading-relaxed">
                Everything we publish falls into one of six pillars, covering
                D2C brands, marketplaces, and quick commerce. No sponsored
                placements, no pay-to-play rankings. If a platform or brand
                looks bad in the data, we say so.
              </p>
              <Link
                href="/process"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-950 hover:gap-3 transition-all"
              >
                See how we put each piece together
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONTENT_PILLARS.map((pillar) => {
                  const accent = PILLAR_ACCENT_STYLES[pillar.accent] ?? PILLAR_ACCENT_STYLES.indigo;
                  return (
                    <Link
                      key={pillar.slug}
                      href={`/pillars/${pillar.slug}`}
                      className="group flex items-center justify-between rounded-xl bg-cream-50 px-4 py-3 ring-1 ring-navy-900/5 hover:ring-navy-900/15 transition-all"
                    >
                      <span className="text-sm font-semibold text-navy-900">{pillar.title}</span>
                      <span className={`h-2 w-2 rounded-full ${accent.bar}`} />
                    </Link>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-noise bg-navy-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                Who&apos;s Behind This
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white">
                A small team, actually doing the work.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <div className="rounded-2xl glass-dark p-6 text-center">
                  <Image
                    src={avatarUrl(person.avatar)}
                    alt=""
                    width={64}
                    height={64}
                    className="mx-auto h-16 w-16 rounded-full object-cover"
                  />
                  <div className="mt-4 font-display text-base font-bold text-white">
                    {person.name}
                  </div>
                  <div className="mt-1 text-xs text-white/50">{person.role}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                The Reader Promise
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950">
                A few things we won&apos;t do.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                "Take money to feature a platform or brand",
                "Publish something we haven't checked against real data",
                "Leave old articles wrong once we know better",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-5 ring-1 ring-navy-900/5">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-emerald-500 shrink-0" />
                  <span className="text-sm text-navy-900/70">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex justify-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy-900/70 ring-1 ring-navy-900/10 hover:text-navy-950 hover:ring-navy-900/20 transition-all"
                >
                  <SocialIcon name={s.label as "Instagram" | "X" | "LinkedIn" | "Facebook"} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
