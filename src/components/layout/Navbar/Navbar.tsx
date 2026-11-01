"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileDown } from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import { Button } from "@/components/ui/Button/Button";
import { profileData } from "@/data/profile";
import { NavItem } from "@/types";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import styles from "./Navbar.module.scss";

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

    const sections = navItems.map((item) => item.href.substring(1));
    sections.forEach((id) => {
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
          {/* Brand Logo */}
          <Link href="#" className={styles.brand} aria-label="Bintang Al Akbar Januari - Home">
            <span className={styles.logoBadge} aria-hidden="true">B</span>
            <span className={styles.brandName}>
              Bintang<span className={styles.accentDot}>.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => {
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
            <ThemeToggle />

            <div className={styles.cvButtonDesktop}>
              <Button
                as="a"
                href={profileData.resumeUrl}
                download="CV_Bintang_Al_Akbar_Januari.pdf"
                variant="primary"
                size="sm"
                icon={<FileDown size={16} />}
              >
                Resume
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>
      <div className={styles.navSpacer} aria-hidden="true" />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
        resumeUrl={profileData.resumeUrl}
      />
    </>
  );
};

