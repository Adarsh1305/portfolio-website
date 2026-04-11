import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/sections-new/hero';
import { AboutSection } from '@/components/sections-new/about';
import { SkillsSection } from '@/components/sections-new/skills';
import { ExperienceSection } from '@/components/sections-new/experience';
import { ProjectsSection } from '@/components/sections-new/projects';
import { EducationSection } from '@/components/sections-new/education';
import { ContactSection } from '@/components/sections-new/contact';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='relative bg-background overflow-hidden mt-10'>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
