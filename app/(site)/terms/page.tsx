import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { resolvePageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("terms", {
    title: "Terms of Service: NotEcommerce",
    description: "The terms that govern your use of the NotEcommerce website and advisory engagements.",
  });
}

export default function TermsPage() {
  return (
    <>
      <section className="bg-cream-50 pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Legal
            </span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-navy-900/50">
              Last updated: September 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="prose-article">
              <p>
                These terms govern your use of this website. They&apos;re
                written in plain language rather than dense legal boilerplate.
                If you engage us for advisory or execution work, the specific
                scope, fees, and obligations for that engagement are set out
                in a separate signed agreement, which takes precedence over
                this page.
              </p>

              <h2>Using this site</h2>
              <p>
                This site and the content on it — articles, commentary, and
                site copy — is provided for general informational purposes.
                It does not constitute financial, legal, or investment
                advice, and you shouldn&apos;t treat it as a substitute for
                advice specific to your situation.
              </p>

              <h2>Content and intellectual property</h2>
              <p>
                Unless otherwise noted, the text, graphics, and branding on
                this site belong to NotEcommerce. You&apos;re welcome to
                link to our pages or quote short excerpts with attribution;
                please don&apos;t republish articles in full without asking
                first.
              </p>

              <h2>Contact form and newsletter</h2>
              <p>
                Submitting the contact form or subscribing to our newsletter
                means you&apos;re asking us to respond to you or send you the
                emails you signed up for. See our{" "}
                <a href="/privacy" className="text-indigo-600 font-semibold">
                  Privacy Policy
                </a>{" "}
                for details on what information we collect and how it&apos;s
                used.
              </p>

              <h2>No warranties</h2>
              <p>
                We keep this site up to date as best we can, but we make no
                guarantees that it is complete, accurate, or error-free at
                any given moment.
              </p>

              <h2>Changes to these terms</h2>
              <p>
                If these terms change in a meaningful way, we&apos;ll update
                the date at the top of this page.
              </p>

              <h2>Questions</h2>
              <p>
                If anything here is unclear, get in touch through our{" "}
                <a href="/connect" className="text-indigo-600 font-semibold">
                  Connect page
                </a>{" "}
                and we&apos;ll answer directly.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
