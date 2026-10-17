"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, ShieldCheck, TrendingUp } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import TiltCard from "@/components/TiltCard";
import RotatingAccent from "@/components/RotatingAccent";
import type { CaseStudy, Pillar } from "@/payload-types";

// Illustrative numbers for the dashboard preview. They are labelled as a
// sample in the UI and never presented as client results.
const SAMPLE_SHARE = [
  { platform: "Amazon", share: 34, color: "bg-indigo-600" },
  { platform: "Blinkit", share: 27, color: "bg-violet-500" },
  { platform: "Flipkart", share: 21, color: "bg-sky-400" },
  { platform: "Zepto", share: 18, color: "bg-teal-400" },
];

// Kept short: each must fit on one line of the headline, down to phone width.
const ROTATING_WORDS = ["marketplace.", "storefront.", "dark store.", "channel."];

const SAMPLE_TREND = [38, 44, 41, 52, 49, 58, 63, 61, 70, 74, 79, 86];

export default function Hero({
  pillars,
  latestArticle,
}: {
  pillars: Pillar[];
  latestArticle: CaseStudy | null;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const articlePillar =
    latestArticle && typeof latestArticle.pillar === "object" ? (latestArticle.pillar as Pillar) : null;

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-navy-800 ring-1 ring-[color:var(--border-soft)] shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Ecommerce Intelligence &amp; Growth Consultancy
            </span>

            <h1 className="mt-7 font-display text-[2.6rem] sm:text-6xl lg:text-[4.1rem] font-extrabold text-navy-950 leading-[1.04]">
              Grow your ecommerce brand
              <span className="block">
                <RotatingAccent prefix="across every" words={ROTATING_WORDS} />
              </span>
            </h1>

            <p className="mt-6 text-lg text-[color:var(--ink-muted)] leading-relaxed max-w-xl">
              Proprietary market intelligence and senior-led growth strategy,
              with hands-on execution across D2C storefronts, marketplaces and
              quick commerce.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <MagneticButton>
                <Link
                  href="/connect"
                  className="btn-shimmer flex w-full items-center justify-center gap-2 rounded-full gradient-cta px-7 py-4 sm:inline-flex sm:w-auto text-sm font-semibold text-white shadow-glow hover:opacity-95 transition-opacity"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <Link
                href="/articles"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-navy-950 ring-1 ring-[color:var(--border-soft)] shadow-sm hover:ring-indigo-500/40 transition-all"
              >
                <BookOpen className="h-4 w-4 text-indigo-600" />
                Read Our Research
              </Link>
            </div>

            <div className="mt-12">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-900/40">
                Built for
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["D2C brands", "Marketplace sellers", "Quick commerce", "FMCG & enterprise"].map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-navy-900 ring-1 ring-[color:var(--border-soft)]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div style={{ y: cardY }} className="relative mx-auto max-w-lg">
              {/* Dashboard preview */}
              <TiltCard tiltRange={5}>
              <div className="card-elegant card-solid p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-900/40">
                      Category Pulse
                    </div>
                    <div className="mt-1 text-sm font-bold text-navy-950">Share of shelf by platform</div>
                  </div>
                  <span className="rounded-full bg-cream-100 px-2.5 py-1 text-[10px] font-semibold text-indigo-700">
                    Illustrative sample
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {SAMPLE_SHARE.map((row) => (
                    <div key={row.platform} className="flex items-center gap-3">
                      <span className="w-16 text-xs font-medium text-navy-900/70">{row.platform}</span>
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-cream-50">
                        <motion.div
                          className={`h-full rounded-full ${row.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${row.share * 2.4}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        />
                      </div>
                      <span className="w-9 text-right text-xs font-bold text-navy-950">{row.share}%</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-[1fr_auto] items-end gap-4 rounded-xl bg-cream-50 p-4">
                  <div>
                    <div className="text-[11px] font-medium text-navy-900/50">Contribution margin trend</div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-display text-2xl font-extrabold text-navy-950">+12.4 pts</span>
                      <span className="flex items-center gap-0.5 text-[11px] font-semibold text-emerald-600">
                        <TrendingUp className="h-3 w-3" /> 12 mo
                      </span>
                    </div>
                  </div>
                  <div className="flex h-12 items-end gap-1" aria-hidden="true">
                    {SAMPLE_TREND.map((v, i) => (
                      <motion.span
                        key={i}
                        className="w-2 rounded-sm gradient-cta"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.04 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-navy-950 p-4 text-white">
                    <div className="font-display text-2xl font-extrabold">{pillars.length}</div>
                    <div className="mt-1 text-[11px] text-white/60">Practice areas</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 ring-1 ring-[color:var(--border-soft)]">
                    <div className="font-display text-2xl font-extrabold text-navy-950">100%</div>
                    <div className="mt-1 text-[11px] text-navy-900/50">Senior-led</div>
                  </div>
                </div>
              </div>

              </TiltCard>

              {/* Latest real research: floats on larger screens, sits below the card on phones */}
              {latestArticle && (
                <Link
                  href={`/articles/${latestArticle.slug}`}
                  className="animate-float relative mt-4 block sm:absolute sm:mt-0 sm:-top-8 sm:-left-6 sm:max-w-[15rem] rounded-2xl bg-white p-4 shadow-elegant ring-1 ring-[color:var(--border-soft)] hover:ring-indigo-500/40 transition-shadow"
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-600">
                    <BookOpen className="h-3 w-3" />
                    {articlePillar?.title ?? "Latest research"}
                  </div>
                  <div className="mt-1.5 text-xs font-bold leading-snug text-navy-950 line-clamp-2">
                    {latestArticle.title}
                  </div>
                </Link>
              )}

              {/* Floating: independence commitment */}
              <div className="animate-float-delayed absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3 rounded-2xl bg-navy-950 px-4 py-3 shadow-elegant">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                </span>
                <div>
                  <div className="text-sm font-bold text-white">0 pay-to-play</div>
                  <div className="text-[10px] text-white/50">Independent recommendations</div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
