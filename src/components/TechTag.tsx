export function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <li className="mr-1.5 mt-2">
      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-400">
        {children}
      </span>
    </li>
  );
}
