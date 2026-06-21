'use client';
import { useRef } from 'react';
import SplashCursor from '@/components/ui/SplashCursor';
import HeroSection from '@/components/sections/HeroSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectSection from '@/components/sections/ProjectSection';
import SkillsSection from '@/components/sections/SkillsSection';
import HonorsSection from '@/components/sections/HonorsSection';
import ContactSection from '@/components/sections/ContactSection';
import NavBar from '@/components/ui/NavBar';

export default function Home() {
  const heroRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const honorsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = [
    { id: 'hero', label: '关于', ref: heroRef },
    { id: 'education', label: '教育', ref: educationRef },
    { id: 'experience', label: '经历', ref: experienceRef },
    { id: 'project', label: '项目', ref: projectRef },
    { id: 'skills', label: '技能', ref: skillsRef },
    { id: 'honors', label: '荣誉', ref: honorsRef },
    { id: 'contact', label: '联系', ref: contactRef },
  ];

  return (
    <>
      <SplashCursor
        rainbow={false}
        color="#6366f1"
      />
      <NavBar sections={sections} />
      <main className="relative z-10">
        <div ref={heroRef} id="hero">
          <HeroSection />
        </div>
        <div ref={educationRef} id="education">
          <EducationSection />
        </div>
        <div ref={experienceRef} id="experience">
          <ExperienceSection />
        </div>
        <div ref={projectRef} id="project">
          <ProjectSection />
        </div>
        <div ref={skillsRef} id="skills">
          <SkillsSection />
        </div>
        <div ref={honorsRef} id="honors">
          <HonorsSection />
        </div>
        <div ref={contactRef} id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
