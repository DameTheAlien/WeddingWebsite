// app/story/page.tsx
import Image from "next/image";

type StoryBeat = {
  title: string;
  date?: string;
  body: string;
};

type StoryPhoto = {
  src: string;
  alt: string;
  caption?: string;
};

const beats: StoryBeat[] = [
  {
    title: "How we met",
    date: "—",
    body:
      "We met in a way that still feels a little unreal — one of those moments that starts small, and somehow becomes everything. What began as a simple connection quickly turned into something we couldn’t ignore.",
  },
  {
    title: "The years that followed",
    date: "—",
    body:
      "From ordinary days to unforgettable adventures, we built a life that felt like home. We learned each other’s rhythms, laughed a lot, and somehow made even the quiet moments feel special.",
  },
  {
    title: "The proposal",
    date: "—",
    body:
      "There was a moment where time slowed down — a few words, a breath, a yes. We’ll never forget how it felt to step into this next chapter together.",
  },
  {
    title: "Now",
    date: "—",
    body:
      "Intresting things here about life now.",
  },
];

const photos: StoryPhoto[] = [
  {
    src: "/story/engagement-1.jpg",
    alt: "Engagement photo 1",
    caption: "Engagement • A moment we’ll never forget",
  },
  {
    src: "/story/engagement-2.jpg",
    alt: "Engagement photo 2",
    caption: "Engagement • Just us",
  },
  {
    src: "/story/engagement-3.jpg",
    alt: "Engagement photo 3",
    caption: "Engagement • The beginning of forever",
  },
  {
    src: "/story/nyc-1.jpg",
    alt: "Photo 1",
    caption: "Photo 1 Caption",
  },
  {
    src: "/story/nyc-2.jpg",
    alt: "Photo 2",
    caption: "Photo 2 Caption",
  },
  {
    src: "/story/nyc-3.jpg",
    alt: "Photo 3",
    caption: "Photo 3 Caption",
  },
  {
    src: "/story/nyc-4.jpg",
    alt: "Photo 4",
    caption: "Photo 4 Caption",
  },
  {
    src: "/story/nyc-5.jpg",
    alt: "Photo 5",
    caption: "Photo 5 Caption",
  },
  {
    src: "/story/nyc-6.jpg",
    alt: "Photo 6",
    caption: "Photo 6 Caption",
  }
];

export default function StoryPage() {
  return (
    <main className="px-6 py-16 text-black">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <h1 className="font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
            Our Story
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/70">
            A few favorite chapters from our story — and some photos we’ll keep
            framed forever.
          </p>
        </header>

        {/* Ornamental divider */}
        <div className="mt-10 mb-12 flex items-center justify-center gap-3">
          <span className="h-[1px] w-16 bg-black/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/25" />
          <span className="h-[1px] w-16 bg-black/15" />
        </div>

        {/* Hero image */}
        <section className="mb-14">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/story/hero.jpg"
                alt="A favorite photo of us"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>

            <div className="grid gap-6 px-6 py-8 sm:grid-cols-3 sm:px-10">
              <div className="sm:col-span-2">
                <h2 className="font-[var(--font-heading)] text-2xl tracking-tight">
                  Two lives, one very good plot twist
                </h2>
                <p className="mt-3 text-sm leading-6 text-black/70">
                  Replace this paragraph with your “elevator pitch” version of
                  your story: where you met, what made you click, and what you
                  love most about doing life together.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/70 p-5">
                <p className="text-xs tracking-[0.18em] uppercase text-black/60">
                  Quick facts
                </p>
                <ul className="mt-3 space-y-2 text-sm text-black/75">
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-black/60">First date</span>
                    <span className="text-right">Add yours</span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-black/60">Proposal</span>
                    <span className="text-right">Add yours</span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-black/60">Favorite trip</span>
                    <span className="text-right">New York</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Story timeline */}
        <section className="mb-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-[var(--font-heading)] text-3xl tracking-tight">
              A few chapters
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-black/70">
              Keep it short, sweet, and personal. Each card can be 2–4 sentences.
            </p>

            <div className="mt-10 space-y-6">
              {beats.map((b) => (
                <article
                  key={b.title}
                  className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-[var(--font-heading)] text-xl tracking-tight">
                      {b.title}
                    </h3>
                    {b.date ? (
                      <p className="text-xs tracking-[0.18em] uppercase text-black/50">
                        {b.date}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-black/75">{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section>
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-[var(--font-heading)] text-3xl tracking-tight">
              Photos we love
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-black/70">
              Pictures. Add as many as you want — just duplicate the
              items in the array.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((p) => (
                <figure
                  key={p.src}
                  className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  {p.caption ? (
                    <figcaption className="px-5 py-4 text-sm text-black/70">
                      {p.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-black/10 bg-white/70 p-6 text-center sm:p-8">
              <p className="text-xs tracking-[0.18em] uppercase text-black/60">
                Tip
              </p>
              <p className="mt-2 text-sm leading-7 text-black/70">
                For best quality, use photos at least ~2000px on the long side.
                Place them in <span className="font-mono">public/story/</span>{" "}
                and keep filenames simple (no spaces).
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}