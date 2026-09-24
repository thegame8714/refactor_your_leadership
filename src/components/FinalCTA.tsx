import { BOOKING_URL, BOOKING_EMBED_URL } from "@/lib/links";

export default function FinalCTA() {
  return (
    <section id="book" className="bg-navy-dark py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber">
          Ready to move?
        </p>
        <h2 className="mt-4 font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Book Your Breakthrough Call
        </h2>
        <p className="mt-6 text-cream/75">
          This is a Breakthrough Call, a free conversation to clarify every
          doubt you have about how the program can help your specific
          situation. We&rsquo;ll talk through your current role, what&rsquo;s
          got you feeling stuck, and whether it&rsquo;s the right fit. Pick a
          time below, no forms, no waiting for a reply.
        </p>
        <p className="mt-2 text-sm text-cream/50">
          No obligation, not a sales pitch, just a real conversation.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl px-6">
        <div className="overflow-hidden rounded border border-cream/15 bg-white">
          <iframe
            src={BOOKING_EMBED_URL}
            title="Book a Breakthrough Call"
            width="100%"
            height="800"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-center text-sm text-cream/50">
          Calendar not loading?{" "}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet underline underline-offset-2 hover:text-cream"
          >
            Open it in a new tab
          </a>
          .
        </p>
      </div>
    </section>
  );
}
