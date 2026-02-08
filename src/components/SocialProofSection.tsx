import { socialProof } from "~/data/resume";

export function SocialProofSection() {
  return (
    <section className="container flex flex-col gap-2 pt-4">
      <h2 className="sr-only">Social proof</h2>
      <p className="max-w-2xl text-slate-300 italic">
        &ldquo;{socialProof}&rdquo;
      </p>
    </section>
  );
}
