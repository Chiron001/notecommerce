"use client";

import { useEffect, useState, type RefObject } from "react";

export default function SwipeProgress({
  scrollRef,
  count,
  className,
}: {
  scrollRef: RefObject<HTMLDivElement | null>;
  count: number;
  className?: string;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scrollRef]);

  const thumbWidth = 100 / count;

  return (
    <div className={className}>
      <div className="relative h-1 w-full overflow-hidden rounded-full bg-navy-900/10">
        <div
          className="absolute inset-y-0 rounded-full bg-navy-900 transition-[left] duration-150 ease-out"
          style={{
            width: `${thumbWidth}%`,
            left: `${progress * (100 - thumbWidth)}%`,
          }}
        />
      </div>
    </div>
  );
}
