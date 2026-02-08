import { site } from "~/data/resume";

export function HeroSection() {
  return (
    <section id="hero" className="container flex flex-col gap-6 pt-4 lg:pt-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
        {site.heroHeadline}
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
        {site.heroSubheadline}
      </p>
      <div>
        <a
          href={site.bookingUrl}
          className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          {site.ctaPrimary}
        </a>
      </div>
    </section>
  );
}
