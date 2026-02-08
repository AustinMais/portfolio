"use client";

import { useState } from "react";

const DEMO_RESPONSES: Record<string, string> = {
  "": "Ask me something about AI-powered web systems, support automation, or scaling without adding headcount.",
  default:
    "I'm a simple demo — replace me with a real AI assistant (e.g. OpenAI) to show visitors how you embed intelligence into products. Try: “How can AI reduce support workload?” or “What’s smart onboarding?”",
  "how can ai reduce support workload?":
    "AI can handle repetitive questions 24/7 with a chatbot or in-app assistant, surface answers from your docs using search/embeddings, and route only complex issues to humans. That reduces tickets and lets your team focus on high-value work.",
  "what's smart onboarding?":
    "Smart onboarding uses AI to guide users step-by-step, personalize flows based on role or behavior, and suggest next actions. The goal is faster time-to-value and fewer drop-offs — without needing a human for every new user.",
};

const DEFAULT_RESPONSE =
  "I'm a simple demo — replace me with a real AI assistant to show visitors how you embed intelligence into products.";

function getResponse(input: string): string {
  const key = input.trim().toLowerCase();
  return DEMO_RESPONSES[key] ?? DEMO_RESPONSES.default ?? DEFAULT_RESPONSE;
}

export function AIDemoSection() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResponse(getResponse(query));
  };

  return (
    <section
      id="ai-demo"
      className="container flex flex-col gap-4 pt-4"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        See It In Action
      </h2>
      <p className="max-w-xl text-slate-400">
        A small demo of the kind of intelligence you can embed in your product — no hype, just clear answers.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-3 sm:flex-row"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about AI support, onboarding, or scaling..."
          className="flex-1 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          aria-label="Ask a question"
        />
        <button
          type="submit"
          className="rounded-lg bg-slate-600 px-4 py-2.5 font-medium text-slate-200 transition hover:bg-slate-500 focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          Ask
        </button>
      </form>
      {response && (
        <div className="max-w-xl rounded-lg border border-slate-600/50 bg-slate-800/30 p-4 text-sm text-slate-300">
          {response}
        </div>
      )}
    </section>
  );
}
