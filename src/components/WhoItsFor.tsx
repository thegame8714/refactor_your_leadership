const fitFor = [
  "You're a practicing Engineering Manager, three months in or eight years in, it doesn't matter.",
  "You feel unsure of yourself as a leader, overwhelmed by the role, or unsettled by how fast it's changing.",
  "You want a live, interactive format with real peers, not another self-paced course you'll abandon.",
  "You're ready to work on your actual situations, your team, your manager, your company.",
];

const notFor = [
  "You're looking for a purely self-paced course with no live component.",
  "You want someone to hand you a script instead of building your own judgment.",
  "You're not currently managing a team, or the tension between technical work and people leadership.",
];

export default function WhoItsFor() {
  return (
    <section className="bg-navy-dark py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">
            Is this for you?
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide sm:text-4xl">
            New EM or experienced EM, the program is the same
          </h2>
          <p className="mt-4 text-cream/70">
            Because the shift is the same for both: AI has redefined what
            the role requires, and nobody was trained for the version of
            the job that exists now.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded border border-violet/40 bg-cream/5 p-8">
            <h3 className="font-display text-lg uppercase tracking-wide text-cream">
              This is for you if
            </h3>
            <ul className="mt-5 space-y-3">
              {fitFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-cream/80">
                  <span className="mt-1 text-violet">＋</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-cream/10 bg-cream/[0.03] p-8">
            <h3 className="font-display text-lg uppercase tracking-wide text-cream">
              This isn&rsquo;t for you if
            </h3>
            <ul className="mt-5 space-y-3">
              {notFor.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-cream/50">
                  <span className="mt-1 text-cream/30">−</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
