"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
  const isOpen = isDesktop || open;

  return (
    <div className="border-b border-white/10 py-4 md:border-0 md:py-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left md:pointer-events-none md:cursor-default"
        aria-expanded={isOpen}
      >
        <h4 className="text-xs font-semibold text-white/90 uppercase tracking-widest">
          {title}
        </h4>
        <ChevronDown
          className={`h-4 w-4 text-white/40 transition-transform md:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-3 pb-1">{children}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
