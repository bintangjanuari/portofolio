import { SkillExpertise } from "@/types";

export const skillsExpertiseData: SkillExpertise[] = [
  {
    id: "frontend-arch",
    title: "Frontend Architecture",
    level: 95,
    category: "Architecture",
    description:
      "Designing decoupled, modular client architectures with clear separation of concerns, microfrontends, and reusable design token systems.",
    tools: ["Microfrontends", "Design Systems", "Module Federation", "Clean Architecture", "Component Primitives"],
  },
  {
    id: "react-nextjs",
    title: "React & Next.js Development",
    level: 96,
    category: "Core Frontend",
    description:
      "Deep mastery of React 19 and Next.js 16 (App Router, Server Components, Turbopack, SSR/SSG, and Server Actions) for fast, SEO-optimized web apps.",
    tools: ["Next.js 16", "React 19", "Server Components", "Client Hooks", "App Router"],
  },
  {
    id: "typescript-dev",
    title: "TypeScript Development",
    level: 94,
    category: "Language",
    description:
      "Authoring strictly typed codebases with generics, discriminated unions, mapped types, and end-to-end schema synchronization with backend payloads.",
    tools: ["Strict Mode", "Generics", "Type Guards", "Zod", "Utility Types"],
  },
  {
    id: "backend-nodejs-nestjs",
    title: "Node.js & NestJS Backend Development",
    level: 90,
    category: "Backend",
    description:
      "Architecting enterprise microservices, dependency injection modules, controllers, guards, and middleware in Node.js and NestJS.",
    tools: ["NestJS", "Node.js", "Express", "Dependency Injection", "Microservices"],
  },
  {
    id: "rest-api",
    title: "REST API Integration",
    level: 95,
    category: "Backend & Integration",
    description:
      "Designing and consuming robust RESTful APIs with predictable error boundaries, pagination, caching layers, and OpenAPI specifications.",
    tools: ["RESTful Standards", "Axios/Fetch", "OpenAPI/Swagger", "JWT Auth", "Error Handling"],
  },
  {
    id: "responsive-web",
    title: "Responsive Web Development",
    level: 98,
    category: "UI Engineering",
    description:
      "Building fluid, mobile-first layouts across all device viewports with sub-pixel alignment, modern CSS Grid/Flexbox, and touch ergonomics.",
    tools: ["Mobile-First", "CSS Grid", "Flexbox", "Responsive Breakpoints", "Touch Targets"],
  },
  {
    id: "figma-ui",
    title: "UI Implementation from Figma",
    level: 96,
    category: "UI Engineering",
    description:
      "Translating complex Figma design specifications into pixel-perfect, accessible, and responsive components that faithfully mirror design intent.",
    tools: ["Figma Specs", "Design Tokens", "Typography Ramps", "Asset Optimization", "Layout Fidelity"],
  },
  {
    id: "perf-optimization",
    title: "Performance Optimization",
    level: 92,
    category: "Quality",
    description:
      "Driving sub-second First Contentful Paint and 60fps interaction smoothness through intelligent code splitting, asset minification, and memoization.",
    tools: ["Core Web Vitals", "Code Splitting", "Lazy Loading", "IntersectionObserver", "Bundle Analysis"],
  },
  {
    id: "state-mgmt",
    title: "State Management",
    level: 93,
    category: "Core Frontend",
    description:
      "Managing complex client and server state transitions reliably through predictable unidirectional flows, state machines, and context stores.",
    tools: ["Zustand", "Redux Toolkit", "React Context", "URL State", "Optimistic Updates"],
  },
];

