# Portfolio API — Summary for Bot Implementation

**Base URL:** `https://<your-portfolio-domain>/api` (or `http://localhost:3000/api` in dev)

**Discovery:** `GET /api` returns a JSON index with `endpoints` (path + description) and `baseUrl`. Use this to know what’s available.

**All endpoints:** GET only, JSON response. Data comes from the same source as the consulting site (`~/data/resume.ts`).

---

## Endpoints

| Path | Use when the user asks about… | Returns |
|------|--------------------------------|--------|
| **GET /api** | — | Index: list of endpoints + baseUrl (for discovery). |
| **GET /api/resume** | Resume, experience, skills, who Austin is professionally | `name`, `role`, `tagline`, `experience[]`, `skills[]`. |
| **GET /api/about** | Bio, “who is this for”, social links | `name`, `title`, `tagline`, `about[]`, `whoThisIsFor`, `socialLinks[]`. |
| **GET /api/services** | Pricing, packages, what’s offered, retainer | `packages[]` (id, name, price, bestFor, features, tagline, popular), `retainer` (range, items). |
| **GET /api/case-studies** | Past work, examples, outcomes, “what have you built” | `caseStudies[]`: title, overview, problem, solution, keyFeatures, results, techStack, takeaway, href. |
| **GET /api/projects** | Projects, side projects, portfolio items | `projects[]`: title, href, description, tags. |
| **GET /api/consulting** | How he helps, what he builds, process, positioning | `problemSolution`, `whatIBuild[]`, `whyThisWorks`, `socialProof`, `process[]`. |
| **GET /api/contact** | How to book, get in touch, social | `bookingUrl`, `ctaPrimary`, `ctaFinalHeadline`, `ctaFinalButton`, `socialLinks[]`. |

---

## Implementation notes

1. **Discovery:** Call `GET /api` once; parse `endpoints` and optionally `baseUrl` for building request URLs.
2. **No auth:** All routes are public GET; no headers or keys required.
3. **Caching:** Responses are safe to cache briefly (e.g. 60s) if you want to reduce calls.
4. **Errors:** On failure, respond with standard HTTP status; body is JSON when applicable.

Use this summary to wire the bot to the portfolio APIs.
