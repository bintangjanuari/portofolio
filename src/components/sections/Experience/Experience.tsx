import React from "react";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { experienceData } from "@/data/experience";
import { ExperienceTimeline } from "./ExperienceTimeline";
import styles from "./Experience.module.scss";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experienceSection} aria-label="Professional Experience">
      <Container size="xl">
        <SectionHeading
          badge="Career History"
          title="Professional experience & track record"
          subtitle="4+ years of hands-on software engineering spanning digital media operations, high-concurrency video platforms, and enterprise insurance microfrontends."
        />

        <ExperienceTimeline experiences={experienceData} />
      </Container>
    </section>
  );
};

