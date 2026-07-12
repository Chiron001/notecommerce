"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { LogoFull } from "@/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40">
      <div className="h-1 gradient-cta" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center text-navy-900 text-xl" aria-label="NotEcommerce home">
            <LogoFull />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-900/70 hover:text-navy-950 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/articles"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white gradient-cta hover:opacity-90 transition-opacity"
            >
              Connect
            </Link>
          </div>

          <button
            className="md:hidden text-navy-950"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-navy-900/10 bg-white px-6 py-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-navy-900/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/articles"
            className="block rounded-full px-5 py-2.5 text-sm font-semibold text-white gradient-cta text-center"
            onClick={() => setOpen(false)}
          >
            Connect
          </Link>
        </div>
      )}
    </header>
  );
}
