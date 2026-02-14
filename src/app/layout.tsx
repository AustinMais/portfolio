import "~/styles/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

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
        <Analytics />
      </body>
    </html>
  );
}
