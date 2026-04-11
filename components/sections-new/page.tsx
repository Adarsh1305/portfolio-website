import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections-new/hero';
import { AboutSection } from '@/components/sections-new/about';
import { SkillsSection } from '@/components/sections-new/skills';
import { ExperienceSection } from '@/components/sections-new/experience';
import { ProjectsSection } from '@/components/sections-new/projects';
import { EducationSection } from '@/components/sections-new/education';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='relative bg-background overflow-hidden'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
