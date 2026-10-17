"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PILLAR_ACCENT_STYLES } from "@/lib/pillarAccents";
import { PillarIcon } from "@/lib/pillarIcons";
import type { Pillar } from "@/payload-types";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SwipeProgress from "@/components/SwipeProgress";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function ContentPillars({ pillars }: { pillars: Pillar[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isCarousel = !useMediaQuery("(min-width: 640px)");

  return (
    <section id="pillars" className="bg-white pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Expertise"
          title={`${pillars.length} practice areas,`}
          accent="one growth partner."
          subtitle="Every engagement, and every report we publish, draws on deep expertise across ecommerce's most critical growth levers."
          link={{ href: "/pillars", label: "Explore all practice areas" }}
        />

        <div
          ref={scrollRef}
          className="mt-14 -mx-6 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto scroll-smooth px-6 pb-4 no-scrollbar scroll-pl-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
        >
          {pillars.map((pillar, i) => {
            const accent = PILLAR_ACCENT_STYLES[pillar.accent] ?? PILLAR_ACCENT_STYLES.indigo;
            return (
              <Reveal
                key={pillar.slug}
                delay={(i % 3) * 0.08}
                triggerOnMount={isCarousel}
                className="w-[82%] shrink-0 snap-start sm:w-auto"
              >
                <Link
                  href={`/pillars/${pillar.slug}`}
                  className="group card-elegant card-elegant-hover flex h-full flex-col overflow-hidden"
                >
                  <div className={`relative bg-gradient-to-br ${accent.tint} px-6 pt-6 pb-5`}>
                    <span className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`} />
                    <div className="flex items-start justify-between">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lg ${accent.icon}`}>
                        <PillarIcon slug={pillar.slug} className="h-5 w-5" />
                      </span>
                      <span className={`rounded-full bg-white/80 px-2.5 py-1 text-[11px] font-bold ${accent.text}`}>
                        {pillar.stat}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-navy-950">{pillar.title}</h3>
                  </div>
                  <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
                    <p className="flex-1 text-sm leading-relaxed text-[color:var(--ink-muted)]">
                      {pillar.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-[color:var(--border-soft)] pt-4">
                      <span className="text-xs font-medium text-navy-900/45">{pillar.statLabel}</span>
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold ${accent.text}`}>
                        Explore
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <SwipeProgress
          scrollRef={scrollRef}
          count={pillars.length}
          className="mt-5 sm:hidden"
        />
      </div>
    </section>
  );
}
