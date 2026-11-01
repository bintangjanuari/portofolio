import React from "react";
import { Github, Linkedin, Mail, Phone, Globe, MessageCircle } from "lucide-react";
import styles from "./SocialLink.module.scss";

export type SocialType = "github" | "linkedin" | "email" | "phone" | "website" | "whatsapp";

export interface SocialLinkProps {
  type?: SocialType;
  platform?: SocialType;
  href?: string;
  url?: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
}

const icons: Record<SocialType, React.ReactNode> = {
  github: <Github size={18} aria-hidden="true" />,
  linkedin: <Linkedin size={18} aria-hidden="true" />,
  email: <Mail size={18} aria-hidden="true" />,
  phone: <Phone size={18} aria-hidden="true" />,
  website: <Globe size={18} aria-hidden="true" />,
  whatsapp: <MessageCircle size={18} aria-hidden="true" />,
};

const defaultLabels: Record<SocialType, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  email: "Email",
  phone: "Phone",
  website: "Portfolio",
  whatsapp: "WhatsApp",
};

export const SocialLink: React.FC<SocialLinkProps> = ({
  type,
  platform,
  href,
  url,
  label,
  ariaLabel,
  className = "",
}) => {
  const resolvedType = (platform || type || "website") as SocialType;
  const targetHref = url || href || "#";
  const displayLabel = ariaLabel || label || defaultLabels[resolvedType] || "Social Link";
  const isExternal = targetHref.startsWith("http");

  return (
    <a
      href={targetHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${styles.socialLink} ${label ? styles.withLabel : ""} ${className}`.trim()}
      aria-label={displayLabel}
    >
      <span className={styles.iconWrapper} aria-hidden="true">
        {icons[resolvedType] || <Globe size={18} />}
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </a>
  );
};
