import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileSearch, Mail } from "lucide-react";
import { PILLAR_ACCENT_STYLES } from "@/lib/pillarAccents";
import { getAllPillars, getCaseStudiesByPillar, getPillarBySlug } from "@/lib/payload";
import ArticleCard from "@/components/ArticleCard";
import PillarNav from "@/components/articles/PillarNav";
import Reveal from "@/components/Reveal";

export const revalidate = 60;

const GRID_CLASSES_BY_COUNT: Record<number, string> = {
  1: "grid-cols-1 max-w-sm mx-auto",
  2: "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto",
};
const DEFAULT_GRID_CLASSES = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

export async function generateStaticParams() {
  const pillars = await getAllPillars();
  return pillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = await getPillarBySlug(slug);
  if (!pillar) return {};
  return {
    title: pillar.meta?.title || `${pillar.title}: NotEcommerce`,
    description: pillar.meta?.description || pillar.description,
  };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [pillar, allPillars] = await Promise.all([getPillarBySlug(slug), getAllPillars()]);
  if (!pillar) notFound();

  const accent = PILLAR_ACCENT_STYLES[pillar.accent] ?? PILLAR_ACCENT_STYLES.indigo;
  const articles = await getCaseStudiesByPillar(String(pillar.id));

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
            <PillarNav active={pillar.slug} pillars={allPillars} />
          </div>

          {articles.length > 0 ? (
            <div
              className={`mt-10 grid gap-8 items-stretch ${
                GRID_CLASSES_BY_COUNT[articles.length] ?? DEFAULT_GRID_CLASSES
              }`}
            >
              {articles.map((article, i) => (
                <Reveal key={article.slug} delay={(i % 3) * 0.08} className="h-full">
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-10 mx-auto max-w-lg rounded-3xl bg-white p-10 text-center ring-1 ring-navy-900/10">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cream-50 text-navy-900/50">
                  <FileSearch className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-950">
                  Nothing published here yet
                </h3>
                <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
                  {`Our ${pillar.title} research is still in the works. In the meantime, get it delivered the moment it's live.`}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/articles"
                    className="inline-flex items-center gap-2 rounded-full gradient-cta px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  >
                    Browse all insights
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/#newsletter"
                    className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm font-semibold text-navy-950 ring-1 ring-navy-900/10 hover:ring-navy-900/20 transition-all"
                  >
                    <Mail className="h-4 w-4" />
                    Get notified
                  </Link>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
