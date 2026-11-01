import React, { ReactNode } from "react";
import styles from "./Badge.module.scss";

export interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline" | "success" | "primary";
  size?: "sm" | "md";
  icon?: ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  icon,
  className = "",
}) => {
  const combinedClassName = [
    styles.badge,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={combinedClassName}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
    </span>
  );
};
