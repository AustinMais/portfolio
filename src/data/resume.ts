export const site = {
  name: "Austin Mais",
  title: "Full-Stack Software Engineer",
  tagline:
    "I design robust applications, modernize architectures, and deliver solutions.",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
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
