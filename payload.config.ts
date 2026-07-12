import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Pillars } from "./collections/Pillars";
import { CaseStudies } from "./collections/CaseStudies";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

function resolveConnectionString() {
  const raw = process.env.DATABASE_URI || process.env.POSTGRES_URL || "";
  if (!raw) return "";
  // Supabase connection strings often carry sslmode=require, which pg-connection-string
  // upgrades to full certificate verification and conflicts with the explicit
  // rejectUnauthorized: false below. Strip it so our own ssl config always wins.
  const url = new URL(raw);
  url.searchParams.delete("sslmode");
  url.searchParams.delete("supa");
  return url.toString();
}

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pillars, CaseStudies],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: resolveConnectionString(),
      ssl: { rejectUnauthorized: false },
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN ?? "",
    }),
    seoPlugin({
      collections: ["pillars", "case-studies"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => {
        const title = typeof doc?.title === "string" ? doc.title : "";
        return title ? `${title}: NotEcommerce` : "NotEcommerce";
      },
      generateDescription: ({ doc }) => {
        if (typeof doc?.excerpt === "string") return doc.excerpt;
        if (typeof doc?.description === "string") return doc.description;
        return "";
      },
    }),
  ],
});
