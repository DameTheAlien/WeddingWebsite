"use client";

import { useMemo, useState } from "react";

type SearchResult = { guestId: string; fullName: string };

export default function RSVPPage() {
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selected, setSelected] = useState<SearchResult | null>(null);

  const [attending, setAttending] = useState<boolean | null>(null);
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const canSearch = useMemo(() => query.trim().length >= 2, [query]);

  async function onSearch() {
    setSelected(null);
    setAttending(null);
    setNotes("");
    setStatus("idle");
    setErrorMsg("");

    if (!canSearch) return;

    setSearching(true);
    try {
      const res = await fetch("/api/rsvp/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Search failed");
      setResults(data.results || []);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Search failed");
      setResults([]);
    } finally {
      setSearching(false);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      if (!selected) throw new Error("Please select your name first.");
      if (attending === null) throw new Error("Please choose Yes or No.");

      const res = await fetch("/api/rsvp/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestId: selected.guestId,
          attending,
          notes: notes || "",
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Submission failed.");

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="px-6 py-16 text-black">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-3 text-center font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
          RSVP
        </h1>

        <p className="mb-10 text-center text-base leading-7">
          Search your name, then confirm your RSVP.
        </p>

        {/* Ornamental divider */}
        <div className="mt-10 mb-12 flex items-center justify-center gap-3">
          <span className="h-[1px] w-16 bg-black/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/25" />
          <span className="h-[1px] w-16 bg-black/15" />
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <label className="mb-2 block text-sm font-medium">Search your name</label>
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black/40"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Start typing your first or last name…"
            />
            <button
              type="button"
              onClick={onSearch}
              disabled={!canSearch || searching}
              className="rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
            >
              {searching ? "Searching…" : "Search"}
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {results.length > 0 && (
              <>
                <div className="text-xs font-medium text-black/60">Select your name</div>
                {results.map((r) => (
                  <button
                    key={r.guestId}
                    type="button"
                    onClick={() => setSelected(r)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm ${
                      selected?.guestId === r.guestId
                        ? "border-black bg-black text-white"
                        : "border-black/15 bg-white hover:border-black/30"
                    }`}
                  >
                    {r.fullName}
                  </button>
                ))}
              </>
            )}

            {canSearch && !searching && results.length === 0 && (
              <div className="text-sm text-black/60">No matches found. Try a different spelling.</div>
            )}
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-5 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="text-sm">
            <span className="font-medium">Selected:</span>{" "}
            {selected ? selected.fullName : <span className="text-black/60">None</span>}
          </div>

          <div className="flex items-center justify-between gap-4 rounded-xl border border-black/10 px-4 py-3">
            <div>
              <div className="text-sm font-medium">Will you be attending?</div>
              <div className="text-xs text-black/60">Choose Yes or No</div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setAttending(true)}
                className={`rounded-xl px-4 py-2 text-sm font-medium ${
                  attending === true ? "bg-black text-white" : "border border-black/15 bg-white"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setAttending(false)}
                className={`rounded-xl px-4 py-2 text-sm font-medium ${
                  attending === false ? "bg-black text-white" : "border border-black/15 bg-white"
                }`}
              >
                No
              </button>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Notes (optional)</label>
            <textarea
              className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-black/40"
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Allergies, dietary restrictions, questions, etc."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting…" : "Submit RSVP"}
          </button>

          {status === "success" && (
            <div className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm">
              ✅ Thanks! Your RSVP was saved.
            </div>
          )}

          {status === "error" && (
            <div className="rounded-xl border border-red-200 bg-white px-4 py-3 text-sm text-red-700">
              ❌ {errorMsg}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
