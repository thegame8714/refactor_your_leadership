import Image from "next/image";

export default function CoachStory() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet">
            Meet your coach
          </p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-navy sm:text-4xl">
            I don&rsquo;t teach a framework I read about
          </h2>
        </div>

        <div className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div className="relative h-40 w-40 flex-none overflow-hidden rounded-full">
            <Image
              src="/images/fabio-salimbeni.jpg"
              alt="Fabio Salimbeni"
              fill
              sizes="160px"
              className="object-cover object-[center_20%]"
              priority
            />
          </div>
          <div>
            <h3 className="font-display text-xl uppercase tracking-wide text-navy">
              Fabio Salimbeni
            </h3>
            <p className="mt-1 text-sm font-bold uppercase tracking-wide text-violet">
              Founder &amp; Lead Coach, Refactor Your Leadership
            </p>
            <p className="mt-4 leading-relaxed text-navy/75">
              I&rsquo;ve spent years leading engineering teams as an
              Engineering Manager, stepped back to rebuild how I lead, and
              returned to the role still practising the same work today. I
              now coach Engineering Managers through the exact confidence
              and communication challenges I faced myself.
            </p>
          </div>
        </div>

        <blockquote className="mt-10 rounded border-l-4 border-violet bg-navy-dark p-8 text-cream sm:p-10">
          <p className="text-xl leading-relaxed sm:text-2xl">
            &ldquo;I became an Engineering Manager in 2019 and hit a wall
            almost immediately, the confidence, the overwhelm, all of it. I
            stepped back, did the work, and went back in. I&rsquo;m still
            doing that work today, in the role, years later. I don&rsquo;t
            teach a framework I read about, I teach the practice I still
            use.&rdquo;
          </p>
          <footer className="mt-6 text-sm font-bold uppercase tracking-wide text-cream/60">
            Fabio Salimbeni, Coach &amp; Engineering Manager
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
