"use client";

/** Newsletter box that sits partway through an article, between two halves of the body. */
export default function InlineNewsletter() {
  return (
    <aside className="my-12 rounded-2xl bg-cream-100 px-6 py-8 sm:px-8">
      <h2 className="font-display text-xl font-bold text-navy-950 sm:text-2xl">
        Get The Intelligence Briefing
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)]">
        The research our advisory clients rely on, distilled into one weekly email. Free, and you
        can unsubscribe anytime.
      </p>
      <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="inline-newsletter-email" className="sr-only">
          Work email
        </label>
        <input
          id="inline-newsletter-email"
          type="email"
          required
          placeholder="Your work email"
          className="min-w-0 flex-1 rounded-xl border border-[color:var(--border-soft)] bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/40 outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          Subscribe
        </button>
      </form>
    </aside>
  );
}
