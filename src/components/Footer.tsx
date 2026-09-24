export default function Footer() {
  return (
    <footer className="bg-navy py-10 text-cream/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Refactor Your Leadership. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a
            href="https://fabiosalimbeni.com/privacy-policy"
            className="transition-colors hover:text-cream"
          >
            Privacy Policy
          </a>
          <a
            href="https://fabiosalimbeni.com/terms"
            className="transition-colors hover:text-cream"
          >
            Terms &amp; Conditions
          </a>
          <a href="#top" className="transition-colors hover:text-cream">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
