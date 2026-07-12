import type { Metadata } from "next";
import {
  Mail,
  TrendingUp,
  Users,
  BarChart3,
  Target,
  Layers,
  Calculator,
  Handshake,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ConnectForm from "@/components/connect/ConnectForm";
import { CONTENT_PILLARS } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Connect: NotEcommerce",
  description:
    "Book a consultation with NotEcommerce. Tell us about your business and we'll show you where our research and advisory can move the needle.",
};

const HERO_POINTS = [
  {
    icon: TrendingUp,
    title: "Win and grow, profitably",
    description:
      "From proprietary market intelligence to hands-on execution, we help you move the metrics that actually matter to your P&L.",
  },
  {
    icon: Handshake,
    title: "Work with senior practitioners",
    description:
      "Every engagement is led by operators who've built and scaled ecommerce businesses themselves, not junior analysts.",
  },
  {
    icon: Users,
    title: "Talk to our team",
    description:
      "Tell us about your category, your goals, and the outcome you're chasing. We'll tell you exactly how we can help.",
  },
];

const PILLAR_ICONS: Record<string, typeof BarChart3> = {
  "market-intelligence": BarChart3,
  "brand-growth-strategy": TrendingUp,
  "performance-marketing": Target,
  "customer-retention": Users,
  "ecommerce-platforms": Layers,
  "economics-profitability": Calculator,
};

export default function ConnectPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-noise bg-navy-950 pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                Get In Touch
              </span>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Ecommerce intelligence to{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-violet-400 to-cream-50 bg-clip-text text-transparent">
                  maximize your growth.
                </span>
              </h1>
              <p className="mt-5 text-white/60 leading-relaxed max-w-lg">
                Tell us about your business and we&apos;ll show you exactly
                where our research and advisory can move the needle, from
                market entry to full-funnel execution.
              </p>

              <div className="mt-10 space-y-6">
                {HERO_POINTS.map((point) => (
                  <div key={point.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl glass-dark text-violet-300">
                      <point.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display text-sm font-bold text-white">
                        {point.title}
                      </div>
                      <p className="mt-1 text-sm text-white/50 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="mailto:hello@notecommerce.com"
                className="mt-10 inline-flex items-center gap-2 rounded-full glass-dark px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Or email us at hello@notecommerce.com
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <ConnectForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                How We Can Help
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950">
                Consultancy across every practice area.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTENT_PILLARS.map((pillar, i) => {
              const Icon = PILLAR_ICONS[pillar.slug] ?? Layers;
              return (
                <Reveal key={pillar.slug} delay={(i % 3) * 0.08}>
                  <div className="flex h-full flex-col rounded-2xl bg-cream-50 p-6 ring-1 ring-navy-900/5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 ring-1 ring-navy-900/5">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-navy-950">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
                      {pillar.serviceDescription}
                    </p>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={0.48}>
              <div className="flex h-full flex-col rounded-2xl bg-navy-950 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl glass-dark text-violet-300">
                  <Handshake className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white">
                  Custom Engagement
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Something that doesn&apos;t fit neatly into one practice
                  area? Tell us what you&apos;re working on and we&apos;ll
                  build the right team around it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
