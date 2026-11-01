"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, FileDown, ChevronRight } from "lucide-react";
import { NavItem } from "@/types";
import { profileData } from "@/data/profile";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import { Button } from "@/components/ui/Button/Button";
import styles from "./MobileMenu.module.scss";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection?: string;
  resumeUrl?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
  resumeUrl,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="presentation"
      data-open={isOpen}
    >
      <div
        ref={menuRef}
        className={styles.drawer}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <Link href="#hero" className={styles.brand} onClick={onClose} aria-label="Bintang - Home">
            <span className={styles.logoBadge} aria-hidden="true">B</span>
            <span className={styles.brandName}>
              Bintang<span className={styles.accentDot}>.</span>
            </span>
          </Link>

          <div className={styles.actions}>
            <ThemeToggle />
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav className={styles.navigation} aria-label="Mobile Navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    onClick={onClose}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className={styles.linkLabel}>{item.label}</span>
                    <ChevronRight size={16} className={styles.navArrow} aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.footer}>
          {profileData.resumeUrl && (
            <Button
              href={profileData.resumeUrl}
              download="CV_Bintang_Al_Akbar_Januari.pdf"
              variant="outline"
              size="md"
              leftIcon={<FileDown size={18} />}
              fullWidth
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              Download Resume
            </Button>
          )}
          <p className={styles.availability}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusTextLong}>{profileData.availability}</span>
            <span className={styles.statusTextShort}>Available for Opportunities</span>
          </p>
        </div>
      </div>
    </div>
  );
};
