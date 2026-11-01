import React, { ReactNode } from "react";
import styles from "./Container.module.scss";

export interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "default" | "narrow" | "wide";
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "default",
  className = "",
}) => {
  const containerClass = [styles.container, styles[size], className]
    .filter(Boolean)
    .join(" ");

  return <div className={containerClass}>{children}</div>;
};
