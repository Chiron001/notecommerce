import { getPayload } from "payload";
import config from "../payload.config";

type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

function textNode(text: string) {
  return {
    type: "text",
    text,
    format: 0,
    detail: 0,
    mode: "normal",
    style: "",
    version: 1,
  };
}

function blocksToLexical(blocks: ArticleBlock[]) {
  const children = blocks.map((block) => {
    if (block.type === "h2") {
      return {
        type: "heading",
        tag: "h2",
        children: [textNode(block.text)],
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
      };
    }
    if (block.type === "ul") {
      return {
        type: "list",
        listType: "bullet",
        tag: "ul",
        start: 1,
        children: block.items.map((item, i) => ({
          type: "listitem",
          value: i + 1,
          children: [textNode(item)],
          direction: "ltr",
          format: "",
          indent: 0,
          version: 1,
        })),
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
      };
    }
    return {
      type: "paragraph",
      children: [textNode(block.text)],
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    };
  });

  return {
    root: {
      type: "root",
      children,
      direction: "ltr" as const,
      format: "" as const,
      indent: 0,
      version: 1,
    },
  };
}

const PILLARS = [
  {
    slug: "market-intelligence",
    title: "Market Intelligence",
    description:
      "Proprietary research into category shifts, consumer behavior, and platform dynamics, delivered as intelligence, not commentary.",
    serviceDescription:
      "We run continuous, proprietary research programs so your team makes category decisions on evidence, not instinct. Category tracking, competitive benchmarking, and demand forecasting, built around the markets you actually operate in.",
    stat: "120+",
    statLabel: "Reports & briefings",
    accent: "emerald" as const,
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
    accent: "amber" as const,
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
    accent: "violet" as const,
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
    accent: "indigo" as const,
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
    accent: "emerald" as const,
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
    accent: "amber" as const,
  },
];

const ARTICLES: {
  slug: string;
  title: string;
  excerpt: string;
  pillar: string;
  date: string;
  readTime: string;
  author: { name: string; role: string };
  cover: { from: string; to: string };
  featured?: boolean;
  blocks: ArticleBlock[];
}[] = [
  {
    slug: "hul-digital-comeback",
    title: "Inside HUL's Digital Comeback: What Every D2C Brand Can Learn",
    excerpt:
      "How India's largest FMCG player rebuilt its playbook for a digital first, quick commerce driven market, and what founders can steal from it.",
    pillar: "brand-growth-strategy",
    date: "2026-05-18",
    readTime: "8 min read",
    author: { name: "Ananya Rao", role: "Lead Analyst, Brand Strategy" },
    cover: { from: "#16a37a", to: "#0b6b52" },
    featured: true,
    blocks: [
      {
        type: "p",
        text: "For decades, Hindustan Unilever's growth engine ran on general trade. Lakhs of kirana stores, a distribution moat almost nobody could replicate, and mass media campaigns built for a buyer who hadn't gone online yet. That engine still works, honestly. It just isn't where growth comes from anymore, and HUL's own strategy shift over the last few years is one of the clearest signals in Indian ecommerce that even the biggest category leaders have to rebuild for a digital first buyer.",
      },
      {
        type: "p",
        text: "What makes the HUL story useful to a D2C founder isn't the scale. It's the sequence. Large incumbents rarely move first on a new channel. They move once the channel has already proven its economics, which is exactly why watching where HUL leans in tells you, indirectly, where the consumer already went.",
      },
      { type: "h2", text: "Quick commerce forced a portfolio rethink" },
      {
        type: "p",
        text: "Ten minute delivery didn't just add a new channel. It changed what 'assortment' even means. On a quick commerce app, shelf space is a handful of SKUs deep, not a full store aisle. That rewards brands with tight, high velocity portfolios over brands carrying long tails of variants built for general trade. HUL's response was to prioritise its highest velocity SKUs for quick commerce placement and treat the channel as its own merchandising problem, not a smaller version of modern trade.",
      },
      {
        type: "p",
        text: "The lesson for smaller brands is simple to say and easy to skip: don't port your general trade or marketplace assortment into quick commerce unchanged. Build a quick commerce specific SKU set around your fastest movers, and treat listing depth as a decision you actually make, not a default you inherit.",
      },
      { type: "h2", text: "Digital first brands as a build or acquire decision" },
      {
        type: "p",
        text: "Rather than trying to out innovate agile, digital native challengers from scratch, HUL has leaned on a mix of incubation and acquisition to bring digital first brand DNA in house, spanning skincare, personal care, and wellness categories that skew toward younger, online first buyers. The interesting part isn't the M&A itself. It's the admission that digital first brand building is a distinct skill, one worth acquiring rather than assuming you already have it.",
      },
      {
        type: "p",
        text: "For founders, that's a bit of validation. The things you're building, fast creative iteration, community led launches, a real feel for performance marketing, aren't a smaller scale version of what big FMCG does. They're a different discipline entirely, and increasingly the one that decides who wins shelf space next, physical or digital.",
      },
      { type: "h2", text: "The takeaway" },
      {
        type: "ul",
        items: [
          "Treat each platform's shelf logic as its own thing. Quick commerce, marketplaces, and D2C each reward a different assortment strategy.",
          "Velocity beats breadth when shelf space is limited. Know your top movers and protect their availability first.",
          "A big incumbent entering your channel is a lagging indicator, not a threat alone. It usually means the channel has already proven itself.",
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
        text: "For the first time since the shift from desktop to mobile, the way people shop is changing again, and this time it isn't a screen format. It's who's actually doing the browsing. Agentic commerce describes AI agents that search, compare, negotiate, and increasingly check out on a consumer's behalf, sitting as a layer between the shopper and the storefront.",
      },
      {
        type: "p",
        text: "Early versions look like smarter shopping assistants: a chat window that finds you a decent pair of running shoes within budget. The more consequential version, and it's already showing up, is agents that complete purchases on their own against a standing set of preferences. Reordering household staples, comparing marketplace prices in real time, or executing a wishlist the moment a price hits a threshold you set weeks ago.",
      },
      { type: "h2", text: "Discovery stops being a funnel" },
      {
        type: "p",
        text: "Traditional ecommerce discovery is a funnel you can instrument: impression, click, add to cart, purchase. Agentic commerce compresses that into a single machine mediated query. The agent doesn't scroll a feed or notice a banner ad. It evaluates listings against structured criteria: price, reviews, delivery time, return policy, sustainability claims. Brand storytelling that works on a human scrolling Instagram just doesn't carry the same weight with an agent parsing structured data.",
      },
      {
        type: "p",
        text: "That doesn't make brand irrelevant, but it does move where brand equity actually does its work. When an agent is choosing between functionally similar products, the tie breakers become things like verified review quality, consistent stock availability, and machine readable trust signals such as return rates and delivery reliability, rather than creative alone.",
      },
      { type: "h2", text: "What brands should do now" },
      {
        type: "ul",
        items: [
          "Audit how your product data actually looks to a machine reader. Structured attributes, accurate specs, and complete variant data matter more in an agentic world, not less.",
          "Protect the fundamentals agents optimise for. Price competitiveness, delivery reliability, and return experience are becoming ranking factors, not just satisfaction metrics.",
          "Watch marketplace level agent integrations closely. Platforms that let agents transact directly will reshape who gets discovered before a brand's own site does.",
        ],
      },
      {
        type: "p",
        text: "Agentic commerce is still early, and honestly predictions about its speed are more reliable than predictions about its exact shape. But the direction is clear enough to act on now: the buyer evaluating your product is increasingly not a person scrolling, but a system querying. Worth building for both.",
      },
    ],
  },
  {
    slug: "india-d2c-brands-scaling-2026",
    title: "The Indian D2C Brands Scaling Fastest in 2026",
    excerpt:
      "A look at the categories and playbooks behind the D2C brands breaking out this year, and the common threads in how they got there.",
    pillar: "market-intelligence",
    date: "2026-04-02",
    readTime: "7 min read",
    author: { name: "Ananya Rao", role: "Lead Analyst, Brand Strategy" },
    cover: { from: "#e58a2a", to: "#a85a12" },
    featured: true,
    blocks: [
      {
        type: "p",
        text: "Every year produces a fresh batch of D2C brands that go from niche to category defining in a short window. This year's breakouts share less in common on the product side than you'd expect. They span personal care, nutrition, home, and pet categories, but they converge hard on how they actually go to market.",
      },
      { type: "h2", text: "Category creation over category competition" },
      {
        type: "p",
        text: "The brands scaling fastest right now are rarely competing head on inside an existing, well defined category. Instead, they name a new sub category, a specific skin concern, a specific dietary need, a specific pet care ritual, and become the default answer to a question the buyer didn't even know how to ask a year earlier. That narrower framing makes performance marketing more efficient too, because the ad isn't fighting an established mental model. It's installing a new one from scratch.",
      },
      { type: "h2", text: "Quick commerce as a trust signal, not just a channel" },
      {
        type: "p",
        text: "Getting listed on Blinkit, Zepto, or Instamart used to be purely a distribution decision. Increasingly it's a trust decision. Availability on quick commerce has become a proxy for legitimacy, the same way being stocked at a well known retailer used to work. Fast scaling brands are treating early quick commerce listings as a credibility unlock for their D2C and marketplace channels, not just another revenue line.",
      },
      { type: "h2", text: "Retention economics built in from day one" },
      {
        type: "p",
        text: "The brands that plateau after an initial spike almost always share one trait: they built acquisition muscle long before they built retention muscle. This year's breakouts are doing the opposite. Subscription mechanics, replenishment reminders, and lifecycle segmentation are live before the brand hits real scale, not bolted on after CAC starts getting expensive.",
      },
      {
        type: "ul",
        items: [
          "Narrow the category before you try to win it. A specific, ownable problem beats a broad, contested one.",
          "Treat quick commerce availability as a trust signal and a distribution channel at the same time.",
          "Build retention infrastructure early. It's a lot cheaper to design in from the start than to retrofit once CAC rises.",
        ],
      },
    ],
  },
  {
    slug: "quick-commerce-platform-playbook",
    title: "Blinkit vs Zepto vs Instamart: A Brand's Platform Playbook",
    excerpt:
      "Each quick commerce platform rewards a different listing, pricing, and ads strategy. Here's how to think about each one on its own terms.",
    pillar: "ecommerce-platforms",
    date: "2026-03-11",
    readTime: "10 min read",
    author: { name: "Karan Bhatia", role: "Platforms Editor" },
    cover: { from: "#16a37a", to: "#125e44" },
    blocks: [
      {
        type: "p",
        text: "Brands often treat quick commerce as one channel with three storefronts attached. In practice, Blinkit, Zepto, and Instamart differ enough in ads architecture, dark store density, and category merchandising that copy pasting one strategy across all three tends to underperform on at least two of them.",
      },
      { type: "h2", text: "Dark store density changes what 'in stock' means" },
      {
        type: "p",
        text: "A platform's dark store density in your target city directly caps your addressable demand. A listing can be perfectly optimised and still underperform simply because the nearest fulfilment node is thin in that pincode. Before touching creative or pricing, check density in your core cities first. It quietly explains more of the variance in early results than most brands assume.",
      },
      { type: "h2", text: "Ads auction dynamics aren't uniform" },
      {
        type: "p",
        text: "Sponsored placements behave differently across platforms depending on category crowding and how mature the ad auction is. A CPC that's cheap and efficient on one platform can be mediocre on another simply because fewer competitors happen to be bidding in that category yet. Run small, platform specific test budgets before committing a national spend split evenly across all three out of habit.",
      },
      { type: "h2", text: "Pack size and pricing need platform specific logic" },
      {
        type: "p",
        text: "Quick commerce buyers skew toward smaller basket sizes and more impulse driven add ons compared to marketplace or D2C buyers. Brands that introduce a quick commerce specific SKU size, smaller, priced to feel like better value per rupee, consistently outperform the ones that just list their standard marketplace pack and hope.",
      },
      {
        type: "ul",
        items: [
          "Map dark store density by pincode before setting expectations on any single platform.",
          "Test ad spend per platform independently rather than splitting budget evenly by default.",
          "Consider a quick commerce specific pack size rather than reusing your marketplace SKU as is.",
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
        text: "Marketplace advertising has a structural problem most dashboards quietly paper over: a meaningful share of 'converted' ad clicks would have converted anyway, because the shopper was already searching for your brand or category on that platform. Blended CAC treats every conversion as incremental. Usually it isn't.",
      },
      { type: "h2", text: "Branded vs. non branded is the first cut" },
      {
        type: "p",
        text: "The single highest leverage change most teams can make is splitting spend and reporting between branded and non branded keywords or placements. Branded search ads on a marketplace often just win a sale you'd have gotten organically anyway. You're paying rent on your own demand. Non branded placements are where genuine incrementality tends to live, because you're winning attention you wouldn't otherwise have had at all.",
      },
      { type: "h2", text: "Geo holdouts beat attribution models" },
      {
        type: "p",
        text: "Platform reported attribution is built by the same platform selling you the ads, so treat it as directionally useful, not authoritative. A geo holdout test, where you pause spend in a subset of comparable markets and compare sales deltas, gives a cleaner read on true incrementality than any last click or even multi touch model a marketplace hands you natively.",
      },
      { type: "h2", text: "What a healthier CAC framework looks like" },
      {
        type: "ul",
        items: [
          "Report branded and non branded CAC separately. Never as one blended number.",
          "Run periodic geo or platform holdouts to sanity check platform reported incrementality.",
          "Weight budget allocation toward channels with higher measured incrementality, not just a lower reported CAC.",
        ],
      },
      {
        type: "p",
        text: "None of this means marketplace ads aren't worth running. For most brands they clearly are. It just means the number on the dashboard and the number that reflects true incremental growth are rarely the same figure, and only one of them should actually be driving budget decisions.",
      },
    ],
  },
  {
    slug: "contribution-margin-teardown",
    title: "The Contribution Margin Teardown Every D2C Founder Needs",
    excerpt:
      "Revenue growth without contribution margin discipline is a countdown clock. A line by line framework for knowing your real unit economics.",
    pillar: "economics-profitability",
    date: "2026-01-27",
    readTime: "9 min read",
    author: { name: "Karan Bhatia", role: "Platforms Editor" },
    cover: { from: "#e58a2a", to: "#8f4a10" },
    blocks: [
      {
        type: "p",
        text: "Gross margin tells you almost nothing about whether an order is actually profitable. By the time a product reaches the customer, it's carried payment processing fees, shipping and fulfilment costs, marketplace commissions, returns and reverse logistics, and the marketing spend that acquired the order in the first place. Contribution margin, revenue minus all the variable costs tied to that specific order, is the number that actually tells you whether growth is building the business or quietly draining it.",
      },
      { type: "h2", text: "The line items founders under count" },
      {
        type: "p",
        text: "Shipping cost is usually tracked. Returns processing, restocking, and the margin lost on damaged or unsellable returned inventory usually isn't, and in categories like apparel and footwear, returns alone can erase a meaningful share of otherwise healthy contribution margin. Payment gateway fees, COD collection costs, and marketplace referral fees are similarly easy to miss because they get deducted before the money ever reaches a bank statement.",
      },
      { type: "h2", text: "Blended contribution margin hides channel reality" },
      {
        type: "p",
        text: "A single blended contribution margin figure across D2C, marketplace, and quick commerce almost always masks the fact that one channel is quietly subsidising another. Marketplace commissions and quick commerce fulfilment costs typically run higher than D2C, which means a brand can be reporting healthy blended margins while its fastest growing channel is unprofitable at the unit level and nobody notices for months.",
      },
      { type: "h2", text: "Building the teardown" },
      {
        type: "ul",
        items: [
          "Calculate contribution margin per channel, not just blended. D2C, marketplace, and quick commerce have structurally different cost stacks.",
          "Include returns and reverse logistics costs at the category level, not as a company wide average.",
          "Treat marketing spend as a variable cost against the specific channel and cohort it acquired, not a top of P&L line item.",
        ],
      },
      {
        type: "p",
        text: "Once contribution margin is visible at this level of detail, growth decisions stop being about top line revenue and start being about which channels, SKUs, and cohorts are actually worth growing in the first place.",
      },
    ],
  },
];

async function seed() {
  const payload = await getPayload({ config });

  const pillarIds: Record<string, number> = {};

  for (const pillar of PILLARS) {
    const existing = await payload.find({
      collection: "pillars",
      where: { slug: { equals: pillar.slug } },
      limit: 1,
    });
    if (existing.docs[0]) {
      pillarIds[pillar.slug] = existing.docs[0].id;
      payload.logger.info(`Pillar already exists, skipping: ${pillar.title}`);
      continue;
    }
    const doc = await payload.create({ collection: "pillars", data: pillar });
    pillarIds[pillar.slug] = doc.id;
    payload.logger.info(`Created pillar: ${pillar.title}`);
  }

  for (const article of ARTICLES) {
    const existing = await payload.find({
      collection: "case-studies",
      where: { slug: { equals: article.slug } },
      limit: 1,
    });
    if (existing.docs[0]) {
      payload.logger.info(`Case study already exists, skipping: ${article.title}`);
      continue;
    }
    await payload.create({
      collection: "case-studies",
      data: {
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        pillar: pillarIds[article.pillar],
        coverGradientFrom: article.cover.from,
        coverGradientTo: article.cover.to,
        authorName: article.author.name,
        authorRole: article.author.role,
        publishedDate: new Date(article.date).toISOString(),
        readTime: article.readTime,
        featured: article.featured ?? false,
        body: blocksToLexical(article.blocks),
        _status: "published",
      },
    });
    payload.logger.info(`Created case study: ${article.title}`);
  }

  payload.logger.info("Seed complete.");
  process.exit(0);
}

try {
  await seed();
} catch (err) {
  console.error(err);
  process.exit(1);
}
