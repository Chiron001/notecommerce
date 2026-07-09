"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/nav";
import SocialIcon from "@/components/SocialIcon";
import { CONTENT_PILLARS } from "@/lib/pillars";
import { LogoFull } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center text-cream-50" aria-label="NotEcommerce home">
              <LogoFull className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Making ecommerce expertise accessible — market intelligence and
              growth strategy for founders and operators building in D2C,
              marketplaces, and quick commerce.
            </p>
            <div className="mt-6 flex items-center gap-3">
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
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wide">
              Content Pillars
            </h4>
            <ul className="mt-4 space-y-3">
              {CONTENT_PILLARS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/articles?pillar=${p.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wide">
              Explore
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/articles" className="text-sm text-white/60 hover:text-white transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-sm text-white/60 hover:text-white transition-colors">
                  The 6-D Process
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-white/60 hover:text-white transition-colors">
                  About NotEcommerce
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wide">
              Stay in the loop
            </h4>
            <p className="mt-4 text-sm text-white/60">
              Weekly ecommerce intelligence, straight to your inbox.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="min-w-0 flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-full gradient-cta px-4 py-2.5 text-sm font-semibold text-white shrink-0"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40">
          <p>© {new Date().getFullYear()} NotEcommerce. All rights reserved.</p>
          <p>notecommerce.com · @notecommerce</p>
        </div>
      </div>
    </footer>
  );
}
