"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GatePage() {
  const router = useRouter();
  const params = useSearchParams();
  const nextPath = params.get("next") || "/";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Incorrect password. Try again.");
      return;
    }

    router.replace(nextPath);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-6">
      <div className="w-full max-w-md rounded-2xl border border-black/10 p-8 shadow-sm">
        <h1 className="text-center text-3xl font-[var(--font-heading)]">
          Enter Password
        </h1>

        <p className="mt-2 text-center text-sm text-black/70">
          This wedding website is private.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-black/20 px-4 py-3 outline-none focus:border-black/40"
            autoFocus
          />

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black text-white py-3 disabled:opacity-60"
          >
            {loading ? "Checking..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
