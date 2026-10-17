"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  ChevronDown,
  FileText,
  LayoutGrid,
  Mail,
  Menu,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import { LogoFull } from "@/components/Logo";
import SocialIcon from "@/components/SocialIcon";
import ThemeToggle from "@/components/ThemeToggle";
import { PillarIcon } from "@/lib/pillarIcons";

const WHATSAPP_LINK = "https://wa.me/919319414318";
const ANNOUNCEMENT_KEY = "notecommerce-announcement-dismissed";
const ANNOUNCEMENT_EVENT = "notecommerce-announcement";

type NavPillar = { title: string; slug: string; description: string };
type SpotlightItem = { title: string; href: string; excerpt: string; label: string };
type MenuItem = { title: string; href: string; description: string; icon: LucideIcon };
type MenuKey = "expertise" | "insights" | "company";

const INSIGHT_ITEMS: MenuItem[] = [
  {
    title: "Research & Analysis",
    href: "/articles",
    description: "Independent deep dives on platforms, categories and economics.",
    icon: FileText,
  },
  { title: "Practice Areas", href: "/pillars", description: "The six areas our advisory work covers.", icon: LayoutGrid },
  { title: "Our Methodology", href: "/process", description: "How we research, advise and execute.", icon: Workflow },
  {
    title: "Intelligence Briefing",
    href: "/#newsletter",
    description: "Our weekly briefing, direct to your inbox.",
    icon: Mail,
  },
];

const COMPANY_ITEMS: MenuItem[] = [
  { title: "About Us", href: "/about", description: "Our story, approach and standards.", icon: Building2 },
  { title: "Careers", href: "/careers", description: "Join a small, senior team.", icon: Briefcase },
  { title: "Contact Us", href: "/connect", description: "Talk to a senior advisor.", icon: MessageSquare },
];

const STANDARDS = ["Independent analysis", "No pay-to-play placements", "Senior-led engagements"];

const NAV: { label: string; href: string; menu?: MenuKey }[] = [
  { label: "Expertise", href: "/pillars", menu: "expertise" },
  { label: "Insights", href: "/articles", menu: "insights" },
  { label: "Methodology", href: "/process" },
  { label: "Company", href: "/about", menu: "company" },
];

// The dismissed announcement is remembered per article, so a newer one shows again.
function subscribeAnnouncement(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(ANNOUNCEMENT_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(ANNOUNCEMENT_EVENT, onChange);
  };
}

function readDismissed() {
  try {
    return localStorage.getItem(ANNOUNCEMENT_KEY);
  } catch {
    return null;
  }
}

export default function Header({
  pillars = [],
  spotlight = [],
}: {
  pillars?: NavPillar[];
  spotlight?: SpotlightItem[];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const dismissedHref = useSyncExternalStore(subscribeAnnouncement, readDismissed, () => null);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // Close any open menu on navigation (state adjusted during render, per React's
  // "resetting state when a prop changes" pattern, rather than in an effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setActiveMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!activeMenu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeMenu]);

  const announcement = spotlight[0] ?? null;
  const showAnnouncement = announcement && dismissedHref !== announcement.href && !scrolled;

  function dismissAnnouncement() {
    if (!announcement) return;
    try {
      localStorage.setItem(ANNOUNCEMENT_KEY, announcement.href);
    } catch {
      // Storage unavailable: the bar still collapses on scroll.
    }
    window.dispatchEvent(new Event(ANNOUNCEMENT_EVENT));
  }

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50" onMouseLeave={() => setActiveMenu(null)}>
      <AnimatePresence initial={false}>
        {showAnnouncement && (
          <motion.div
            key="announcement"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-[linear-gradient(90deg,#001b33_0%,#0b6bff_38%,#7c3aed_72%,#c026d3_100%)]"
          >
            <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-3 px-10 py-2 text-white">
              <span className="hidden shrink-0 items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ring-white/30 sm:inline-flex">
                <Sparkles className="h-3 w-3" />
                New
              </span>
              <Link href={announcement.href} className="truncate text-xs font-semibold sm:text-[13px]">
                New research: {announcement.title}
              </Link>
              <Link
                href={announcement.href}
                // Fixed white (not bg-white, which the dark theme turns navy): the bar's gradient is the same in both themes
                className="hidden shrink-0 items-center gap-1 rounded-full bg-[#ffffff] px-3 py-1 text-[11px] font-semibold text-[#001b33] transition-transform hover:scale-[1.03] sm:inline-flex"
              >
                Read the report
                <ArrowRight className="h-3 w-3" />
              </Link>
              <button
                type="button"
                onClick={dismissAnnouncement}
                aria-label="Dismiss announcement"
                className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`relative border-b border-[color:var(--border-soft)] bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled || activeMenu ? "shadow-[0_8px_30px_-12px_rgba(0,27,51,0.18)]" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center text-lg text-navy-950"
            aria-label="NotEcommerce home"
            onMouseEnter={() => setActiveMenu(null)}
          >
            <LogoFull />
          </Link>

          <nav className="isolate hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => {
              const active = isActive(item.href) || activeMenu === item.menu;
              const base = `relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active ? "text-navy-950" : "text-navy-900/70 hover:text-navy-950"
              }`;

              if (!item.menu) {
                return (
                  <Link key={item.href} href={item.href} className={base} onMouseEnter={() => setActiveMenu(null)}>
                    {item.label}
                  </Link>
                );
              }

              const open = activeMenu === item.menu;
              return (
                <button
                  key={item.href}
                  type="button"
                  aria-expanded={open}
                  aria-haspopup="true"
                  onMouseEnter={() => setActiveMenu(item.menu!)}
                  onClick={() => setActiveMenu(open ? null : item.menu!)}
                  className={base}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                  {open && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-cream-50"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2" onMouseEnter={() => setActiveMenu(null)}>
            <ThemeToggle />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-all hover:brightness-95"
            >
              <SocialIcon name="WhatsApp" className="h-5 w-5" />
            </a>
            <Link
              href="/connect"
              className="btn-shimmer hidden items-center gap-1.5 rounded-xl gradient-cta px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-opacity hover:opacity-95 lg:inline-flex"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-50 text-navy-950 ring-1 ring-[color:var(--border-soft)] lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && (
            <motion.div
              key="mega"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-full hidden border-b border-[color:var(--border-soft)] bg-white shadow-[0_30px_60px_-30px_rgba(0,27,51,0.25)] lg:block"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeMenu}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  {activeMenu === "expertise" && (
                    <MegaPanel
                      label="Practice areas"
                      items={pillars.map((p) => ({
                        title: p.title,
                        href: `/pillars/${p.slug}`,
                        description: p.description,
                        slug: p.slug,
                      }))}
                      columns={2}
                      spotlight={spotlight}
                    />
                  )}
                  {activeMenu === "insights" && (
                    <MegaPanel label="Browse resources" items={INSIGHT_ITEMS} spotlight={spotlight} />
                  )}
                  {activeMenu === "company" && <MegaPanel label="Company" items={COMPANY_ITEMS} columns={2} />}
                </motion.div>
              </AnimatePresence>

              <div className="border-t border-[color:var(--border-soft)] bg-[color:var(--surface)]">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-3.5">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-navy-900/50">
                      <ShieldCheck className="h-3.5 w-3.5 text-indigo-600" />
                      Our standards
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {STANDARDS.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-navy-900/75 ring-1 ring-[color:var(--border-soft)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/connect"
                    className="group inline-flex shrink-0 items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-indigo-600"
                  >
                    Talk to experts
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[color:var(--border-soft)] bg-white shadow-elegant lg:hidden"
          >
            <MobileMenu pillars={pillars} onNavigate={() => setMobileOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MegaPanel({
  label,
  items,
  columns = 1,
  spotlight,
}: {
  label: string;
  items: (Omit<MenuItem, "icon"> & { icon?: LucideIcon; slug?: string })[];
  columns?: 1 | 2;
  spotlight?: SpotlightItem[];
}) {
  const hasSpotlight = spotlight && spotlight.length > 0;

  return (
    <div className={`mx-auto grid max-w-7xl gap-10 px-8 py-8 ${hasSpotlight ? "grid-cols-[1.6fr_1fr]" : ""}`}>
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-900/45">{label}</div>
        <div className={`mt-4 grid gap-1 ${columns === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.25 }}
            >
              <Link href={item.href} className="group flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-cream-50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream-50 text-indigo-600 ring-1 ring-[color:var(--border-soft)] transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-600">
                  {item.icon ? (
                    <item.icon className="h-4 w-4" />
                  ) : (
                    <PillarIcon slug={item.slug ?? ""} className="h-4 w-4" />
                  )}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy-950">{item.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-[color:var(--ink-muted)] line-clamp-2">
                    {item.description}
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {hasSpotlight && (
        <div className="border-l border-[color:var(--border-soft)] pl-10">
          <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-900/45">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            Featured spotlight
          </div>
          <div className="mt-4 grid gap-3">
            {spotlight!.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-xl bg-white p-4 ring-1 ring-[color:var(--border-soft)] transition-all hover:-translate-y-0.5 hover:shadow-elegant hover:ring-indigo-500/40"
              >
                <span
                  className={`inline-flex rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    i === 0 ? "bg-cream-100 text-indigo-700" : "bg-violet-500/10 text-violet-600"
                  }`}
                >
                  {i === 0 ? "New research" : s.label}
                </span>
                <span className="mt-2 block text-sm font-semibold leading-snug text-navy-950 line-clamp-2">{s.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-[color:var(--ink-muted)] line-clamp-2">{s.excerpt}</span>
                <ArrowRight className="mt-2 h-3.5 w-3.5 text-indigo-600 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenu({ pillars, onNavigate }: { pillars: NavPillar[]; onNavigate: () => void }) {
  const [openGroup, setOpenGroup] = useState<MenuKey | null>(null);

  const groups: { key: MenuKey; label: string; items: { title: string; href: string }[] }[] = [
    { key: "expertise", label: "Expertise", items: pillars.map((p) => ({ title: p.title, href: `/pillars/${p.slug}` })) },
    { key: "insights", label: "Insights", items: INSIGHT_ITEMS },
    { key: "company", label: "Company", items: COMPANY_ITEMS },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
      {groups.map((g) => {
        const open = openGroup === g.key;
        return (
          <div key={g.key} className="border-b border-[color:var(--border-soft)]">
            <button
              type="button"
              onClick={() => setOpenGroup(open ? null : g.key)}
              aria-expanded={open}
              className="flex w-full items-center justify-between py-4 text-base font-semibold text-navy-950"
            >
              {g.label}
              <ChevronDown className={`h-4 w-4 text-navy-900/50 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-1 pb-4">
                    {g.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onNavigate}
                        className="rounded-lg px-3 py-2.5 text-sm text-navy-900/75 hover:bg-cream-50 hover:text-navy-950"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      <Link
        href="/process"
        onClick={onNavigate}
        className="flex items-center justify-between border-b border-[color:var(--border-soft)] py-4 text-base font-semibold text-navy-950"
      >
        Methodology
        <ArrowRight className="h-4 w-4 text-navy-900/40" />
      </Link>
      <Link
        href="/connect"
        onClick={onNavigate}
        className="btn-shimmer mt-4 mb-2 flex items-center justify-center gap-2 rounded-xl gradient-cta px-5 py-3.5 text-sm font-semibold text-white"
      >
        Book a Consultation
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
