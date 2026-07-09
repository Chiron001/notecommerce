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
      "Meta, Google, and marketplace ads — CAC, incrementality, and what's actually working now.",
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
      "Shopify, Amazon, Flipkart, Blinkit, and Zepto — how each platform actually works, in practice.",
    stat: "30+",
    statLabel: "Platforms covered",
    accent: "emerald",
  },
  {
    slug: "economics-profitability",
    title: "Economics & Profitability",
    description:
      "Unit economics, contribution margins, and fulfilment costs — the math behind sustainable growth.",
    stat: "50+",
    statLabel: "Economics teardowns",
    accent: "amber",
  },
] as const;

export type PillarSlug = (typeof CONTENT_PILLARS)[number]["slug"];
