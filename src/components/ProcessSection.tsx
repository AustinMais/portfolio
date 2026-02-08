import { processSteps } from "~/data/resume";

export function ProcessSection() {
  return (
    <section id="process" className="container flex flex-col gap-4 pt-4">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        Process
      </h2>
      <ol className="flex flex-wrap gap-x-8 gap-y-2 text-slate-300">
        {processSteps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-600 text-xs font-medium text-slate-200">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
