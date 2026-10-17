// Platforms our research and advisory work covers. Names and logos are used
// descriptively; none of these imply a partnership.
export const PLATFORM_GROUPS = [
  { label: "D2C storefronts", platforms: ["Shopify"] },
  { label: "Marketplaces", platforms: ["Amazon", "Flipkart", "Meesho", "JioMart"] },
  { label: "Quick commerce", platforms: ["Blinkit", "Zepto", "Instamart", "BigBasket"] },
  { label: "Fashion & beauty", platforms: ["Myntra", "Nykaa", "Ajio"] },
];

export const PLATFORMS = PLATFORM_GROUPS.flatMap((g) => g.platforms);

/**
 * Logo files in /public/platforms, from Wikimedia Commons (public domain) and
 * Simple Icons (CC0). `ratio` is width / height. Icon-only marks set
 * `showName` so the platform stays recognisable. Platforms without a freely
 * licensed official logo (Meesho, Ajio, Instamart, Myntra) are left out of
 * the logo strip rather than approximated, and still appear by name above.
 */
export const PLATFORM_LOGOS: { name: string; src: string; ratio: number; showName?: boolean }[] = [
  { name: "Amazon", src: "/platforms/amazon.svg", ratio: 603 / 182 },
  { name: "Flipkart", src: "/platforms/flipkart.png", ratio: 364 / 96 },
  { name: "Shopify", src: "/platforms/shopify.svg", ratio: 612 / 192 },
  { name: "Blinkit", src: "/platforms/blinkit.svg", ratio: 1 },
  { name: "Zepto", src: "/platforms/zepto.svg", ratio: 3 },
  { name: "Nykaa", src: "/platforms/nykaa.svg", ratio: 465.7 / 155.7 },
  { name: "JioMart", src: "/platforms/jiomart.svg", ratio: 1, showName: true },
  { name: "BigBasket", src: "/platforms/bigbasket.svg", ratio: 1, showName: true },
];
