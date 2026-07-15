"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, BookOpen } from "lucide-react";
import { photoUrl } from "@/lib/images";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blobY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-cream-50">
      <motion.div style={{ y: blobY }} className="absolute inset-0 gradient-hero-blob pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-navy-800 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Ecommerce Intelligence &amp; Growth Consultancy
            </span>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 leading-[1.05]">
              The intelligence and growth partner for{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                ecommerce&apos;s most ambitious brands.
              </span>
            </h1>

            <p className="mt-6 text-lg text-navy-900/70 leading-relaxed max-w-xl">
              We combine proprietary market intelligence with hands-on growth
              strategy and execution, the rigor of a top-tier consultancy,
              built specifically for D2C, marketplace, and quick commerce
              leaders.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  href="/connect"
                  className="inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <Link
                href="/articles"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-navy-950 hover:bg-white/70 transition-colors"
              >
                Explore Our Insights
              </Link>
            </div>

            <p className="mt-12 text-sm text-navy-900/60 lg:whitespace-nowrap">
              Trusted by growth teams at{" "}
              <span className="font-semibold text-navy-900">D2C brands</span>,{" "}
              <span className="font-semibold text-navy-900">marketplace sellers</span>, and{" "}
              <span className="font-semibold text-navy-900">quick commerce operators</span>.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div style={{ y: cardY }} className="relative">
              <div className="glass relative mx-auto max-w-md rounded-3xl p-6 shadow-2xl shadow-navy-900/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-navy-900/40">
                    Latest Intelligence
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                    Market Intelligence
                  </span>
                </div>

                <div className="mt-4 flex gap-3">
                  <Image
                    src={photoUrl("agentic-commerce-thumb", 160, 160)}
                    alt=""
                    width={64}
                    height={64}
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-950 leading-snug">
                      How AI shopping agents are rewiring retail
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-xs text-navy-900/40">
                      <BookOpen className="h-3.5 w-3.5" />
                      9 min read
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-navy-950 p-4 text-white">
                    <div className="font-display text-2xl font-extrabold">6</div>
                    <div className="text-[11px] text-white/60 mt-1">Practice areas</div>
                  </div>
                  <div className="rounded-xl bg-cream-100 p-4">
                    <div className="font-display text-2xl font-extrabold text-navy-950">45+</div>
                    <div className="text-[11px] text-navy-900/50 mt-1">Markets covered</div>
                  </div>
                </div>
              </div>

              <div className="glass absolute -top-6 -right-4 hidden sm:flex items-center gap-2 rounded-2xl px-4 py-3 shadow-xl">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                <div>
                  <div className="text-xs font-bold text-navy-950">220+</div>
                  <div className="text-[10px] text-navy-900/50">Proprietary reports</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 hidden sm:block rounded-2xl bg-navy-900 px-4 py-3 shadow-xl">
                <div className="text-xs font-bold text-white">Weekly Intelligence Briefing</div>
                <div className="text-[10px] text-white/50">Direct to your inbox</div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
