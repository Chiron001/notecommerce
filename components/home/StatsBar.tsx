import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: 220, suffix: "+", label: "Proprietary reports and case studies" },
  { value: 45, suffix: "+", label: "Marketplaces and platforms tracked" },
  { value: 6, suffix: "", label: "Practice areas" },
  { value: 100, suffix: "%", label: "Independent, data-driven research" },
];

export default function StatsBar() {
  return (
    <section className="relative bg-noise bg-navy-950">
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="px-4 py-8 text-center">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-3xl sm:text-4xl font-extrabold text-white"
                />
                <div className="mt-2 text-xs sm:text-sm text-white/50 leading-snug">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
