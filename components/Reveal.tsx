"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  scale,
  triggerOnMount = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Optional subtle scale-in (e.g. 0.96) layered on top of the y-translate, for extra depth on card grids. */
  scale?: number;
  /**
   * Animate in as soon as this mounts, instead of waiting for scroll
   * intersection. Use this for items inside a horizontally-scrolling
   * carousel: IntersectionObserver checks both axes, so cards sitting
   * outside the current horizontal scroll position never "enter view"
   * and would otherwise stay hidden until swiped to.
   */
  triggerOnMount?: boolean;
}) {
  const target = { opacity: 1, y: 0, ...(scale ? { scale: 1 } : {}) };
  const motionProps = triggerOnMount
    ? { animate: target }
    : {
        whileInView: target,
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, ...(scale ? { scale } : {}) }}
      transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.9, delay }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
