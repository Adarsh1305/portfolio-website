'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Settings,
  Globe,
  Workflow,
  ExternalLink,
  Github,
  Layers,
} from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { OrbBackground } from '@/components/ui/orb-background';
import { BorderGlow } from '@/components/ui/border-glow';
import { TiltedCard } from '@/components/ui/tilted-card';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { cn } from '@/lib/utils';
import { SectionHeader } from '../ui/section-header';

// const skillCategories = [
//   {
//     title: 'Frontend',
//     icon: Code2,
//     skills: ['Next.js', 'React.js', 'Tailwind CSS', 'SASS'],
//     color: 'from-blue-500 to-cyan-500',
//   },
//   {
//     title: 'Backend',
//     icon: Server,
//     skills: ['Node.js', 'Laravel', 'REST APIs', 'Microservices'],
//     color: 'from-green-500 to-emerald-500',
//   },
//   {
//     title: 'Languages',
//     icon: Globe,
//     skills: ['JavaScript (ES6+)', 'TypeScript', 'PHP'],
//     color: 'from-yellow-500 to-orange-500',
//   },
//   {
//     title: 'Databases',
//     icon: Database,
//     skills: ['MongoDB', 'MySQL'],
//     color: 'from-purple-500 to-pink-500',
//   },
//   {
//     title: 'CRM',
//     icon: Workflow,
//     skills: ['Bitrix24', 'Pixxi', 'Automation', 'Webhooks'],
//     color: 'from-red-500 to-rose-500',
//   },
//   {
//     title: 'DevOps',
//     icon: Settings,
//     skills: ['cPanel', 'DNS', 'Deployment'],
//     color: 'from-indigo-500 to-violet-500',
//   },
// ];

const projects = [
  {
    title: 'Business Automation Suite',
    description:
      'A CRM and business automation platform integrating Bitrix24 and custom webhooks to streamline workflows, lead management, and task automation.',
    tech: ['Next.js', 'Pixxi', 'Bitrix24', 'Webhooks'],
    gradient: 'from-red-600 to-rose-300',
    github: '#',
    live: '#',
  },
  {
    title: 'E-Commerce Web Platform',
    description:
      'A full-stack e-commerce application with responsive UI, product management, and REST API integration for seamless shopping experiences.',
    tech: ['React.js', 'Laravel', 'MySQL', 'REST APIs'],
    gradient: 'from-green-600 to-emerald-300',
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio & Blog System',
    description:
      'A modern personal portfolio and blog platform with dynamic content management, SEO optimization, and responsive design.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Next.tsx'],
    gradient: 'from-blue-600 to-cyan-500',
    github: '#',
    live: '#',
  },
  {
    title: 'Microservices API Platform',
    description:
      'A scalable backend architecture using microservices and REST APIs to handle multiple services with efficient data flow and modular design.',
    tech: ['Node.js', 'Microservices', 'MongoDB'],
    gradient: 'from-purple-600 to-pink-500',
    github: '#',
    live: null,
  },
  {
    title: 'Server & Deployment Manager',
    description:
      'A deployment and server management solution handling DNS configuration, cPanel hosting, and live application deployment.',
    tech: ['cPanel', 'DNS', 'Deployment', 'Vercel'],
    gradient: 'from-indigo-600 to-violet-500',
    github: null,
    live: '#',
  },
];

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({
  end,
  suffix = '',
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function SkillsSection() {
  return (
    <section id='skills' className='py-20 lg:py-32 relative'>
      <OrbBackground orbCount={2} />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <SectionHeader
          label='Skills & Expertise'
          title_1='Technical'
          title_2='Proficiency'
          description='A comprehensive toolkit built through years of hands-on experience'
        />

        {/* Metrics */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16'>
          {[
            { label: 'Years Experience', value: 3, suffix: '+' },
            { label: 'Performance Boost', value: 45, suffix: '%' },
            { label: 'Productivity Gain', value: 60, suffix: '%' },
            { label: 'Projects Delivered', value: 15, suffix: '+' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BorderGlow className='relative p-px rounded-2xl'>
                <div className='p-6 rounded-xl bg-card/80 backdrop-blur-sm text-center'>
                  <p className='text-4xl lg:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent mb-2'>
                    <CountUp end={metric.value} suffix={metric.suffix} />
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    {metric.label}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        <div
          className='grid md:grid-cols-2 gap-8'
          style={{ perspective: '1000px' }}
        >
          {projects.map((project, idx) => (
            <TiltCard className='h-full' key={project.title}>
              <div className='glass-panel rounded-2xl overflow-hidden h-full flex flex-col group hover:border-primary/30 transition-all duration-300'>
                <div className={`h-2 bg-linear-to-r ${project.gradient}`} />

                <div className='p-6 flex-1 flex flex-col'>
                  <div className='flex items-start justify-between mb-3'>
                    <div className='flex items-center gap-3'>
                      <div
                        className={`w-10 h-10 rounded-xl bg-linear-to-br ${project.gradient} flex items-center justify-center`}
                      >
                        <Layers className='w-5 h-5 text-white' />
                      </div>
                      <h3 className='text-xl font-bold font-display'>
                        {project.title}
                      </h3>
                    </div>
                    {/* <div className='flex items-center gap-2'>
                      {project.github && (
                        <a
                          href={project.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors'
                          data-testid={`link-project-github-${idx}`}
                        >
                          <Github className='w-4 h-4' />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors'
                          data-testid={`link-project-live-${idx}`}
                        >
                          <ExternalLink className='w-4 h-4' />
                        </a>
                      )}
                    </div> */}
                  </div>

                  <p className='text-muted-foreground text-sm leading-relaxed mb-6 flex-1'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2'>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className='px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-secondary-foreground border border-border/50'
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Skills Grid */}
        {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltedCard tiltAmount={8}>
                <div className='relative p-0.5 dark:p-px rounded-2xl bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 bg-size-[200%] animate-[borderMove_4s_linear_infinite]'>
                  <SpotlightCard className='rounded-2xl bg-background p-6 h-full w-full'>
                    <div
                      className={cn(
                        'w-12 h-12 rounded-xl bg-linear-to-br p-2.5 mb-4',
                        category.color,
                      )}
                    >
                      <category.icon className='w-full h-full text-white' />
                    </div>
                    <h3 className='font-semibold text-lg mb-4'>
                      {category.title}
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className='px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
