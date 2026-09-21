'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { DotGrid } from '@/components/ui/dot-grid';
import { BorderGlow } from '@/components/ui/border-glow';
import { TiltedCard } from '@/components/ui/tilted-card';
import { SectionHeader } from '@/components/ui/section-header';

export function AboutSection() {
  return (
    <section id='about' className='py-20 lg:py-32 relative'>
      <div className='absolute inset-0 bg-secondary/30' />
      <DotGrid fadeEdges />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <SectionHeader
          label='About Me'
          title_1='Get to'
          title_2='Know Me'
          description='Passionate about creating exceptional digital experiences'
        />

        <div className='grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className='flex justify-center'
          >
            <TiltedCard tiltAmount={5}>
              <BorderGlow>
                <div className='relative group max-w-xl w-full overflow-hidden'>
                  <div
                    className='absolute -inset-2 bg-linear-to-r from-primary via-purple-500 to-cyan-500 blur-lg opacity-20 rounded-2xl'
                    style={{ animation: 'glow-pulse 3s ease infinite' }}
                  />
                  <div className='relative group'>
                    <div className='relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl'>
                      <Image
                        src='/images/profile-aboutus-3.jpeg'
                        alt='Adarsh Vinothan'
                        width={500}
                        height={500}
                        quality={75}
                        className='object-cover w-full'
                        loading='eager'
                      />
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </TiltedCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl sm:text-3xl font-bold mb-6'>
              Full-Stack Developer with a Passion for Innovation
            </h3>

            <div className='space-y-4 text-muted-foreground leading-relaxed'>
              <p>
                Results-driven Full-Stack Web Developer with 5+ years of
                experience designing, developing, and deploying scalable web
                applications across real estate and technology sectors.
              </p>
              <p>
                Proficient in{' '}
                <span className='text-foreground font-medium'>
                  Next.js, Node.js, React.js, Laravel, REST APIs
                </span>
                , and{' '}
                <span className='text-foreground font-medium'>
                  CRM automation using Bitrix24
                </span>
                .
              </p>
              <p>
                Currently based in{' '}
                <span className='text-foreground font-medium'>Dubai, UAE</span>,
                with a valid employment visa sponsored by X-Space Real Estate.
              </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
              {[
                { icon: Briefcase, label: 'Experience', value: '5+ Years' },
                { icon: MapPin, label: 'Location', value: 'Dubai, UAE' },
                { icon: GraduationCap, label: 'Education', value: 'MCA' },
                { icon: Award, label: 'Awards', value: 'Best Employee' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BorderGlow className='relative p-px rounded-2xl'>
                    <div className=' h-full w-full p-6 rounded-xl bg-card/70 backdrop-blur-sm border-linear-to-r'>
                      <div className='flex items-center gap-4'>
                        <div className='p-3 rounded-lg bg-primary/10'>
                          <item.icon className='h-5 w-5 text-primary' />
                        </div>

                        <div>
                          <p className='text-sm text-muted-foreground '>
                            {item.label}
                          </p>
                          <p className='font-semibold text-lg'>{item.value}</p>
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
