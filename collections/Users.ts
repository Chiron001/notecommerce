import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    // Only an already-authenticated admin can create another user.
    // This is what keeps the panel single-admin: nobody can self-register.
    create: ({ req }) => Boolean(req.user),
  },
  fields: [],
};
