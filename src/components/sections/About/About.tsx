import React from "react";
import { 
  Layout, 
  Server, 
  Database, 
  Zap, 
  Code2, 
  Layers, 
  ShieldCheck, 
  Cpu 
} from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Card } from "@/components/ui/Card/Card";
import { profileData } from "@/data/profile";
import styles from "./About.module.scss";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Layout size={24} aria-hidden="true" />,
      title: "Frontend Development",
      description:
        "Building pixel-perfect, accessible, and ultra-fast web interfaces using React 19, Next.js 16 App Router, TypeScript, and modern CSS/SCSS architecture.",
    },
    {
      icon: <Server size={24} aria-hidden="true" />,
      title: "Backend & API Integration",
      description:
        "Designing modular RESTful services and microservices using Node.js, NestJS, and Express with strict validation, JWT auth, and clean error handling.",
    },
    {
      icon: <Database size={24} aria-hidden="true" />,
      title: "Database & Cloud Architecture",
      description:
        "Structuring normalized and optimized relational databases with PostgreSQL and MySQL, leveraging Prisma ORM, migrations, and Supabase cloud infrastructure.",
    },
    {
      icon: <ShieldCheck size={24} aria-hidden="true" />,
      title: "Scalable Web Applications",
      description:
        "Applying Clean Architecture, modular component design, automated CI/CD practices, Core Web Vitals optimization, and WCAG AA accessibility compliance.",
    },
  ];

  return (
    <section id="about" className={styles.aboutSection} aria-label="About Me">
      <Container size="xl">
        <SectionHeading
          badge="About Me"
          title="Engineering background & technical philosophy"
          subtitle="Combining strong architectural foundations with deep craftsmanship across the entire JavaScript and TypeScript ecosystem."
        />

        <div className={styles.aboutGrid}>
          <div className={styles.bioCard}>
            <h3 className={styles.bioTitle}>Fullstack Software Engineer</h3>
            <div className={styles.bioText}>
              <p>
                I am a dedicated <strong>Fullstack Developer with 4+ years of professional experience</strong> turning
                complex business requirements into robust, high-performance web applications. My journey spans
                enterprise insurance portals, streaming catalogs, and distributed operational dashboards.
              </p>
              <p>
                My focus centers on end-to-end type safety, modern component-driven frontends, and resilient backend
                APIs. I believe exceptional software combines aesthetic clarity with bulletproof maintainability.
              </p>
              <p>
                Whether modernizing legacy codebases into Next.js microfrontends or designing multi-tenant RESTful
                APIs, I prioritize developer experience, measurable performance metrics, and seamless user experiences.
              </p>
            </div>

            <div className={styles.metaList}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Experience</span>
                <span className={styles.metaValue}>{profileData.yearsOfExperience}+ Years</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>{profileData.location}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Availability</span>
                <span className={styles.metaValue}>{profileData.availability}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Primary Language</span>
                <span className={styles.metaValue}>TypeScript / JavaScript</span>
              </div>
            </div>
          </div>

          <div className={styles.pillarsGrid}>
            {pillars.map((pillar, idx) => (
              <Card key={idx} variant="default" hoverable padding="md" className={styles.pillarCard}>
                <div className={styles.pillarIconWrapper}>{pillar.icon}</div>
                <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                <p className={styles.pillarDescription}>{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

