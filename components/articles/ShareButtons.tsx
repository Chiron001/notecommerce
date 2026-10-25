"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import SocialIcon from "@/components/SocialIcon";

const BUTTON =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border-soft)] text-navy-900/60 transition-colors hover:border-indigo-600 hover:text-indigo-600";

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  // Read the URL at click time so shares always point at the page being viewed.
  const open = (build: (url: string, text: string) => string) => {
    const url = encodeURIComponent(window.location.href);
    window.open(build(url, encodeURIComponent(title)), "_blank", "noopener,noreferrer");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (insecure context, permissions); nothing useful to show.
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label="Share on LinkedIn"
        className={BUTTON}
        onClick={() => open((url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`)}
      >
        <SocialIcon name="LinkedIn" className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Share on X"
        className={BUTTON}
        onClick={() => open((url, text) => `https://x.com/intent/post?url=${url}&text=${text}`)}
      >
        <SocialIcon name="X" className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        aria-label="Share on WhatsApp"
        className={BUTTON}
        onClick={() => open((url, text) => `https://wa.me/?text=${text}%20${url}`)}
      >
        <SocialIcon name="WhatsApp" className="h-4 w-4" />
      </button>
      <button type="button" aria-label="Copy link" className={BUTTON} onClick={copy}>
        {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Link2 className="h-4 w-4" />}
      </button>
    </div>
  );
}
