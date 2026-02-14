import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { AutomatedAssistantWidget } from "~/components/AutomatedAssistantWidget";

export const metadata: Metadata = {
  title: "Austin Mais — AI-Powered Web Systems for Startups & SaaS",
  description:
    "I help startups and SaaS teams build intelligent web systems that automate work, improve user experience, and scale efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen">
        {children}
        <AutomatedAssistantWidget />
      </body>
    </html>
  );
}
