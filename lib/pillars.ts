export const CONTENT_PILLARS = [
  {
    slug: "market-intelligence",
    title: "Market Intelligence",
    description:
      "Category shifts, consumer behavior, and platform dynamics shaping ecommerce in real time.",
    stat: "120+",
    statLabel: "Reports & briefings",
    accent: "emerald",
  },
  {
    slug: "brand-growth-strategy",
    title: "Brand Growth Strategy",
    description:
      "Acquisition, retention, pricing, assortment, and channel mix playbooks for scaling brands.",
    stat: "80+",
    statLabel: "Strategy breakdowns",
    accent: "amber",
  },
  {
    slug: "performance-marketing",
    title: "Performance & Marketing",
    description:
      "Meta, Google, and marketplace ads: CAC, incrementality, and what's actually working right now.",
    stat: "60+",
    statLabel: "Channel deep-dives",
    accent: "violet",
  },
  {
    slug: "customer-retention",
    title: "Customer & Retention",
    description:
      "CRM, lifecycle marketing, and LTV frameworks that turn buyers into repeat customers.",
    stat: "45+",
    statLabel: "Retention frameworks",
    accent: "indigo",
  },
  {
    slug: "ecommerce-platforms",
    title: "Ecommerce Platforms",
    description:
      "Shopify, Amazon, Flipkart, Blinkit, and Zepto: how each platform actually works in practice.",
    stat: "30+",
    statLabel: "Platforms covered",
    accent: "emerald",
  },
  {
    slug: "economics-profitability",
    title: "Economics & Profitability",
    description:
      "Unit economics, contribution margins, and fulfilment costs: the math behind sustainable growth.",
    stat: "50+",
    statLabel: "Economics teardowns",
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
