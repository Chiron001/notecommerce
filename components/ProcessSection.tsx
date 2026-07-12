"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    letter: "D",
    name: "Discover",
    description:
      "We map category shifts, competitive dynamics, and consumer behavior in real time. Every engagement, and every report we publish, starts from evidence, not assumptions.",
  },
  {
    letter: "D",
    name: "Define",
    description:
      "Raw signal becomes a clear, prioritized thesis: what's actually changing, why it matters, and precisely what to do about it.",
  },
  {
    letter: "D",
    name: "Design",
    description:
      "We architect frameworks and roadmaps built for execution, not analysis for its own sake. Every deliverable is built to be acted on.",
  },
  {
    letter: "D",
    name: "Develop",
    description:
      "Every recommendation is stress-tested against real data and hands-on operating experience before it reaches a client or a reader.",
  },
  {
    letter: "D",
    name: "Deploy",
    description:
      "Strategy becomes execution: campaigns launched, platforms optimized, teams enabled. We stay in the work, not just the deck.",
  },
  {
    letter: "D",
    name: "Deliver",
    description:
      "We track results and refine the approach continuously. A strategy that was right six months ago may already need to change.",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-noise bg-navy-950 pt-32 pb-24 lg:pt-40">
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
              Our Methodology
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              A rigorous, repeatable{" "}
              <span className="text-white/40">methodology.</span>
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Every engagement, and every piece of intelligence we publish,
              moves through the same disciplined process. We call it the 6-D
              Methodology.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {STEPS.map((step, i) => (
              <button
                key={step.name}
                onClick={() => setActive(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === i
                    ? "bg-white text-navy-950"
                    : "glass-dark text-white/60 hover:text-white"
                }`}
              >
                {step.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-10 flex flex-col justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 font-display text-xl font-extrabold text-white">
                    {STEPS[active].letter}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {STEPS[active].name}
                  </h3>
                </div>
                <p className="mt-6 text-white/85 leading-relaxed text-lg">
                  {STEPS[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-2 rounded-3xl glass-dark p-8">
            <h4 className="font-display text-base font-bold text-white">
              Senior-led. Every engagement.
            </h4>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Every engagement is led by practitioners who have built and
              scaled ecommerce businesses themselves, not junior analysts
              running a template.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Senior-led engagements, always",
                "Proprietary research, not recycled data",
                "Continuously refined as markets shift",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
