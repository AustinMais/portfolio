import { site, experience, skills } from "~/data/resume";

/** Resume JSON for monk-bot and other consumers. Single source of truth from ~/data/resume. */
export async function GET() {
  return Response.json({
    name: site.name,
    role: site.title,
    tagline: site.tagline,
    experience: experience.map((job) => ({
      period: job.period,
      role: job.role,
      company: job.company,
      url: job.url,
      description: job.description,
      tags: [...job.tags],
    })),
    skills: [...skills],
  });
}
