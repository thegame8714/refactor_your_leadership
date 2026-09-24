import { BOOKING_URL } from "@/lib/links";

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
          got you feeling stuck, and whether it&rsquo;s the right fit, no
          forms, no waiting for a reply.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded bg-violet px-[30px] py-5 text-base font-bold uppercase tracking-wide text-cream transition-opacity hover:opacity-90"
        >
          Book Your Breakthrough Call
        </a>
        <p className="mt-4 text-sm text-cream/50">
          No obligation, not a sales pitch, just a real conversation.
        </p>
      </div>
    </section>
  );
}
