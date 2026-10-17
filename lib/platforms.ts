// Platforms our research and advisory work covers. Names and logos are used
// descriptively; none of these imply a partnership.
export const PLATFORM_GROUPS = [
  { label: "D2C storefronts", platforms: ["Shopify"] },
  { label: "Indian marketplaces", platforms: ["Amazon", "Flipkart", "Meesho", "JioMart", "Tata CLiQ", "Snapdeal"] },
  { label: "Quick commerce", platforms: ["Blinkit", "Zepto", "Instamart", "BigBasket"] },
  { label: "Fashion & beauty", platforms: ["Myntra", "Nykaa", "Ajio"] },
  {
    label: "International marketplaces",
    platforms: [
      "Walmart",
      "eBay",
      "Etsy",
      "Target",
      "Alibaba",
      "AliExpress",
      "Rakuten",
      "Shopee",
      "Lazada",
      "Mercado Libre",
      "Zalando",
      "Noon",
      "Temu",
      "Shein",
      "Coupang",
      "Tokopedia",
    ],
  },
];

export const PLATFORMS = PLATFORM_GROUPS.flatMap((g) => g.platforms);

/**
 * Logo files in /public/platforms, from Wikimedia Commons and English
 * Wikipedia (public domain, except Tata CLiQ, which Wikipedia lists as fair
 * use) and Simple Icons (CC0). `ratio` is width / height of the trimmed
 * file. Icon-only marks set `showName` so the platform stays recognisable.
 * `darkSrc` is a copy with white lettering for logos whose dark text would
 * vanish on the dark theme. Ajio and Instamart have no usable logo file, so
 * they are left out of the strip rather than approximated, and still appear
 * by name in the coverage grid.
 *
 * Ordered to alternate Indian and international platforms in the marquee.
 */
export const PLATFORM_LOGOS: { name: string; src: string; darkSrc?: string; ratio: number; showName?: boolean }[] = [
  { name: "Amazon", src: "/platforms/amazon.svg", darkSrc: "/platforms/amazon-dark.svg", ratio: 603 / 182 },
  { name: "Walmart", src: "/platforms/walmart.png", ratio: 505 / 96 },
  { name: "Flipkart", src: "/platforms/flipkart.png", ratio: 364 / 96 },
  { name: "eBay", src: "/platforms/ebay.png", ratio: 240 / 96 },
  { name: "Myntra", src: "/platforms/myntra.png", ratio: 137 / 96, showName: true },
  { name: "Etsy", src: "/platforms/etsy.png", ratio: 202 / 96 },
  { name: "Meesho", src: "/platforms/meesho.png", ratio: 1, showName: true },
  { name: "Alibaba", src: "/platforms/alibaba.png", ratio: 609 / 96 },
  { name: "Shopify", src: "/platforms/shopify.svg", darkSrc: "/platforms/shopify-dark.svg", ratio: 612 / 192 },
  { name: "Target", src: "/platforms/target.png", ratio: 1, showName: true },
  {
    name: "Tata CLiQ",
    src: "/platforms/tatacliq.png",
    darkSrc: "/platforms/tatacliq-dark.png",
    ratio: 162 / 96,
  },
  { name: "AliExpress", src: "/platforms/aliexpress.png", ratio: 443 / 96 },
  { name: "Blinkit", src: "/platforms/blinkit.svg", ratio: 1 },
  { name: "Shopee", src: "/platforms/shopee.png", ratio: 67 / 96, showName: true },
  { name: "Zepto", src: "/platforms/zepto.svg", ratio: 3 },
  { name: "Rakuten", src: "/platforms/rakuten.png", darkSrc: "/platforms/rakuten-dark.png", ratio: 564 / 96 },
  { name: "Nykaa", src: "/platforms/nykaa.svg", ratio: 465.7 / 155.7 },
  {
    name: "Mercado Libre",
    src: "/platforms/mercadolibre.png",
    darkSrc: "/platforms/mercadolibre-dark.png",
    ratio: 236 / 96,
  },
  { name: "Snapdeal", src: "/platforms/snapdeal.png", ratio: 449 / 96 },
  { name: "Lazada", src: "/platforms/lazada.png", darkSrc: "/platforms/lazada-dark.png", ratio: 366 / 96 },
  { name: "JioMart", src: "/platforms/jiomart.svg", ratio: 1, showName: true },
  { name: "Zalando", src: "/platforms/zalando.png", darkSrc: "/platforms/zalando-dark.png", ratio: 527 / 96 },
  { name: "BigBasket", src: "/platforms/bigbasket.svg", ratio: 1, showName: true },
  { name: "Noon", src: "/platforms/noon.png", ratio: 196 / 96 },
  { name: "Temu", src: "/platforms/temu.png", ratio: 399 / 96 },
  { name: "Shein", src: "/platforms/shein.png", darkSrc: "/platforms/shein-dark.png", ratio: 462 / 96 },
  { name: "Coupang", src: "/platforms/coupang.png", ratio: 427 / 96 },
  { name: "Tokopedia", src: "/platforms/tokopedia.png", ratio: 445 / 96 },
];

/** Optical sizing: wide wordmarks render shorter, square marks taller, so they look evenly weighted. */
export function logoHeight(ratio: number) {
  if (ratio >= 4.5) return 22;
  if (ratio >= 3) return 26;
  if (ratio >= 1.5) return 30;
  return 34;
}
