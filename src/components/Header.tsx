import Link from "next/link";
import { site } from "~/data/resume";
import { SectionNav } from "./SectionNav";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  const [first, last] = site.name.split(" ");
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 pl-12 pr-12 lg:pl-24">
      <div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link href="/" className="hover:opacity-90 transition-opacity">
              <span className="text-blue-400">{first}</span> {last}
            </Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            {site.title}
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-400">
            {site.tagline}
          </p>
        </div>
        <nav className="hidden lg:block" aria-label="In-page navigation">
          <SectionNav />
        </nav>
      </div>
      <SocialLinks />
    </header>
  );
}
