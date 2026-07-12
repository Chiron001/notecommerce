import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { resolvePageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("code-of-conduct", {
    title: "Code of Conduct: NotEcommerce",
    description:
      "The standards NotEcommerce holds itself to across research, advisory, and client work.",
  });
}

export default function CodeOfConductPage() {
  return (
    <>
      <section className="bg-cream-50 pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Legal
            </span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
              Code of Conduct
            </h1>
            <p className="mt-4 text-lg text-navy-900/70 leading-relaxed">
              The standards we hold ourselves to, across every report we
              publish and every engagement we take on.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="prose-article">
              <h2>Independence</h2>
              <p>
                We don&apos;t accept payment, discounts, or other
                consideration from any platform or brand in exchange for
                favorable coverage. A platform or vendor being featured in
                our research is never for sale. Where we do paid advisory
                work, that relationship is with the client engaging us, not
                with the platforms or vendors we evaluate on their behalf.
              </p>

              <h2>Research integrity</h2>
              <p>
                Every claim in a published report is checked against real
                data before it goes out. If we later find we got something
                wrong, we correct the piece rather than leave it standing.
                We don&apos;t publish a recommendation we wouldn&apos;t stand
                behind if a client pushed back on it.
              </p>

              <h2>Client confidentiality</h2>
              <p>
                Information shared with us during an advisory engagement,
                including strategy, performance data, and internal
                discussions, stays confidential. We don&apos;t reference
                specific client data or results in our published research
                without explicit permission.
              </p>

              <h2>Conflicts of interest</h2>
              <p>
                If we&apos;re advising two businesses that compete directly
                in the same category, we disclose that to both sides before
                the engagement begins. Where a real conflict exists, we&apos;ll
                say so rather than take the work.
              </p>

              <h2>Professional conduct</h2>
              <p>
                Everyone representing NotEcommerce, in a client meeting, on
                a call, or in writing, is expected to communicate honestly
                and treat clients, partners, and each other with respect.
                We don&apos;t tolerate harassment or discrimination in any
                form.
              </p>

              <h2>Raising a concern</h2>
              <p>
                If you believe we&apos;ve fallen short of any of this,
                whether in a published piece or in an engagement, tell us
                directly through our{" "}
                <a href="/connect" className="text-indigo-600 font-semibold">
                  Connect page
                </a>
                . We take it seriously and will follow up.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
