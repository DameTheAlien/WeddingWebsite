"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GateClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        setError("Incorrect password");
        setLoading(false);
        return;
      }

      router.replace(next);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6">
      <div className="mb-8 text-center">
        <p className="text-2xl sm:text-3xl font-[var(--font-heading)] tracking-tight">
          🚧 Still being built 🚧
        </p>
        <p className="mt-2 text-sm sm:text-base text-black/70">
          Please check back soon.
        </p>
      </div>

      <div className="w-full max-w-md rounded-2xl border border-black/10 p-8 shadow-sm">
        <h1 className="text-center text-3xl font-[var(--font-heading)]">
          Enter Password
        </h1>

        <p className="mt-2 text-center text-sm text-black/70">
          This wedding website is private.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="overflow-hidden rounded-xl border border-black/20">
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 outline-none"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="px-4 text-sm text-black/70 transition hover:text-black"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-black px-4 py-3 text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Entering..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}