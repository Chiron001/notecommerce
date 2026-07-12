"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { LogoFull } from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-8 rounded-full bg-navy-950/90 backdrop-blur-2xl px-5 py-2.5 shadow-lg shadow-navy-950/10 ring-1 ring-white/10">
          <Link href="/" className="flex shrink-0 items-center text-cream-50 text-lg" aria-label="NotEcommerce home">
            <LogoFull />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center">
          <Link
            href="/articles"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-lg hover:bg-cream-50 transition-colors"
          >
            Connect
          </Link>
        </div>

        <button
          className="rounded-full bg-navy-950/90 backdrop-blur-2xl p-2.5 text-white ring-1 ring-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl space-y-3 rounded-2xl bg-navy-950/95 backdrop-blur-2xl p-4 ring-1 ring-white/10 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-white/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/articles"
            className="block rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-navy-950"
            onClick={() => setOpen(false)}
          >
            Connect
          </Link>
        </div>
      )}
    </header>
  );
}
