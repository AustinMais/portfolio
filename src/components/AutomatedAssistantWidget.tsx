"use client";

import { createPortal } from "react-dom";

const AUTOMATED_ASSISTANT_URL =
  "https://automated-assistant-phi.vercel.app?floating=true";

export function AutomatedAssistantWidget() {
  const widget = (
    <iframe
      src={AUTOMATED_ASSISTANT_URL}
      title="Automated Assistant"
      aria-label="Automated Assistant"
      className="fixed inset-0 z-[9999] border-0 p-0 m-0 block w-full h-full bg-transparent outline-none shadow-none"
      allow="clipboard-write"
    />
  );

  if (typeof document === "undefined") return null;
  return createPortal(widget, document.body);
}
