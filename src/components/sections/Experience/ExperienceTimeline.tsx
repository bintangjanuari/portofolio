import React from "react";
import { Briefcase, Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { WorkExperience } from "@/types";
import { Badge } from "@/components/ui/Badge/Badge";
import styles from "./Experience.module.scss";

interface ExperienceTimelineProps {
  experiences: WorkExperience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className={styles.timelineContainer} role="region" aria-label="Career Timeline">
      <div className={styles.timelineTrack} aria-hidden="true" />

      <div className={styles.timelineList}>
        {experiences.map((exp, index) => (
          <article
            key={exp.id}
            className={`${styles.timelineItem} ${exp.isCurrent ? styles.timelineItemCurrent : ""}`}
            aria-labelledby={`exp-title-${exp.id}`}
          >
            <div className={styles.timelineMarker} aria-hidden="true">
              <span className={styles.markerDot} />
            </div>

            <div className={styles.experienceCard}>
              <header className={styles.cardHeader}>
                <div className={styles.roleInfo}>
                  <div className={styles.companyRow}>
                    <Briefcase size={16} className={styles.companyIcon} aria-hidden="true" />
                    <span className={styles.companyName}>{exp.company}</span>
                    {exp.isCurrent && (
                      <Badge variant="accent" size="sm">
                        Current Role
                      </Badge>
                    )}
                  </div>
                  <h3 id={`exp-title-${exp.id}`} className={styles.roleTitle}>
                    {exp.role}
                  </h3>
                </div>

                <div className={styles.metaRow}>
                  <div className={styles.metaBadge}>
                    <Calendar size={14} aria-hidden="true" />
                    <span>{exp.period}</span>
                  </div>
                  <div className={styles.metaBadge}>
                    <MapPin size={14} aria-hidden="true" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </header>

              <div className={styles.responsibilitiesSection}>
                <h4 className={styles.subSectionTitle}>Key Responsibilities:</h4>
                <ul className={styles.bulletList}>
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className={styles.bulletItem}>
                      <span className={styles.bulletIcon} aria-hidden="true">&bull;</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className={styles.achievementsBox}>
                  <div className={styles.achievementsHeader}>
                    <Award size={16} className={styles.awardIcon} aria-hidden="true" />
                    <span className={styles.achievementsTitle}>Key Achievements:</span>
                  </div>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className={styles.achievementItem}>
                        <CheckCircle size={14} className={styles.checkIcon} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <footer className={styles.techStackFooter}>
                <span className={styles.techLabel}>Technologies:</span>
                <div className={styles.techTags}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

