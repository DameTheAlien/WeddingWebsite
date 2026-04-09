// app/details/page.tsx
import Image from "next/image";

export default function DetailsPage() {
  return (
    <main className="px-6 py-16 text-black">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
            Everything You’ll Need
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/70">
            Please check back as we get closer — we’ll keep this page updated with
            timing, travel notes, and weekend details.
          </p>

          {/* Ornamental divider */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/25" />
            <span className="h-[1px] w-16 bg-black/15" />
          </div>
        </header>

        {/* Hero Image Placeholder */}
        <section className="mb-14">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] shadow-sm">
            <div className="aspect-[16/7] w-full">
              {/* Replace src with your venue photo when ready */}
              <Image
                src="/images/details/tamaya-hero.jpg"
                alt="Hyatt Tamaya venue"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Soft overlay label */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-6 sm:p-8">
              <p className="text-xs tracking-[0.18em] uppercase text-white/80">
                Venue
              </p>
              <p className="mt-1 font-[var(--font-heading)] text-2xl text-white sm:text-3xl">
                Hyatt Regency Tamaya Resort &amp; Spa
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
                Add a short venue description here (views, vibe, what to expect).
              </p>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-black/55">
            Tip: add a wide landscape photo here (venue exterior, scenery, or resort grounds).
          </p>
        </section>

        {/* Quick Summary Cards */}
        <section className="mb-14 grid gap-4 sm:grid-cols-3">
          <InfoCard
            eyebrow="When"
            title="Wedding Date"
            body="(Month Day, Year) • (Day of week)"
          />
          <InfoCard
            eyebrow="Where"
            title="Hyatt Tamaya"
            body="(Full address) • (Rio Rancho / Santa Ana Pueblo, NM)"
          />
          <InfoCard
            eyebrow="What to know"
            title="Ceremony → Reception"
            body="Ceremony at Hummingbird Tent • Reception at Cottonwoods • Shuttles provided"
          />
        </section>

        {/* Schedule */}
        <section className="mb-14">
          <SectionHeading
            title="Schedule"
            subtitle="Add the exact times when ready — these are placeholders to help structure the page."
          />

          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm sm:p-8">
            <ol className="grid gap-5">
              <TimelineItem
                time="(Time)"
                title="Guest Arrival"
                desc="Where to arrive, check-in, and any pre-ceremony notes."
              />
              <TimelineItem
                time="(Time)"
                title="Ceremony Begins"
                desc="Hummingbird Tent • Please be seated by (Time)."
              />
              <TimelineItem
                time="(Time)"
                title="Cocktail Hour"
                desc="Where cocktail hour will be held (if applicable)."
              />
              <TimelineItem
                time="(Time)"
                title="Shuttles Depart to Reception"
                desc="Shuttles will take guests from Hummingbird Tent to Cottonwoods."
              />
              <TimelineItem
                time="(Time)"
                title="Reception Begins"
                desc="Cottonwoods • Dinner, toasts, and dancing."
              />
              <TimelineItem
                time="(Time)"
                title="Send-Off / Reception Ends"
                desc="Optional: shuttle return timing or end-of-night guidance."
              />
            </ol>
          </div>
        </section>

        {/* Venues */}
        <section className="mb-14">
          <SectionHeading
            title="Venues"
            subtitle="Both ceremony and reception are at Hyatt Tamaya, in different locations on property."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <VenueCard
              eyebrow="Ceremony"
              title="Hummingbird Tent"
              note="(Add a quick description: indoor/outdoor, terrain, shade, etc.)"
              imageSrc="/images/details/hummingbird-tent.jpg"
              imageAlt="Hummingbird Tent ceremony venue"
              bullets={[
                "(Arrival instructions / landmark / directions on property)",
                "(Seating note / timing note)",
                "(Weather note, if relevant)",
              ]}
            />

            <VenueCard
              eyebrow="Reception"
              title="Cottonwoods"
              note="(Add a quick description: layout, vibe, indoor/outdoor, etc.)"
              imageSrc="/images/details/cottonwoods.jpg"
              imageAlt="Cottonwoods reception venue"
              bullets={[
                "(What happens here: dinner, dancing, etc.)",
                "(Any special notes: temperature, footwear, etc.)",
                "(End-of-night plan / shuttles back, if applicable)",
              ]}
            />
          </div>
        </section>

        {/* Shuttles */}
        <section className="mb-14">
          <SectionHeading
            title="Shuttles"
            subtitle="We’ll have shuttles from the ceremony location to the reception location."
          />

          <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm leading-7 text-black/70">
                  We’ll provide transportation between <span className="font-medium text-black">Hummingbird Tent</span>{" "}
                  and <span className="font-medium text-black">Cottonwoods</span>.
                  Add exact pickup times and meeting points below when ready.
                </p>

                <ul className="mt-5 grid gap-3 text-sm text-black/75">
                  <Bullet>(Pickup location for ceremony → reception)</Bullet>
                  <Bullet>(Pickup time window)</Bullet>
                  <Bullet>(Approximate travel time)</Bullet>
                  <Bullet>(If you drive yourself, any parking guidance)</Bullet>
                </ul>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/70 p-5">
                <p className="text-xs tracking-[0.18em] uppercase text-black/60">
                  Shuttle reminder
                </p>
                <p className="mt-2 font-[var(--font-heading)] text-lg">
                  Please plan to use the shuttles
                </p>
                <p className="mt-2 text-sm leading-6 text-black/70">
                  This helps keep timing smooth between venues and makes it easy for everyone to arrive together.
                </p>
                <div className="mt-4 h-px w-full bg-black/10" />
                <p className="mt-4 text-sm text-black/70">
                  Questions day-of?{" "}
                  <span className="font-medium text-black">
                    (Add coordinator contact)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Attire + Weather */}
        <section className="mb-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm sm:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-black/60">
              Dress Code
            </p>
            <h2 className="mt-2 font-[var(--font-heading)] text-2xl">
              (Dress Code Here)
            </h2>
            <p className="mt-3 text-sm leading-7 text-black/70">
              Add a helpful description: examples, comfort tips, and what to avoid if needed.
            </p>

            <ul className="mt-5 grid gap-3 text-sm text-black/75">
              <Bullet>(Suggested colors / themes, optional)</Bullet>
              <Bullet>(Footwear note: grass / gravel / walking distance)</Bullet>
              <Bullet>(Bring a light layer for evening)</Bullet>
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 shadow-sm sm:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-black/60">
              Weather &amp; Comfort
            </p>
            <h2 className="mt-2 font-[var(--font-heading)] text-2xl">
              What to Expect
            </h2>
            <p className="mt-3 text-sm leading-7 text-black/70">
              Add seasonal notes (sunset temperature changes, wind, etc.) and any comfort tips.
            </p>

            <ul className="mt-5 grid gap-3 text-sm text-black/75">
              <Bullet>(Typical daytime temp range)</Bullet>
              <Bullet>(Typical evening temp range)</Bullet>
              <Bullet>(Sunscreen / sunglasses recommended)</Bullet>
            </ul>
          </div>
        </section>

        {/* Parking + Accessibility */}
        <section className="mb-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm sm:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-black/60">
              Parking
            </p>
            <h3 className="mt-2 font-[var(--font-heading)] text-xl">
              (Parking Guidance)
            </h3>
            <p className="mt-3 text-sm leading-7 text-black/70">
              Add: where to park for the ceremony, whether you should move your car, and any fees.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 shadow-sm sm:p-8">
            <p className="text-xs tracking-[0.18em] uppercase text-black/60">
              Accessibility
            </p>
            <h3 className="mt-2 font-[var(--font-heading)] text-xl">
              (Accessibility Notes)
            </h3>
            <p className="mt-3 text-sm leading-7 text-black/70">
              Add: mobility guidance, ramps, golf carts, or who to contact for help.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 text-center shadow-sm sm:p-10">
            <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs tracking-[0.18em] uppercase">
              Questions?
              <span className="h-1 w-1 rounded-full bg-black/40" />
              We’re happy to help
            </p>

            <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl">
              (Contact Info Here)
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-black/70">
              Add an email, a phone number, or a day-of coordinator contact. You can also
              point guests to the RSVP page for updates.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 text-center">
      <h2 className="font-[var(--font-heading)] text-3xl tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-black/70">
          {subtitle}
        </p>
      ) : null}
      <div className="mx-auto mt-6 h-px w-20 bg-black/15" />
    </div>
  );
}

function InfoCard({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
      <p className="text-xs tracking-[0.18em] uppercase text-black/60">{eyebrow}</p>
      <p className="mt-2 font-[var(--font-heading)] text-xl">{title}</p>
      <p className="mt-2 text-sm leading-6 text-black/70">{body}</p>
    </div>
  );
}

function TimelineItem({
  time,
  title,
  desc,
}: {
  time: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="grid gap-2 rounded-2xl border border-black/10 bg-white/70 p-5 sm:grid-cols-[120px_1fr] sm:gap-4">
      <p className="text-xs tracking-[0.18em] uppercase text-black/60">{time}</p>
      <div>
        <p className="font-[var(--font-heading)] text-lg">{title}</p>
        <p className="mt-1 text-sm leading-6 text-black/70">{desc}</p>
      </div>
    </li>
  );
}

function VenueCard({
  eyebrow,
  title,
  note,
  bullets,
  imageSrc,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  note: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-black/[0.03]">
        {/* Replace src with your venue photo when ready */}
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute bottom-0 p-6">
          <p className="text-xs tracking-[0.18em] uppercase text-white/80">
            {eyebrow}
          </p>
          <p className="mt-1 font-[var(--font-heading)] text-2xl text-white">
            {title}
          </p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-7 text-black/70">{note}</p>
        <ul className="mt-4 grid gap-3 text-sm text-black/75">
          {bullets.map((b, idx) => (
            <Bullet key={idx}>{b}</Bullet>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-black/35" />
      <span>{children}</span>
    </li>
  );
}