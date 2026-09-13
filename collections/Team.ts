import type { CollectionConfig } from "payload";

export const Team: CollectionConfig = {
  slug: "team",
  labels: {
    singular: "Team Member",
    plural: "Team",
  },
  admin: {
    useAsTitle: "name",
    description:
      "Real people only. If this collection is empty, the About page's leadership section hides itself rather than showing nothing or something invented.",
    defaultColumns: ["name", "role", "order"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
      admin: { description: 'e.g. "Founder & CEO"' },
    },
    {
      name: "bio",
      type: "textarea",
      required: true,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "linkedinUrl",
      type: "text",
      label: "LinkedIn URL",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { description: "Lower numbers appear first." },
    },
  ],
};
