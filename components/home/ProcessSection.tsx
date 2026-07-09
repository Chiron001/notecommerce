"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    letter: "D",
    name: "Discover",
    description:
      "We track category shifts, platform changes, and consumer behavior in real time — every piece starts with what's actually happening, not assumptions.",
  },
  {
    letter: "D",
    name: "Define",
    description:
      "Raw signals become a clear thesis — what's changing, why it matters, and exactly who needs to act on it.",
  },
  {
    letter: "D",
    name: "Design",
    description:
      "Every piece is structured to be usable immediately — frameworks, checklists, and teardowns, not just commentary.",
  },
  {
    letter: "D",
    name: "Develop",
    description:
      "Frameworks are stress-tested against real brand data and operator interviews before a word gets published.",
  },
  {
    letter: "D",
    name: "Deploy",
    description:
      "Published across long-form articles, weekly briefings, and social — so insights reach you wherever you already are.",
  },
  {
    letter: "D",
    name: "Deliver",
    description:
      "Continuously revisited as markets shift, because a growth playbook from six months ago may already be stale.",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
            How We Work
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Your complete <span className="text-white/40">learning partner.</span>
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Every piece of content we publish moves through the same
            disciplined process — the 6-D Process — so you can trust the
            rigor behind it, every time.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {STEPS.map((step, i) => (
            <button
              key={step.name}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === i
                  ? "bg-white text-navy-950"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {step.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-10 flex flex-col justify-center">
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
          </div>

          <div className="lg:col-span-2 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8">
            <h4 className="font-display text-lg font-bold text-white">
              Written by operators who&apos;ve done the work
            </h4>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              Not theory — content grounded in hands-on ecommerce experience.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Published weekly, every Monday",
                "100% original research & analysis",
                "Continuously updated as markets shift",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="font-display text-xl font-extrabold text-white">6</div>
                <div className="text-[10px] text-white/40 mt-1">Pillars</div>
              </div>
              <div>
                <div className="font-display text-xl font-extrabold text-white">Weekly</div>
                <div className="text-[10px] text-white/40 mt-1">Cadence</div>
              </div>
              <div>
                <div className="font-display text-xl font-extrabold text-white">100%</div>
                <div className="text-[10px] text-white/40 mt-1">Original</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
