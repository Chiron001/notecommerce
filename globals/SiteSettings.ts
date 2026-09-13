import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  access: {
    read: () => true,
  },
  admin: {
    group: "Settings",
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      defaultValue: "NotEcommerce",
      admin: {
        description: "Used as the fallback title suffix across the site.",
      },
    },
    {
      type: "collapsible",
      label: "Contact",
      fields: [
        {
          name: "contactEmail",
          type: "email",
          admin: {
            description: "Shown publicly on the Connect page and footer, alongside WhatsApp.",
          },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Company (legal)",
      admin: {
        description:
          "Optional. Each field only appears on the site once filled in — leave blank rather than guessing, nothing here is shown until you add it.",
      },
      fields: [
        {
          name: "legalEntityName",
          type: "text",
          admin: { description: 'Registered business name, e.g. "NotEcommerce Consulting Pvt. Ltd."' },
        },
        {
          name: "registeredAddress",
          type: "textarea",
        },
        {
          name: "gstNumber",
          type: "text",
          label: "GST Number",
        },
        {
          name: "foundedYear",
          type: "text",
          admin: { description: 'e.g. "2025"' },
        },
      ],
    },
    {
      type: "collapsible",
      label: "Custom Code",
      fields: [
        {
          name: "headerCode",
          type: "code",
          admin: {
            language: "html",
            description:
              "Injected near the top of every page, before the page becomes interactive. Paste a full <script>...</script> tag (e.g. Google Analytics, Meta Pixel) or bare JavaScript. Only <script> content is supported here, not other tags like <meta> or <link>.",
          },
        },
        {
          name: "bodyCode",
          type: "code",
          admin: {
            language: "html",
            description:
              "Injected at the end of every page's <body>, after the page loads. Paste a full <script>...</script> tag or bare JavaScript.",
          },
        },
      ],
    },
  ],
};
