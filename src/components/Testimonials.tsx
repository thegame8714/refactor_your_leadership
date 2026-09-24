import Image from "next/image";

const testimonials = [
  {
    quote:
      "I received guidance on building trust within my team. The advice was valuable and it will help me in building my career going forwards.",
    name: "Yuvika A.",
    role: "Engineering Manager",
    image: "/images/testimonial-yuvika.jpg",
  },
  {
    quote:
      "Fabio taught how to remove bottlenecks, establish clear accountability, and gave me the psychological safety to innovate without fear of failure.",
    name: "Mihai M.",
    role: "Engineering Manager, QA",
    image: "/images/testimonial-mihai.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">
            What EMs say
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-navy sm:text-4xl">
            Real feedback from Engineering Managers
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded border border-navy/10 bg-white/60 p-8"
            >
              <blockquote>
                <p className="text-navy/80 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 flex-none overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wide text-navy">
                    {testimonial.name}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wide text-violet">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
