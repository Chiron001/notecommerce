export const CONTENT_PILLARS = [
  {
    slug: "market-intelligence",
    title: "Market Intelligence",
    description:
      "Proprietary research into category shifts, consumer behavior, and platform dynamics, delivered as intelligence, not commentary.",
    serviceDescription:
      "We run continuous, proprietary research programs so your team makes category decisions on evidence, not instinct. Category tracking, competitive benchmarking, and demand forecasting, built around the markets you actually operate in.",
    stat: "120+",
    statLabel: "Reports & briefings",
    accent: "emerald",
  },
  {
    slug: "brand-growth-strategy",
    title: "Brand Growth Strategy",
    description:
      "End-to-end growth strategy across acquisition, retention, pricing, assortment, and channel mix.",
    serviceDescription:
      "We design and execute the growth strategy, not just the slide deck. Acquisition architecture, pricing and assortment strategy, and channel mix, built with your team and carried through to execution.",
    stat: "80+",
    statLabel: "Strategy engagements",
    accent: "amber",
  },
  {
    slug: "performance-marketing",
    title: "Performance & Marketing",
    description:
      "Full-funnel performance marketing across Meta, Google, and marketplace ads, engineered for measurable incrementality.",
    serviceDescription:
      "Our media team manages spend across Meta, Google, and marketplace ads with a single mandate: provable incrementality. No blended CAC theater, no vanity metrics.",
    stat: "60+",
    statLabel: "Channel engagements",
    accent: "violet",
  },
  {
    slug: "customer-retention",
    title: "Customer & Retention",
    description:
      "CRM, lifecycle marketing, and LTV infrastructure that turns first-time buyers into your most valuable customers.",
    serviceDescription:
      "We build the CRM and lifecycle infrastructure your growth actually depends on: segmentation, retention flows, and LTV modeling designed to compound, not just convert.",
    stat: "45+",
    statLabel: "Retention programs",
    accent: "indigo",
  },
  {
    slug: "ecommerce-platforms",
    title: "Ecommerce Platforms",
    description:
      "Deep operating expertise across Shopify, Amazon, Flipkart, Blinkit, and Zepto, from setup to ongoing optimization.",
    serviceDescription:
      "From storefront architecture to marketplace operations, our platform specialists run day-to-day execution across Shopify, Amazon, Flipkart, Blinkit, and Zepto so your team doesn't have to become platform experts themselves.",
    stat: "30+",
    statLabel: "Platforms managed",
    accent: "emerald",
  },
  {
    slug: "economics-profitability",
    title: "Economics & Profitability",
    description:
      "Unit economics and contribution margin modeling that shows exactly where to invest, and where to stop.",
    serviceDescription:
      "We build the contribution margin models your finance team wishes it had: channel-level, cohort-level, and built to inform real capital allocation decisions, not just quarterly reporting.",
    stat: "50+",
    statLabel: "Economics engagements",
    accent: "amber",
  },
] as const;

export type PillarSlug = (typeof CONTENT_PILLARS)[number]["slug"];

export const PILLAR_ACCENT_STYLES: Record<
  string,
  { bar: string; text: string; chip: string }
> = {
  emerald: { bar: "bg-emerald-500", text: "text-emerald-600", chip: "bg-emerald-500/10" },
  amber: { bar: "bg-amber-500", text: "text-amber-600", chip: "bg-amber-500/10" },
  violet: { bar: "bg-violet-500", text: "text-violet-600", chip: "bg-violet-500/10" },
  indigo: { bar: "bg-indigo-600", text: "text-indigo-600", chip: "bg-indigo-600/10" },
};

export function getPillarBySlug(slug: string) {
  return CONTENT_PILLARS.find((p) => p.slug === slug);
}
