import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Header / Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-semibold tracking-tight">
          Meiling and Damian
        </h1>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="/details" className="hover:underline">
            Details
          </Link>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/registry" className="hover:underline">
            Registry
          </Link>
          <Link href="/photos" className="hover:underline">
            Photos
          </Link>
          <Link href="/rsvp" className="hover:underline">
            RSVP
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
          Married
        </p>

        <h2 className="mb-6 text-4xl font-serif tracking-tight sm:text-5xl">
          Meiling & Damian
        </h2>

        <p className="mb-4 text-lg text-zinc-600">
          May 29, 2027
        </p>

        <p className="mb-4 text-lg text-zinc-600">
          Hyatt Regency Tamaya
        </p>

        <p className="mb-10 text-lg text-zinc-600">
          1300 Tuyuna Trail, Santa Ana Pueblo, NM 87004
        </p>

        {/* Primary actions */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/details"
            className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white hover:bg-zinc-800"
          >
            View Wedding Details
          </Link>

          <Link
            href="/upload"
            className="rounded-full border border-black px-8 py-3 text-sm font-medium hover:bg-zinc-100"
          >
            Upload Photos
          </Link>
        </div>
      </main>

      {/* Quick links section */}
      <section className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 pb-24 sm:grid-cols-2 md:grid-cols-3">
        <QuickLink
          title="Schedule & Location"
          href="/details"
          description="Weekend events, timing, and venue info."
        />
        <QuickLink
          title="Travel"
          href="/travel"
          description="Hotels, airports, and things to do nearby."
        />
        <QuickLink
          title="FAQ"
          href="/faq"
          description="Dress code, kids, parking, and more."
        />
        <QuickLink
          title="Registry"
          href="/registry"
          description="Gifts and honeymoon fund."
        />
        <QuickLink
          title="Photos"
          href="/photos"
          description="View and upload memories from the weekend."
        />
        <QuickLink
          title="RSVP"
          href="/rsvp"
          description="Let us know if you can make it."
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Meiling & Damian
      </footer>
    </div>
  );
}

function QuickLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:shadow-sm"
    >
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="text-sm text-zinc-600">{description}</p>
    </Link>
  );
}
