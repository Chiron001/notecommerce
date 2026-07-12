import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ContentPillars from "@/components/home/ContentPillars";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import PlatformCoverage from "@/components/home/PlatformCoverage";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import GrowthStories from "@/components/home/GrowthStories";
import FinalCTA from "@/components/home/FinalCTA";
import { getAllPillars, getFeaturedCaseStudies } from "@/lib/payload";
import { resolvePageMetadata } from "@/lib/seo";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("home", {
    title: "NotEcommerce: Ecommerce Intelligence & Growth Consultancy",
    description:
      "NotEcommerce is a data-led ecommerce intelligence and growth consultancy for D2C, marketplace, and quick commerce leaders. Proprietary research, senior-led advisory, and hands-on execution.",
  });
}

export default async function Home() {
  const [pillars, featuredCaseStudies] = await Promise.all([
    getAllPillars(),
    getFeaturedCaseStudies(),
  ]);

  return (
    <>
      <Hero />
      <StatsBar />
      <ContentPillars pillars={pillars} />
      <FeaturedArticles articles={featuredCaseStudies} />
      <PlatformCoverage />
      <NewsletterCTA />
      <GrowthStories />
      <FinalCTA />
    </>
  );
}
