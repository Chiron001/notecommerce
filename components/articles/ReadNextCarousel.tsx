"use client";

import { useRef } from "react";
import type { CaseStudy } from "@/payload-types";
import Reveal from "@/components/Reveal";
import SwipeProgress from "@/components/SwipeProgress";
import { useMediaQuery } from "@/lib/useMediaQuery";
import ReadNextCard from "./ReadNextCard";

/** Swipeable row of "Read next" cards on phones, a grid from `sm` up. */
export default function ReadNextCarousel({ articles }: { articles: CaseStudy[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isCarousel = !useMediaQuery("(min-width: 640px)");

  return (
    <>
      <div
        ref={scrollRef}
        className="mt-8 -mx-6 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto scroll-smooth px-6 pb-4 no-scrollbar scroll-pl-6 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
      >
        {articles.map((r, i) => (
          <Reveal
            key={r.slug}
            delay={(i % 3) * 0.08}
            triggerOnMount={isCarousel}
            className="w-[82%] shrink-0 snap-start sm:w-auto"
          >
            <ReadNextCard article={r} />
          </Reveal>
        ))}
      </div>

      <SwipeProgress scrollRef={scrollRef} count={articles.length} className="mt-5 sm:hidden" />
    </>
  );
}
