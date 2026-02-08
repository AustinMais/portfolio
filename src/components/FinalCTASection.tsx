import { site } from "~/data/resume";

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="container flex flex-col items-center gap-6 py-12 text-center"
    >
      <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">
        {site.ctaFinalHeadline}
      </h2>
      <a
        href={site.bookingUrl}
        className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-8 py-4 text-lg font-medium text-white transition hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        {site.ctaFinalButton}
      </a>
    </section>
  );
}
