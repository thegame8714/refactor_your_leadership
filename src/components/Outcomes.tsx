const outcomes = [
  "A confident, credible leadership identity.",
  "Individualized communication that actually lands, not generic advice.",
  "A repeatable system for turning underperformers into top performers.",
  "Effective self-advocacy for the recognition and promotion you've earned.",
  "Capacity-conflict management that doesn't mean absorbing the stress yourself.",
  "Direct, professional handling of trust and bypassing issues.",
  "A leadership approach adapted to the AI-era shift, not stuck in the old one.",
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber">
              By the end of the program
            </p>
            <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-navy sm:text-4xl">
              From overwhelmed and unsure to confident, credible, and in
              control
            </h2>
            <p className="mt-6 text-navy/70">
              This isn&rsquo;t a framework you&rsquo;ll forget in a month.
              It&rsquo;s the same practice I still use, years into doing
              this myself, built to keep working as the role keeps
              changing.
            </p>
          </div>
          <ul className="space-y-5">
            {outcomes.map((outcome) => (
              <li key={outcome} className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-violet text-xs font-bold text-cream">
                  ✓
                </span>
                <span className="text-navy/80">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
