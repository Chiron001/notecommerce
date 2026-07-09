import type { PillarSlug } from "./pillars";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  pillar: PillarSlug;
  date: string;
  readTime: string;
  author: { name: string; role: string };
  cover: { from: string; to: string };
  featured?: boolean;
  blocks: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "hul-digital-comeback",
    title: "Inside HUL's Digital Comeback: What Every D2C Brand Can Learn",
    excerpt:
      "How India's largest FMCG player rebuilt its playbook for a digital-first, quick-commerce-driven market — and what founders can steal from it.",
    pillar: "brand-growth-strategy",
    date: "2026-05-18",
    readTime: "8 min read",
    author: { name: "Ananya Rao", role: "Lead Analyst, Brand Strategy" },
    cover: { from: "#16a37a", to: "#0b6b52" },
    featured: true,
    blocks: [
      {
        type: "p",
        text: "For decades, Hindustan Unilever's growth engine ran on general trade — lakhs of kirana stores, a distribution moat few could replicate, and mass-media campaigns built for a pre-digital consumer. That engine still works. But it isn't where growth comes from anymore, and HUL's own strategy shift over the last few years is one of the clearest signals in Indian ecommerce that even category leaders have to rebuild for a digital-first buyer.",
      },
      {
        type: "p",
        text: "What makes the HUL story useful to a D2C founder isn't the scale — it's the sequence. Large incumbents rarely move first on new channels; they move once the channel has proven its economics. Watching where HUL leans in tells you, indirectly, where the consumer already went.",
      },
      {
        type: "h2",
        text: "Quick commerce forced a portfolio rethink" },
      {
        type: "p",
        text: "Ten-minute delivery didn't just add a new channel — it changed what 'assortment' means. On a quick-commerce app, shelf space is a handful of SKUs deep, not a store aisle. That rewards brands with tight, high-velocity portfolios over brands with long tails of variants built for general trade. HUL's response was to prioritise its highest-velocity SKUs for quick commerce placement and treat the channel as a distinct merchandising problem, not a smaller version of modern trade.",
      },
      {
        type: "p",
        text: "The lesson for smaller brands: don't port your general-trade or marketplace assortment into quick commerce unchanged. Build a quick-commerce-specific SKU set around your fastest movers, and treat listing depth as a deliberate decision, not a default.",
      },
      {
        type: "h2",
        text: "Digital-first brands as a build-or-acquire decision" },
      {
        type: "p",
        text: "Rather than trying to out-innovate agile, digital-native challengers from scratch, HUL has used a mix of incubation and acquisition to bring digital-first brand DNA in-house — spanning skincare, personal care, and wellness categories that skew toward younger, online-first buyers. The signal here isn't the M&A itself; it's the admission that digital-first brand building is a distinct skill set from traditional FMCG marketing, one worth acquiring rather than assuming.",
      },
      {
        type: "p",
        text: "For founders, that's validation: the capabilities you're building — fast creative iteration, community-led launches, performance-marketing fluency — aren't a smaller-scale version of what big FMCG does. They're a different discipline entirely, and increasingly the one that decides who wins the next decade of shelf space, physical or digital.",
      },
      {
        type: "h2",
        text: "The takeaway" },
      {
        type: "ul",
        items: [
          "Treat each platform's shelf logic as distinct — quick commerce, marketplaces, and D2C each reward a different assortment strategy.",
          "Velocity beats breadth in constrained-shelf environments. Know your top movers and protect their availability first.",
          "Incumbents entering your channel is a lagging indicator that the channel has already proven itself — use it as a market-sizing signal, not a threat alone.",
        ],
      },
    ],
  },
  {
    slug: "agentic-commerce-2026",
    title: "Agentic Commerce: How AI Shopping Agents Are Rewiring Retail in 2026",
    excerpt:
      "AI agents are starting to browse, compare, and check out on behalf of consumers. Here's what that means for discovery, pricing, and brand strategy.",
    pillar: "market-intelligence",
    date: "2026-06-24",
    readTime: "9 min read",
    author: { name: "Rohan Mehta", role: "Head of Market Intelligence" },
    cover: { from: "#6d5bf0", to: "#3b2f8f" },
    featured: true,
    blocks: [
      {
        type: "p",
        text: "For the first time since the shift from desktop to mobile, the primary interface for shopping is changing again — and this time it isn't a screen format, it's who's doing the browsing. Agentic commerce describes AI agents that search, compare, negotiate, and increasingly check out on a consumer's behalf, acting as a layer between the shopper and the storefront.",
      },
      {
        type: "p",
        text: "Early versions look like smarter shopping assistants: a chat interface that finds you the best pair of running shoes within your budget. The more consequential version, already emerging, is agents that complete the purchase autonomously against a standing set of preferences — reordering household staples, comparing marketplace prices in real time, or executing a wishlist the moment a price threshold is hit.",
      },
      { type: "h2", text: "Discovery stops being a funnel" },
      {
        type: "p",
        text: "Traditional ecommerce discovery is a funnel you can instrument: impression, click, add-to-cart, purchase. Agentic commerce compresses that funnel into a single machine-mediated query. The agent doesn't scroll a feed or get influenced by a banner — it evaluates listings against structured criteria: price, reviews, delivery time, return policy, sustainability claims. Brand storytelling that worked on a human scrolling Instagram doesn't have the same leverage on an agent parsing structured data.",
      },
      {
        type: "p",
        text: "That doesn't make brand irrelevant — it changes where brand equity does its work. If an agent is choosing between functionally similar products, tie-breakers become things like verified review quality, consistent stock availability, and machine-readable trust signals (return rates, delivery reliability) rather than creative alone.",
      },
      { type: "h2", text: "What brands should do now" },
      {
        type: "ul",
        items: [
          "Audit how your product data actually looks to a machine reader — structured attributes, accurate specs, and complete variant data matter more in an agentic world, not less.",
          "Protect the fundamentals agents optimise for: price competitiveness, delivery reliability, and return experience are becoming ranking factors, not just satisfaction metrics.",
          "Watch marketplace-level agent integrations closely — platforms that let agents transact directly will reshape who gets discovered before brand sites do.",
        ],
      },
      {
        type: "p",
        text: "Agentic commerce is early, and predictions about its speed are more reliable than predictions about its exact shape. But the direction is clear enough to act on: the buyer evaluating your product is increasingly not a person scrolling, but a system querying. Build for both.",
      },
    ],
  },
  {
    slug: "india-d2c-brands-scaling-2026",
    title: "The Indian D2C Brands Scaling Fastest in 2026",
    excerpt:
      "A look at the categories and playbooks behind the D2C brands breaking out this year — and the common threads in how they got there.",
    pillar: "market-intelligence",
    date: "2026-04-02",
    readTime: "7 min read",
    author: { name: "Ananya Rao", role: "Lead Analyst, Brand Strategy" },
    cover: { from: "#e58a2a", to: "#a85a12" },
    featured: true,
    blocks: [
      {
        type: "p",
        text: "Every year produces a fresh cohort of D2C brands that go from niche to category-defining in a short window. 2026's breakout brands share less in common on the product side than you'd expect — they span personal care, nutrition, home, and pet categories — but converge hard on go-to-market mechanics.",
      },
      { type: "h2", text: "Category creation over category competition" },
      {
        type: "p",
        text: "The brands scaling fastest right now are rarely competing head-on inside an existing, well-defined category. Instead, they're naming a new sub-category — a specific skin concern, a specific dietary need, a specific pet-care ritual — and becoming the default answer to a question the buyer didn't know how to ask a year earlier. That narrower framing makes performance marketing more efficient, because the ad isn't competing against an established mental model; it's installing a new one.",
      },
      { type: "h2", text: "Quick commerce as a trust signal, not just a channel" },
      {
        type: "p",
        text: "Getting listed on Blinkit, Zepto, or Instamart used to be a distribution decision. Increasingly, it's a trust decision — availability on quick commerce has become a proxy signal for legitimacy, the way being stocked at a well-known retailer used to work. Fast-scaling brands are treating early quick-commerce listings as a credibility unlock for their D2C and marketplace channels, not just an incremental revenue stream.",
      },
      { type: "h2", text: "Retention economics built in from day one" },
      {
        type: "p",
        text: "The brands that plateau after an initial spike almost always share one trait: they built acquisition muscle long before retention muscle. The 2026 breakouts are doing the opposite — subscription mechanics, replenishment reminders, and lifecycle segmentation are live before the brand hits scale, not bolted on afterward once CAC gets expensive.",
      },
      {
        type: "ul",
        items: [
          "Narrow the category before you try to win it — a specific, ownable problem beats a broad, contested one.",
          "Treat quick-commerce availability as a trust and distribution signal simultaneously.",
          "Build retention infrastructure early; it's far cheaper to design in than to retrofit once CAC rises.",
        ],
      },
    ],
  },
  {
    slug: "quick-commerce-platform-playbook",
    title: "Blinkit vs Zepto vs Instamart: A Brand's Platform Playbook",
    excerpt:
      "Each quick-commerce platform rewards a different listing, pricing, and ads strategy. Here's how to think about each one on its own terms.",
    pillar: "ecommerce-platforms",
    date: "2026-03-11",
    readTime: "10 min read",
    author: { name: "Karan Bhatia", role: "Platforms Editor" },
    cover: { from: "#16a37a", to: "#125e44" },
    blocks: [
      {
        type: "p",
        text: "Brands often treat quick commerce as one channel with three storefronts. In practice, Blinkit, Zepto, and Instamart differ enough in ads architecture, dark-store density, and category merchandising that a single copy-pasted strategy underperforms on at least two of the three.",
      },
      { type: "h2", text: "Dark-store density changes what 'in stock' means" },
      {
        type: "p",
        text: "A platform's dark-store density in your target city directly caps your addressable demand — a listing can be perfectly optimised and still underperform simply because the nearest fulfilment node is thin in that pincode. Before optimising creative or pricing, check density in your core cities; it explains more variance in early results than most brands assume.",
      },
      { type: "h2", text: "Ads auction dynamics aren't uniform" },
      {
        type: "p",
        text: "Sponsored placements behave differently across platforms depending on category crowding and auction maturity. A CPC that's efficient on one platform can be mediocre on another purely because fewer competitors are bidding in that category yet. Run small, platform-specific test budgets before committing a unified national spend split evenly across all three.",
      },
      { type: "h2", text: "Pack size and pricing need platform-specific logic" },
      {
        type: "p",
        text: "Quick-commerce buyers skew toward smaller basket sizes and impulse-driven add-ons compared to marketplace or D2C buyers. Brands that introduce a quick-commerce-specific SKU size — smaller, higher perceived value per rupee — consistently outperform those that simply list their standard marketplace pack.",
      },
      {
        type: "ul",
        items: [
          "Map dark-store density by pincode before setting expectations on any single platform.",
          "Test ad spend per platform independently rather than splitting budget evenly by default.",
          "Consider a quick-commerce-specific pack size rather than reusing your marketplace SKU.",
        ],
      },
    ],
  },
  {
    slug: "marketplace-ads-cac-incrementality",
    title: "Marketplace Ads and the Incrementality Trap: Rethinking CAC",
    excerpt:
      "Blended CAC hides more than it reveals. A practical framework for measuring what your marketplace ad spend is actually buying.",
    pillar: "performance-marketing",
    date: "2026-02-19",
    readTime: "8 min read",
    author: { name: "Diya Kapoor", role: "Performance Marketing Lead" },
    cover: { from: "#8b5cf6", to: "#4c2f9b" },
    blocks: [
      {
        type: "p",
        text: "Marketplace advertising has a structural problem that most dashboards paper over: a meaningful share of 'converted' ad clicks would have converted anyway, because the shopper was already searching for your brand or category on that platform. Blended CAC treats every conversion as incremental. It usually isn't.",
      },
      { type: "h2", text: "Branded vs. non-branded is the first cut" },
      {
        type: "p",
        text: "The single highest-leverage change most teams can make is splitting spend and reporting between branded and non-branded keywords or placements. Branded search ads on a marketplace often win a sale you'd have gotten organically — you're paying rent on your own demand. Non-branded placements are where genuine incrementality tends to live, because you're winning attention you wouldn't otherwise have had.",
      },
      { type: "h2", text: "Geo holdouts beat attribution models" },
      {
        type: "p",
        text: "Platform-reported attribution is built by the platform selling you the ads — treat it as directionally useful, not authoritative. A geo holdout test, where you pause spend in a subset of comparable markets and compare sales deltas, gives a cleaner read on true incrementality than any last-click or even multi-touch model a marketplace provides natively.",
      },
      { type: "h2", text: "What a healthier CAC framework looks like" },
      {
        type: "ul",
        items: [
          "Report branded and non-branded CAC separately — never as one blended number.",
          "Run periodic geo or platform holdouts to sanity-check platform-reported incrementality.",
          "Weight budget allocation toward channels with higher measured incrementality, not just lower reported CAC.",
        ],
      },
      {
        type: "p",
        text: "None of this means marketplace ads aren't worth running — for most brands, they clearly are. It means the number on the dashboard and the number that reflects true incremental growth are rarely the same figure, and only one of them should drive budget decisions.",
      },
    ],
  },
  {
    slug: "contribution-margin-teardown",
    title: "The Contribution Margin Teardown Every D2C Founder Needs",
    excerpt:
      "Revenue growth without contribution margin discipline is a countdown clock. A line-by-line framework for knowing your real unit economics.",
    pillar: "economics-profitability",
    date: "2026-01-27",
    readTime: "9 min read",
    author: { name: "Karan Bhatia", role: "Platforms Editor" },
    cover: { from: "#e58a2a", to: "#8f4a10" },
    blocks: [
      {
        type: "p",
        text: "Gross margin tells you almost nothing about whether an order is actually profitable. By the time a product reaches the customer, it's carried payment processing fees, shipping and fulfilment costs, marketplace commissions, returns and reverse logistics, and the marketing spend that acquired the order in the first place. Contribution margin — revenue minus all variable costs tied to that specific order — is the number that tells you whether growth is building the business or quietly draining it.",
      },
      { type: "h2", text: "The line items founders under-count" },
      {
        type: "p",
        text: "Shipping cost is usually tracked. Returns processing, restocking, and the margin lost on damaged or unsellable returned inventory usually isn't — and in categories like apparel and footwear, returns can erase a meaningful share of otherwise-healthy contribution margin. Payment gateway fees, COD collection costs, and marketplace referral fees are similarly easy to under-count because they're deducted before the money ever reaches a bank statement.",
      },
      { type: "h2", text: "Blended contribution margin hides channel reality" },
      {
        type: "p",
        text: "A single blended contribution margin figure across D2C, marketplace, and quick commerce almost always masks the fact that one channel is subsidising another. Marketplace commissions and quick-commerce fulfilment costs typically run higher than D2C, meaning a brand can be reporting healthy blended margins while its fastest-growing channel is quietly unprofitable at the unit level.",
      },
      { type: "h2", text: "Building the teardown" },
      {
        type: "ul",
        items: [
          "Calculate contribution margin per channel, not just blended — D2C, marketplace, and quick commerce have structurally different cost stacks.",
          "Include returns and reverse-logistics costs at the category level, not as a company-wide average.",
          "Treat marketing spend as a variable cost against the specific channel and cohort it acquired, not a top-of-P&L line item.",
        ],
      },
      {
        type: "p",
        text: "Once contribution margin is visible at this level of granularity, growth decisions stop being about top-line revenue and start being about which channels, SKUs, and cohorts are actually worth growing.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getFeaturedArticles() {
  return ARTICLES.filter((a) => a.featured);
}

export function getRelatedArticles(slug: string, pillar: PillarSlug, limit = 3) {
  return ARTICLES.filter((a) => a.slug !== slug && a.pillar === pillar).slice(0, limit);
}
