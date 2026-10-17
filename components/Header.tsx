"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { LogoFull } from "@/components/Logo";
import SocialIcon from "@/components/SocialIcon";
import ThemeToggle from "@/components/ThemeToggle";

const WHATSAPP_LINK = "https://wa.me/919319414318";

type NavPillar = { title: string; slug: string; description: string };

export default function Header({
  pillars = [],
  announcement = null,
}: {
  pillars?: NavPillar[];
  announcement?: { title: string; href: string } | null;
}) {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const navScale = useTransform(scrollY, [0, 80], [1, 0.96]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0.1, 0.28]);
  const navShadow = useMotionTemplate`0 8px 30px rgba(0, 27, 51, ${shadowOpacity})`;

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // Close any open menu on navigation (state adjusted during render, per React's
  // "resetting state when a prop changes" pattern, rather than in an effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMegaOpen(false);
    setOpen(false);
  }

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const showAnnouncement = announcement && !scrolled;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <AnimatePresence initial={false}>
        {showAnnouncement && (
          <motion.div
            key="announcement"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden gradient-cta"
          >
            <Link
              href={announcement.href}
              className="group mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-white"
            >
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                New research
              </span>
              <span className="truncate">{announcement.title}</span>
              <span className="hidden sm:inline-flex shrink-0 items-center gap-1 font-semibold underline-offset-2 group-hover:underline">
                Read now
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-4 py-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale: navScale }}
          className="mx-auto flex max-w-7xl origin-top items-center justify-between gap-4"
        >
          <motion.div
            style={{ boxShadow: navShadow }}
            className="flex h-11 items-center gap-8 rounded-full bg-navy-950/90 backdrop-blur-2xl px-5 ring-1 ring-white/10 md:h-auto md:py-2.5"
          >
            <Link href="/" className="flex shrink-0 items-center text-cream-50 text-lg" aria-label="NotEcommerce home">
              <LogoFull />
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);

                if (link.href === "/pillars" && pillars.length > 0) {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() => setMegaOpen(true)}
                      onMouseLeave={() => setMegaOpen(false)}
                    >
                      <button
                        type="button"
                        aria-expanded={megaOpen}
                        aria-haspopup="true"
                        onClick={() => setMegaOpen((v) => !v)}
                        className={`relative flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors ${
                          active || megaOpen ? "text-white" : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                        {active && (
                          <span className="absolute left-1/2 -bottom-2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-400" />
                        )}
                      </button>

                      <AnimatePresence>
                        {megaOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left-1/2 top-full w-[640px] -translate-x-1/3 pt-5"
                          >
                            <div className="card-elegant card-solid p-3">
                              <div className="grid grid-cols-2 gap-1">
                                {pillars.map((p) => (
                                  <Link
                                    key={p.slug}
                                    href={`/pillars/${p.slug}`}
                                    className="group rounded-xl p-3 transition-colors hover:bg-cream-50"
                                  >
                                    <div className="text-sm font-semibold text-navy-950 group-hover:text-indigo-600 transition-colors">
                                      {p.title}
                                    </div>
                                    <p className="mt-1 text-xs leading-relaxed text-[color:var(--ink-muted)] line-clamp-2">
                                      {p.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                              <Link
                                href="/pillars"
                                className="mt-2 flex items-center justify-between rounded-xl bg-cream-50 px-4 py-3 text-sm font-semibold text-navy-950 hover:bg-cream-100 transition-colors"
                              >
                                View all practice areas
                                <ArrowRight className="h-4 w-4 text-indigo-600" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

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
          </motion.div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/connect"
              className="btn-shimmer hidden md:flex rounded-full gradient-cta px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition-opacity"
            >
              <span className="lg:hidden">Connect</span>
              <span className="hidden lg:inline">Book a Consultation</span>
            </Link>

            <ThemeToggle />

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:brightness-95 transition-all"
            >
              <SocialIcon name="WhatsApp" className="h-6 w-6" />
            </a>

            <button
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950/90 backdrop-blur-2xl text-white ring-1 ring-white/10 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-2 max-h-[calc(100dvh-6rem)] max-w-7xl origin-top overflow-y-auto rounded-3xl bg-navy-950/95 p-3 ring-1 ring-white/10 backdrop-blur-2xl md:hidden"
            >
              <nav className="grid gap-1">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i + 0.05, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold transition-colors ${
                          active ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 text-white/30" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {pillars.length > 0 && (
                <div className="mt-2 rounded-2xl bg-white/[0.04] p-3 ring-1 ring-white/10">
                  <div className="px-1 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Practice areas
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {pillars.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/pillars/${p.slug}`}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3 py-2.5 text-xs font-medium leading-snug text-white/75 hover:bg-white/5 hover:text-white"
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <Link
                href="/connect"
                className="btn-shimmer mt-3 flex items-center justify-center gap-2 rounded-2xl gradient-cta px-5 py-4 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
