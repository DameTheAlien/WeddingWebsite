// app/travel/page.tsx
import { Plane, Car, MapPin, Hotel, Clock, Info, ExternalLink } from "lucide-react";

type HotelOption = {
  name: string;
  area: string;
  note: string;
  href?: string;
};

const LODGING: HotelOption[] = [
  {
    name: "On-site Resort Rooms",
    area: "Closest to the venue",
    note: "Rooms may be available directly through the resort (no block reserved).",
  },
  {
    name: "Rio Rancho",
    area: "About 5 minutes away",
    note: "Often the most convenient off-site area for proximity to the venue.",
  },
  {
    name: "Downtown Albuquerque",
    area: "About 30–40 minutes away",
    note: "Best if you want restaurants, nightlife, and exploring.",
  },
  {
    name: "North Albuquerque / Uptown",
    area: "Varies by location",
    note: "A comfortable option with shopping and easy highway access.",
  },
];

function Card({
  title,
  icon,
  kicker,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_12px_50px_-35px_rgba(0,0,0,0.35)] backdrop-blur sm:p-8">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white shadow-sm">
            {icon}
          </div>
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl tracking-tight">
              {title}
            </h2>
            {kicker ? (
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-black/55">
                {kicker}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="text-sm leading-7 text-black/70">{children}</div>
    </section>
  );
}

function Pill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_10px_40px_-35px_rgba(0,0,0,0.35)] backdrop-blur">
      <div className="mb-2 flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-black/60">
        {icon}
        {label}
      </div>
      <p className="text-sm leading-7 text-black/70">{value}</p>
    </div>
  );
}

function SoftNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
      <div className="mb-2 flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-black/60">
        <Info className="h-4 w-4" />
        Note
      </div>
      <div className="text-sm leading-7 text-black/70">{children}</div>
    </div>
  );
}

export default function TravelPage() {
  return (
    <main className="px-6 py-16 text-black">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
            Planning Your Weekend
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/70">
            Here are a few helpful notes on getting here, where to stay, and
            transportation for the weekend.
          </p>
        </header>

        {/* Ornamental divider */}
        <div className="mt-10 mb-12 flex items-center justify-center gap-3">
          <span className="h-[1px] w-16 bg-black/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/25" />
          <span className="h-[1px] w-16 bg-black/15" />
        </div>

        {/* Quick Facts */}
        <section className="mb-10 grid gap-4 sm:grid-cols-3">
          <Pill
            icon={<Clock className="h-4 w-4" />}
            label="Drive times"
            value={"Venue is ~30–40 min from the airport & downtown, and ~5 min from Rio Rancho."}
          />
          <Pill
            icon={<Hotel className="h-4 w-4" />}
            label="No hotel block"
            value={"We’re not reserving a room block — please book whatever fits you best."}
          />
          <Pill
            icon={<Car className="h-4 w-4" />}
            label="Transportation"
            value={"We won’t have a shuttle. Please plan to drive, rideshare, or carpool."}
          />
        </section>

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Flying In" icon={<Plane className="h-5 w-5" />} kicker="Airport">
            <p className="mb-4">
              The closest airport is{" "}
              <span className="font-medium text-black/80">
                Albuquerque International Sunport (ABQ)
              </span>
              .
            </p>

            <SoftNote>
              Because the venue is outside of downtown, a{" "}
              <span className="font-medium text-black/80">rental car</span> is
              often the easiest option for flexibility throughout the weekend.
            </SoftNote>
          </Card>

          <Card title="Getting Around" icon={<Car className="h-5 w-5" />} kicker="Plan ahead">
            <p className="mb-4">
              Albuquerque and the surrounding area are spread out, so we
              recommend planning transportation in advance.
            </p>

            <ul className="space-y-3">
              <li className="rounded-2xl border border-black/10 bg-white/60 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl border border-black/10 bg-white">
                    <Car className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-black/80">Rental Car</p>
                    <p className="text-black/70">
                      Recommended for convenience, especially for evening plans.
                    </p>
                  </div>
                </div>
              </li>

              <li className="rounded-2xl border border-black/10 bg-white/60 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl border border-black/10 bg-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-black/80">Rideshare</p>
                    <p className="text-black/70">
                      Uber/Lyft availability can vary by area and time — please
                      plan ahead for late-night returns.
                    </p>
                  </div>
                </div>
              </li>

              <li className="rounded-2xl border border-black/10 bg-white/60 p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-xl border border-black/10 bg-white">
                    <Info className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-black/80">Carpooling</p>
                    <p className="text-black/70">
                      We’re lucky to have lots of family in town. If you’re staying
                      with family or coordinating carpools, that’s a wonderful option.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-4 rounded-2xl border border-black/10 bg-white/60 p-4">
              <p className="text-black/70">
                <span className="font-medium text-black/80">No shuttle:</span>{" "}
                We won’t have transportation provided to/from the venue. Thank
                you for planning accordingly.
              </p>
            </div>
          </Card>

          <Card title="Where to Stay" icon={<Hotel className="h-5 w-5" />} kicker="Choose what’s best for you">
            <p className="mb-4">
              We are not reserving a hotel block. The venue does have rooms that
              may be available, and there are great options nearby.
            </p>

            <div className="space-y-3">
              {LODGING.map((h) => (
                <div
                  key={h.name}
                  className="rounded-2xl border border-black/10 bg-white/60 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-black/80">{h.name}</p>
                      <p className="text-xs tracking-[0.16em] uppercase text-black/55">
                        {h.area}
                      </p>
                    </div>

                    {h.href ? (
                      <a
                        className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs uppercase tracking-[0.16em] text-black/70 shadow-sm transition hover:bg-white"
                        href={h.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-2 text-black/70">{h.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <SoftNote>
                If you prefer a vacation rental, there are many options across{" "}
                <span className="font-medium text-black/80">Albuquerque</span> and{" "}
                <span className="font-medium text-black/80">Rio Rancho</span> —
                and many guests may choose to stay with family as well.
              </SoftNote>
            </div>
          </Card>

          <Card title="A Friendly Note" icon={<Info className="h-5 w-5" />} kicker="Make it easy on yourself">
            <p className="mb-4">
              We want your weekend to feel simple and relaxed. A little planning
              now will make everything smoother (especially the evening
              logistics).
            </p>

            <div className="space-y-3">
              <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
                <p className="text-black/70">
                  If you’re deciding where to stay:{" "}
                  <span className="font-medium text-black/80">Rio Rancho</span>{" "}
                  is closest to the venue, while{" "}
                  <span className="font-medium text-black/80">Downtown</span>{" "}
                  offers the most to do.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
                <p className="text-black/70">
                  If you’re staying with family or carpooling with family friends,
                  that’s absolutely encouraged — we’re grateful to have so many
                  loved ones local.
                </p>
              </div>
            </div>

            <p className="mt-4 text-black/70">
              We’ll continue to update this page as we get closer.
            </p>
          </Card>
        </div>

        {/* Footer divider */}
        <div className="mt-12 h-px w-full bg-black/10" />
        <p className="mt-6 text-center text-xs tracking-[0.18em] uppercase text-black/55">
          Safe travels — we can’t wait to celebrate with you
        </p>
      </div>
    </main>
  );
}