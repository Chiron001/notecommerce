import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTENT_PILLARS, PILLAR_ACCENT_STYLES } from "@/lib/pillars";
import { SOCIAL_LINKS } from "@/lib/nav";
import SocialIcon from "@/components/SocialIcon";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export const metadata: Metadata = {
  title: "About: NotEcommerce",
  description:
    "NotEcommerce is a data-led ecommerce intelligence and growth consultancy, serving D2C, marketplace, and quick commerce leaders with proprietary research and senior-led advisory.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream-50 pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 gradient-hero-blob pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                About Us
              </span>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
                Built for ecommerce&apos;s most demanding teams.
              </h1>
              <p className="mt-5 text-lg text-navy-900/70 leading-relaxed">
                NotEcommerce is a data-led intelligence and growth
                consultancy. We combine proprietary research with senior,
                hands-on advisory, the same rigor top-tier consultancies
                bring to any other industry, applied specifically to D2C,
                marketplaces, and quick commerce.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: 220, suffix: "+", label: "Proprietary reports" },
                { value: 6, suffix: "", label: "Practice areas" },
                { value: 45, suffix: "+", label: "Markets covered" },
                { value: 100, suffix: "%", label: "Senior-led engagements" },
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
                How We Work
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950">
                Research-led. Execution-driven.
              </h2>
              <p className="mt-4 text-navy-900/60 leading-relaxed">
                Every engagement draws on the same proprietary research we
                publish. We don&apos;t hand you a report and disappear, our
                team stays embedded until strategy becomes results. No
                sponsored placements, no pay-to-play rankings: if a platform
                or approach doesn&apos;t hold up in the data, we say so, even
                to our own clients.
              </p>
              <Link
                href="/process"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-950 hover:gap-3 transition-all"
              >
                See our methodology
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

      <section className="bg-cream-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                Our Standards
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950">
                A few things we categorically won&apos;t do.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                "Take money to feature a platform or brand",
                "Publish a recommendation we haven't checked against real data",
                "Staff an engagement with anyone junior to the work",
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

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 rounded-3xl bg-navy-950 p-10 sm:p-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Ready to work with us directly?
                </h2>
                <p className="mt-2 text-white/60 max-w-xl">
                  Every engagement starts with a working session to understand
                  your business before we recommend anything.
                </p>
              </div>
              <Link
                href="/connect"
                className="shrink-0 inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
