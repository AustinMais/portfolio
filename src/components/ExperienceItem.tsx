import { ExternalLink } from "./ExternalLink";
import { TechTag } from "./TechTag";

type ExperienceItemProps = {
  period: string;
  role: string;
  company: string;
  url: string;
  description: string | readonly string[];
  tags: readonly string[];
};

export function ExperienceItem({
  period,
  role,
  company,
  url,
  description,
  tags,
}: ExperienceItemProps) {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div
          className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.06)] lg:group-hover:drop-shadow-lg"
          aria-hidden
        />
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={period}
        >
          {period}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <ExternalLink
              href={url}
              ariaLabel={`${role}, ${company} (opens in a new tab)`}
            >
              {role}, {company}
            </ExternalLink>
          </h3>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-2 text-sm leading-normal text-slate-400">
              {p}
            </p>
          ))}
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {tags.map((tag) => (
              <TechTag key={tag}>{tag}</TechTag>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
