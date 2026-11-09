import React from "react";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { Experience } from "@/components/sections/Experience/Experience";
import { Skills } from "@/components/sections/Skills/Skills";
import { Contact } from "@/components/sections/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
