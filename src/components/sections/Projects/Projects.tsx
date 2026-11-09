"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("featured");

  const filterOptions = [
    { id: "featured", label: "Featured" },
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Fullstack" },
    { id: "dashboard", label: "Dashboard & CMS" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "featured") return project.featured;
    if (filter === "all") return true;
    if (filter === "fullstack") return project.category.toLowerCase().includes("fullstack");
    if (filter === "dashboard") return project.category.toLowerCase().includes("dashboard") || project.category.toLowerCase().includes("cms");
    return true;
  });

  return (
    <section id="work" className={styles.projectsSection} aria-label="Featured Work">
      {/* Target anchor alias for #projects */}
      <div id="projects" style={{ position: "relative", top: "-80px" }} aria-hidden="true" />

      <Container size="default">
        {/* Section Header Matching Stitch Screen 1 */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleGroup}>
            <span className={styles.eyebrow}>Selected Projects</span>
            <h2 className={styles.mainTitle}>Featured Work</h2>
          </div>

          <div className={styles.controlsGroup}>
            {/* Category Filter Pills */}
            <div className={styles.filterPills} role="group" aria-label="Filter projects">
              {filterOptions.map((opt) => {
                const isActive = filter === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={isActive}
                    className={`${styles.filterPill} ${isActive ? styles.activePill : ""}`}
                    onClick={() => setFilter(opt.id)}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <a
              href="https://github.com/bintangjanuari?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.exploreAllBtn}
              aria-label="View all repositories on GitHub"
            >
              <span>GitHub Archive</span>
              <ArrowRight size={14} className={styles.exploreArrow} />
            </a>
          </div>
        </div>

        {/* 3-Column Projects Showcase Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};