"use client";

import React from "react";
import { ArrowUpRight, FileDown, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { profileData } from "@/data/profile";
import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.heroSection} aria-label="Hero Introduction">
      {/* Background Ambient Glow Accents */}
      <div className={styles.ambientGlowTop} aria-hidden="true" />
      <div className={styles.ambientGlowBottom} aria-hidden="true" />

      <Container size="default" className={styles.heroContainer}>
        {/* Eyebrow Subtitle */}
        <p className={styles.eyebrow}>
          LEAD FULLSTACK ENGINEER • PANDEGLANG / JAKARTA
        </p>

        {/* Main Hero Visual Grid */}
        <div className={styles.heroGrid}>
          {/* Left Column: Big Impact Typography and Narrative */}
          <div className={styles.leftCol}>
            <h1 className={styles.headline}>
              DISTRIBUTED SYSTEMS
              <br />
              <span className={styles.headlineHighlight}>&amp; INTERFACE ARCHITECTURE</span>
            </h1>

            <p className={styles.leadNarrative}>
              Senior Fullstack Engineer with 4+ years of production experience architecting
              high-throughput backend microservices in <strong>Go</strong>, <strong>NestJS</strong>,{" "}
              <strong>Node.js</strong>, and <strong>Python</strong> (FastAPI, Django), coupled with
              resilient real-time interfaces in <strong>React</strong>, <strong>Next.js</strong>, and{" "}
              <strong>TypeScript</strong>. Specializing in IoT telemetry pipelines and operational platforms.
            </p>

            {/* Buttons & Action Cluster - Streamlined to 2 Primary Actions */}
            <div className={styles.actionGroup}>
              <a href="#work" className={styles.primaryBtn}>
                <span>View Selected Work</span>
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </a>

              <a
                href={profileData.resumeUrl}
                download="CV_Bintang_Al_Akbar_Januari.pdf"
                className={styles.secondaryBtn}
              >
                <FileDown size={16} strokeWidth={2.2} />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Blended System Info Glass Card */}
          <div className={styles.rightCol} id="about">
            <div className={styles.systemCard}>
              {/* Card Window Top Header */}
              <div className={styles.cardHeader}>
                <div className={styles.windowDots} aria-hidden="true">
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <div className={styles.cardBadge}>
                  <span className={styles.pulseDot} />
                  <span className={styles.cardBadgeText}>SYSTEM STATUS: OPTIMAL</span>
                </div>
              </div>

              {/* Card Middle Console Body */}
              <div className={styles.cardBody}>
                <div className={styles.terminalBox}>
                  <div className={styles.terminalMeta}>
                    <span>SYSTEM_INFO</span>
                    <span className={styles.versionTag}>v2.6.4_PROD</span>
                  </div>
                  <p className={styles.terminalTitle}>&gt; Fullstack Systems Lead</p>
                  <p className={styles.terminalDesc}>
                    Architecting distributed telemetry, event-driven pipelines &amp; sub-second reactive platforms.
                  </p>
                </div>

                <div className={styles.metricsGrid}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Focus</span>
                    <span className={styles.metricValue}>Distributed Systems &amp; Web</span>
                  </div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricLabel}>Location</span>
                    <span className={styles.metricValue}>Jakarta / Banten (Remote)</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Identity - h2 to fix heading hierarchy jump */}
              <div className={styles.cardFooter}>
                <div className={styles.identityHeader}>
                  <span className={styles.identityBadge}>Identity</span>
                  <span className={styles.identityId}>ID: 9991-BAJ</span>
                </div>
                <h2 className={styles.identityName}>BINTANG AL AKBAR J.</h2>
                <div className={styles.stackTags}>
                  <span className={styles.tag}>Go</span>
                  <span className={styles.tag}>NestJS</span>
                  <span className={styles.tag}>React</span>
                  <span className={styles.tag}>Python</span>
                </div>
              </div>
            </div>

            {/* Availability Direct Action */}
            <div className={styles.availabilityLinkWrapper}>
              <a
                href="mailto:akbarbintang9991@gmail.com"
                className={styles.availabilityLink}
              >
                <div className={styles.availabilityTextGroup}>
                  <div className={styles.availableForTitle}>
                    <span className={styles.pulseDotSm} />
                    <span>OPEN FOR ENGAGEMENT</span>
                  </div>
                  <span className={styles.availableForSubtitle}>
                    SENIOR &amp; LEAD FULLSTACK ROLES
                  </span>
                </div>
                <div className={styles.arrowCircle}>
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Key Metrics Strip Section */}
      <div className={styles.metricsStrip} aria-label="Key Career Metrics">
        <Container size="default">
          <div className={styles.metricsStripGrid}>
            <div className={styles.stripItem}>
              <div className={styles.stripIcon} aria-hidden="true">
                <Sparkles size={18} strokeWidth={2} />
              </div>
              <p className={styles.stripNumber}>
                5<span className={styles.stripPlus}>+</span>
              </p>
              <p className={styles.stripLabel}>Years Experience</p>
            </div>

            <div className={styles.stripItem}>
              <div className={styles.stripIcon} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <p className={styles.stripNumber}>
                15<span className={styles.stripPlus}>+</span>
              </p>
              <p className={styles.stripLabel}>Production Projects</p>
            </div>

            <div className={styles.stripItem}>
              <div className={styles.stripIcon} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M18 14.66V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
                </svg>
              </div>
              <p className={styles.stripNumber}>5</p>
              <p className={styles.stripLabel}>Companies &amp; Clients</p>
            </div>

            <div className={styles.stripItem}>
              <div className={styles.stripIcon} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 14 14" />
                </svg>
              </div>
              <p className={styles.stripNumber}>
                99.9<span className={styles.stripPlus}>%</span>
              </p>
              <p className={styles.stripLabel}>Uptime &amp; Scale</p>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
