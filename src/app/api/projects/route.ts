import { projects } from "~/data/resume";

/** Project list (title, description, tags, links) for monk-bot. */
export async function GET() {
  const list = projects.map((p) => ({
    title: p.title,
    href: p.href,
    description: p.description,
    tags: [...p.tags],
    image: p.image,
    imageAlt: p.imageAlt,
  }));

  return Response.json({ projects: list });
}
