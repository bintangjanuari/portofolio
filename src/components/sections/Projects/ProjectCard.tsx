"use client";

import React from "react";
import Link from "next/link";
import { 
  Github, 
  ExternalLink, 
  Film, 
  FileText, 
  BarChart3, 
  Video, 
  ShieldCheck, 
  Camera, 
  CheckCircle2 
} from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge/Badge";
import styles from "./Projects.module.scss";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const renderMockup = (type?: string) => {
    switch (type) {
      case "catalog":
        return (
          <div className={styles.mockupCatalog}>
            <div className={styles.catalogHero}>
              <div className={styles.catalogTag}>FEATURED RELEASE</div>
              <div className={styles.catalogTitle}>Interstellar Odyssey</div>
              <div className={styles.catalogMeta}>2h 49m &bull; 4K Ultra HD &bull; ★ 8.9/10</div>
            </div>
            <div className={styles.catalogRow}>
              <div className={styles.posterItem} />
              <div className={styles.posterItem} />
              <div className={styles.posterItem} />
              <div className={styles.posterItem} />
            </div>
          </div>
        );

      case "notes":
        return (
          <div className={styles.mockupNotes}>
            <div className={styles.notesSidebar}>
              <div className={styles.notesFileActive}>system-arch.md</div>
              <div className={styles.notesFile}>api-contracts.ts</div>
              <div className={styles.notesFile}>deploy-guide.md</div>
            </div>
            <div className={styles.notesEditor}>
              <div className={styles.editorLine1}># System Architecture v2.4</div>
              <div className={styles.editorLine2}>- [x] Zero-latency optimistic synchronization</div>
              <div className={styles.editorLine3}>- [x] End-to-end encrypted markdown exports</div>
              <div className={styles.editorCode}>const sync = await db.reconcile();</div>
            </div>
          </div>
        );

      case "cms":
        return (
          <div className={styles.mockupCms}>
            <div className={styles.cmsStats}>
              <div className={styles.cmsStatBox}>
                <span className={styles.statLabel}>Active Screens</span>
                <span className={styles.statNum}>1,420</span>
              </div>
              <div className={styles.cmsStatBox}>
                <span className={styles.statLabel}>Network Uptime</span>
                <span className={styles.statNum}>99.98%</span>
              </div>
              <div className={styles.cmsStatBox}>
                <span className={styles.statLabel}>Sync Queue</span>
                <span className={styles.statNum}>0 msgs</span>
              </div>
            </div>
            <div className={styles.cmsGraph}>
              <div className={styles.barItem} style={{ height: "45%" }} />
              <div className={styles.barItem} style={{ height: "70%" }} />
              <div className={styles.barItem} style={{ height: "60%" }} />
              <div className={styles.barItem} style={{ height: "90%" }} />
              <div className={styles.barItem} style={{ height: "80%" }} />
              <div className={styles.barItem} style={{ height: "100%" }} />
            </div>
          </div>
        );

      case "collab":
        return (
          <div className={styles.mockupCollab}>
            <div className={styles.collabVideo}>
              <div className={styles.collabOverlay}>
                <span className={styles.timecode}>00:04:12:18</span>
                <span className={styles.collabBadge}>LIVE SYNC</span>
              </div>
              <div className={styles.collabCommentBubble}>
                &quot;Adjust color grade at cut #4&quot; &bull; <strong>Lead Editor</strong>
              </div>
            </div>
          </div>
        );

      case "portal":
        return (
          <div className={styles.mockupPortal}>
            <div className={styles.portalSteps}>
              <span className={styles.stepDone}>1. Policy Config</span>
              <span className={styles.stepActive}>2. Underwriting</span>
              <span className={styles.stepPending}>3. E-Sign</span>
            </div>
            <div className={styles.portalCardRow}>
              <div className={styles.portalMetric}>Policy Premium: $450/mo</div>
              <div className={styles.portalMetric}>Status: Verified</div>
            </div>
          </div>
        );

      case "web":
      case "itsavirus":
        return (
          <div className={styles.mockupWeb}>
            <div className={styles.webHero}>
              <div className={styles.webTag}>DIGITAL STUDIO</div>
              <div className={styles.webTitle}>Itsavirus Digital Experience</div>
              <div className={styles.webSubtitle}>Web &amp; Mobile Product Engineering</div>
            </div>
            <div className={styles.webMetrics}>
              <span className={styles.webMetric}>React &bull; Next.js</span>
              <span className={styles.webMetric}>TypeScript</span>
              <span className={styles.webMetric}>React Native</span>
            </div>
          </div>
        );

      case "cctv":
      case "dashboard":
        return (
          <div className={styles.mockupCctv}>
            <div className={styles.cctvGrid}>
              <div className={styles.cctvCell}>
                <span className={styles.cctvLiveDot} /> CAM 01 - Tank A
              </div>
              <div className={styles.cctvCell}>
                <span className={styles.cctvLiveDot} /> CAM 02 - Refinery
              </div>
              <div className={styles.cctvCell}>
                <span className={styles.cctvLiveDot} /> CAM 03 - Pipeline
              </div>
              <div className={styles.cctvCell}>
                <span className={styles.cctvLiveDot} /> CAM 04 - Terminal
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className={styles.mockupDefault}>
            <div className={styles.defaultIcon}>
              <Film size={36} />
            </div>
          </div>
        );
    }
  };

  return (
    <article className={styles.projectCard} aria-labelledby={`project-title-${project.id}`}>
      <div className={styles.visualContainer}>
        <div className={styles.windowBar}>
          <div className={styles.windowControls}>
            <span className={styles.winDot} />
            <span className={styles.winDot} />
            <span className={styles.winDot} />
          </div>
          <div className={styles.urlPill}>
            <span>{project.liveUrl ? new URL(project.liveUrl).hostname : "app.bintang.dev"}</span>
          </div>
          <div className={styles.categoryBadgeWrapper}>
            <Badge variant="accent" size="sm">
              {project.category}
            </Badge>
          </div>
        </div>

        <div className={styles.mockupViewport}>{renderMockup(project.mockupType)}</div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.headerInfo}>
          <h3 id={`project-title-${project.id}`} className={styles.projectTitle}>
            {project.title}
          </h3>
          <p className={styles.projectDescription}>{project.description}</p>
        </div>

        <div className={styles.highlightsContainer}>
          <h4 className={styles.highlightsTitle}>Architectural Highlights:</h4>
          <ul className={styles.highlightList}>
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className={styles.highlightItem}>
                <CheckCircle2 size={14} className={styles.checkIcon} aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.tagsContainer}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.techPill}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.actionButtons}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
              aria-label={`Open live demo of ${project.title}`}
            >
              <ExternalLink size={16} aria-hidden="true" />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryAction}
              aria-label={`View source code of ${project.title} on GitHub`}
            >
              <Github size={16} aria-hidden="true" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

