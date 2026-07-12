import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProcessSection from "@/components/ProcessSection";
import Reveal from "@/components/Reveal";
import { resolvePageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("process", {
    title: "Methodology: NotEcommerce",
    description:
      "The 6-D Methodology behind every engagement and every report we publish: Discover, Define, Design, Develop, Deploy, Deliver.",
  });
}

export default function ProcessPage() {
  return (
    <>
      <ProcessSection />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 rounded-3xl bg-cream-50 p-10 sm:p-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-950">
                  See this methodology applied to your business.
                </h2>
                <p className="mt-2 text-navy-900/60 max-w-xl">
                  Every engagement starts with a working session to map your
                  category against our research and identify where the
                  methodology creates the most leverage.
                </p>
              </div>
              <Link
                href="/connect"
                className="shrink-0 inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
