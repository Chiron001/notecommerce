import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { PLATFORMS } from "@/lib/platforms";

export default function StatsBar({ pillarCount }: { pillarCount: number }) {
  const stats = [
    { value: pillarCount, suffix: "", label: "Dedicated practice areas", sub: "From P&L to retention" },
    { value: PLATFORMS.length, suffix: "", label: "Platforms we track", sub: "Marketplaces & quick commerce" },
    { value: 100, suffix: "%", label: "Senior-led engagements", sub: "No junior handoffs" },
    { value: 0, suffix: "", label: "Pay-to-play placements", sub: "Independent by design" },
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-10 relative z-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-mesh-dark shadow-elegant ring-1 ring-white/10">
            <div className="absolute inset-0 bg-grid-dark pointer-events-none opacity-60" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`border-white/10 px-5 py-7 sm:px-7 ${i % 2 === 0 ? "border-r" : ""} ${
                    i < 2 ? "border-b lg:border-b-0" : ""
                  } ${i === 1 ? "lg:border-r" : ""} ${i === 3 ? "" : "lg:border-r"}`}
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                    {s.label}
                  </div>
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="mt-2 block font-display text-3xl sm:text-4xl font-extrabold text-white"
                  />
                  <div className="mt-1 text-xs text-white/50">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
