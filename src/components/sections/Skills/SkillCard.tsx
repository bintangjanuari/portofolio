import React from "react";
import { 
  Layers, 
  Atom, 
  FileCode, 
  Server, 
  Network, 
  Smartphone, 
  Figma, 
  Zap, 
  Cpu 
} from "lucide-react";
import { SkillExpertise } from "@/types";
import { Card } from "@/components/ui/Card/Card";
import styles from "./Skills.module.scss";

interface SkillCardProps {
  skill: SkillExpertise;
}

const skillIconMap: Record<string, React.ReactNode> = {
  "frontend-arch": <Layers size={22} aria-hidden="true" />,
  "react-nextjs": <Atom size={22} aria-hidden="true" />,
  "typescript-dev": <FileCode size={22} aria-hidden="true" />,
  "backend-nodejs-nestjs": <Server size={22} aria-hidden="true" />,
  "rest-api": <Network size={22} aria-hidden="true" />,
  "responsive-web": <Smartphone size={22} aria-hidden="true" />,
  "figma-ui": <Figma size={22} aria-hidden="true" />,
  "perf-optimization": <Zap size={22} aria-hidden="true" />,
  "state-mgmt": <Cpu size={22} aria-hidden="true" />,
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Card variant="default" hoverable padding="md" className={styles.skillCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          {skillIconMap[skill.id] || <Layers size={22} />}
        </div>
        <span className={styles.categoryBadge}>{skill.category}</span>
      </div>

      <div className={styles.titleGroup}>
        <h3 className={styles.skillTitle}>{skill.title}</h3>
        <p className={styles.skillDescription}>{skill.description}</p>
      </div>

      <div className={styles.meterContainer}>
        <div className={styles.meterHeader}>
          <span className={styles.meterLabel}>Proficiency</span>
          <span className={styles.meterValue}>{skill.level}%</span>
        </div>
        <div
          className={styles.meterTrack}
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.title} proficiency: ${skill.level}%`}
        >
          <div className={styles.meterFill} style={{ width: `${skill.level}%` }} />
        </div>
      </div>

      <div className={styles.toolsGroup}>
        {skill.tools.map((tool) => (
          <span key={tool} className={styles.toolChip}>
            {tool}
          </span>
        ))}
      </div>
    </Card>
  );
};

