import type { CaseStudy } from "@/payload-types";

type Body = CaseStudy["body"];
type LexicalNode = { type?: unknown; text?: unknown; children?: unknown };

function collectText(node: LexicalNode): string {
  if (typeof node.text === "string") return node.text;
  if (!Array.isArray(node.children)) return "";
  return (node.children as LexicalNode[]).map(collectText).join(" ");
}

export function countWords(body: Body): number {
  const text = body.root.children.map((child) => collectText(child as LexicalNode)).join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

/**
 * Splits the body after its nth top-level paragraph, so something (like the
 * inline newsletter box) can sit between the two halves. Short bodies come
 * back whole, as `before`, with `after` null.
 */
export function splitAfterParagraph(body: Body, n: number): { before: Body; after: Body | null } {
  const children = body.root.children;
  let seen = 0;
  let cut = -1;
  for (let i = 0; i < children.length; i++) {
    if (children[i].type === "paragraph" && ++seen === n) {
      cut = i + 1;
      break;
    }
  }
  // Don't split when too little text would follow the break.
  if (cut === -1 || children.length - cut < 3) return { before: body, after: null };

  const withChildren = (slice: Body["root"]["children"]): Body => ({
    ...body,
    root: { ...body.root, children: slice },
  });
  return { before: withChildren(children.slice(0, cut)), after: withChildren(children.slice(cut)) };
}
