"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ApiResponse {
  [key: string]: unknown;
}

export function AutomatedAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Austin's AI assistant. I can help you learn about his experience, services, case studies, and more. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchApiData = async (endpoint: string): Promise<ApiResponse> => {
    try {
      const response = await fetch(`/api${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
      throw error;
    }
  };

  const generateResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase().trim();

    // Route to appropriate API endpoint based on user query
    if (
      lowerMessage.includes("resume") ||
      lowerMessage.includes("experience") ||
      lowerMessage.includes("skills") ||
      lowerMessage.includes("background")
    ) {
      const data = await fetchApiData("/resume");
      return `**${data.name}** - ${data.role}\n\n${data.tagline}\n\n**Experience:** ${data.experienceCount} positions\n**Skills:** ${(data.skills as string[]).slice(0, 10).join(", ")}${(data.skills as string[]).length > 10 ? "..." : ""}\n\nWould you like to know more about specific projects or services?`;
    }

    if (
      lowerMessage.includes("about") ||
      lowerMessage.includes("who") ||
      lowerMessage.includes("bio")
    ) {
      const data = await fetchApiData("/about");
      return `**${data.name}** - ${data.title}\n\n${data.tagline}\n\n${(data.about as string[]).slice(0, 2).join("\n\n")}\n\nWant to know more about services or case studies?`;
    }

    if (
      lowerMessage.includes("service") ||
      lowerMessage.includes("pricing") ||
      lowerMessage.includes("package") ||
      lowerMessage.includes("retainer")
    ) {
      const data = await fetchApiData("/services");
      const packages = (data.packages as Array<{ name: string; price: string; bestFor: string }>) || [];
      let response = "**Services & Pricing:**\n\n";
      packages.forEach((pkg) => {
        response += `• **${pkg.name}** - ${pkg.price}\n  ${pkg.bestFor}\n\n`;
      });
      if (data.retainer) {
        const retainer = data.retainer as { range: string; items: string[] };
        response += `**Retainer:** ${retainer.range}\n`;
      }
      return response;
    }

    if (
      lowerMessage.includes("case study") ||
      lowerMessage.includes("project") ||
      lowerMessage.includes("work") ||
      lowerMessage.includes("example")
    ) {
      const data = await fetchApiData("/case-studies");
      const studies = (data.caseStudies as Array<{ title: string; overview: string; problem: string; solution: string; results: string }>) || [];
      if (studies.length > 0) {
        const study = studies[0];
        return `**${study.title}**\n\n${study.overview}\n\n**Problem:** ${study.problem}\n\n**Solution:** ${study.solution}\n\n**Results:** ${study.results}\n\nI can share more case studies if you're interested!`;
      }
      return "I'd be happy to discuss case studies! What type of project are you interested in?";
    }

    if (
      lowerMessage.includes("consulting") ||
      lowerMessage.includes("help") ||
      lowerMessage.includes("how") ||
      lowerMessage.includes("process")
    ) {
      const data = await fetchApiData("/consulting");
      const problemSolution = data.problemSolution as { title: string; copy: string };
      const whatIBuild = (data.whatIBuild as Array<{ title: string; copy: string }>) || [];
      return `**${problemSolution.title}**\n\n${problemSolution.copy}\n\n**What I Build:**\n${whatIBuild.slice(0, 3).map((item) => `• ${item.title}: ${item.copy}`).join("\n")}\n\nWant to learn about the process or see case studies?`;
    }

    if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("book") ||
      lowerMessage.includes("call") ||
      lowerMessage.includes("reach")
    ) {
      const data = await fetchApiData("/contact");
      const contact = data as { bookingUrl: string; ctaPrimary: string };
      return `**Get in Touch:**\n\n${contact.ctaPrimary}\n\nBooking: ${contact.bookingUrl}\n\nI can also share social links or more information about services!`;
    }

    // Default response for unrecognized queries
    return "I can help you learn about:\n• Experience & background\n• Services & pricing\n• Case studies & projects\n• Consulting process\n• How to get in touch\n\nWhat would you like to know?";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await generateResponse(userMessage.content);
      const assistantMessage: Message = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again or ask about something else.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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
        Chat with Austin's AI assistant to learn about his experience, services, case studies, and more.
      </p>

      <div className="flex max-w-2xl flex-col gap-4 rounded-lg border border-slate-600/50 bg-slate-800/30 p-4">
        {/* Messages container */}
        <div className="flex max-h-96 min-h-64 flex-col gap-3 overflow-y-auto rounded-lg bg-slate-900/50 p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700 text-slate-200"
                }`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="rounded-lg bg-slate-700 px-4 py-2 text-sm text-slate-200">
                <div className="flex gap-1">
                  <span className="animate-pulse">●</span>
                  <span className="animate-pulse delay-75">●</span>
                  <span className="animate-pulse delay-150">●</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about experience, services, case studies..."
            className="flex-1 rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2.5 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            aria-label="Ask a question"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
