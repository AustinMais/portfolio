type SectionProps = {
  id: string;
  title: string;
  srOnly?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  srOnly = true,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={"container flex flex-col gap-1 pt-4 " + className}
    >
      <h2
        className={
          "text-sm font-bold uppercase tracking-widest text-slate-200 " +
          (srOnly ? "lg:sr-only" : "")
        }
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
