// app/parties/page.tsx

export default function PartiesPage() {
  return (
    <main className="px-6 py-16 text-black">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
            The Wedding Party
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/70">
            We’re grateful to celebrate this day with our closest friends and family.
          </p>
        </header>

        {/* Ornamental divider */}
        <div className="mt-10 mb-12 flex items-center justify-center gap-3">
          <span className="h-[1px] w-16 bg-black/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/25" />
          <span className="h-[1px] w-16 bg-black/15" />
        </div>

        {/* Parties Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Bachelorette Party */}
          <section className="rounded-2xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur">
            <h2 className="mb-8 text-center font-[var(--font-heading)] text-3xl tracking-tight">
              Bachelorette Party
            </h2>

            <PartyMember
              name="Name Here"
              role="Maid of Honor"
              description="A lifelong best friend who has been by her side through every season of life."
            />

            <PartyMember
              name="Name Here"
              role="Maid of Honor"
              description="A lifelong best friend who has been by her side through every season of life."
            />

            <PartyMember
              name="Name Here"
              role="Bridesmaid"
              description="College roommate turned forever friend who brings joy to every room."
            />

            <PartyMember
              name="Name Here"
              role="Bridesmaid"
              description="Cousin and confidant, always offering support and the best advice."
            />

            <PartyMember
              name="Name Here"
              role="Bridesmaid"
              description="Cousin and confidant, always offering support and the best advice."
            />

            <PartyMember
              name="Name Here"
              role="Bridesmaid"
              description="Cousin and confidant, always offering support and the best advice."
            />

            <PartyMember
              name="Name Here"
              role="Bridesmaid"
              description="Cousin and confidant, always offering support and the best advice."
            />
          </section>

          {/* Bachelor Party */}
          <section className="rounded-2xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur">
            <h2 className="mb-8 text-center font-[var(--font-heading)] text-3xl tracking-tight">
              Bachelor Party
            </h2>

            <PartyMember
              name="Brianna Franco"
              role="Best Man"
              description="Brother and best friend who has always had his back."
            />

            <PartyMember
              name="Fabian Franco"
              role="Best Man"
              description="Brother and best friend who has always had his back."
            />

            <PartyMember
              name="Austin Munz"
              role="Groomsman"
              description="High school friend who’s been part of countless memories."
            />

            <PartyMember
              name="AJ Salazar"
              role="Groomsman"
              description="College teammate and lifelong supporter."
            />

            <PartyMember
              name="Marcus Pineda-Harris"
              role="Groomsman"
              description="College teammate and lifelong supporter."
            />

            <PartyMember
              name="Michel Rivera-Ramirez"
              role="Groomsman"
              description="College teammate and lifelong supporter."
            />

            <PartyMember
              name="Devin Ramirez"
              role="Groomsman"
              description="College teammate and lifelong supporter."
            />
          </section>
        </div>
      </div>
    </main>
  );
}

function PartyMember({
  name,
  role,
  // description,
}: {
  name: string;
  role: string;
  description: string;
}) {
  return (
    <div className="mb-8 border-b border-black/10 pb-6 last:mb-0 last:border-none last:pb-0">
      <h3 className="font-[var(--font-heading)] text-xl tracking-tight">
        {name}
      </h3>

      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-black/50">
        {role}
      </p>

      {/* <p className="mt-3 text-base leading-7 text-black/70">
        {description}
      </p> */}
    </div>
  );
}