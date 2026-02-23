"use client";

import { useState } from "react";

export default function RegistryPage() {
  const ZOLA_URL = "http://www.zola.com/registry/meilinganddamian";

  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(ZOLA_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // If clipboard fails (rare), do nothing—user can still use the button link.
    }
  };

  const quickAmounts = [
    { label: "$50", desc: "A sweet gesture" },
    { label: "$100", desc: "A dinner & drinks" },
    { label: "$250", desc: "A special experience" },
    { label: "Custom", desc: "Any amount" },
  ];

  return (
    <div className="px-6 py-16 text-black">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h1 className="mb-5 font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
            A Note on Gifts
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-black/75">
            Your presence is truly the greatest gift. We’re lucky to already
            have a home together with everything we need. If you’d like to give
            something, we’ve created a simple fund for our honeymoon and future
            adventures.
          </p>

          {/* Ornamental divider */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/25" />
            <span className="h-[1px] w-16 bg-black/15" />
          </div>
        </header>

        {/* Luxe card */}
        <section className="mt-10 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:p-10">
          <div className="text-center">
            <h2 className="mb-2 font-[var(--font-heading)] text-2xl tracking-tight">
              Contribute Through Our Zola Registry
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-6 text-black/65">
              Zola makes it easy to contribute securely by card or bank transfer
              (options may vary by guest).
            </p>
          </div>

          {/* Suggested amounts (optional UI) */}
          <div className="grid gap-3 sm:grid-cols-2">
            {quickAmounts.map((a) => (
              <div
                key={a.label}
                className="rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium">{a.label}</div>
                  <div className="text-xs tracking-wide text-black/45">
                    SUGGESTED
                  </div>
                </div>
                <div className="mt-1 text-sm text-black/60">{a.desc}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={ZOLA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-black px-8 py-3.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90 sm:w-auto"
            >
              Visit Our Registry
            </a>

            <button
              onClick={copyLink}
              className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white px-8 py-3.5 text-sm font-medium text-black shadow-sm transition hover:bg-black/5 sm:w-auto"
              type="button"
            >
              {copied ? "Link Copied ✓" : "Copy Registry Link"}
            </button>
          </div>

          {/* URL (subtle) */}
          <div className="mt-6 text-center">
            <p className="text-xs text-black/45">
              Or copy/paste this link:
              <span className="ml-2 select-all rounded-md border border-black/10 bg-black/5 px-2 py-1 font-mono">
                {ZOLA_URL}
              </span>
            </p>
          </div>

          {/* Closing note */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-black/10" />
            <span className="text-xs tracking-[0.2em] text-black/45">
              NO PRESSURE
            </span>
            <span className="h-[1px] w-10 bg-black/10" />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-black/60">
            Please don’t feel obligated — we’re just grateful you’re celebrating
            with us.
          </p>
        </section>
      </div>
    </div>
  );
}
