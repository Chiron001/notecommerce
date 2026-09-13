import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

export default function StatsBar({ pillarCount }: { pillarCount: number }) {
  const stats = [
    { value: pillarCount, suffix: "", label: "Dedicated practice areas" },
    { value: 100, suffix: "%", label: "Senior-led engagements" },
    { value: 0, suffix: "", label: "Pay-to-play placements" },
  ];

  return (
    <section className="relative bg-noise bg-navy-950">
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {stats.map((s, i) => (
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
