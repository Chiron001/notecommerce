"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function ConnectForm({
  contactEmail = "trynotecommerce@gmail.com",
}: {
  contactEmail?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/connect/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, page: window.location.href }),
      });
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl bg-white shadow-elegant ring-1 ring-[color:var(--border-soft)] p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy-950">
          Thanks, we&apos;ve got your request
        </h3>
        <p className="mt-2 text-sm text-navy-900/60 leading-relaxed">
          Someone from our advisory team will reply within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white shadow-elegant ring-1 ring-[color:var(--border-soft)] p-8">
      <h3 className="font-display text-xl font-bold text-navy-950">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Honeypot for bots: hidden from people and screen readers. */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
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
              className="mt-1.5 w-full rounded-xl bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/45 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
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
              className="mt-1.5 w-full rounded-xl bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/45 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
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
            className="mt-1.5 w-full rounded-xl bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/45 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
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
            className="mt-1.5 w-full resize-none rounded-xl bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-900/45 outline-none ring-1 ring-navy-900/10 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <MagneticButton>
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full items-center justify-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Submit Request"}
            <Send className="h-4 w-4" />
          </button>
        </MagneticButton>
        {status === "error" && (
          <p role="alert" className="text-center text-sm text-red-600">
            Something went wrong sending your request. Please try again, or email us at{" "}
            <a href={`mailto:${contactEmail}`} className="font-semibold underline">
              {contactEmail}
            </a>
            .
          </p>
        )}
        <p className="text-center text-xs text-navy-900/40">
          Your inquiry is confidential. We respond within one business day.
        </p>
      </form>
    </div>
  );
}
