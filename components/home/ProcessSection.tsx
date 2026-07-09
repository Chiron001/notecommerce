"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { avatarUrl } from "@/lib/images";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    letter: "D",
    name: "Discover",
    description:
      "We keep an eye on category shifts, platform changes, and how people are actually shopping right now. Everything starts from what's happening, not a hunch.",
  },
  {
    letter: "D",
    name: "Define",
    description:
      "Once we've spotted something worth writing about, we work out what's actually changing, why it matters, and who needs to know.",
  },
  {
    letter: "D",
    name: "Design",
    description:
      "We build every piece to be useful on a random Tuesday afternoon. Frameworks and checklists, not just commentary.",
  },
  {
    letter: "D",
    name: "Develop",
    description:
      "Before anything goes out, we run it past real brand data and conversations with people who are actually doing the work.",
  },
  {
    letter: "D",
    name: "Deploy",
    description:
      "It goes out as an article, sometimes a newsletter note, sometimes a quick post on social. Wherever you happen to be reading.",
  },
  {
    letter: "D",
    name: "Deliver",
    description:
      "We come back and update things as markets shift. A playbook from six months ago is often already a little out of date.",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="bg-noise bg-navy-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
              How We Work
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              How we actually{" "}
              <span className="text-white/40">put this together.</span>
            </h2>
            <p className="mt-4 text-white/60 leading-relaxed">
              Every article goes through the same six steps before it gets
              published. We call it the 6-D Process, mostly because it's
              easier to remember than &ldquo;the thing we do every time.&rdquo;
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
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[12, 47, 33].map((id) => (
                  <Image
                    key={id}
                    src={avatarUrl(id)}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full ring-2 ring-navy-950 object-cover"
                  />
                ))}
              </div>
              <h4 className="font-display text-base font-bold text-white">
                Who&apos;s actually writing this
              </h4>
            </div>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              Real operators, not people who just read about ecommerce for a
              living.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "New post most Mondays",
                "We don't recycle other newsletters",
                "We update old pieces when we get something wrong",
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
