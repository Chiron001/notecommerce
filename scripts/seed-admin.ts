import { getPayload } from "payload";
import config from "../payload.config";

const EMAIL = "sandeep.somai16@gmail.com";

async function seedAdmin() {
  const payload = await getPayload({ config });

  const existing = await payload.find({
    collection: "users",
    where: { email: { equals: EMAIL } },
    limit: 1,
  });

  if (existing.docs[0]) {
    payload.logger.info(`Admin user already exists: ${EMAIL}`);
    process.exit(0);
  }

  const password = process.argv[2];
  if (!password) {
    console.error("Usage: payload run scripts/seed-admin.ts <password>");
    process.exit(1);
  }

  await payload.create({
    collection: "users",
    data: { email: EMAIL, password },
  });

  payload.logger.info(`Created admin user: ${EMAIL}`);
  process.exit(0);
}

try {
  await seedAdmin();
} catch (err) {
  console.error(err);
  process.exit(1);
}
