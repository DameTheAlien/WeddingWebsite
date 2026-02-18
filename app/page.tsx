import Link from "next/link";

export default function Home() {
  return (
    <div className="text-black">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.2em]">
          We’re getting married
        </p>

        <h2 className="mb-6 font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
          Meiling & Damian
        </h2>

        <div className="mx-auto mb-10 max-w-xl space-y-2 text-lg">
          <p>May 29, 2027</p>
          <p>Hyatt Regency Tamaya</p>
          <p className="text-base">
            1300 Tuyuna Trail, Santa Ana Pueblo, NM 87004
          </p>
        </div>

        {/* Primary actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/details"
            className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white hover:bg-black/90 transition"
          >
            View Wedding Details
          </Link>

        </div>
      </section>

      {/* Quick links section */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 pb-20 sm:grid-cols-2 md:grid-cols-3">
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
      className="rounded-3xl border border-black/10 bg-white p-6 transition hover:shadow-sm"
    >
      <h3 className="mb-2 font-[var(--font-heading)] text-lg">
        {title}
      </h3>
      <p className="text-sm leading-6">{description}</p>
    </Link>
  );
}
