import type { Metadata } from "next";
import { getPageSEO } from "@/lib/payload";
import type { PageKey } from "@/collections/Pages";
import type { Media } from "@/payload-types";

export async function resolvePageMetadata(pageKey: PageKey, fallback: Metadata): Promise<Metadata> {
  const page = await getPageSEO(pageKey);
  const meta = page?.meta;
  if (!meta) return fallback;

  const image = typeof meta.image === "object" ? (meta.image as Media | null) : null;

  return {
    ...fallback,
    title: meta.title || fallback.title,
    description: meta.description || fallback.description,
    ...(image?.url
      ? {
          openGraph: { images: [{ url: image.url }] },
          twitter: { card: "summary_large_image", images: [image.url] },
        }
      : {}),
  };
}

// Custom head/body code fields accept either bare JavaScript or a full <script>...</script>
// tag copy-pasted from an analytics platform. Strip the wrapping tag if present so we always
// pass next/script raw JS content, never re-nest a <script> tag inside another one.
export function extractScriptContent(raw?: string | null): string {
  if (!raw) return "";
  const match = raw.trim().match(/^<script[^>]*>([\s\S]*)<\/script>$/i);
  return match ? match[1].trim() : raw.trim();
}
