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
          answer="We’re going with a formal dress code — suits and long dresses are encouraged. The ceremony will be outdoors under a covered tent, so plan your footwear accordingly."
        />
        <FAQItem
          question="What time should I arrive?"
          answer={<>The ceremony will begin promptly at 3:30 PM — we recommend arriving 20–30 minutes early to allow time for parking, the walk to the venue, and getting seated.</>}
        />
        <FAQItem
          question="Is the ceremony indoors or outdoors?"
          answer="The ceremony will be outdoors under a covered tent, with the reception held indoors."
        />
        <FAQItem
          question="Will transportation be provided?"
          answer="Following the ceremony at Hummingbird Tent, shuttle service will be provided to the reception at Cottonwoods, where cocktail hour will begin."
        />
        <FAQItem
          question="Is there parking at the venue?"
          answer="Yes, there is free on-site parking available."
        />
        <FAQItem
          question="How do I get to the ceremony after parking?"
          answer="After entering the resort, signage will guide you to the ceremony location. Please allow a few extra minutes to walk from the entrance to the venue."
        />
        <FAQItem
          question="Are children invited?"
          answer="While we love your little ones, this will be an adults-only celebration."
        />
        <FAQItem
          question="Can I bring a plus one?"
          answer="Guests included in your invitation will also appear when you search your name in the RSVP. Due to venue capacity, we’re only able to accommodate those listed."
        />
        <FAQItem
          question="What should I do if I have dietary restrictions?"
          answer="Please let us know when you RSVP, and we will do our best to accommodate your needs."
        />
        <FAQItem
          question="How do I RSVP?"
          answer={<>You can RSVP through the RSVP page on this website. Please respond by <em>April 24, 2027</em>.</>}
        />
        <FAQItem
          question="Where should we stay?"
          answer="We’re not reserving a hotel block, but we’ve included nearby recommendations on the Travel page."
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
         answer={
            <div className="space-y-1">
              <p>Ceremony: 3:30 PM</p>
              <p>Cocktail Hour: 4:30 PM</p>
              <p>Dinner: 5:30 PM</p>
              <p>Reception: 6:30 PM</p>
              <p className="italic pt-2">
                Please note that these times are approximate and may be adjusted on the day of the event.
              </p>
            </div>
          }/
      >
        <FAQItem
          question="Who should I contact if I have more questions?"
          answer="Feel free to reach out to Meiling or Damian at our numbers (505)506-9643 or (505)967-2005 for any additional information."
        />
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode; }) {
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

