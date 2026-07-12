import type { CollectionConfig } from "payload";
import { slugField } from "@/lib/slugify";

export const Pillars: CollectionConfig = {
  slug: "pillars",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "stat", "accent"],
  },
  access: {
    read: () => true,
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
        description: "Used in the URL, e.g. /pillars/market-intelligence. Auto-filled from the title if left blank.",
      },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      admin: {
        description: "Short editorial description shown on the pillar hero and cards.",
      },
    },
    {
      name: "serviceDescription",
      type: "textarea",
      required: true,
      admin: {
        description: "Consultancy/advisory framing shown in the 'How our practice helps' section.",
      },
    },
    {
      name: "stat",
      type: "text",
      required: true,
      admin: { description: 'e.g. "120+"' },
    },
    {
      name: "statLabel",
      type: "text",
      required: true,
      admin: { description: 'e.g. "Reports & briefings"' },
    },
    {
      name: "accent",
      type: "select",
      required: true,
      defaultValue: "indigo",
      options: [
        { label: "Emerald", value: "emerald" },
        { label: "Amber", value: "amber" },
        { label: "Violet", value: "violet" },
        { label: "Indigo", value: "indigo" },
      ],
    },
  ],
};
