import { site, socialLinks } from "~/data/resume";

/** Contact / CTAs for monk-bot (booking, social). */
export async function GET() {
  return Response.json({
    bookingUrl: site.bookingUrl,
    ctaPrimary: site.ctaPrimary,
    ctaFinalHeadline: site.ctaFinalHeadline,
    ctaFinalButton: site.ctaFinalButton,
    socialLinks: socialLinks.map((link) => ({
      href: link.href,
      label: link.label,
      icon: link.icon,
    })),
  });
}
