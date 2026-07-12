import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ContentPillars from "@/components/home/ContentPillars";
import ProcessSection from "@/components/home/ProcessSection";
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
      <ProcessSection />
      <FeaturedArticles />
      <PlatformCoverage />
      <NewsletterCTA />
      <GrowthStories />
      <FinalCTA />
    </>
  );
}
