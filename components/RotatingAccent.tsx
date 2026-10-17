"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Light-italic gradient headline accent whose last word cycles, e.g.
 * "across every marketplace. / quick commerce app. / storefront."
 * The first word is what renders on the server, so crawlers see a full sentence.
 */
export default function RotatingAccent({
  prefix,
  words,
  interval = 2600,
}: {
  prefix: string;
  words: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || words.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [reduceMotion, words.length, interval]);

  // The cycling word gets its own single, non-wrapping line, so the headline
  // keeps the same height whichever word is showing and nothing below shifts.
  return (
    <>
      <span className="headline-accent block">{prefix}</span>
      <span className="block whitespace-nowrap">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: "0.35em", filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: "-0.35em", filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="headline-accent inline-block"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
