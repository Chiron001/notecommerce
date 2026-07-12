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
