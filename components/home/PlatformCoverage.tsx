const PLATFORMS = [
  "Shopify",
  "Amazon",
  "Flipkart",
  "Blinkit",
  "Zepto",
  "Instamart",
  "Meesho",
  "Myntra",
  "Nykaa",
  "Ajio",
  "BigBasket",
  "JioMart",
];

const COVERAGE_STATS = [
  { value: "45+", label: "Platforms & marketplaces tracked" },
  { value: "6", label: "Categories of ecommerce covered" },
  { value: "Weekly", label: "Platform & policy updates" },
];

export default function PlatformCoverage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Platform Coverage
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
            We track every platform{" "}
            <span className="text-navy-900/40">that matters.</span>
          </h2>
          <p className="mt-4 text-navy-900/60 leading-relaxed">
            From D2C storefronts to marketplaces and quick commerce — our
            coverage spans the platforms your customers already shop on.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {PLATFORMS.map((platform) => (
            <span
              key={platform}
              className="rounded-full bg-cream-50 px-5 py-2.5 text-sm font-semibold text-navy-900/80 ring-1 ring-navy-900/10"
            >
              {platform}
            </span>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {COVERAGE_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-navy-950 p-8 text-center"
            >
              <div className="font-display text-3xl font-extrabold text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
