"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
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

  return (
    <footer className={styles.footer} role="contentinfo">
      <Container size="default">
        <div className={styles.footerInner}>
          {/* Copyright Note */}
          <p className={styles.copyright}>
            &copy; {currentYear} {profileData.name}. All Rights Reserved.
          </p>

          {/* Social Links & Back to Top */}
          <div className={styles.socialAndBack}>
            <span className={styles.connectLabel}>Let&apos;s Connect</span>

            <div className={styles.socialIcons}>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>

              <a
                href="https://wa.me/6281717425199"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp Direct"
              >
                <MessageCircle size={16} />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className={styles.socialLink}
                aria-label="Email Direct"
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className={styles.backToTopBtn}
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
