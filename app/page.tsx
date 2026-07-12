import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ContentPillars from "@/components/home/ContentPillars";
import FeaturedArticles from "@/components/home/FeaturedArticles";
import PlatformCoverage from "@/components/home/PlatformCoverage";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import GrowthStories from "@/components/home/GrowthStories";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ContentPillars />
      <FeaturedArticles />
      <PlatformCoverage />
      <NewsletterCTA />
      <GrowthStories />
      <FinalCTA />
    </>
  );
}
