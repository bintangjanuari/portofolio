import React from "react";
import { Badge } from "../Badge/Badge";
import styles from "./SectionHeading.module.scss";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  subtitle,
  align = "center",
  className = "",
}) => {
  const text = subtitle || description;

  return (
    <div
      className={`${styles.header} ${styles[align]} ${className}`.trim()}
    >
      {badge && (
        <div className={styles.badgeWrapper}>
          <Badge variant="default" size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className={styles.title}>{title}</h2>
      {text && <p className={styles.description}>{text}</p>}
    </div>
  );
};
