import Image from "next/image";
import { BOOKING_URL } from "@/lib/links";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3 leading-tight text-navy">
          <Image
            src="/images/logo-icon.png"
            alt="Refactor Your Leadership"
            width={36}
            height={36}
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-lg uppercase tracking-wide">
              Refactor Your Leadership
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-violet">
              EM Coaching Program
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
          <a href="#stuck" className="transition-colors hover:text-navy">
            The Problem
          </a>
          <a href="#curriculum" className="transition-colors hover:text-navy">
            The Program
          </a>
          <a href="#outcomes" className="transition-colors hover:text-navy">
            Outcomes
          </a>
          <a href="#faq" className="transition-colors hover:text-navy">
            FAQ
          </a>
        </nav>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-violet px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-cream transition-opacity hover:opacity-90"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}
