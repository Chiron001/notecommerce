"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/nav";
import SocialIcon from "@/components/SocialIcon";
import { CONTENT_PILLARS } from "@/lib/pillars";
import { LogoFull } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-noise bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center text-cream-50 text-lg" aria-label="NotEcommerce home">
              <LogoFull />
            </Link>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Ecommerce Intelligence &amp; Consultancy
              </span>
              <span className="h-0.5 w-8 rounded-full gradient-cta" />
            </div>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              A data-led intelligence and growth consultancy for D2C,
              marketplace, and quick commerce leaders. Proprietary research,
              senior-led advisory, and hands-on execution.
            </p>

            <a
              href="mailto:hello@notecommerce.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@notecommerce.com
            </a>

            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <SocialIcon name={s.label as "Instagram" | "X" | "LinkedIn" | "Facebook"} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/90 uppercase tracking-widest">
              Expertise
            </h4>
            <ul className="mt-4 space-y-3">
              {CONTENT_PILLARS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/pillars/${p.slug}`}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/90 uppercase tracking-widest">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/articles" className="text-sm text-white/50 hover:text-white transition-colors">
                  Insights &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-sm text-white/50 hover:text-white transition-colors">
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">
                  About NotEcommerce
                </Link>
              </li>
              <li>
                <Link href="/connect" className="text-sm text-white/50 hover:text-white transition-colors">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/90 uppercase tracking-widest">
              Connect
            </h4>
            <ul className="mt-4 space-y-3">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Our Standards
          </span>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Independent analysis", "No pay-to-play placements", "Senior-led engagements"].map(
              (item) => (
                <span
                  key={item}
                  className="glass-dark rounded-full px-4 py-1.5 text-xs font-medium text-white/70"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} NotEcommerce. All rights reserved. notecommerce.com</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="select-none pointer-events-none text-center leading-none font-display font-extrabold text-white/[0.05] text-[9vw] whitespace-nowrap translate-y-[15%]"
      >
        NOTECOMMERCE
      </div>
    </footer>
  );
}
