"use client";

import { useEffect, useRef, useState } from "react";

interface AutomatedAssistantProps {
  /** URL to load the chatbot from (e.g., http://localhost:3001 for dev, or production URL) */
  chatbotUrl?: string;
  /** Container ID for the chatbot to mount to */
  containerId?: string;
}

/**
 * Micro frontend wrapper for AutomatedAssistant chatbot.
 * Loads the chatbot from an external source (AutomatedAssistant repo).
 */
export function AutomatedAssistant({
  chatbotUrl,
  containerId = "automated-assistant-container",
}: AutomatedAssistantProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scriptLoadedRef = useRef(false);

  // Default URL - can be overridden via environment variable or prop
  // In Next.js, NEXT_PUBLIC_* vars are available on both client and server
  const defaultUrl =
    typeof window !== "undefined"
      ? (process.env.NEXT_PUBLIC_CHATBOT_URL as string | undefined) ||
        "http://localhost:3001" // Default to local dev server
      : undefined;

  const chatbotSourceUrl = chatbotUrl || defaultUrl;

  useEffect(() => {
    if (!containerRef.current || !chatbotSourceUrl || scriptLoadedRef.current) {
      return;
    }

    const loadChatbot = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Option 1: Load as a script bundle (if chatbot exposes a global)
        // This assumes the chatbot is built and exposes a mount function
        const script = document.createElement("script");
        script.src = `${chatbotSourceUrl}/chatbot.js`;
        script.async = true;
        script.onload = () => {
          // If chatbot exposes a global mount function
          if (typeof (window as unknown as { mountChatbot?: (container: HTMLElement) => void }).mountChatbot === "function") {
            (window as unknown as { mountChatbot: (container: HTMLElement) => void }).mountChatbot(
              containerRef.current!
            );
            setIsLoading(false);
            scriptLoadedRef.current = true;
          } else {
            // Try alternative: load as React component via module
            loadAsModule();
          }
        };
        script.onerror = () => {
          // If script loading fails, try loading as module or iframe
          loadAsModule();
        };

        document.head.appendChild(script);
      } catch (err) {
        console.error("Error loading chatbot:", err);
        setError("Failed to load chatbot. Please ensure the AutomatedAssistant is running.");
        setIsLoading(false);
      }
    };

    const loadAsModule = async () => {
      try {
        // Option 2: Load as ES module (if chatbot is built as ESM)
        // This would work if the chatbot exports a React component
        const module = await import(
          /* @vite-ignore */
          /* @ts-ignore */
          `${chatbotSourceUrl}/chatbot.js`
        );
        
        if (module.default && containerRef.current) {
          // If it's a React component, we'd need React to render it
          // For now, we'll use an iframe approach as fallback
          loadAsIframe();
        }
      } catch (err) {
        // Fallback to iframe
        loadAsIframe();
      }
    };

    const loadAsIframe = () => {
      // Option 3: Load as iframe (most compatible approach)
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        const iframe = document.createElement("iframe");
        iframe.src = chatbotSourceUrl;
        iframe.style.width = "100%";
        iframe.style.minHeight = "400px";
        iframe.style.border = "none";
        iframe.style.borderRadius = "8px";
        iframe.onload = () => {
          setIsLoading(false);
          scriptLoadedRef.current = true;
        };
        iframe.onerror = () => {
          setError("Failed to load chatbot. Please ensure the AutomatedAssistant is running.");
          setIsLoading(false);
        };
        containerRef.current.appendChild(iframe);
      }
    };

    // Try loading the chatbot
    loadChatbot();

    // Cleanup
    return () => {
      const scripts = document.querySelectorAll(`script[src*="${chatbotSourceUrl}"]`);
      scripts.forEach((s) => s.remove());
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [chatbotSourceUrl]);

  return (
    <section
      id="ai-demo"
      className="container flex flex-col gap-4 pt-4"
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        See It In Action
      </h2>
      <p className="max-w-xl text-slate-400">
        Chat with Austin's AI assistant to learn about his experience, services, case studies, and more.
      </p>

      <div className="flex max-w-2xl flex-col gap-4 rounded-lg border border-slate-600/50 bg-slate-800/30 p-4">
        {isLoading && (
          <div className="flex min-h-64 items-center justify-center rounded-lg bg-slate-900/50 p-8">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 delay-75"></span>
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 delay-150"></span>
              </div>
              <p className="text-sm text-slate-400">Loading chatbot...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="rounded-lg bg-red-900/20 border border-red-600/50 p-4 text-sm text-red-200">
            {error}
            {chatbotSourceUrl && (
              <p className="mt-2 text-xs text-red-300">
                Attempted to load from: {chatbotSourceUrl}
              </p>
            )}
          </div>
        )}

        <div
          id={containerId}
          ref={containerRef}
          className="min-h-64 w-full"
          style={{ display: isLoading || error ? "none" : "block" }}
        />
      </div>
    </section>
  );
}
