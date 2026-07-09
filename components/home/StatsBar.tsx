import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: 220, suffix: "+", label: "Articles and case studies published" },
  { value: 45, suffix: "+", label: "Marketplaces and platforms covered" },
  { value: 6, suffix: "", label: "Core content pillars" },
  { value: 4, suffix: "", label: "Places you can find us: IG, X, LinkedIn, FB" },
];

export default function StatsBar() {
  return (
    <section className="bg-noise bg-navy-950">
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
