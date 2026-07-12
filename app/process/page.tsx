import type { Metadata } from "next";
import ProcessSection from "@/components/ProcessSection";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export const metadata: Metadata = {
  title: "Our Process: NotEcommerce",
  description:
    "The 6-D Process behind every article we publish: Discover, Define, Design, Develop, Deploy, Deliver.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessSection />
      <NewsletterCTA />
    </>
  );
}
