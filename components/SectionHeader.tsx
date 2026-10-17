import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

/**
 * The one section-opening pattern used across the site:
 * eyebrow -> two-tone headline (bold + light italic gradient accent) -> subtitle,
 * with an optional "View all" link aligned to the right.
 */
export default function SectionHeader({
  eyebrow,
  title,
  accent,
  subtitle,
  link,
  align = "left",
  dark = false,
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
  link?: { href: string; label: string };
  align?: "left" | "center";
  dark?: boolean;
  as?: "h1" | "h2";
}) {
  const centered = align === "center";

  return (
    <Reveal>
      <div
        className={`flex flex-wrap items-end gap-6 ${
          centered ? "flex-col items-center text-center" : "justify-between"
        }`}
      >
        <div className={centered ? "max-w-2xl mx-auto" : "max-w-2xl"}>
          <span className={`eyebrow ${dark ? "!text-indigo-500" : ""}`}>{eyebrow}</span>
          <Heading
            className={`mt-4 font-display font-extrabold leading-[1.08] ${
              Heading === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-[2.75rem]"
            } ${dark ? "text-white" : "text-navy-950"}`}
          >
            {title}
            {accent && (
              <>
                {" "}
                <span className={`block ${dark ? "headline-accent-dark" : "headline-accent"}`}>{accent}</span>
              </>
            )}
          </Heading>
          {subtitle && (
            <p
              className={`mt-5 text-base sm:text-lg leading-relaxed ${
                dark ? "text-white/65" : "text-[color:var(--ink-muted)]"
              } ${centered ? "mx-auto" : ""}`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {link && (
          <Link
            href={link.href}
            className={`group inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors ${
              dark ? "text-white/80 hover:text-white" : "text-indigo-600 hover:text-indigo-700"
            }`}
          >
            {link.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </Reveal>
  );
}
