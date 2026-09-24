const modules = [
  {
    title: "The AI-Ready Mindset",
    description:
      "Why the EM role itself is changing, and what that means for how you lead from here.",
  },
  {
    title: "AI as Your Leadership Partner",
    description:
      "Using AI to support real decisions on capacity, priorities, and trade-offs, not just tasks.",
  },
  {
    title: "Communicating with AI",
    description:
      "Prepping hard conversations, feedback, and the case for your next promotion before you walk into the room.",
  },
  {
    title: "Trustworthy AI",
    description:
      "Making confident decisions under pressure, using AI to inform your judgment, not replace it.",
  },
  {
    title: "Leading with Curiosity",
    description:
      "Unbiased Reading: seeing each person on your team accurately, without the bias that makes generic advice fail.",
  },
  {
    title: "Amplifying Your Leadership",
    description:
      "Using AI to reclaim time from reactive work, so capacity conflicts stop eating your week.",
  },
  {
    title: "Creating Clarity",
    description:
      "Understanding what drives each person, co-building their path forward, and bringing structure where trust has broken down.",
  },
  {
    title: "Future-Proof Leadership",
    description:
      "Advocating for yourself: building the evidence-based case for the recognition and promotion you've earned.",
  },
  {
    title: "Building High-Performing Teams",
    description:
      "Undeniable Results: proving the turnaround, and building real trust and psychological safety on your team.",
  },
  {
    title: "From Theory to Practice",
    description:
      "Role-playing your actual situations, the promotion conversation, the capacity dispute, the behaviour you haven't named yet.",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-navy-dark py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber">
            Inside the program
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide sm:text-4xl">
            10 live sessions over 10 weeks, worked through on your real
            situation
          </h2>
          <p className="mt-4 text-cream/70">
            One module a week. Every module ties back to something you can
            act on with your own team.
          </p>
        </div>
        <ol className="mt-16 space-y-10">
          {modules.map((module, index) => (
            <li key={module.title} className="flex gap-6">
              <div className="flex-none">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet font-display text-lg text-cream">
                  {index + 1}
                </div>
              </div>
              <div className="border-b border-cream/10 pb-10">
                <h3 className="font-display text-xl uppercase tracking-wide text-cream">
                  {module.title}
                </h3>
                <p className="mt-2 text-cream/70">{module.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
