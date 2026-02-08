import { whatIBuild } from "~/data/resume";

export function WhatYouBuildSection() {
  return (
    <section
      id="what-i-build"
      className="container flex flex-col gap-4 pt-4"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        What I Build
      </h2>
      <ul className="grid gap-2 sm:grid-cols-2">
        {whatIBuild.map((item) => (
          <li key={item} className="flex gap-2 text-slate-300">
            <span className="text-blue-400" aria-hidden>&rarr;</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
