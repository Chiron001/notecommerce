import { getPayload } from "payload";
import config from "../payload.config";
import { PAGE_KEYS } from "../collections/Pages";

async function seedPages() {
  const payload = await getPayload({ config });

  for (const { value, label } of PAGE_KEYS) {
    const existing = await payload.find({
      collection: "pages",
      where: { pageKey: { equals: value } },
      limit: 1,
    });
    if (existing.docs[0]) {
      payload.logger.info(`Page SEO entry already exists, skipping: ${label}`);
      continue;
    }
    await payload.create({
      collection: "pages",
      data: { pageKey: value },
    });
    payload.logger.info(`Created page SEO entry: ${label}`);
  }

  payload.logger.info("Page seed complete.");
  process.exit(0);
}

try {
  await seedPages();
} catch (err) {
  console.error(err);
  process.exit(1);
}
