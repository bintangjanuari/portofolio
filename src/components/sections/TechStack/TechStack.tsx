"use client";

import React, { useState } from "react";
import {
  Atom,
  Globe,
  FileCode,
  Code2,
  Palette,
  Layers,
  Boxes,
  Layout,
  Server,
  Cpu,
  Network,
  Radio,
  Terminal,
  Workflow,
  Database,
  HardDrive,
  Binary,
  Cloud,
  GitBranch,
  GitPullRequest,
  Container as DockerIcon,
  Send,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Badge } from "@/components/ui/Badge/Badge";
import { Card } from "@/components/ui/Card/Card";
import { techStackData } from "@/data/techStack";
import { TechItem } from "@/types";
import styles from "./TechStack.module.scss";

const iconMap: Record<string, React.ReactNode> = {
  Atom: <Atom size={22} aria-hidden="true" />,
  Globe: <Globe size={22} aria-hidden="true" />,
  FileCode: <FileCode size={22} aria-hidden="true" />,
  Code2: <Code2 size={22} aria-hidden="true" />,
  Palette: <Palette size={22} aria-hidden="true" />,
  Layers: <Layers size={22} aria-hidden="true" />,
  Boxes: <Boxes size={22} aria-hidden="true" />,
  Layout: <Layout size={22} aria-hidden="true" />,
  Server: <Server size={22} aria-hidden="true" />,
  Cpu: <Cpu size={22} aria-hidden="true" />,
  Network: <Network size={22} aria-hidden="true" />,
  Radio: <Radio size={22} aria-hidden="true" />,
  Terminal: <Terminal size={22} aria-hidden="true" />,
  Workflow: <Workflow size={22} aria-hidden="true" />,
  Database: <Database size={22} aria-hidden="true" />,
  HardDrive: <HardDrive size={22} aria-hidden="true" />,
  Binary: <Binary size={22} aria-hidden="true" />,
  Cloud: <Cloud size={22} aria-hidden="true" />,
  GitBranch: <GitBranch size={22} aria-hidden="true" />,
  GitPullRequest: <GitPullRequest size={22} aria-hidden="true" />,
  Container: <DockerIcon size={22} aria-hidden="true" />,
  Send: <Send size={22} aria-hidden="true" />,
};

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & APIs" },
    { id: "database", label: "Database & Cloud" },
  ];

  const getFilteredItems = (): TechItem[] => {
    if (activeCategory === "all") {
      return techStackData.flatMap((category) => category.items);
    }
    const cat = techStackData.find((c) => c.id === activeCategory);
    return cat ? cat.items : [];
  };

  const filteredItems = getFilteredItems();

  const getBadgeVariant = (level: TechItem["level"]) => {
    switch (level) {
      case "Expert":
        return "accent";
      case "Advanced":
        return "primary";
      default:
        return "default";
    }
  };

  return (
    <section id="tech-stack" className={styles.techStackSection} aria-label="Technology Stack">
      <Container size="xl">
        <SectionHeading
          badge="Tech Stack"
          title="Technologies, frameworks & engineering tools"
          subtitle="Battle-tested tools and languages I utilize daily to build high-scale, reactive, and enterprise-grade web applications."
        />

        <div className={styles.filterBar} role="tablist" aria-label="Filter technologies by category">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={isSelected}
                aria-controls="tech-cards-panel"
                tabIndex={isSelected ? 0 : -1}
                className={`${styles.filterButton} ${isSelected ? styles.filterButtonActive : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div
          id="tech-cards-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className={styles.cardsGrid}
        >
          {filteredItems.map((tech) => (
            <Card
              key={tech.name}
              variant="default"
              hoverable
              padding="md"
              className={styles.techCard}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  {iconMap[tech.iconName] || <Sparkles size={20} />}
                </div>
                <Badge variant={getBadgeVariant(tech.level)} size="sm">
                  {tech.level}
                </Badge>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.techName}>{tech.name}</h3>
                <p className={styles.techDescription}>{tech.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

