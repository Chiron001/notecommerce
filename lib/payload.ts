import { getPayload } from "payload";
import config from "@payload-config";
import type { CaseStudy, Pillar } from "@/payload-types";

export async function getPayloadClient() {
  return getPayload({ config });
}

export async function getAllPillars(): Promise<Pillar[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "pillars",
    limit: 100,
    sort: "title",
  });
  return docs;
}

export async function getPillarBySlug(slug: string): Promise<Pillar | null> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "pillars",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return docs[0] ?? null;
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "case-studies",
    limit: 200,
    sort: "-publishedDate",
    depth: 1,
  });
  return docs;
}

export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "case-studies",
    where: { featured: { equals: true } },
    sort: "-publishedDate",
    limit: 6,
    depth: 1,
  });
  return docs;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "case-studies",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return docs[0] ?? null;
}

export async function getCaseStudiesByPillar(pillarId: string, excludeSlug?: string, limit = 3): Promise<CaseStudy[]> {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "case-studies",
    where: {
      and: [
        { pillar: { equals: pillarId } },
        ...(excludeSlug ? [{ slug: { not_equals: excludeSlug } }] : []),
      ],
    },
    sort: "-publishedDate",
    limit,
    depth: 1,
  });
  return docs;
}
