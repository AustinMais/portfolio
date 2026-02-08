import { servicePackages, retainer } from "~/data/resume";

export function ServicesSection() {
  return (
    <section id="services" className="container flex flex-col gap-8 pt-4">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        Service Packages
      </h2>
      <p className="max-w-xl text-slate-400">
        High-intent packages that pre-qualify clients and anchor expectations.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {servicePackages.map((pkg) => (
          <div
            key={pkg.id}
            className={
              "relative flex flex-col rounded-xl border p-6 " +
              ("popular" in pkg && pkg.popular
                ? "border-blue-400/50 bg-blue-400/5"
                : "border-slate-700/50 bg-slate-800/30")
            }
          >
            {"popular" in pkg && pkg.popular && (
              <span className="absolute -top-2.5 left-4 bg-blue-400 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-slate-900">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-slate-200">{pkg.name}</h3>
            <p className="mt-1 text-lg font-medium text-blue-400">{pkg.price}</p>
            <p className="mt-2 text-sm text-slate-400">
              Best for: {pkg.bestFor}
            </p>
            <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-300">
              {pkg.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-blue-400" aria-hidden>
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-slate-600/50 pt-3 text-sm italic text-slate-400">
              {pkg.tagline}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-6">
        <h3 className="text-base font-semibold text-slate-200">
          Optional Retainer
        </h3>
        <p className="mt-1 text-blue-400">{retainer.range}</p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-300">
          {retainer.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
