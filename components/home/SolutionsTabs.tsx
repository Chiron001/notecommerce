"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, ShoppingBag, Store, Zap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import type { Pillar } from "@/payload-types";

const AUDIENCES = [
  {
    key: "d2c",
    label: "D2C Brands",
    icon: ShoppingBag,
    headline: "Profitable growth on your own storefront",
    description:
      "For founders who have found product-market fit and now need growth that survives a hard look at contribution margin.",
    challenges: [
      "CAC rising faster than repeat revenue",
      "Unclear unit economics by channel and SKU",
      "Retention treated as a campaign, not a system",
    ],
    pillars: ["economics-profitability", "customer-retention", "performance-marketing"],
  },
  {
    key: "marketplace",
    label: "Marketplace Sellers",
    icon: Store,
    headline: "Win the shelf on Amazon, Flipkart and beyond",
    description:
      "For brands where marketplaces drive the bulk of revenue, and where ads, content and pricing decide who gets found.",
    challenges: [
      "Ad spend that buys sales you would have made anyway",
      "Listings, content and ratings lagging category leaders",
      "Margin leaking through fees, returns and discounting",
    ],
    pillars: ["ecommerce-platforms", "performance-marketing", "economics-profitability"],
  },
  {
    key: "quick-commerce",
    label: "Quick Commerce",
    icon: Zap,
    headline: "Get the dark-store playbook right",
    description:
      "For brands scaling on Blinkit, Zepto and Instamart, where availability, visibility and city-level economics move every week.",
    challenges: [
      "Stock-outs and patchy availability across dark stores",
      "Choosing which platforms and cities to prioritise",
      "Visibility costs eroding quick commerce margins",
    ],
    pillars: ["ecommerce-platforms", "market-intelligence", "economics-profitability"],
  },
  {
    key: "enterprise",
    label: "FMCG & Enterprise",
    icon: Building2,
    headline: "Digital-first growth for established brands",
    description:
      "For large brands building an ecommerce engine alongside general trade, who need independent intelligence to guide the investment.",
    challenges: [
      "Ecommerce strategy fragmented across teams and agencies",
      "Little independent view of category and competitor moves",
      "Proving digital ROI to leadership",
    ],
    pillars: ["market-intelligence", "brand-growth-strategy", "ecommerce-platforms"],
  },
];

export default function SolutionsTabs({ pillars }: { pillars: Pillar[] }) {
  const [activeKey, setActiveKey] = useState(AUDIENCES[0].key);
  const active = AUDIENCES.find((a) => a.key === activeKey) ?? AUDIENCES[0];
  const bySlug = new Map(pillars.map((p) => [p.slug, p]));
  const relatedPillars = active.pillars.map((slug) => bySlug.get(slug)).filter((p): p is Pillar => Boolean(p));

  return (
    <section className="relative overflow-hidden bg-mesh-dark py-24 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          dark
          align="center"
          eyebrow="Solutions"
          title="Your growth challenge,"
          accent="solved for your model."
          subtitle="The levers that matter for a D2C founder are not the ones that matter for a quick commerce brand. Pick yours."
        />

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Choose your business model"
            className="mx-auto mt-12 flex max-w-3xl gap-2 overflow-x-auto rounded-full bg-white/5 p-1.5 ring-1 ring-white/10 no-scrollbar"
          >
            {AUDIENCES.map((a) => {
              const selected = a.key === activeKey;
              return (
                <button
                  key={a.key}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`solution-panel-${a.key}`}
                  id={`solution-tab-${a.key}`}
                  onClick={() => setActiveKey(a.key)}
                  className={`relative flex flex-1 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                    selected ? "text-navy-950" : "text-white/65 hover:text-white"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="solution-tab-pill"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <a.icon className="relative h-4 w-4" />
                  <span className="relative">{a.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              id={`solution-panel-${active.key}`}
              role="tabpanel"
              aria-labelledby={`solution-tab-${active.key}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 backdrop-blur-xl sm:p-10 lg:grid-cols-[1.1fr_1fr]"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-cta text-white shadow-glow">
                  <active.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl sm:text-3xl font-bold text-white">{active.headline}</h3>
                <p className="mt-4 leading-relaxed text-white/65">{active.description}</p>

                <div className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  What we typically solve
                </div>
                <ul className="mt-4 space-y-3">
                  {active.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-white/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {c}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/connect"
                  className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-cream-50 transition-colors"
                >
                  Talk to us about {active.label.toLowerCase()}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  Where we focus
                </div>
                {relatedPillars.map((p, i) => (
                  <Link
                    key={p.slug}
                    href={`/pillars/${p.slug}`}
                    className="group flex items-start gap-4 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 transition-all hover:bg-white/[0.09] hover:ring-white/20"
                  >
                    <span className="font-display text-sm font-bold text-indigo-500">0{i + 1}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{p.title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-white/55 line-clamp-2">{p.description}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
