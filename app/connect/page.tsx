import type { Metadata } from "next";
import {
  Mail,
  MessageSquare,
  AlertCircle,
  Handshake,
  Mic,
  Smile,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ConnectForm from "@/components/connect/ConnectForm";

export const metadata: Metadata = {
  title: "Connect: NotEcommerce",
  description:
    "Story tips, corrections, partnerships, or just saying hi. Get in touch with the NotEcommerce team.",
};

const HERO_POINTS = [
  {
    icon: MessageSquare,
    title: "Pitch us a story",
    description:
      "Know something happening in D2C, marketplaces, or quick commerce we should be covering? Send it over.",
  },
  {
    icon: AlertCircle,
    title: "Spot something wrong?",
    description:
      "We update articles when we get things wrong. Tell us what we missed and we'll fix it.",
  },
  {
    icon: Handshake,
    title: "Talk partnerships",
    description:
      "Speaking, interviews, data collabs, whatever. If it's a good fit, we're in.",
  },
];

const REASONS = [
  {
    icon: Mail,
    title: "General questions",
    description: "About a pillar, an article, or anything else on the site.",
  },
  {
    icon: MessageSquare,
    title: "Story tips",
    description: "Something happening in your category we should know about.",
  },
  {
    icon: AlertCircle,
    title: "Corrections",
    description: "Tell us if we got a number or a claim wrong.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Newsletter swaps, co-written pieces, that kind of thing.",
  },
  {
    icon: Mic,
    title: "Speaking & interviews",
    description: "Want one of us on a podcast or panel? Ask.",
  },
  {
    icon: Smile,
    title: "Just say hi",
    description: "No agenda needed. We like hearing from readers.",
  },
];

export default function ConnectPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-noise bg-navy-950 pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                Contact Us
              </span>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Say hi.{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-violet-400 to-cream-50 bg-clip-text text-transparent">
                  We actually read these.
                </span>
              </h1>
              <p className="mt-5 text-white/60 leading-relaxed max-w-lg">
                Story tip, correction, partnership idea, or you just want to
                tell us we got something wrong. This goes to a real inbox,
                not a ticket queue.
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
                Reasons People Write In
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-950">
                What people usually reach out about.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-2xl bg-cream-50 p-6 ring-1 ring-navy-900/5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-indigo-600 ring-1 ring-navy-900/5">
                    <reason.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-950">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
