import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "cinestream-catalog",
    title: "CineStream - Movie & TV Show Catalog Platform",
    category: "Frontend",
    description:
      "A modern, high-performance streaming catalog and discovery web application built with Next.js 16, React 19, and the TMDB API.",
    longDescription:
      "CineStream provides an immersive browsing experience for film enthusiasts. Features dynamic trending hero banners, multi-genre filtering, live search with debounce, trailer video overlays, cast filmography explore, and local bookmark synchronization.",
    mockupType: "catalog",
    tags: ["Next.js 16", "React 19", "TypeScript", "REST APIs", "SCSS Modules", "Responsive Design"],
    highlights: [
      "Dynamic multi-genre catalog indexing with instant debounced search across thousands of titles",
      "Interactive media details modal with synchronized YouTube trailer player and cast carousel",
      "Persistent user watchlist and favorite collection managed through local browser storage",
      "100% responsive fluid grid layout with optimized responsive image loading and skeleton states",
    ],
    githubUrl: "https://github.com/bintangjanuari/cinestream-catalog",
    liveUrl: "https://cinestream-catalog.vercel.app",
    featured: true,
  },
  {
    id: "cloudnotes-workspace",
    title: "CloudNotes - Real-Time Markdown Notes App",
    category: "Fullstack",
    description:
      "A clean, fullstack note-taking and documentation productivity workspace with live markdown preview, folder hierarchy, and tag indexing.",
    longDescription:
      "Designed for developers and technical writers, CloudNotes enables distraction-free markdown authoring with real-time split-pane rendering, syntax-highlighted code blocks, category tagging, auto-saved drafts, and encrypted exports.",
    mockupType: "notes",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    highlights: [
      "Real-time split-pane markdown editor with instant preview, math rendering, and syntax highlighting",
      "Multi-level folder taxonomy and tag-based filtering with sub-second full-text note search",
      "Resilient optimistic UI updates with automatic background draft saving and conflict resolution",
      "RESTful backend API built with Node.js and Prisma ORM for structured database operations",
    ],
    githubUrl: "https://github.com/bintangjanuari/cloudnotes-workspace",
    liveUrl: "https://cloudnotes-workspace.vercel.app",
    featured: true,
  },
  {
    id: "amg-media-ops",
    title: "AMG Fleet & Campaign Operations CMS",
    category: "Dashboard & CMS",
    description:
      "Enterprise campaign control center and vehicle fleet operational dashboard managing targeted transit digital media displays nationwide.",
    longDescription:
      "A high-throughput operational platform handling content scheduling, GPS vehicle geofencing, playback proof-of-performance auditing, and real-time hardware health analytics for nationwide transit media fleets.",
    mockupType: "cms",
    tags: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker", "Tailwind CSS"],
    highlights: [
      "Dynamic playlist scheduling engine with multi-criteria audience and geo-targeting rule builder",
      "Real-time operational dashboard tracking fleet hardware health, GPS pings, and playback telemetry",
      "Modular micro-UI architecture allowing zero-downtime component upgrades across active squads",
    ],
    githubUrl: "https://github.com/bintangjanuari",
    liveUrl: "https://tmx.amg.id/",
    featured: true,
  },
  {
    id: "itsavirus-platform",
    title: "Itsavirus Corporate Platform & Digital Studio",
    category: "Frontend",
    description:
      "Modern corporate platform and product engineering showcase for an international software studio, featuring responsive web interfaces and micro-interactions.",
    longDescription:
      "Engineered high-performance web and mobile interface modules for Itsavirus corporate digital presence and client mobility products. Focused on responsive design, TypeScript API integration, and smooth cross-device user experiences.",
    mockupType: "web",
    tags: ["React", "Next.js", "TypeScript", "React Native", "REST APIs", "SCSS Modules"],
    highlights: [
      "Built modern, responsive web experiences with strict sub-pixel alignment and accessible UI components",
      "Integrated RESTful APIs connecting frontend applications with backend services",
      "Implemented smooth animations and cross-platform mobility flows for international client products",
    ],
    githubUrl: "https://github.com/bintangjanuari",
    liveUrl: "https://itsavirus.com/",
    featured: true,
  },
  {
    id: "frameio-collab",
    title: "Frame.io Real-Time Video Collaboration Platform",
    category: "Frontend",
    description:
      "Interactive cloud-native video collaboration modules with sub-frame timecode annotations and synchronized multi-user review feeds.",
    longDescription:
      "Cloud-native creative workflow platform enabling distributed teams to review, annotate, and approve high-resolution media assets with instant client updates and zero latency lag.",
    mockupType: "collab",
    tags: ["React", "TypeScript", "Node.js", "NestJS", "WebSockets", "SCSS Modules"],
    highlights: [
      "Pixel-perfect accessible components built from strict design system specifications and tokens",
      "Optimized WebSocket state management handling simultaneous collaborative reviewer edits",
      "Comprehensive cross-browser rendering pipeline supporting desktop & tablet viewports",
    ],
    githubUrl: "https://github.com/bintangjanuari",
    liveUrl: "https://frame.io",
    featured: true,
  },
  {
    id: "prudential-agent-portal",
    title: "Prudential Agent Microfrontend Portal",
    category: "Fullstack",
    description:
      "Decoupled microfrontend client portal empowering thousands of insurance agents with rapid policy administration and claims tracking.",
    longDescription:
      "Enterprise microfrontend ecosystem developed at PT Barito Integra Teknologi. Modularized monolithic customer management workflows into independently deployable domain units.",
    mockupType: "portal",
    tags: ["Microfrontends", "React", "TypeScript", "NestJS", "Node.js", "SCSS Modules"],
    highlights: [
      "Reusable enterprise design system library including dynamic Date Pickers and multi-part uploaders",
      "Microfrontend architecture separating business domains for autonomous team releases",
      "Reduced client bundle size by 42% through intelligent code splitting and lazy modules",
    ],
    githubUrl: "https://github.com/bintangjanuari",
    featured: false,
  },
  {
    id: "pertamina-cctv-dashboard",
    title: "Pertamina CCTV Surveillance & Monitoring System",
    category: "Dashboard & CMS",
    description:
      "Centralized video stream analytics and camera telemetry dashboard managing mission-critical surveillance infrastructure.",
    longDescription:
      "Real-time monitoring hub developed at PT Jagad Aman Prima for Pertamina. Streams hundreds of live feeds with anomaly detection, alert thresholds, and automated incident logs.",
    mockupType: "dashboard",
    tags: ["React", "Next.js", "Node.js", "WebSockets", "TypeScript", "Dashboard"],
    highlights: [
      "Low-latency streaming grid with adaptive quality switching for bandwidth conservation",
      "Interactive incident timeline and geo-spatial camera placement maps",
      "Automated alerting webhooks notifying security personnel within milliseconds of an offline event",
    ],
    githubUrl: "https://github.com/bintangjanuari",
    featured: false,
  },
];
