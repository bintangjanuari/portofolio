"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container/Container";
import { ChevronDown, ChevronUp, CheckCircle2, MapPin } from "lucide-react";
import { experienceData } from "@/data/experience";
import styles from "./Experience.module.scss";

interface TimelineCardItem {
  num: string;
  period: string;
  company: string;
  role: string;
  summary: string;
  location: string;
  fullDataId: string;
}

const timelineCards: TimelineCardItem[] = [
  {
    num: "01",
    period: "Jun 2026 – Present",
    company: "Alternative Media Group (AMG)",
    role: "Fullstack Developer (CMS & Fleet Operations)",
    summary: "Engineered high-throughput fleet media CMS, targeting platform, and real-time GPS telemetry in Python and React.",
    location: "Jakarta • Media Tech",
    fullDataId: "amg",
  },
  {
    num: "02",
    period: "Sep 2025 – Apr 2026",
    company: "Frame.io",
    role: "Fullstack Developer (Node.js & Frontend)",
    summary: "Architected cloud-native video collaboration features, real-time sub-frame timecode WebSockets, and accessible UI primitives.",
    location: "Remote • Video Cloud Platform",
    fullDataId: "frameio",
  },
  {
    num: "03",
    period: "Jun 2024 – Aug 2025",
    company: "PT. Barito Integra Teknologi",
    role: "Fullstack Developer (Prudential Enterprise)",
    summary: "Delivered enterprise agent portal microfrontends, high-security APIs, and validated insurance workflows in NestJS and React.",
    location: "Jakarta • Fintech / Insurance",
    fullDataId: "barito",
  },
  {
    num: "04",
    period: "Aug 2023 – Jun 2024",
    company: "PT Jagad Aman Prima",
    role: "Fullstack / Web Developer (Pertamina & DSN)",
    summary: "Architected real-time surveillance streaming hub for Pertamina and sub-second IoT parking telemetry platform for DSN.",
    location: "Jakarta • Surveillance & IoT",
    fullDataId: "jagad",
  },
  {
    num: "05",
    period: "Aug 2021 – Aug 2023",
    company: "Itsavirus",
    role: "Software Engineer / Frontend",
    summary: "Developed corporate web platforms and React Native mobility applications including Melalie with payment and map routing.",
    location: "Amsterdam / Bali • Digital Studio",
    fullDataId: "itsavirus",
  },
];

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("amg");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className={styles.experienceSection} aria-label="Work Experience">
      <Container size="default">
        {/* Section Header */}
        <div className={styles.headerGroup}>
          <span className={styles.eyebrow}>Track Record</span>
          <h2 className={styles.title}>WORK EXPERIENCE &amp; CAREER TIMELINE</h2>
        </div>

        {/* Engineered Vertical Timeline */}
        <div className={styles.timelineContainer}>
          {timelineCards.map((item) => {
            const isExpanded = expandedId === item.fullDataId;
            const fullDetail = experienceData.find((e) => e.id === item.fullDataId);
            const detailsId = `experience-details-${item.fullDataId}`;

            return (
              <article
                key={item.num}
                className={`${styles.timelineCard} ${isExpanded ? styles.expandedCard : ""}`}
              >
                <div className={styles.cardHeaderRow}>
                  <div className={styles.milestoneMeta}>
                    <span className={styles.indexNum}>{item.num}</span>
                    <span className={styles.periodTag}>{item.period}</span>
                  </div>

                  <button
                    type="button"
                    className={styles.expandBtn}
                    onClick={() => toggleExpand(item.fullDataId)}
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} detailed responsibilities for ${item.company}`}
                  >
                    <span>{isExpanded ? "Less" : "Highlights"}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                <div className={styles.cardMain}>
                  <h3 className={styles.companyName}>{item.company}</h3>
                  <p className={styles.roleTitle}>{item.role}</p>
                  <p className={styles.summaryText}>{item.summary}</p>

                  <div className={styles.locationMeta}>
                    <MapPin size={13} className={styles.locationIcon} />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Collapsible Highlights & Tech Stack */}
                {isExpanded && fullDetail && (
                  <div id={detailsId} className={styles.expandedDetails}>
                    <h4 className={styles.detailsHeading}>Key Responsibilities &amp; Architecture:</h4>
                    <ul className={styles.detailsList}>
                      {fullDetail.description.map((desc, i) => (
                        <li key={i} className={styles.detailItem}>
                          <CheckCircle2 size={14} className={styles.checkIcon} />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {fullDetail.achievements && fullDetail.achievements.length > 0 && (
                      <div className={styles.achievementsBox}>
                        <span className={styles.achievementTitle}>Key Impact &amp; Metrics:</span>
                        {fullDetail.achievements.map((ach, i) => (
                          <div key={i} className={styles.achievementText}>
                            &bull; {ach}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className={styles.techPillsGroup}>
                      {fullDetail.technologies.map((tech, i) => (
                        <span key={i} className={styles.techPill}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
