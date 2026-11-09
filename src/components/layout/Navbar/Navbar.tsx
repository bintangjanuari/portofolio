"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, FileDown } from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import { profileData } from "@/data/profile";
import styles from "./Navbar.module.scss";

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    const sectionIds = ["hero", "work", "experience", "skills", "about", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`.trim()}
      >
        <Container size="default" className={styles.navContainer}>
          {/* Monogram Brand Logo */}
          <Link href="#hero" className={styles.brand} aria-label="Bintang Al Akbar Januari - Home">
            <span className={styles.monogram}>BA</span>
          </Link>

          {/* Center Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              {navLinks.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`${styles.navLink} ${isActive ? styles.active : ""}`.trim()}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Header Actions */}
          <div className={styles.headerActions}>
            {/* Availability Pill */}
            <div className={styles.availabilityBadge} aria-label="Status: Available for work">
              <span className={styles.pulseDot} />
              <span className={styles.availabilityText}>AVAILABLE</span>
            </div>

            {/* Resume Download CTA */}
            <a
              href={profileData.resumeUrl}
              download="CV_Bintang_Al_Akbar_Januari.pdf"
              className={styles.resumeBtn}
              aria-label="Download Official Resume CV"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>

            {/* Let's Talk CTA (Desktop) */}
            <a
              href="mailto:akbarbintang9991@gmail.com"
              className={styles.talkBtn}
              aria-label="Let's Talk via Email"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </Container>
      </header>
      <div className={styles.navSpacer} aria-hidden="true" />
    </>
  );
};
