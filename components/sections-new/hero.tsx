'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TargetCursor } from '@/components/ui/target-cursor';
import { OrbBackground } from '@/components/ui/orb-background';
import { DotGrid } from '@/components/ui/dot-grid';
// import { BorderGlow } from '@/components/ui/border-glow';

const roles = [
  'Full-Stack Web Developer',
  'Next.js Expert',
  'React Specialist',
  'Node.js Developer',
  'CRM Integration Pro',
];

// Components
function TypewriterText() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <span className='text-xl sm:text-2xl lg:text-3xl font-bold text-muted-foreground dark:text-white/80'>
      {displayText}
      <span className='animate-pulse'>|</span>
    </span>
  );
}

// Smooth scroll function
function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace('#', '');
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Use scroll progress for hero parallax effect
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <>
      <TargetCursor />

      <section
        id='hero'
        className='relative min-h-screen flex items-center justify-center overflow-hidden'
      >
        {/* Background Elements */}
        <OrbBackground />
        <DotGrid />

        <motion.div
          className='container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0 relative z-10'
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            {/* Content */}
            <motion.div
              className='text-center lg:text-left order-2 lg:order-1'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6'>
                <span className='relative flex h-2 w-2'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75' />
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-primary' />
                </span>
                Available for opportunities
              </div>

              <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight mb-6 tracking-tight'>
                <span className='block text-muted-foreground text-lg sm:text-xl font-normal mb-2'>
                  Hello, I&apos;m
                </span>
                <span className='text-gradient bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient'>
                  Adarsh Vinothan
                </span>
              </h1>

              <div className='h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6'>
                {/* <TypewriterText /> */}
                <RotatingText roles={roles} />
              </div>

              <p className='text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed'>
                Results-driven developer with 3+ years of experience designing
                and deploying scalable web applications. Currently based in
                Dubai, UAE.
              </p>

              <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8'>
                <Button size='lg' asChild>
                  <a
                    href='#projects'
                    onClick={(e) => scrollToSection(e, '#projects')}
                  >
                    View Projects
                    <ArrowDown className='ml-2 h-4 w-4' />
                  </a>
                </Button>
                <Button size='lg' variant='outline' asChild>
                  <a
                    href='#contact'
                    onClick={(e) => scrollToSection(e, '#contact')}
                  >
                    Contact Me
                  </a>
                </Button>
              </div>

              <div className='flex items-center justify-center lg:justify-start gap-4 mb-20'>
                {[
                  {
                    icon: Linkedin,
                    href: 'https://linkedin.com/in/adarsh-vinothan',
                    label: 'LinkedIn',
                  },
                  {
                    icon: Github,
                    href: 'https://github.com/Adarsh1305',
                    label: 'GitHub',
                  },
                  {
                    icon: Mail,
                    href: 'mailto:adarsh.vinodhan.00@gmail.com',
                    label: 'Email',
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className='h-5 w-5' />
                    <span className='sr-only'>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className='order-1 lg:order-2 flex justify-center'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className='relative'>
                <motion.div
                  className='absolute inset-0 bg-linear-to-br from-primary/40 via-accent/40 to-primary/40 rounded-full blur-3xl scale-110'
                  animate={{
                    scale: [1.1, 1.2, 1.1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  ease='easeInOut'
                />

                {/* <BorderGlow glowSize={200}>
                  <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-94 lg:h-94 rounded-full overflow-hidden'>
                    <Image
                      // src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09874-ePkX2roV1Jdopwko6UJJrCDJ9WN9e7.jpg'
                      src='/images/profile.jpg'
                      alt='Adarsh Vinothan'
                      fill
                      className='object-cover object-top'
                      priority
                    />
                  </div>
                </BorderGlow> */}

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className='order-1 lg:order-2 flex justify-center'
                >
                  <div className='relative'>
                    <div
                      className='absolute -inset-4 bg-linear-to-r from-primary via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30'
                      style={{ animation: 'glow-pulse 3s ease infinite' }}
                    />
                    <div
                      className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl'
                      style={{ animation: 'float 6s ease-in-out infinite' }}
                    >
                      <Image
                        src='/images/profile.jpeg'
                        alt='Adarsh Vinothan'
                        fill
                        className='w-full h-full object-cover object-top'
                        data-testid='img-hero-photo'
                        priority
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className='absolute -top-4 -right-4 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border shadow-lg'
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className='text-sm font-semibold'>3+ Years Exp</span>
                </motion.div>
                <motion.div
                  className='absolute -bottom-4 -left-4 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border shadow-lg'
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <span className='text-sm font-semibold'>Dubai, UAE</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className='absolute bottom-2.5 sm:bottom-1 left-1/2 -translate-x-1/2'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href='#about'
            onClick={(e) => scrollToSection(e, '#about')}
            className='flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
          >
            <span className='text-lg font-bold'>Scroll Down</span>
            <ArrowDown className='h-4 w-4' />
          </a>
        </motion.div>
      </section>
    </>
  );
}

function RotatingText({ roles }: { roles: string[] }) {
  return (
    <div className='h-10 overflow-hidden'>
      <motion.div
        animate={{ y: [0, ...roles.map((_, i) => -(i + 1) * 40)] }}
        transition={{
          duration: roles.length * 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          times: roles.map((_, i) => i / roles.length),
        }}
      >
        {[...roles, roles[0]].map((role, i) => (
          <div key={i} className='h-10 flex items-center'>
            <span className='text-xl sm:text-2xl font-bold'>{role}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
