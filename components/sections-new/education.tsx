'use client';

import { GraduationCap, Award, Calendar, MapPin, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { DotGrid } from '@/components/ui/dot-grid';
import { BorderGlow } from '@/components/ui/border-glow';
import { BorderGlowNew } from '@/components/ui/border-glow-new';
import { SectionHeader } from '../ui/section-header';

export function EducationSection() {
  return (
    <section id='education' className='py-20 lg:py-32 relative bg-secondary/30'>
      <DotGrid />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <SectionHeader
          label='Education & Recognition'
          title_1='Academic'
          title_2='Background'
          description='Foundation of knowledge that powers my professional journey'
        />

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto'>
          {/* Education */}
          <div>
            <h3 className='text-xl font-bold mb-8 flex items-center gap-3'>
              <div className='p-2 rounded-lg bg-primary/10'>
                <GraduationCap className='h-5 w-5 text-primary' />
              </div>
              Education
            </h3>

            <div className='space-y-6'>
              {[
                {
                  degree: 'Master of Computer Applications (MCA)',
                  institution: 'Sree Saraswathi Thyagaraja College',
                  location: 'Tamil Nadu, India',
                  period: '2020 – 2022',
                },
                {
                  degree: 'Bachelor of Computer Applications (BCA)',
                  institution: 'Sree Saraswathi Thyagaraja College',
                  location: 'Tamil Nadu, India',
                  period: '2017 – 2020',
                },
              ].map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <BorderGlowNew className='relative p-px rounded-xl'>
                    <div className='p-6 md:p-8 bg-card/80 backdrop-blur-sm'>
                      <h4 className='font-bold text-lg'>{edu.degree}</h4>
                      <p className='text-primary font-medium'>
                        {edu.institution}
                      </p>
                      <div className='flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground'>
                        <div className='flex items-center gap-1'>
                          <Calendar className='h-4 w-4' />
                          <span>{edu.period}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <MapPin className='h-4 w-4' />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </BorderGlowNew>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className='text-xl font-bold mb-8 flex items-center gap-3'>
              <div className='p-2 rounded-lg bg-primary/10'>
                <Award className='h-5 w-5 text-primary' />
              </div>
              Achievements
            </h3>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BorderGlow>
                <div className='p-6 rounded-xl bg-linear-to-br from-primary/10 via-card to-accent/10'>
                  <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-xl bg-primary/20 shrink-0'>
                      <Trophy className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-bold text-lg mb-1'>
                        Best Employee Award
                      </h4>
                      <p className='text-primary font-medium mb-2'>
                        Crystal Code Labs
                      </p>
                      <p className='text-sm text-muted-foreground mb-3'>
                        August 2023 & June 2024
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Recognized with two months of performance incentives for
                        exceptional contributions to project delivery and
                        quality.
                      </p>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
