import { caseStudies } from "~/data/resume";

/** Case studies (outcome-oriented project summaries) for monk-bot. */
export async function GET() {
  const studies = caseStudies.map((s) => ({
    id: s.id,
    title: s.title,
    overview: s.overview,
    problem: s.problem,
    solution: s.solution,
    keyFeatures: [...s.keyFeatures],
    results: [...s.results],
    techStack: s.techStack,
    takeaway: s.takeaway,
    href: s.href,
    image: s.image,
    imageAlt: s.imageAlt,
  }));

  return Response.json({ caseStudies: studies });
}
