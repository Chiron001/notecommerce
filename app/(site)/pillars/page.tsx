import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PILLAR_ACCENT_STYLES } from "@/lib/pillarAccents";
import { getAllPillars } from "@/lib/payload";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { resolvePageMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("pillars", {
    title: "Expertise: NotEcommerce",
    description:
      "Six practice areas spanning market intelligence, growth strategy, performance marketing, retention, platform operations, and unit economics.",
  });
}

export default async function PillarsIndexPage() {
  const pillars = await getAllPillars();

  return (
    <section className="relative overflow-hidden bg-cream-50 pt-32 pb-20 lg:pt-40">
      <div className="absolute inset-0 gradient-hero-blob pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Our Expertise
            </span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
              Six practice areas. One growth partner.
            </h1>
            <p className="mt-5 text-lg text-navy-900/70 leading-relaxed">
              Every engagement, and every piece of intelligence we publish,
              draws on deep, proprietary expertise across ecommerce&apos;s
              most critical growth levers. Explore a practice area to see the
              research and the advisory work behind it.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const accent = PILLAR_ACCENT_STYLES[pillar.accent] ?? PILLAR_ACCENT_STYLES.indigo;
            return (
              <Reveal key={pillar.slug} delay={(i % 3) * 0.08}>
                <TiltCard tiltRange={4}>
                  <Link
                    href={`/pillars/${pillar.slug}`}
                    className="group relative flex h-full flex-col rounded-2xl bg-white/85 backdrop-blur-sm p-7 ring-1 ring-navy-900/10 hover:ring-navy-900/20 hover:-translate-y-1 transition-all shadow-sm hover:shadow-lg"
                  >
                    <span className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl ${accent.bar}`} />
                    <div className="flex items-start justify-between">
                      <span className={`inline-flex rounded-lg ${accent.chip} px-2.5 py-1 text-[11px] font-bold ${accent.text}`}>
                        {pillar.stat} {pillar.statLabel}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-navy-900/30 group-hover:text-navy-900 transition-colors" />
                    </div>
                    <h2 className="mt-4 font-display text-xl font-bold text-navy-950">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-sm text-navy-900/60 leading-relaxed flex-1">
                      {pillar.serviceDescription}
                    </p>
                    <span className="mt-5 text-xs font-semibold text-navy-900/40 group-hover:text-indigo-600 transition-colors">
                      View research and advisory work &rarr;
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-navy-950 p-10">
            <div>
              <h3 className="font-display text-xl font-bold text-white">
                Not sure which practice area fits your problem?
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Tell us what you&apos;re working on and we&apos;ll point you to the right team.
              </p>
            </div>
            <Link
              href="/connect"
              className="shrink-0 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Talk to Our Team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
