"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { Button } from "@/components/ui/Button/Button";
import { Badge } from "@/components/ui/Badge/Badge";
import { profileData } from "@/data/profile";
import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  const highlightedStack = [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Tailwind CSS",
  ];

  return (
    <section id="hero" className={styles.heroSection} aria-label="Hero Overview">
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <Container size="xl">
        <div className={styles.heroGrid}>
          <div className={styles.contentCol}>
            <div className={styles.statusBadgeWrapper}>
              <Badge variant="accent" size="md" className={styles.heroBadge}>
                <span className={styles.liveDot} aria-hidden="true" />
                <span className={styles.statusTextLong}>{profileData.availability}</span>
                <span className={styles.statusTextShort}>Available for Opportunities</span>
              </Badge>
            </div>

            <h1 className={styles.title}>
              <span className={styles.greeting}>Hi, I am</span>
              <span className={styles.name}>{profileData.name}</span>
              <span className={styles.roleTitle}>{profileData.title}</span>
            </h1>

            <p className={styles.bio}>
              Fullstack Developer with <strong>{profileData.yearsOfExperience} years of experience</strong> architecting
              resilient web platforms, reactive frontend experiences, and scalable cloud APIs with the modern TypeScript ecosystem.
            </p>

            <div className={styles.techPillGroup} aria-label="Core Technologies">
              <span className={styles.techLabel}>Core Stack:</span>
              <div className={styles.techPills}>
                {highlightedStack.map((tech) => (
                  <span key={tech} className={styles.techPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.ctaGroup}>
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                View My Work
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                leftIcon={<Mail size={18} />}
              >
                Contact Me
              </Button>
            </div>

            <div className={styles.statsRow}>
              {profileData.stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visualCol}>
            <div className={styles.codeWindow} aria-label="Developer Architecture Overview">
              <div className={styles.windowHeader}>
                <div className={styles.windowDots}>
                  <span className={`${styles.dot} ${styles.dotRed}`} />
                  <span className={`${styles.dot} ${styles.dotYellow}`} />
                  <span className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <div className={styles.windowTitle}>
                  <Terminal size={14} className={styles.terminalIcon} aria-hidden="true" />
                  <span>bintang-stack.config.ts</span>
                </div>
                <div className={styles.windowBadge}>TypeScript</div>
              </div>

              <div className={styles.codeBody}>
                <pre>
                  <code>
                    <span className={styles.codeKeyword}>const</span>{" "}
                    <span className={styles.codeVariable}>engineer</span>:{" "}
                    <span className={styles.codeType}>FullstackArchitect</span> = &#123;{"\n"}
                    {"  "}
                    <span className={styles.codeProperty}>name</span>:{" "}
                    <span className={styles.codeString}>&quot;{profileData.name}&quot;</span>,{"\n"}
                    {"  "}
                    <span className={styles.codeProperty}>focus</span>: [
                    <span className={styles.codeString}>&quot;Distributed Web&quot;</span>,{" "}
                    <span className={styles.codeString}>&quot;Scalable APIs&quot;</span>],{"\n"}
                    {"  "}
                    <span className={styles.codeProperty}>frontend</span>: &#123;{"\n"}
                    {"    "}
                    <span className={styles.codeProperty}>framework</span>:{" "}
                    <span className={styles.codeString}>&quot;Next.js 16 (App Router)&quot;</span>,{"\n"}
                    {"    "}
                    <span className={styles.codeProperty}>uiLibrary</span>:{" "}
                    <span className={styles.codeString}>&quot;React 19 &bull; Tailwind CSS&quot;</span>,{"\n"}
                    {"    "}
                    <span className={styles.codeProperty}>state</span>:{" "}
                    <span className={styles.codeString}>&quot;Zustand &bull; TanStack Query&quot;</span>{"\n"}
                    {"  "}&#125;,{"\n"}
                    {"  "}
                    <span className={styles.codeProperty}>backend</span>: &#123;{"\n"}
                    {"    "}
                    <span className={styles.codeProperty}>runtime</span>:{" "}
                    <span className={styles.codeString}>&quot;Node.js &bull; NestJS&quot;</span>,{"\n"}
                    {"    "}
                    <span className={styles.codeProperty}>database</span>:{" "}
                    <span className={styles.codeString}>&quot;PostgreSQL &bull; Prisma ORM&quot;</span>,{"\n"}
                    {"    "}
                    <span className={styles.codeProperty}>architecture</span>:{" "}
                    <span className={styles.codeString}>&quot;Clean Architecture / REST&quot;</span>{"\n"}
                    {"  "}&#125;,{"\n"}
                    {"  "}
                    <span className={styles.codeProperty}>qualities</span>: [
                    <span className={styles.codeString}>&quot;WCAG AA Accessible&quot;</span>,{" "}
                    <span className={styles.codeString}>&quot;High Perf (95+ CWV)&quot;</span>]{"\n"}
                    &#125;;
                  </code>
                </pre>
              </div>

              <div className={styles.windowFooter}>
                <div className={styles.statusItem}>
                  <CheckCircle2 size={14} className={styles.checkIcon} aria-hidden="true" />
                  <span>CI/CD Pipeline: Verified</span>
                </div>
                <div className={styles.latencyItem}>
                  <span>p99: &lt;45ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

