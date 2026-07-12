import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { Store, Briefcase, Calendar } from "lucide-react";

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

const STATS = [
  {
    icon: Store,
    value: 45,
    suffix: "+",
    label: "Platforms and marketplaces tracked",
  },
  {
    icon: Briefcase,
    value: 6,
    suffix: "",
    label: "Dedicated practice areas",
  },
  {
    icon: Calendar,
    value: null,
    display: "Weekly",
    label: "Market and policy updates",
  },
];

export default function PlatformCoverage() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Market Coverage
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
              Deep expertise across every platform{" "}
              <span className="text-navy-900/40">that matters.</span>
            </h2>
            <p className="mt-4 text-navy-900/60 leading-relaxed">
              D2C storefronts, marketplaces, and quick commerce apps. Wherever
              your customers are shopping, our research and advisory teams
              are already there.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max gap-3">
            {[...PLATFORMS, ...PLATFORMS].map((platform, i) => (
              <span
                key={i}
                className="shrink-0 rounded-full bg-cream-50 px-5 py-2.5 text-sm font-semibold text-navy-900/80 ring-1 ring-navy-900/10"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-2xl bg-navy-950 p-8 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl glass-dark text-violet-300">
                  <stat.icon className="h-6 w-6" />
                </span>
                {stat.value !== null ? (
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="mt-4 block font-display text-3xl font-extrabold text-white"
                  />
                ) : (
                  <div className="mt-4 font-display text-3xl font-extrabold text-white">
                    {stat.display}
                  </div>
                )}
                <div className="mt-2 text-sm text-white/50">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
