import React, { ReactNode, HTMLAttributes } from "react";
import styles from "./Card.module.scss";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "surface" | "elevated" | "default";
  hoverable?: boolean;
  interactive?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "surface",
  hoverable = true,
  interactive = false,
  padding,
  className = "",
  ...props
}) => {
  const resolvedVariant = variant === "default" ? "surface" : variant;

  const combinedClassName = [
    styles.card,
    styles[resolvedVariant],
    hoverable ? styles.hoverable : "",
    interactive ? styles.interactive : "",
    padding ? styles[`padding-${padding}`] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};
