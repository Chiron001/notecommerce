import type { CollectionConfig } from "payload";

export const PAGE_KEYS = [
  { label: "Home (/)", value: "home" },
  { label: "Expertise (/pillars)", value: "pillars" },
  { label: "Insights & Case Studies (/articles)", value: "articles" },
  { label: "Methodology (/process)", value: "process" },
  { label: "About (/about)", value: "about" },
  { label: "Connect (/connect)", value: "connect" },
  { label: "Careers (/careers)", value: "careers" },
  { label: "Privacy Policy (/privacy)", value: "privacy" },
  { label: "Code of Conduct (/code-of-conduct)", value: "code-of-conduct" },
] as const;

export type PageKey = (typeof PAGE_KEYS)[number]["value"];

export const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page SEO",
    plural: "Page SEO",
  },
  admin: {
    useAsTitle: "pageKey",
    description: "SEO overrides for the site's fixed pages (not case studies or practice areas, those have their own SEO tab).",
    group: "Settings",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "pageKey",
      type: "select",
      required: true,
      unique: true,
      options: PAGE_KEYS as unknown as { label: string; value: string }[],
    },
  ],
};
