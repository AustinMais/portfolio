import { whyThisWorks } from "~/data/resume";

export function WhyThisWorksSection() {
  return (
    <section
      id="why-this-works"
      className="container flex flex-col gap-4 pt-4"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        Why This Works
      </h2>
      <h3 className="text-2xl font-bold text-slate-100">
        {whyThisWorks.title}
      </h3>
      <p className="max-w-2xl leading-relaxed text-slate-400">
        {whyThisWorks.copy}
      </p>
    </section>
  );
}
