import { site, aboutParagraphs, socialLinks, whoThisIsFor } from "~/data/resume";

export async function GET() {
  return Response.json({
    name: site.name,
    title: site.title,
    tagline: site.tagline,
    about: [...aboutParagraphs],
    whoThisIsFor: {
      intro: whoThisIsFor.intro,
      bullets: [...whoThisIsFor.bullets],
      notFor: whoThisIsFor.notFor,
    },
    socialLinks: socialLinks.map((link) => ({
      href: link.href,
      label: link.label,
      icon: link.icon,
    })),
  });
}
