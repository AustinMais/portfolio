/**
 * API index for monk-bot: lists all resume/consulting endpoints.
 * GET /api returns this list so the bot knows what to fetch.
 */
export async function GET() {
  const base = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  return Response.json({
    name: "Portfolio & Consulting API",
    description: "JSON endpoints for Austin Mais resume and consulting site data (e.g. monk-bot).",
    baseUrl: `${base}/api`,
    endpoints: [
      { path: "/api", description: "This index; list of all endpoints" },
      { path: "/api/resume", description: "Name, role, tagline, experience, skills" },
      { path: "/api/about", description: "Bio, about paragraphs, who this is for, social links" },
      { path: "/api/services", description: "Service packages (pricing), retainer" },
      { path: "/api/case-studies", description: "Case studies (problem, solution, results)" },
      { path: "/api/projects", description: "Project list (title, description, tags, links)" },
      { path: "/api/consulting", description: "Positioning copy: how I help, what I build, process" },
      { path: "/api/contact", description: "Booking URL, CTAs, social links" },
    ],
  });
}
