"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { LogoFull } from "@/components/Logo";
import SocialIcon from "@/components/SocialIcon";

const WHATSAPP_LINK = "https://wa.me/919319414318";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex h-11 items-center gap-8 rounded-full bg-navy-950/90 backdrop-blur-2xl px-5 shadow-lg shadow-navy-950/10 ring-1 ring-white/10 md:h-auto md:py-2.5">
          <Link href="/" className="flex shrink-0 items-center text-cream-50 text-lg" aria-label="NotEcommerce home">
            <LogoFull />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-1/2 -bottom-2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-400" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/connect"
            className="hidden md:flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-lg hover:bg-cream-50 transition-colors"
          >
            Connect
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:brightness-95 transition-all"
          >
            <SocialIcon name="WhatsApp" className="h-5 w-5" />
          </a>

          <button
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950/90 backdrop-blur-2xl text-white ring-1 ring-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl space-y-3 rounded-2xl bg-navy-950/95 backdrop-blur-2xl p-4 ring-1 ring-white/10 md:hidden">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-2 text-sm font-medium ${
                  active ? "text-white" : "text-white/80"
                }`}
                onClick={() => setOpen(false)}
              >
                {active && <span className="h-1 w-1 rounded-full bg-violet-400" />}
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/connect"
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
