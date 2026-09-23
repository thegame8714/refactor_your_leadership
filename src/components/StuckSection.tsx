const problems = [
  {
    title: "The confidence gap",
    description:
      "You're technically excellent, but a quiet voice keeps asking whether you're actually cut out to lead people, not build systems.",
  },
  {
    title: "Communication that doesn't land",
    description:
      "Generic leadership advice fails because it treats every person on your team the same. What works for one report falls flat with another.",
  },
  {
    title: "No system for underperformers",
    description:
      "You know someone isn't performing, but you have no repeatable way to turn it around before it becomes a confrontation, or a managed exit.",
  },
  {
    title: "Undervalued despite real impact",
    description:
      "You lead work that touches hundreds of people and shapes company-wide decisions, yet you're still told you haven't “demonstrated enough value.”",
  },
  {
    title: "Conflicting directives under pressure",
    description:
      "Leadership hands down deliverables, product disputes your capacity, and you're the one absorbing the conflict in between.",
  },
  {
    title: "Trust and structure breakdown",
    description:
      "Authority is unclear, decisions get bypassed, and you're not sure whether, or how, to name it without making things worse.",
  },
];

export default function StuckSection() {
  return (
    <section id="stuck" className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">
            Does this sound familiar?
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-navy sm:text-4xl">
            You&rsquo;re doing the work. It&rsquo;s just not adding up to
            progress.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded border border-navy/10 bg-white/60 p-6"
            >
              <h3 className="font-display text-lg uppercase tracking-wide text-navy">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
