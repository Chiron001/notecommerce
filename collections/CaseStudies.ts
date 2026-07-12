import type { CollectionConfig } from "payload";
import { slugField } from "@/lib/slugify";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  labels: {
    singular: "Case Study",
    plural: "Case Studies",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "pillar", "publishedDate", "_status"],
  },
  versions: {
    drafts: {
      autosave: { interval: 1000 },
    },
  },
  access: {
    read: ({ req }) => {
      // Logged-in admins see drafts too; the public site only ever sees published case studies.
      if (req.user) return true;
      return { _status: { equals: "published" } };
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      hooks: slugField("title"),
      admin: {
        description: "Used in the URL, e.g. /articles/my-case-study. Auto-filled from the title if left blank.",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      maxLength: 240,
      admin: {
        description: "Short summary shown on cards and in the article header.",
      },
    },
    {
      name: "pillar",
      type: "relationship",
      relationTo: "pillars",
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      type: "row",
      fields: [
        {
          name: "coverGradientFrom",
          type: "text",
          defaultValue: "#003466",
          admin: { description: "Hex color for the card tint overlay (start)." },
        },
        {
          name: "coverGradientTo",
          type: "text",
          defaultValue: "#0b4a82",
          admin: { description: "Hex color for the card tint overlay (end)." },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "authorName",
          type: "text",
          required: true,
        },
        {
          name: "authorRole",
          type: "text",
          required: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "publishedDate",
          type: "date",
          required: true,
          defaultValue: () => new Date().toISOString(),
          admin: { date: { pickerAppearance: "dayOnly" } },
        },
        {
          name: "readTime",
          type: "text",
          required: true,
          defaultValue: "5 min read",
        },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Featured case studies appear on the homepage.",
      },
    },
    {
      name: "body",
      type: "richText",
      required: true,
    },
  ],
};
