import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy: NotEcommerce",
  description: "How NotEcommerce collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-cream-50 pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Legal
            </span>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-navy-900/50">
              Last updated: January 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="prose-article">
              <p>
                This policy explains what information NotEcommerce collects
                when you use this site, how it&apos;s used, and what choices
                you have. We&apos;ve tried to write it in plain language
                rather than dense legal boilerplate.
              </p>

              <h2>What we collect</h2>
              <p>
                We only collect information you choose to give us:
              </p>
              <ul>
                <li>
                  <strong>Contact form.</strong> When you submit the form on
                  our Connect page, your name, work email, company, and
                  message are used to open a pre-filled email in your own
                  email application. That message is sent directly from your
                  device to ours. It does not pass through or get stored on
                  a NotEcommerce server or database.
                </li>
                <li>
                  <strong>Newsletter signup.</strong> If you subscribe to
                  our weekly briefing, we collect your email address to send
                  it to you.
                </li>
              </ul>
              <p>
                We do not use tracking cookies, third-party advertising
                pixels, or behavioral analytics scripts on this site.
              </p>

              <h2>How we use it</h2>
              <p>
                We use the information above only to respond to your inquiry
                or to send the newsletter you signed up for. We don&apos;t
                use it to build advertising profiles, and we don&apos;t
                sell, rent, or trade it to anyone.
              </p>

              <h2>Sharing</h2>
              <p>
                We don&apos;t share your information with third parties,
                except where required by law or to the email or newsletter
                infrastructure providers strictly necessary to deliver the
                communications described above.
              </p>

              <h2>Your choices</h2>
              <ul>
                <li>
                  Every newsletter email includes an unsubscribe link. Using
                  it removes you from our list immediately.
                </li>
                <li>
                  To ask what information we hold about you, or to have it
                  deleted, reach out through our{" "}
                  <a href="/connect" className="text-indigo-600 font-semibold">
                    Connect page
                  </a>
                  .
                </li>
              </ul>

              <h2>Changes to this policy</h2>
              <p>
                If this policy changes in a meaningful way, we&apos;ll update
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
