import Image from "next/image";
import type { CaseStudy } from "~/data/resume";
import { ExternalLink } from "./ExternalLink";

type CaseStudyCardProps = CaseStudy & { className?: string };

export function CaseStudyCard(props: CaseStudyCardProps) {
  const {
    title,
    overview,
    problem,
    solution,
    keyFeatures,
    results,
    techStack,
    takeaway,
    href,
    image,
    imageAlt,
    className = "",
  } = props;

  return (
    <article
      className={
        "rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 transition hover:border-slate-600/50 hover:bg-slate-800/50 " +
        className
      }
    >
      <header className="mb-4">
        {image && imageAlt && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={imageAlt}
              width={640}
              height={360}
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <h3 className="text-lg font-semibold leading-tight text-slate-200">
          {href ? (
            <ExternalLink href={href} ariaLabel={title + " (opens in new tab)"}>
              {title}
            </ExternalLink>
          ) : (
            title
          )}
        </h3>
      </header>

      <div className="space-y-4 text-sm">
        <div>
          <h4 className="mb-1 font-medium uppercase tracking-wider text-slate-400">
            Overview
          </h4>
          <p className="text-slate-300">{overview}</p>
        </div>

        <div>
          <h4 className="mb-1 font-medium uppercase tracking-wider text-slate-400">
            The Problem
          </h4>
          <p className="text-slate-300">{problem}</p>
        </div>

        <div>
          <h4 className="mb-1 font-medium uppercase tracking-wider text-slate-400">
            The Solution
          </h4>
          <p className="text-slate-300">{solution}</p>
        </div>

        <div>
          <h4 className="mb-1 font-medium uppercase tracking-wider text-slate-400">
            Key Features
          </h4>
          <ul className="list-inside list-disc space-y-0.5 text-slate-300">
            {keyFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-1 font-medium uppercase tracking-wider text-slate-400">
            Results
          </h4>
          <ul className="list-inside list-disc space-y-0.5 text-slate-300">
            {results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-1 font-medium uppercase tracking-wider text-slate-400">
            Tech Stack
          </h4>
          <p className="text-slate-300">{techStack}</p>
        </div>

        <div className="border-t border-slate-600/50 pt-3">
          <p className="text-slate-200">
            <strong>Takeaway.</strong> {takeaway}
          </p>
        </div>
      </div>
    </article>
  );
}
