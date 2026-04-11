'use client';

// import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { DotGrid } from '@/components/ui/dot-grid';
import { BorderGlowNew } from '@/components/ui/border-glow-new';
import { TiltedCard } from '@/components/ui/tilted-card';
import { SectionHeader } from '../ui/section-header';
// import { BorderGlow } from '@/components/ui/border-glow';

const experiences = [
  {
    title: 'Web Developer & IT Support',
    company: 'X-Space Real Estate',
    location: 'Dubai, UAE',
    period: 'November 2024 – Present',
    achievements: [
      'Develop full-stack web applications using Next.js and Node.js',
      'Integrate external APIs and XML property feeds',
      'Configure Bitrix24 CRM workflows and automation',
      'Manage hosting infrastructure and deployment',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Crystal Code Labs',
    location: 'Tamil Nadu, India',
    period: 'March 2022 – August 2024',
    achievements: [
      'Built secure REST APIs achieving 30% performance improvement',
      'Developed scalable Node.js services reducing response time by 40%',
      'Created reusable React component library boosting productivity 25%',
      'Engineered custom Laravel packages reducing delivery time by 20%',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id='experience'
      className='py-20 lg:py-32 relative bg-secondary/30'
    >
      <DotGrid />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <SectionHeader
          label='Work Experience'
          title_1='Professional'
          title_2='Journey'
          description='A timeline of growth, achievements, and impactful contributions'
        />

        <div className='max-w-4xl mx-auto space-y-8'>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <TiltedCard tiltAmount={5}>
                <BorderGlowNew className='relative p-px rounded-2xl'>
                  <div className='p-6 md:p-8 bg-card/80 backdrop-blur-sm'>
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-xl font-bold'>{exp.title}</h3>
                        <p className='text-primary font-medium'>
                          {exp.company}
                        </p>
                      </div>
                      <div className='p-2 rounded-lg bg-primary/10'>
                        <Briefcase className='h-5 w-5 text-primary' />
                      </div>
                    </div>

                    <div className='flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground'>
                      <div className='flex items-center gap-1'>
                        <Calendar className='h-4 w-4' />
                        <span>{exp.period}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <MapPin className='h-4 w-4' />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className='space-y-2'>
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className='flex items-start gap-2 text-sm text-muted-foreground'
                        >
                          <ChevronRight className='h-4 w-4 text-primary shrink-0 mt-0.5' />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </BorderGlowNew>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
