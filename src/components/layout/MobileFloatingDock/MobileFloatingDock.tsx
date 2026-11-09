"use client";

import React, { useState, useEffect } from "react";
import { Home, LayoutGrid, Briefcase, Code2, User, MessageSquare } from "lucide-react";
import styles from "./MobileFloatingDock.module.scss";

interface DockItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: boolean;
}

const dockItems: DockItem[] = [
  {
    id: "hero",
    label: "Home",
    href: "#hero",
    icon: <Home size={16} strokeWidth={2.2} />,
  },
  {
    id: "work",
    label: "Work",
    href: "#work",
    icon: <LayoutGrid size={16} strokeWidth={2.2} />,
  },
  {
    id: "experience",
    label: "Exp",
    href: "#experience",
    icon: <Briefcase size={16} strokeWidth={2.2} />,
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
    icon: <Code2 size={16} strokeWidth={2.2} />,
  },
  {
    id: "about",
    label: "About",
    href: "#about",
    icon: <User size={16} strokeWidth={2.2} />,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: <MessageSquare size={16} strokeWidth={2.2} />,
    badge: true,
  },
];

export const MobileFloatingDock: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("hero");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -50% 0px",
        threshold: 0,
      }
    );

    const ids = ["hero", "work", "experience", "skills", "about", "contact"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={styles.dockContainer}
      aria-label="Mobile Floating Navigation"
    >
      {/* Brand Monogram Badge */}
      <a
        href="#hero"
        className={styles.brandBadge}
        aria-label="Back to Top / Home"
      >
        <span>BA</span>
      </a>

      {/* Dock Navigation Links */}
      <div className={styles.dockList}>
        {dockItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`${styles.dockItem} ${isActive ? styles.active : ""}`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <div className={styles.iconWrapper}>
                {item.icon}
                {item.badge && (
                  <span
                    className={styles.badgeDot}
                    aria-label="Available for contact"
                  />
                )}
              </div>
              <span className={styles.itemLabel}>{item.label}</span>
              {isActive && <span className={styles.activeDot} />}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
