import {
  Header,
  Section,
  ExperienceItem,
  ProjectCard,
} from "~/components";
import { aboutParagraphs, experience, projects } from "~/data/resume";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 leading-relaxed text-slate-400 antialiased selection:bg-emerald-400/30 selection:text-emerald-100 lg:flex lg:justify-between lg:gap-4 relative bg-texture">
      <Header />
      <main
        id="content"
        className="pt-24 pl-12 pr-12 lg:pl-0 lg:w-[52%] lg:py-24 lg:flex-col"
      >
        <Section id="about" title="About" className="max-w-2xl">
          <div className="flex flex-col gap-4">
            {aboutParagraphs.map((text, i) => (
              <p
                key={i}
                className={
                  text === "Highlights of My Expertise"
                    ? "font-bold text-slate-200"
                    : "text-slate-400"
                }
              >
                {text}
              </p>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div>
            <ol className="group/list">
              {experience.map((job) => (
                <ExperienceItem key={`${job.company}-${job.period}`} {...job} />
              ))}
            </ol>
          </div>
        </Section>

        <Section id="projects" title="Projects" className="px-0 py-8">
          <div>
            <ol className="group/list">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </ol>
          </div>
        </Section>
      </main>
    </div>
  );
}
