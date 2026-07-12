"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  triggerOnMount = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /**
   * Animate in as soon as this mounts, instead of waiting for scroll
   * intersection. Use this for items inside a horizontally-scrolling
   * carousel: IntersectionObserver checks both axes, so cards sitting
   * outside the current horizontal scroll position never "enter view"
   * and would otherwise stay hidden until swiped to.
   */
  triggerOnMount?: boolean;
}) {
  const motionProps = triggerOnMount
    ? { animate: { opacity: 1, y: 0 } }
    : {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
