import Image from "next/image";

export default function Home() {
  return (
    <div className="text-black">
      {/* hero image */}
      <section className="relative h-[55vh] min-h-[400px] w-full">
        <Image
          src="/images/home/hero.jpg"
          alt="Meiling and Damian"
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* names + main info (now BELOW image) */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="mb-8 font-[var(--font-heading)] text-5xl tracking-tight sm:text-6xl">
          Meiling & Damian
        </h1>

        <div className="space-y-3 text-base sm:text-lg">
          <p>Saturday, May 29, 2027</p>
        </div>

        <div className="mt-8 space-y-2 text-sm sm:text-base text-black/80">
          <p>Hyatt Regency Tamaya Resort & Spa</p>
          <p>Santa Ana Pueblo, New Mexico</p>
          <p>1300 Tuyuna Trail, Santa Ana Pueblo, NM 87004</p>
        </div>
      </section>

      {/* two large side-by-side images */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[420px] sm:h-[520px] md:h-[620px]">
            <Image
              src="/images/home/photo-1.jpg"
              alt="Meiling and Damian together"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-[420px] sm:h-[520px] md:h-[620px]">
            <Image
              src="/images/home/photo-2.jpg"
              alt="Meiling and Damian portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* our story */}
      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <div className="space-y-10">
          <div>
            <h2 className="mb-4 font-[var(--font-heading)] text-2xl sm:text-3xl">
              How We Met
            </h2>
            <p className="text-sm sm:text-base leading-7 text-black/80">
              We first met through mutual friends and quickly realized how easy it was
              to talk to each other. What started as casual conversations turned into
              long nights, shared laughs, and a connection that felt natural from the
              very beginning. Over time, those small moments turned into something much
              bigger, and we knew we had found something special.
            </p>
          </div>

          <div>
            <h2 className="mt-8mb-4 font-[var(--font-heading)] text-2xl sm:text-3xl">
              The Proposal
            </h2>
            <p className="text-sm sm:text-base leading-7 text-black/80">
              The proposal was simple, intentional, and perfectly us. Surrounded by a
              place that meant a lot to both of us, one question turned into the easiest
              “yes.” It was a moment filled with excitement, a little bit of surprise,
              and a lot of love — the start of our next chapter together.
            </p>
          </div>
        </div>
      </section>

      {/* closing line */}
      <section className="mx-auto max-w-3xl px-6 py-10 text-center">
        <p className="font-[var(--font-heading)] text-2xl sm:text-3xl">
          We can’t wait to celebrate with you.
        </p>
      </section>
    </div>
  );
}