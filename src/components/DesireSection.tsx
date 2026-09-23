const desires = [
  "Recognition and fair reward for your real impact.",
  "The ability to raise promotion conversations without damaging the relationship.",
  "A workload and capacity that's actually respected.",
  "A structured, trustworthy leadership chain around you.",
  "Communication that actually lands with each person on your team.",
  "A repeatable way to turn around underperformers without a PIP.",
  "Feeling like a legitimate, credible leader, not an impostor.",
  "Doing all of this without burning out.",
];

export default function DesireSection() {
  return (
    <section className="bg-navy-dark py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber">
            What you actually want
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide sm:text-4xl">
            Not a title. Clarity, authority, and a credible next step.
          </h2>
        </div>
        <ul className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {desires.map((desire) => (
            <li key={desire} className="flex gap-3 text-cream/85">
              <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-violet/30 text-xs font-bold text-violet">
                ✓
              </span>
              <span className="text-sm leading-relaxed sm:text-base">
                {desire}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
