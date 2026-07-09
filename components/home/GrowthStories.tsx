import Image from "next/image";
import { avatarUrl } from "@/lib/images";
import Reveal from "@/components/Reveal";

const STORIES = [
  {
    quote:
      "The contribution margin piece changed how we report performance internally. We finally split channel economics apart instead of staring at one blended number and guessing.",
    name: "Priya",
    role: "Founder, D2C personal care brand",
    accent: "#16a37a",
    avatar: 5,
  },
  {
    quote:
      "We read the quick commerce platform playbook before our Blinkit launch and skipped a lot of the trial and error other brands go through in month one.",
    name: "Arjun",
    role: "Growth lead, food and beverage brand",
    accent: "#e58a2a",
    avatar: 14,
  },
  {
    quote:
      "It's the only ecommerce newsletter on my team's required reading list. Short enough to actually finish, useful enough to act on the same week.",
    name: "Meera",
    role: "Marketing director, home and living seller",
    accent: "#6d5bf0",
    avatar: 26,
  },
];

export default function GrowthStories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              From The Community
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
              People actually{" "}
              <span className="text-navy-900/40">using this stuff.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story, i) => (
            <Reveal key={story.name} delay={i * 0.1}>
              <div className="rounded-2xl bg-cream-50 p-8 ring-1 ring-navy-900/5 flex flex-col h-full">
                <span
                  className="h-1 w-10 rounded-full"
                  style={{ backgroundColor: story.accent }}
                />
                <p className="mt-6 text-navy-900/80 leading-relaxed flex-1">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={avatarUrl(story.avatar)}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold text-navy-950">
                      {story.name}
                    </div>
                    <div className="text-xs text-navy-900/50">{story.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
