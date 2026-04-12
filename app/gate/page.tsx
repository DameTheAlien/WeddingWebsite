import { Suspense } from "react";
import GateClient from "./GateClient";

function GateFallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6">
      <div className="mb-8 text-center">
        <p className="text-2xl sm:text-3xl font-[var(--font-heading)] tracking-tight">
          🚧 Still being built
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

        <div className="mt-8">
          <div className="w-full rounded-xl border border-black/20 px-4 py-3 text-black/50">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GatePage() {
  return (
    <Suspense fallback={<GateFallback />}>
      <GateClient />
    </Suspense>
  );
}