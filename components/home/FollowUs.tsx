import { SOCIAL_LINKS } from "@/lib/nav";
import SocialIcon from "@/components/SocialIcon";

export default function FollowUs() {
  return (
    <section id="about" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            Join The Community
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-navy-950">
            Find us wherever{" "}
            <span className="text-navy-900/40">you already are.</span>
          </h2>
          <p className="mt-4 text-navy-900/60 leading-relaxed">
            Beyond long-form articles, NotEcommerce breaks down market moves
            and quick takes daily across every major platform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-8 ring-1 ring-navy-900/10 hover:ring-navy-900/20 hover:-translate-y-1 transition-all"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full gradient-cta text-white">
                <SocialIcon name={s.label as "Instagram" | "X" | "LinkedIn" | "Facebook"} className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-bold text-navy-950">
                {s.label}
              </span>
              <span className="text-xs text-navy-900/40">@notecommerce</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
