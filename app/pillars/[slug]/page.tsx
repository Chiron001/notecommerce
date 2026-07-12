import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { CONTENT_PILLARS, getPillarBySlug, PILLAR_ACCENT_STYLES } from "@/lib/pillars";
import { ARTICLES } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import PillarNav from "@/components/articles/PillarNav";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return CONTENT_PILLARS.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) return {};
  return {
    title: `${pillar.title}: NotEcommerce`,
    description: pillar.description,
  };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = getPillarBySlug(slug);
  if (!pillar) notFound();

  const accent = PILLAR_ACCENT_STYLES[pillar.accent] ?? PILLAR_ACCENT_STYLES.indigo;
  const articles = ARTICLES.filter((a) => a.pillar === pillar.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-cream-50 pt-32 pb-20 lg:pt-40">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <span className={`inline-flex rounded-lg ${accent.chip} px-2.5 py-1 text-[11px] font-bold ${accent.text}`}>
                {pillar.stat} {pillar.statLabel}
              </span>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy-950">
                {pillar.title}
              </h1>
              <p className="mt-4 text-navy-900/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-3 gap-10 items-center rounded-3xl">
              <div className="lg:col-span-2">
                <span className="text-xs font-bold uppercase tracking-widest text-violet-400">
                  Advisory Services
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-white">
                  How our {pillar.title} practice helps.
                </h2>
                <p className="mt-3 text-white/60 leading-relaxed max-w-2xl">
                  {pillar.serviceDescription}
                </p>
              </div>
              <Link
                href="/connect"
                className="lg:justify-self-end inline-flex items-center justify-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Related Insights
          </span>
          <div className="mt-6">
            <PillarNav active={pillar.slug} />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 0.08} className="h-full">
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>

          {articles.length === 0 && (
            <p className="mt-16 text-center text-navy-900/50">
              Nothing published under {pillar.title} yet. Check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
