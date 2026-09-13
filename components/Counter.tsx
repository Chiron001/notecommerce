"use client";

import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(0);

  // Animate on mount rather than gating on scroll-into-view: these stats sit
  // near the top of the page, and a missed IntersectionObserver trigger
  // (e.g. the element is already in the initial viewport with no scroll
  // event to fire it) left the counter permanently stuck at 0.
  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  );
}
