"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.scss";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "fullstack", label: "Fullstack" },
    { id: "frontend", label: "Frontend" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "fullstack") return project.category.toLowerCase().includes("fullstack") || project.category.toLowerCase().includes("dashboard");
    if (filter === "frontend") return project.category.toLowerCase().includes("frontend");
    return true;
  });

  return (
    <section id="projects" className={styles.projectsSection} aria-label="Featured Projects">
      <Container size="xl">
        <SectionHeading
          badge="Featured Projects"
          title="Engineered solutions & production platforms"
          subtitle="Explore modern fullstack applications, reactive frontend architectures, and operational dashboards built with Next.js, React, Node.js, and TypeScript."
        />

        <div className={styles.filterBar} role="group" aria-label="Filter projects by category">
          {filterOptions.map((opt) => {
            const isPressed = filter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                aria-pressed={isPressed}
                className={`${styles.filterBtn} ${isPressed ? styles.filterBtnActive : ""}`}
                onClick={() => setFilter(opt.id)}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

