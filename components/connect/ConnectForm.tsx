"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ConnectForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const company = data.get("company")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    const subject = `Consultation request from ${name || "the website"}`;
    const body = [
      message,
      "",
      "---",
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:hello@notecommerce.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass rounded-3xl p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy-950">
          Your email app should be open
        </h3>
        <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
          We prefilled your request. Hit send from there and it lands
          directly with our advisory team.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <div className="glass rounded-3xl p-8">
      <h3 className="font-display text-xl font-bold text-navy-950">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-navy-900/50">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Jane Doe"
              className="mt-1.5 w-full rounded-xl bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/30 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-navy-900/50">
              Work Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="jane@brand.com"
              className="mt-1.5 w-full rounded-xl bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/30 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-navy-900/50">
            Company <span className="normal-case text-navy-900/30">(optional)</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Acme Global"
            className="mt-1.5 w-full rounded-xl bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/30 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-navy-900/50">
            How can we help? <span className="normal-case text-navy-900/30">(optional)</span>
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your category, your goals, and the outcome you're chasing."
            className="mt-1.5 w-full resize-none rounded-xl bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/30 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Submit Request
          <Send className="h-4 w-4" />
        </button>
        <p className="text-center text-xs text-navy-900/40">
          Your inquiry is confidential. We respond within one business day.
        </p>
      </form>
    </div>
  );
}
