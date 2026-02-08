import { problemSolution } from "~/data/resume";

export function ProblemSolutionSection() {
  return (
    <section
      id="problem-solution"
      className="container flex flex-col gap-4 pt-4"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        How I Help
      </h2>
      <h3 className="text-2xl font-bold text-slate-100">
        {problemSolution.title}
      </h3>
      <p className="max-w-2xl leading-relaxed text-slate-400">
        {problemSolution.copy}
      </p>
    </section>
  );
}
