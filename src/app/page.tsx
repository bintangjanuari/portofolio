import React from "react";
import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { TechStack } from "@/components/sections/TechStack/TechStack";
import { Experience } from "@/components/sections/Experience/Experience";
import { Projects } from "@/components/sections/Projects/Projects";
import { Skills } from "@/components/sections/Skills/Skills";
import { Contact } from "@/components/sections/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

