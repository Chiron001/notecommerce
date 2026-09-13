import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
  admin: {
    useAsTitle: "name",
    description:
      "Real client testimonials only, with the client's real name, role, and company. If this collection is empty, the homepage testimonials section hides itself rather than showing anything invented.",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
      admin: {
        description: 'e.g. "Founder, Nutrisapiens" — real name and real company.',
      },
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Optional. If left blank, an initials badge is shown instead of a stock photo.",
      },
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
