"use client";

import { useState } from "react";

export default function FAQPage() {
  return (
    <div className="px-6 py-16 text-black">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-center font-[var(--font-heading)] text-4xl tracking-tight sm:text-5xl">
          Frequently Asked Questions
        </h1>

        <p className="mb-12 text-center text-base leading-7">
          If you have any other questions, feel free to reach out to us!
        </p>

        {/* Ornamental divider */}
        <div className="mt-10 mb-12 flex items-center justify-center gap-3">
          <span className="h-[1px] w-16 bg-black/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/25" />
          <span className="h-[1px] w-16 bg-black/15" />
        </div>

        <FAQItem
          question="What is the dress code?"
          answer="Our dress code is formal / black tie optional. We recommend suits and long dresses. The ceremony will be outdoors, so plan footwear accordingly."
        />
        <FAQItem
          question="What time should I arrive?"
          answer="The ceremony will begin promptly at 4:30 PM. We recommend arriving 20–30 minutes early to find parking and get seated."
        />
        <FAQItem
          question="Is the ceremony indoors or outdoors?"
          answer="The ceremony will take place outdoors, weather permitting. The reception will be indoors."
        />
        <FAQItem
          question="Will transportation be provided?"
          answer="Shuttle service will be available from the hotel block to the venue and back at the end of the evening. More details to come."
        />
        <FAQItem
          question="Is there parking at the venue?"
          answer="Yes, there is on-site parking available. Valet service will also be provided."
        />
        <FAQItem
          question="Are children invited?"
          answer="While we love your little ones, this will be an adults-only celebration unless otherwise specified on your invitation."
        />
        <FAQItem
          question="Can I bring a plus one?"
          answer="If your invitation includes a guest name, they are invited! Due to venue capacity, we are unable to accommodate additional guests beyond those listed."
        />
        <FAQItem
          question="What should I do if I have dietary restrictions?"
          answer="Please let us know when you RSVP, and we will do our best to accommodate your needs."
        />
        <FAQItem
          question="How do I RSVP?"
          answer="You can RSVP through the RSVP page on this website. Please respond by [INSERT RSVP DEADLINE]."
        />
        <FAQItem
          question="Where should we stay?"
          answer="We’ve reserved hotel room blocks at [HOTEL NAME]. Visit the Travel page for booking details and discount codes."
        />
        <FAQItem
          question="Is there a wedding registry?"
          answer="Your presence is the greatest gift! However, if you would like to give something, you can find our registry on the Registry page."
        />
        <FAQItem
          question="Can I take photos during the ceremony?"
          answer="We kindly ask that you keep phones away during the ceremony. We promise to share professional photos afterward!"
        />
        <FAQItem
          question="What is the schedule for the day?"
          answer={`Ceremony: 4:30 PM
Cocktail Hour: 5:30 PM
Reception: 6:30 PM
After Party: TBD`}
        />
        <FAQItem
          question="Who should I contact if I have more questions?"
          answer="Feel free to reach out to Meiling or Damian at (505) 967-2005 for any additional information."
        />
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden rounded-3xl border border-black/10 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-black/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
      >
        <div className="flex flex-col">
          <span className="font-[var(--font-heading)] text-xl tracking-tight">
            {question}
          </span>
        </div>

        <span
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-xl leading-none transition group-hover:border-black/25"
          aria-hidden="true"
        >
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <>
          {/* Divider line between question and answer */}
          <div className="h-px w-full bg-black/10" />

          {/* Answer panel */}
          <div className="px-6 py-6">
            <div className="mx-auto max-w-2xl px-5 py-5">
              <div className="whitespace-pre-line text-[20px] leading-7 text-black/85">
                {answer}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

