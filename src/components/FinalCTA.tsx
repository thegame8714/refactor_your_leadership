import { BOOKING_URL } from "@/lib/links";

export default function FinalCTA() {
  return (
    <section id="book" className="bg-navy-dark py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber">
          Ready to move?
        </p>
        <h2 className="mt-4 font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Book Your Free Call
        </h2>
        <p className="mt-6 text-cream/75">
          Book a free call directly on my calendar. We&rsquo;ll talk
          through your current role, what&rsquo;s got you feeling stuck,
          and whether the program is the right fit, no forms, no waiting
          for a reply.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded bg-violet px-[30px] py-5 text-base font-bold uppercase tracking-wide text-cream transition-opacity hover:opacity-90"
        >
          Book a Free Call
        </a>
      </div>
    </section>
  );
}
