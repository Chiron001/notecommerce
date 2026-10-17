// Platforms our research and advisory work covers. Names are used
// descriptively; none of these imply a partnership.
export const PLATFORM_GROUPS = [
  { label: "D2C storefronts", platforms: ["Shopify"] },
  { label: "Marketplaces", platforms: ["Amazon", "Flipkart", "Meesho", "JioMart"] },
  { label: "Quick commerce", platforms: ["Blinkit", "Zepto", "Instamart", "BigBasket"] },
  { label: "Fashion & beauty", platforms: ["Myntra", "Nykaa", "Ajio"] },
];

export const PLATFORMS = PLATFORM_GROUPS.flatMap((g) => g.platforms);
