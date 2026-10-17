"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SwipeProgress from "@/components/SwipeProgress";
import SectionHeader from "@/components/SectionHeader";
import InitialsAvatar from "@/components/InitialsAvatar";
import type { Testimonial } from "@/payload-types";
import { useMediaQuery } from "@/lib/useMediaQuery";

const ACCENT_HEX: Record<string, string> = {
  emerald: "#16a37a",
  amber: "#e58a2a",
  violet: "#6d5bf0",
  indigo: "#0b4a82",
};

export default function GrowthStories({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isCarousel = !useMediaQuery("(min-width: 768px)");

  // No real testimonials yet: show nothing rather than filler content.
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-[color:var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader eyebrow="Client Results" title="Growth our clients" accent="put in the boardroom." />

        <div
          ref={scrollRef}
          className="mt-14 -mx-6 flex snap-x snap-mandatory items-stretch gap-8 overflow-x-auto scroll-smooth px-6 pb-4 no-scrollbar scroll-pl-6 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0"
        >
          {testimonials.map((story, i) => {
            const photo = typeof story.photo === "object" ? story.photo : null;
            return (
              <Reveal
                key={story.id}
                delay={i * 0.1}
                triggerOnMount={isCarousel}
                className="w-[82%] shrink-0 snap-start md:w-auto"
              >
                <div className="h-full">
                  <div className="card-elegant card-elegant-hover p-8 flex flex-col h-full">
                    <span
                      className="h-1 w-10 rounded-full"
                      style={{ backgroundColor: ACCENT_HEX[story.accent] ?? ACCENT_HEX.indigo }}
                    />
                    <p className="mt-6 text-navy-900/80 leading-relaxed flex-1">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      {photo?.url ? (
                        <Image
                          src={photo.url}
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <InitialsAvatar name={story.name} className="h-10 w-10 text-xs" />
                      )}
                      <div>
                        <div className="text-sm font-semibold text-navy-950">
                          {story.name}
                        </div>
                        <div className="text-xs text-navy-900/50">{story.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <SwipeProgress
          scrollRef={scrollRef}
          count={testimonials.length}
          className="mt-5 md:hidden"
        />
      </div>
    </section>
  );
}
