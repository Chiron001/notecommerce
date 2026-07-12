export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function slugField(sourceField = "title") {
  return {
    beforeValidate: [
      ({ data, value }: { data?: Record<string, unknown>; value?: string }) => {
        if (value) return slugify(value);
        const source = data?.[sourceField];
        return typeof source === "string" ? slugify(source) : value;
      },
    ],
  };
}
