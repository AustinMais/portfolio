"use client";

import { useEffect, useState } from "react";
import { navLinks } from "~/data/resume";
import { NavLink } from "./NavLink";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function SectionNav() {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el != null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        // Prefer the entry with the largest intersection ratio (most in view)
        const best = visible.reduce((a, b) =>
          (a.intersectionRatio ?? 0) >= (b.intersectionRatio ?? 0) ? a : b
        );
        const id = (best.target as HTMLElement).id;
        if (id) setActiveId(id);
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="mt-16 w-max">
      {navLinks.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          active={activeId !== null && link.href === `#${activeId}`}
        />
      ))}
    </ul>
  );
}
