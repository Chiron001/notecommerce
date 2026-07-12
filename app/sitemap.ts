import type { MetadataRoute } from "next";
import { getAllCaseStudies, getAllPillars } from "@/lib/payload";

const BASE_URL = "https://notecommerce.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/process",
  "/connect",
  "/articles",
  "/pillars",
  "/careers",
  "/privacy",
  "/code-of-conduct",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pillars, articles] = await Promise.all([getAllPillars(), getAllCaseStudies()]);

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
    })),
    ...pillars.map((pillar) => ({
      url: `${BASE_URL}/pillars/${pillar.slug}`,
      lastModified: new Date(pillar.updatedAt),
    })),
    ...articles.map((article) => ({
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: new Date(article.updatedAt),
    })),
  ];
}
