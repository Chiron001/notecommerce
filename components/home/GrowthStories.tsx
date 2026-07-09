const STORIES = [
  {
    quote:
      "The contribution margin framework alone changed how we report performance internally. We finally split channel economics apart instead of looking at one blended number.",
    name: "Founder",
    role: "D2C Personal Care Brand",
    accent: "#16a37a",
  },
  {
    quote:
      "We used the quick-commerce platform playbook before our Blinkit launch and skipped a lot of the trial-and-error other brands go through in month one.",
    name: "Growth Lead",
    role: "Food & Beverage Brand",
    accent: "#e58a2a",
  },
  {
    quote:
      "It's the only ecommerce newsletter on my team's required reading list. Practical enough to action the same week we read it.",
    name: "Marketing Director",
    role: "Marketplace Seller, Home & Living",
    accent: "#6d5bf0",
  },
];

export default function GrowthStories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            From The Community
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
            Operators putting it{" "}
            <span className="text-navy-900/40">into practice.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <div
              key={story.name}
              className="rounded-2xl bg-cream-50 p-8 ring-1 ring-navy-900/5 flex flex-col"
            >
              <span
                className="h-1 w-10 rounded-full"
                style={{ backgroundColor: story.accent }}
              />
              <p className="mt-6 text-navy-900/80 leading-relaxed flex-1">
                &ldquo;{story.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: story.accent }}
                >
                  {story.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-semibold text-navy-950">
                    {story.name}
                  </div>
                  <div className="text-xs text-navy-900/50">{story.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
