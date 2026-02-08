import { whoThisIsFor } from "~/data/resume";

export function WhoThisForSection() {
  return (
    <section className="container flex flex-col gap-4 pt-4">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        Who This Is For
      </h2>
      <p className="text-slate-300">{whoThisIsFor.intro}</p>
      <ul className="list-inside list-disc space-y-1 text-slate-400">
        {whoThisIsFor.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className="border-l-2 border-slate-600 pl-4 text-slate-400">
        {whoThisIsFor.notFor}
      </p>
    </section>
  );
}
