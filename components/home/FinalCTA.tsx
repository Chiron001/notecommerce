import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ConnectForm from "@/components/connect/ConnectForm";

const POINTS = [
  "Every recommendation tested against real data, not theory",
  "Independent. Nobody pays us to say nice things about their platform",
  "Senior-led engagements, not junior analysts on a template",
  "We execute alongside your team, not just advise from the sidelines",
];

const NEXT_STEPS = [
  { step: "01", title: "Intro call", text: "30 minutes on your category, channels and goals." },
  { step: "02", title: "Diagnostic", text: "We pinpoint where growth and margin are leaking." },
  { step: "03", title: "Proposal", text: "A scoped plan with clear outcomes and timelines." },
];

export default function FinalCTA({ contactEmail }: { contactEmail?: string }) {
  return (
    <section id="consult" className="relative overflow-hidden bg-mesh py-16 sm:py-24 lg:py-28 scroll-mt-24">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Why Partner With Us"
              title="A growth partner,"
              accent="not just another report."
              subtitle="Anyone can hand you a deck. We build the strategy, then stay in the work with your team until it's actually delivered."
            />

            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-3.5">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-navy-900/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {NEXT_STEPS.map((s) => (
                  <div key={s.step} className="rounded-xl bg-white/80 p-4 ring-1 ring-[color:var(--border-soft)] backdrop-blur">
                    <div className="text-xs font-bold text-gradient">{s.step}</div>
                    <div className="mt-1 text-sm font-semibold text-navy-950">{s.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-[color:var(--ink-muted)]">{s.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ConnectForm contactEmail={contactEmail} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
