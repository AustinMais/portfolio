type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
};

export function NavLink({ href, label, active }: NavLinkProps) {
  return (
    <li>
      <a
        className={`group flex items-center py-3 ${active ? "active" : ""}`}
        href={href}
      >
        <span
          className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${active ? "w-16 bg-slate-200" : "w-8 bg-slate-600"}`}
          aria-hidden
        />
        <span
          className={`nav-text text-xs font-bold uppercase tracking-widest group-focus-visible:text-slate-200 ${active ? "text-slate-200" : "text-slate-500 group-hover:text-slate-200"}`}
        >
          {label}
        </span>
      </a>
    </li>
  );
}
