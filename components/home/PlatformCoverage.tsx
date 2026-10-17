import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { PLATFORM_GROUPS, PLATFORM_LOGOS, PLATFORMS } from "@/lib/platforms";

const GROUP_DOT = ["bg-indigo-600", "bg-amber-500", "bg-violet-500", "bg-emerald-500"];

export default function PlatformCoverage() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
          <SectionHeader
            eyebrow="Market Coverage"
            title="Deep expertise across"
            accent="every platform that matters."
            subtitle="D2C storefronts, marketplaces and quick commerce apps. Wherever your customers are shopping, our research and advisory work is already there."
          />

          <Reveal delay={0.1}>
            <div className="card-elegant p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-navy-950">Platforms we track</div>
                <span className="rounded-full bg-cream-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {PLATFORMS.length} platforms · {PLATFORM_GROUPS.length} channels
                </span>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {PLATFORM_GROUPS.map((group, i) => (
                  <div key={group.label} className="rounded-xl bg-[color:var(--surface)] p-4 ring-1 ring-[color:var(--border-soft)]">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-900/50">
                      <span className={`h-1.5 w-1.5 rounded-full ${GROUP_DOT[i % GROUP_DOT.length]}`} />
                      {group.label}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.platforms.map((p) => (
                        <span
                          key={p}
                          className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-navy-900 ring-1 ring-[color:var(--border-soft)]"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="marquee-hover-pause relative mt-12 overflow-hidden sm:mt-16 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {/* Four copies: the track scrolls by half its width, so two copies must
              always overfill the viewport for the loop to stay seamless. */}
          {/* Equal spacing comes from a trailing margin on every item (not flex
              gap), so the seam between copies matches the gap between logos. */}
          <div className="marquee-track flex w-max items-center py-3">
            {[...PLATFORM_LOGOS, ...PLATFORM_LOGOS, ...PLATFORM_LOGOS, ...PLATFORM_LOGOS].map((logo, i) => {
              const duplicate = i >= PLATFORM_LOGOS.length;
              const height = logo.ratio === 1 ? 36 : 28;
              const width = Math.round(height * logo.ratio);
              const alt = duplicate ? "" : logo.name;
              const imgClass = "w-auto object-contain";
              return (
                <span
                  key={i}
                  aria-hidden={duplicate || undefined}
                  className="mr-14 flex h-12 shrink-0 items-center gap-2.5 opacity-85 dark:opacity-100 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100 sm:mr-16"
                >
                  {logo.darkSrc ? (
                    <>
                      <Image src={logo.src} alt={alt} width={width} height={height} unoptimized className={`${imgClass} dark:hidden`} style={{ height }} />
                      <Image src={logo.darkSrc} alt={alt} width={width} height={height} unoptimized className={`${imgClass} hidden dark:block`} style={{ height }} />
                    </>
                  ) : (
                    <Image src={logo.src} alt={alt} width={width} height={height} unoptimized className={imgClass} style={{ height }} />
                  )}
                  {logo.showName && <span className="text-[15px] font-bold text-navy-950">{logo.name}</span>}
                </span>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
