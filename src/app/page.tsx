import {
  Header,
  HeroSection,
  ProblemSolutionSection,
  WhatYouBuildSection,
  WhyThisWorksSection,
  SocialProofSection,
  AIDemoSection,
  CaseStudyCard,
  ServicesSection,
  ProcessSection,
  WhoThisForSection,
  Section,
  ExperienceItem,
  FinalCTASection,
} from "~/components";
import {
  site,
  caseStudies,
  experience,
  aboutParagraphs,
} from "~/data/resume";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 bg-texture leading-relaxed text-slate-400 antialiased selection:bg-blue-400/30 selection:text-blue-100 lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main
        id="content"
        className="pt-24 pl-12 pr-12 lg:pl-0 lg:w-[52%] lg:py-24 lg:flex-col"
      >
        <HeroSection />

        <ProblemSolutionSection />
        <WhatYouBuildSection />
        <WhyThisWorksSection />
        <SocialProofSection />
        <AIDemoSection />

        <section id="case-studies" className="container flex flex-col gap-6 pt-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
            Case Studies
          </h2>
          <p className="max-w-xl text-slate-400">
            Outcome-oriented work: problem, solution, results.
          </p>
          <div className="flex flex-col gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </section>

        <ServicesSection />
        <ProcessSection />
        <WhoThisForSection />

        <Section id="about" title="About" className="max-w-2xl">
          <p className="text-slate-400">{site.tagline}</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
            {aboutParagraphs.slice(0, 2).map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" srOnly={false}>
          <p className="mb-4 text-slate-400">
            Work history and background building web systems and applications.
          </p>
          <ol className="group/list">
            {experience.map((job) => (
              <ExperienceItem
                key={`${job.company}-${job.period}`}
                {...job}
              />
            ))}
          </ol>
        </Section>

        <FinalCTASection />
      </main>
    </div>
  );
}
