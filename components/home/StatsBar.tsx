const STATS = [
  { value: "220+", label: "Articles & case studies published" },
  { value: "45+", label: "Marketplaces & platforms covered" },
  { value: "6", label: "Core content pillars" },
  { value: "4", label: "Platforms — IG, X, LinkedIn, FB" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-8 text-center">
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                {s.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-white/50 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
