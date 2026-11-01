"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { SocialLink } from "@/components/ui/SocialLink/SocialLink";
import { profileData } from "@/data/profile";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className={styles.footer} role="contentinfo">
      <Container size="xl">
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <Link href="#hero" className={styles.brand}>
              <span className={styles.brandAccent}>&lt;</span>
              <span className={styles.brandName}>{profileData.name.split(" ")[0]}</span>
              <span className={styles.brandAccent}>/&gt;</span>
            </Link>
            <p className={styles.tagline}>
              Fullstack Developer with 4+ years of production experience designing,
              architecting, and deploying scalable web applications.
            </p>
            <div className={styles.socialGroup}>
              {profileData.socialLinks.map((link) => (
                <SocialLink
                  key={link.platform}
                  platform={link.platform}
                  url={link.url}
                  ariaLabel={`Visit ${link.platform} profile`}
                />
              ))}
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>Navigation</h3>
            <ul className={styles.linkList}>
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.metaColumn}>
            <h3 className={styles.columnTitle}>Status</h3>
            <p className={styles.availabilityCard}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span>{profileData.availability}</span>
            </p>
            <p className={styles.locationText}>
              Based in {profileData.location} &bull; Open to Remote &amp; On-Site
            </p>
            <button
              type="button"
              className={styles.backToTopButton}
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
          <p className={styles.buildInfo}>
            Built with Next.js 16, React 19, TypeScript &amp; SCSS Modules.
          </p>
        </div>
      </Container>
    </footer>
  );
};

