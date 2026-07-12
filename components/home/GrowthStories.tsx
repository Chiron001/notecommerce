"use client";

import { useRef } from "react";
import Image from "next/image";
import { avatarUrl } from "@/lib/images";
import Reveal from "@/components/Reveal";
import SwipeProgress from "@/components/SwipeProgress";
import { useMediaQuery } from "@/lib/useMediaQuery";

const STORIES = [
  {
    quote:
      "Their contribution margin model completely changed how we report performance internally. We now see channel economics with total clarity instead of relying on one blended number.",
    name: "Priya",
    role: "VP of Growth, D2C Personal Care Brand",
    accent: "#16a37a",
    avatar: 5,
  },
  {
    quote:
      "Their quick commerce playbook was the difference between a chaotic Blinkit launch and a controlled, profitable one. The engagement paid for itself within the first quarter.",
    name: "Arjun",
    role: "Head of Ecommerce, Food & Beverage Brand",
    accent: "#e58a2a",
    avatar: 14,
  },
  {
    quote:
      "NotEcommerce operates at a different level of rigor. Every recommendation is backed by data, and their team executes alongside ours, not just around us.",
    name: "Meera",
    role: "CMO, Home & Living Marketplace Seller",
    accent: "#6d5bf0",
    avatar: 26,
  },
];

export default function GrowthStories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isCarousel = !useMediaQuery("(min-width: 768px)");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              Client Results
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
              Trusted by{" "}
              <span className="text-navy-900/40">growth leaders.</span>
            </h2>
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          className="mt-14 -mx-6 flex snap-x snap-mandatory items-stretch gap-8 overflow-x-auto scroll-smooth px-6 pb-4 no-scrollbar scroll-pl-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0"
        >
          {STORIES.map((story, i) => (
            <Reveal
              key={story.name}
              delay={i * 0.1}
              triggerOnMount={isCarousel}
              className="w-[82%] shrink-0 snap-start md:w-auto"
            >
              <div className="rounded-2xl bg-cream-50 p-8 ring-1 ring-navy-900/5 flex flex-col h-full">
                <span
                  className="h-1 w-10 rounded-full"
                  style={{ backgroundColor: story.accent }}
                />
                <p className="mt-6 text-navy-900/80 leading-relaxed flex-1">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={avatarUrl(story.avatar)}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-navy-950">
                      {story.name}
                    </div>
                    <div className="text-xs text-navy-900/50">{story.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SwipeProgress
          scrollRef={scrollRef}
          count={STORIES.length}
          className="mt-5 md:hidden"
        />
      </div>
    </section>
  );
}
