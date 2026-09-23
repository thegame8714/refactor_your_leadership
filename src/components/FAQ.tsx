export const faqs = [
  {
    question: "How do I sign up?",
    answer:
      "There's no sign-up form. Book a free call directly from this page, and we'll go over your situation and the program together to see if it's the right fit.",
  },
  {
    question: "What does the program actually involve?",
    answer:
      "Refactor Your Leadership is a live coaching program built around your real situation as an Engineering Manager, not generic leadership theory. Book a free call below and we'll walk you through the format, schedule, and next steps.",
  },
  {
    question: "I've been an EM for years, is this too basic for me?",
    answer:
      "No. The program is built around one premise that applies whether you're three months in or eight years in: the EM role itself has been redefined by AI, and nobody retrained any of us for the version of the job that now exists. Experienced EMs typically get the most from the confidence and communication work; newer EMs from the practical systems. Everyone finds real value, at their own starting point.",
  },
  {
    question: "Is this only for people who want a promotion?",
    answer:
      "No. Promotion is one possible outcome, not the goal itself. The program helps you build a credible case for the recognition you've earned, take the actions within your control, and honestly assess whether your current company offers a credible path forward, even if that path isn't a promotion.",
  },
  {
    question: "How is this different from generic leadership coaching?",
    answer:
      "We work on your actual, current workplace situations, the specific manager conversation, the specific capacity dispute, the specific case for your impact, rather than abstract leadership frameworks. AI runs through the whole program as a real leadership partner, not a bolt-on topic.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-24 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">
            Questions
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-navy sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-14 divide-y divide-navy/10 border-t border-b border-navy/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg uppercase tracking-wide text-navy">
                {faq.question}
                <span className="flex-none text-xl text-violet transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-navy/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
