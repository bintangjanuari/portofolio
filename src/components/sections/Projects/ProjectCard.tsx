"use client";

import React from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import styles from "./Projects.module.scss";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const renderMockup = (type?: string) => {
    switch (type) {
      case "cctv":
      case "dashboard":
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.mockupTopBar}>
              <span className={styles.mockupTitleGroup}>
                <span className={`${styles.statusDot} ${styles.dotEmerald}`} />
                <span>Pertamina CCTV AI</span>
              </span>
              <span className={styles.tagStream}>LIVE STREAM</span>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.telemetryRow}>
                <span>FPS: 60</span>
                <span>LATENCY: 12ms</span>
              </div>
              <div className={styles.metricBarsGroup}>
                <div className={styles.metricBar1} />
                <div className={styles.metricBar2} />
              </div>
              <div className={styles.streamEqualizer}>
                <div className={styles.eqBar} style={{ height: "35%" }} />
                <div className={styles.eqBar} style={{ height: "65%" }} />
                <div className={styles.eqBar} style={{ height: "85%" }} />
                <div className={`${styles.eqBar} ${styles.eqEmerald}`} style={{ height: "95%" }} />
                <div className={styles.eqBar} style={{ height: "50%" }} />
              </div>
            </div>
            <span className={styles.mockupBottomLabel}>LLM &amp; VIDEO PIPELINE</span>
          </div>
        );

      case "cms":
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.mockupTopBar}>
              <span className={styles.mockupTitleGroup}>
                <span className={`${styles.statusDot} ${styles.dotBlue}`} />
                <span>AMG Fleet CMS</span>
              </span>
              <span className={styles.tagActive}>ACTIVE ADS</span>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.targetingBox}>
                <div className={styles.targetingHeader}>
                  <span>Targeting Engine</span>
                  <span className={styles.textEmerald}>100% Synced</span>
                </div>
                <div className={styles.progressBarTrack}>
                  <div className={styles.progressBarFill} style={{ width: "82%" }} />
                </div>
              </div>
              <div className={styles.pillRow}>
                <span className={styles.pillTag}>Route Analytics</span>
                <span className={styles.pillTag}>Ad Scheduling</span>
              </div>
            </div>
            <span className={styles.mockupBottomLabel}>Vehicle Media Network</span>
          </div>
        );

      case "iot":
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.mockupTopBar}>
              <span className={styles.mockupTitleGroup}>
                <span className={`${styles.statusDot} ${styles.dotEmerald} ${styles.pulse}`} />
                <span>DSN IoT Telemetry</span>
              </span>
              <span className={styles.tagStream}>WS CONNECTED</span>
            </div>
            <div className={styles.mockupContentIot}>
              <div className={styles.gaugeCircle}>
                <span className={styles.gaugePercent}>98.4%</span>
              </div>
              <p className={styles.gaugeSubtitle}>Capacity Allocation</p>
            </div>
            <div className={styles.iotFooter}>
              <span>Slots: 1,420</span>
              <span>Sensors: Active</span>
            </div>
          </div>
        );

      case "web":
      case "itsavirus":
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.mockupTopBar}>
              <span className={styles.mockupTitleGroup}>
                <span className={`${styles.statusDot} ${styles.dotPurple}`} />
                <span>Itsavirus Studio</span>
              </span>
              <span className={styles.tagActive}>CLIENT APPS</span>
            </div>
            <div className={styles.mockupContentWeb}>
              <div className={styles.webHeadline}>Digital Studio Experience</div>
              <div className={styles.webBadgesRow}>
                <span className={styles.pillTag}>React / Next.js</span>
                <span className={styles.pillTag}>React Native</span>
                <span className={styles.pillTag}>TypeScript</span>
              </div>
            </div>
            <span className={styles.mockupBottomLabel}>Amsterdam / Bali Platform</span>
          </div>
        );

      case "collab":
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.mockupTopBar}>
              <span className={styles.mockupTitleGroup}>
                <span className={`${styles.statusDot} ${styles.dotEmerald} ${styles.pulse}`} />
                <span>Frame.io Review</span>
              </span>
              <span className={styles.tagStream}>LIVE TIMECODE</span>
            </div>
            <div className={styles.mockupContent}>
              <div className={styles.targetingBox}>
                <div className={styles.targetingHeader}>
                  <span>Sub-Frame Sync</span>
                  <span className={styles.textEmerald}>00:04:12:18</span>
                </div>
                <div className={styles.progressBarTrack}>
                  <div className={styles.progressBarFill} style={{ width: "68%" }} />
                </div>
              </div>
              <div className={styles.pillRow}>
                <span className={styles.pillTag}>WebSockets</span>
                <span className={styles.pillTag}>Multi-Reviewer</span>
              </div>
            </div>
            <span className={styles.mockupBottomLabel}>Cloud Video Workflow</span>
          </div>
        );

      default:
        return (
          <div className={styles.mockupContainer}>
            <div className={styles.mockupTopBar}>
              <span className={styles.mockupTitleGroup}>
                <span className={`${styles.statusDot} ${styles.dotBlue}`} />
                <span>{project.title}</span>
              </span>
              <span className={styles.tagActive}>{project.category}</span>
            </div>
            <div className={styles.mockupContentDefault}>
              <div className={styles.defaultTags}>
                {project.tags.slice(0, 3).map((t) => (
                  <span key={t} className={styles.pillTag}>{t}</span>
                ))}
              </div>
            </div>
            <span className={styles.mockupBottomLabel}>Production Engineering</span>
          </div>
        );
    }
  };

  const primaryUrl = project.liveUrl || project.githubUrl || "#";

  return (
    <article className={styles.projectCard}>
      <div>
        {/* Aspect Ratio 4/3 Visual Mockup */}
        <div className={styles.mockupWrapper}>
          {renderMockup(project.mockupType)}
        </div>

        {/* Project Title */}
        <h3 className={styles.cardTitle}>{project.title}</h3>

        {/* Subtitle / Category metadata */}
        <p className={styles.cardSubtitle}>
          {project.subtitle || `${project.category} • Bintang Dev • Modern Stack`}
        </p>

        {/* Description */}
        <p className={styles.cardDesc}>{project.description}</p>
      </div>

      {/* Card Action Footer */}
      <div className={styles.cardFooter}>
        <div className={styles.linksGroup}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkIconBtn}
              aria-label={`View ${project.title} GitHub Source Code`}
            >
              <Github size={15} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkIconBtn}
              aria-label={`Visit ${project.title} Live Website`}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>

        <a
          href={primaryUrl}
          target={primaryUrl.startsWith("http") ? "_blank" : undefined}
          rel={primaryUrl.startsWith("http") ? "noopener noreferrer" : undefined}
          className={styles.arrowCircleBtn}
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight size={16} strokeWidth={2.2} />
        </a>
      </div>
    </article>
  );
};
