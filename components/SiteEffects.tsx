"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ArrowUp } from "lucide-react";

/**
 * Sitewide, page-independent touches, mounted once in the site layout:
 * a reading-progress bar, the cursor spotlight on .card-elegant surfaces,
 * a desktop back-to-top button and a mobile sticky consultation bar.
 */
export default function SiteEffects() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });
  const [showFloating, setShowFloating] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const nearBottom = y + window.innerHeight > document.documentElement.scrollHeight - 520;
    setShowFloating(y > 640 && !nearBottom);
  });

  useEffect(() => {
    // One delegated listener instead of a handler per card
    function onPointerMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      const card = (e.target as Element | null)?.closest?.(".card-elegant") as HTMLElement | null;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left gradient-cta"
      />

      <AnimatePresence>
        {showFloating && (
          <motion.button
            key="back-to-top"
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full gradient-cta text-white shadow-glow hover:-translate-y-0.5 transition-transform md:flex"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFloating && (
          <motion.div
            key="mobile-cta"
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            exit={{ y: "120%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-x-3 bottom-3 z-40 md:hidden"
          >
            <div className="flex items-center gap-2 rounded-2xl bg-navy-950/95 p-2 shadow-elegant ring-1 ring-white/10 backdrop-blur-2xl">
              <div className="min-w-0 flex-1 pl-3">
                <div className="truncate text-sm font-semibold text-white">Ready to grow?</div>
                <div className="truncate text-[11px] text-white/55">30-minute intro call, no obligation</div>
              </div>
              <Link
                href="/connect"
                className="btn-shimmer inline-flex shrink-0 items-center gap-1.5 rounded-xl gradient-cta px-4 py-3 text-sm font-semibold text-white"
              >
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
