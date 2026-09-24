import { BOOKING_URL } from "@/lib/links";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-dark text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-amber/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-amber">
          For Engineering Managers, new or experienced
        </p>
        <h1 className="font-display text-3xl uppercase leading-tight tracking-wide text-cream sm:text-4xl md:text-5xl">
          Become the next generation EM with{" "}
          <span className="text-violet">AI and Leadership</span> at your
          side
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80 sm:text-xl">
          Refactor Your Leadership is a coaching program that helps
          Engineering Managers feel confident and strong as leaders,
          without the overwhelm, so you can lead your team instead of just
          surviving the role.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded bg-violet px-[30px] py-5 text-base font-bold uppercase tracking-wide text-cream transition-opacity hover:opacity-90 sm:w-auto"
          >
            Book Your Breakthrough Call
          </a>
          <a
            href="#curriculum"
            className="w-full rounded border border-cream/30 px-[30px] py-5 text-base font-bold uppercase tracking-wide text-cream transition-colors hover:bg-cream/10 sm:w-auto"
          >
            See how it works
          </a>
        </div>
        <p className="mt-4 text-sm text-cream/50">
          No obligation, not a sales pitch, just a real conversation.
        </p>
      </div>
    </section>
  );
}
