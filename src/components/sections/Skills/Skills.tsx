import React from "react";
import { Container } from "@/components/ui/Container/Container";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { skillsExpertiseData } from "@/data/skills";
import { SkillCard } from "./SkillCard";
import styles from "./Skills.module.scss";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skillsSection} aria-label="Skills & Expertise">
      <Container size="xl">
        <SectionHeading
          badge="Specialized Expertise"
          title="Core engineering competencies & skills"
          subtitle="A comprehensive overview of architectural specializations, frontend design systems, backend runtimes, and engineering practices developed over 4+ years."
        />

        <div className={styles.skillsGrid}>
          {skillsExpertiseData.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </Container>
    </section>
  );
};

