"use client";

import React from "react";
import { Container } from "@/components/ui/Container/Container";
import { Award, GraduationCap, Zap } from "lucide-react";
import styles from "./Skills.module.scss";

interface Capability {
  icon: string;
  title: string;
  desc: string;
}

const capabilities: Capability[] = [
  {
    icon: "</>",
    title: "Backend & APIs",
    desc: "Node.js, NestJS, Go, Python (FastAPI, Django), RESTful APIs, WebSockets, microservices, and secure auth architectures.",
  },
  {
    icon: "UI",
    title: "Frontend Architecture",
    desc: "React.js, Next.js, Vue.js, TypeScript, state management (Redux, Zustand), microfrontends, and responsive UX design.",
  },
  {
    icon: "DB",
    title: "Database & Storage",
    desc: "PostgreSQL, MySQL, MongoDB, Redis caching, schema migrations, SQLAlchemy, and Django ORM query optimizations.",
  },
  {
    icon: "📱",
    title: "Mobile Development",
    desc: "Cross-platform mobile apps with React Native, native bridging, performant UI components, and published mobile features.",
  },
  {
    icon: "⚙️",
    title: "DevOps & Tools",
    desc: "Docker containerization, CI/CD pipelines, Git workflows, system debugging, Linux environments, and Agile/Scrum delivery.",
  },
  {
    icon: "⚡",
    title: "Performance & Scale",
    desc: "Scalable architecture design, peer code reviews, clean code standards, unit testing, and sub-second endpoint response times.",
  },
];

interface ToolBadge {
  abbr: string;
  name: string;
  theme?: "purple" | "blue" | "emerald" | "amber" | "default";
}

const tools: ToolBadge[] = [
  { abbr: "JS", name: "Node.js", theme: "default" },
  { abbr: "Nx", name: "NestJS", theme: "purple" },
  { abbr: "Re", name: "React", theme: "blue" },
  { abbr: "▲", name: "Next.js", theme: "default" },
  { abbr: "TS", name: "TypeScript", theme: "blue" },
  { abbr: "Py", name: "Python", theme: "amber" },
  { abbr: "Go", name: "Golang", theme: "blue" },
  { abbr: "Vue", name: "Vue.js", theme: "emerald" },
  { abbr: "🐋", name: "Docker", theme: "blue" },
  { abbr: "PG", name: "PostgreSQL", theme: "blue" },
  { abbr: "Mg", name: "MongoDB", theme: "emerald" },
  { abbr: "RN", name: "React Native", theme: "default" },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.capabilitiesSection} aria-label="Capabilities & Tools">
      {/* Anchor alias for #capabilities */}
      <div id="capabilities" style={{ position: "relative", top: "-80px" }} aria-hidden="true" />

      <Container size="default">
        <div className={styles.sectionGrid}>
          {/* Left Column: Core Capabilities (6 Grid Items) */}
          <div className={styles.leftCol}>
            <div className={styles.headingGroup}>
              <span className={styles.eyebrow}>Architectural Domains</span>
              <h2 className={styles.title}>Core Capabilities</h2>
            </div>

            <div className={styles.capabilitiesGrid}>
              {capabilities.map((item) => (
                <div key={item.title} className={styles.capabilityItem}>
                  <div className={styles.itemHeader}>
                    <div className={styles.capabilityIcon} aria-hidden="true">
                      {item.icon}
                    </div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tools & Technologies + Certifications */}
          <div className={styles.rightCol}>
            {/* Tools Badges */}
            <div className={styles.toolsBlock}>
              <div className={styles.headingGroup}>
                <span className={styles.eyebrow}>Ecosystem &amp; Stack</span>
                <h3 className={styles.subTitle}>Tools &amp; Technologies</h3>
              </div>

              <div className={styles.toolsGrid}>
                {tools.map((tool) => (
                  <div key={tool.name} className={styles.toolCard}>
                    <span className={`${styles.toolAbbr} ${styles[tool.theme || "default"]}`}>
                      {tool.abbr}
                    </span>
                    <span className={styles.toolName}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Education */}
            <div className={styles.certBlock}>
              <div className={styles.headingGroup}>
                <span className={styles.eyebrow}>Background</span>
                <h3 className={styles.subTitle}>Certifications &amp; Education</h3>
              </div>

              <div className={styles.certList}>
                <div className={styles.certCard}>
                  <div className={styles.certIcon}>
                    <Zap size={16} />
                  </div>
                  <div className={styles.certContent}>
                    <h4 className={styles.certName}>Glints Academy x Binar Academy</h4>
                    <p className={styles.certSub}>Fullstack / Frontend Web Development • 2021</p>
                  </div>
                </div>

                <div className={styles.certCard}>
                  <div className={styles.certIcon}>
                    <Award size={16} />
                  </div>
                  <div className={styles.certContent}>
                    <h4 className={styles.certName}>Certificate of Completion</h4>
                    <p className={styles.certSub}>Glints Academy • Jun 2021</p>
                  </div>
                </div>

                <div className={styles.certCard}>
                  <div className={styles.certIcon}>
                    <GraduationCap size={16} />
                  </div>
                  <div className={styles.certContent}>
                    <h4 className={styles.certName}>SMA Negeri 2 Pandeglang</h4>
                    <p className={styles.certSub}>Natural Science • 2014 – 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
