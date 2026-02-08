export const site = {
  name: "Austin Mais",
  title: "Full-Stack Software Engineer",
  tagline:
    "I help startups and SaaS teams build intelligent web systems that automate work, improve user experience, and scale efficiently.",
  heroHeadline: "AI-powered web systems for startups and SaaS teams",
  heroSubheadline:
    "I design and build modern web applications with intelligent automation built in — helping teams scale faster without adding complexity.",
  ctaPrimary: "Book a strategy call",
  ctaFinalHeadline: "Let's make your product smarter.",
  ctaFinalButton: "Book a call",
  /** Replace with your Calendly link or booking URL */
  bookingUrl: "mailto:hello@example.com?subject=Strategy%20Call",
} as const;

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#problem-solution", label: "How I Help" },
  { href: "#what-i-build", label: "What I Build" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const socialLinks = [
  {
    href: "https://github.com/AustinMais",
    label: "GitHub",
    icon: "github",
  },
  {
    href: "https://www.linkedin.com/in/austin-mais",
    label: "LinkedIn",
    icon: "linkedin",
  },
] as const;

export const aboutParagraphs = [
  "As a seasoned software engineer with over eight years of professional experience, I specialize in designing and developing robust applications and modernizing software architectures. My expertise spans a wide range of technologies, including C#, JavaScript, PHP, React, Angular, Svelte, .NET Framework/Core, Laravel, and cloud platforms like Azure and AWS.",
  "I have a proven track record of delivering high-quality solutions across industries such as finance, government, and enterprise systems. Whether it's creating microservices, developing user-friendly SPAs, or integrating large-scale data systems, I bring a blend of technical proficiency and a deep understanding of UI/UX design.",
  "Highlights of My Expertise",
  "Web & Application Development: Extensive experience building secure, scalable web applications and portals.",
  "Modern Frameworks & Tools: Skilled in React, Angular, Svelte, and Laravel with expertise in implementing microservices and SPAs.",
  "Cloud & DevOps: Proficient in AWS and Azure with hands-on experience in cloud-based data communication and Docker containerization.",
  "Data Management: Adept at working with SQL, JSON, and XML for backend operations and large data pools. Collaboration & Leadership: Experienced in leading technical decisions, collaborating with cross-functional teams, and delivering on project deadlines.",
  "I thrive on solving complex challenges and delivering elegant, efficient solutions tailored to meet unique business needs. Let us collaborate to bring your vision to life!",
];

export const experience = [
  {
    period: "2025-Present",
    role: "Software Engineer",
    company: "Medical Solutions",
    url: "https://www.MedicalSolutions.com/",
    description:
      "Designed and developed client facing software using a React front end and a C# backend implemented through Azure. Lead AI/CoPilot implementation for improved development processes including automating testing and documentation.",
    tags: ["C#", "Typescript", "React", "Service Fabric", "CoPilot", "SQL", "Azure"],
  },
  {
    period: "2024 - 2024",
    role: "Software Engineer",
    company: "Bank of America (Apex)",
    url: "https://www.bankofamerica.com/",
    description:
      "Designed and updated web applications for internal services that kept track of security vulnerabilities within the company. Worked on large data pools and communication between multiple services within the cloud.",
    tags: ["C#", "Javascript", "HTML&CSS", "SQL", "Azure"],
  },
  {
    period: "2023 - 2023",
    role: "Software Engineer",
    company: "Colorado Department of Public Safety (Insight Global)",
    url: "https://publicsafety.colorado.gov/",
    description:
      "Developed a Proof-of-Concept (POC) portal using React, enabling departmental access to web applications and forms within a single-page application (SPA). Responsibilities included selecting appropriate technologies and frameworks, designing intuitive UI/UX interfaces, and streamlining workflows to ensure an efficient user experience.",
    tags: ["C#", "Javascript", "React", "HTML&CSS", "SQL"],
  },
  {
    period: "2021 - 2023",
    role: "Software Engineer",
    company: "SRS Acquiom",
    url: "https://www.srsacquiom.com/",
    description: [
      "Developed and designed software in PHP, Laravel, JavaScript, Typescript including Monolithic and MicroService patterns with a Single Page Application.",
      "Created a Micro Frontend/Service in React/Typescript which used an external API to give a logged in user an up to date calculation of their holdings showing the value in different currencies. This included designing the UI/UX as well as decisions on technical aspects.",
    ],
    tags: [
      "PHP",
      "Laravel",
      "Svelte",
      "Javascript",
      "Typescript",
      "React",
      "HTML&CSS",
      "NetSuite",
      "SQL",
      "AWS",
    ],
  },
  {
    period: "2019 - 2021",
    role: "Software Engineer",
    company: "Computershare Loan Services",
    url: "https://www.computershare.com/us",
    description: [
      "Developed and designed software in C# .Net Core (2.0-5.0), VisualBasic, and SQL. Built and maintained micro-services for the middle ware team that communicated with internal and external services using JSON and XML.",
      "Helped push and design new architecture for the middle ware space modernizing the services from old frameworks to more efficient and secure .net core micro services. Utilizing docker and containerization to prepare for future CI/CD in the cloud.",
    ],
    tags: ["C#", "Javascript", "Angular", "HTML&CSS", "SQL", "Azure"],
  },
  {
    period: "2016 - 2019",
    role: "Associate Software Engineer",
    company: "TriZetto",
    url: "https://www.trizettoprovider.com/",
    description: [
      "Developed and designed software with an agile team utilizing C# to create programs that connect company applications (MS Project/PWA, Excel, Ayehu, Sharepoint, SQL Server). TSD Ticketing system Admin.",
      "Sharepoint creation and admin.",
    ],
    tags: ["C#", "Javascript", "Sharepoint", "HTML&CSS", "SQL"],
  },
  {
    period: "2015 - 2016",
    role: "Jr Software Engineer",
    company: "RF-Smart",
    url: "https://www.rfsmart.com/",
    description: [
      "Developed and designed software with an agile team utilizing C# and SQL to interact with the JDE E1 database. Partnered with multiple customers, customizing workflows for their distribution needs. Required to collaborate intricately with business analysts and project managers to deliver and design software in a timely manner.",
      "Customized ERP barcode scanning software utilized by distribution centers to handle the workflow of each customer.",
    ],
    tags: ["C#", "Javascript", "JDE E1", "HTML&CSS", "SQL"],
  },
] as const;

export const projects = [
  {
    title: "Portfolio Website",
    href: "https://github.com/AustinMais/portfolio",
    image: "/PortfolioThumbnail.png",
    imageAlt: "Portfolio Website Card",
    description:
      "Developed and designed a portfolio website to showcase projects and resume. Utilized Next.js, Tailwind CSS, and Vercel for deployment.",
    tags: ["React", "Typescript", "HTML&CSS", "Tailwind", "Vercel"],
  },
] as const;

// ——— Consulting landing copy ———
export const problemSolution = {
  title: "Your product shouldn't need more people to grow.",
  copy: "Most startups hit a wall where growth means more support, more ops, and more manual work. I help teams embed AI directly into their web platforms — automating workflows, improving user experience, and unlocking scale without chaos.",
} as const;

export const whatIBuild = [
  "High-performance websites & SaaS platforms",
  "AI support agents & chatbots",
  "Smart onboarding & personalization",
  "Internal tools & workflow automation",
  "Data-driven insights & analytics",
] as const;

export const whyThisWorks = {
  title: "AI — without the hype.",
  copy: "You don't need experimental models or complex infrastructure. You need: clear use cases, reliable integrations, and systems your team can actually maintain. That's what I build.",
} as const;

export const socialProof =
  "I work directly with founders and teams to design systems that prioritize clarity, performance, and long-term scalability.";

export const processSteps = [
  "Strategy & discovery",
  "System design",
  "Development & AI integration",
  "Launch, measure, iterate",
] as const;

export const whoThisIsFor = {
  intro: "You'll get the most value if:",
  bullets: [
    "You're building or scaling a SaaS product",
    "You want AI to reduce work, not add complexity",
    "You care about long-term maintainability",
  ],
  notFor: "If you're looking for a quick template site, I'm probably not the right fit.",
} as const;

// ——— Service packages ———
export const servicePackages = [
  {
    id: "startup",
    name: "Startup Launch",
    price: "from $5,000",
    bestFor: "Early-stage startups and MVPs",
    features: [
      "Custom website or web app",
      "Clean, scalable architecture",
      "Basic AI feature (chatbot, smart search, or automation)",
      "Deployment & launch support",
    ],
    tagline: "Ideal for validating ideas without cutting corners.",
  },
  {
    id: "growth",
    name: "Growth Systems",
    price: "from $12,000",
    popular: true,
    bestFor: "SaaS products with users or revenue",
    features: [
      "Full-stack web application",
      "AI-powered workflows or support tools",
      "Smart onboarding or personalization",
      "Performance & conversion optimization",
      "Analytics & iteration support",
    ],
    tagline: "Designed to reduce manual work and improve product efficiency.",
  },
  {
    id: "scale",
    name: "Scale & Automation",
    price: "from $25,000+",
    bestFor: "Teams scaling fast",
    features: [
      "Advanced AI integrations",
      "Internal tools & automation dashboards",
      "Custom data pipelines & insights",
      "Ongoing optimization & AI refinement",
      "Priority support & roadmap planning",
    ],
    tagline: "Built to scale without increasing headcount.",
  },
] as const;

export const retainer = {
  range: "$750–$2,000/month",
  items: [
    "Feature expansion",
    "AI optimization",
    "System monitoring",
    "Strategic guidance",
  ],
} as const;

// ——— Case studies (business-first structure) ———
export type CaseStudy = {
  id: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: readonly string[];
  results: readonly string[];
  techStack: string;
  takeaway: string;
  href?: string;
  image?: string;
  imageAlt?: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    id: "ai-web-platform",
    title: "AI-Enhanced Web Platform for Faster User Support & Onboarding",
    overview:
      "Built a modern web application enhanced with AI-driven features to reduce manual support workload and improve user onboarding efficiency.",
    problem:
      "The client needed a scalable web platform but faced challenges with repetitive support requests, slow onboarding, and limited insight into user behavior. (For personal projects: traditional workflows required manual review and repetitive actions, limiting scalability.)",
    solution:
      "I designed and developed a full-stack web application with an integrated AI assistant capable of answering common questions, guiding users through onboarding, and surfacing relevant information dynamically.",
    keyFeatures: [
      "AI-powered support assistant",
      "Intelligent content search using embeddings",
      "Automated user guidance",
      "Scalable full-stack architecture",
      "Performance-optimized frontend",
    ],
    results: [
      "Reduced manual interactions",
      "Faster user onboarding",
      "Improved system maintainability",
      "Foundation for future AI expansion",
    ],
    techStack: "React, Next.js, Node.js, OpenAI APIs, Cloud Hosting",
    takeaway:
      "This project demonstrates how AI can be embedded directly into a web platform to improve usability and reduce operational overhead.",
    href: "https://github.com/AustinMais/portfolio",
    image: "/PortfolioThumbnail.png",
    imageAlt: "AI-enhanced web platform",
  },
] as const;
