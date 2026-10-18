'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Send,
  CheckCircle,
  ExternalLink,
  Code2,
  Server,
  Database,
  Settings,
  Palette,
  Wrench,
  Globe,
  Workflow,
  Calendar,
  ChevronRight,
  ArrowUpRight,
  Trophy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { OrbBackground } from '@/components/ui/orb-background';
import { DotGrid } from '@/components/ui/dot-grid';
import { BorderGlow } from '@/components/ui/border-glow';
import { TiltedCard } from '@/components/ui/tilted-card';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { TargetCursor } from '@/components/ui/target-cursor';
import { ProjectTimeline } from '@/components/ui/project-timeline';
import { cn } from '@/lib/utils';

// Data
const roles = [
  'Full-Stack Web Developer',
  'Next.js Expert',
  'React Specialist',
  'Node.js Developer',
  'CRM Integration Pro',
];

const projects = [
  {
    title: 'X-Space Real Estate Platform',
    description:
      'Designed and developed a multilingual real estate platform for a Dubai-based brokerage. Implemented advanced property search, listing management, and lead generation features.',
    tech: ['Next.js', 'Node.js', 'Tailwind CSS', 'Bitrix24', 'REST API'],
    link: 'https://www.x-space.ae/',
    highlights: [
      'Integrated CRM and third-party APIs for seamless data synchronization',
      'Optimized performance, SEO, and mobile responsiveness',
    ],
    period: '2024 - 2026',
  },
  {
    title: 'X-Space Admin Panel',
    description:
      'Developed a secure admin dashboard with full CRUD functionality for properties, agents, and content. Streamlined internal workflows for managing listings and articles.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'JWT Auth', 'REST API'],
    link: 'https://admin-panel-web.x-space.ae',
    highlights: [
      'Improved operational efficiency with user-friendly interface',
      'Role-based access control implementation',
    ],
    period: '2024',
  },
  {
    title: 'Emversity Platform',
    description:
      'Designed and developed an educational platform for vocational training in allied health sciences. Built responsive UI and structured content delivery for improved user experience.',
    tech: ['React.js', 'Node.js', 'Strapi CMS', 'Tailwind CSS'],
    link: 'https://emversity.com/',
    highlights: [
      'Collaborated with stakeholders to align features with real-world industry requirements',
      'Implemented responsive design for all device sizes',
    ],
    period: '2023',
  },
];

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['Next.js', 'React.js', 'Tailwind CSS', 'SASS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Laravel', 'REST APIs', 'Microservices'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Languages',
    icon: Globe,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'PHP'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'CRM',
    icon: Workflow,
    skills: ['Bitrix24', 'Automation', 'Webhooks'],
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'DevOps',
    icon: Settings,
    skills: ['cPanel', 'DNS', 'Deployment'],
    color: 'from-indigo-500 to-violet-500',
  },
];

const experiences = [
  {
    title: 'Web Developer & IT Support',
    company: 'X-Space Real Estate',
    location: 'Dubai, UAE',
    period: 'November 2024 – 2026',
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
    <span className='text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground'>
      {displayText}
      <span className='animate-pulse'>|</span>
    </span>
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

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className='text-center mb-16'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className='text-primary font-semibold text-sm uppercase tracking-wider'>
        {label}
      </span>
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance'>
        {title}
      </h2>
      <p className='text-muted-foreground max-w-2xl mx-auto'>{description}</p>
    </motion.div>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-center'>
        <div className='p-4 rounded-full bg-green-500/10 mb-4'>
          <CheckCircle className='h-12 w-12 text-green-500' />
        </div>
        <h4 className='text-xl font-bold mb-2'>Message Sent!</h4>
        <p className='text-muted-foreground'>
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <FieldGroup>
        <div className='grid sm:grid-cols-2 gap-4'>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input
              name='name'
              placeholder='Your name'
              value={formState.name}
              onChange={handleChange}
              required
            />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input
              type='email'
              name='email'
              placeholder='your@email.com'
              value={formState.email}
              onChange={handleChange}
              required
            />
          </Field>
        </div>
        <Field>
          <FieldLabel>Subject</FieldLabel>
          <Input
            name='subject'
            placeholder="What's this about?"
            value={formState.subject}
            onChange={handleChange}
            required
          />
        </Field>
        <Field>
          <FieldLabel>Message</FieldLabel>
          <Textarea
            name='message'
            placeholder='Tell me about your project...'
            rows={5}
            value={formState.message}
            onChange={handleChange}
            required
          />
        </Field>
      </FieldGroup>
      <Button type='submit' size='lg' className='w-full'>
        <Send className='h-4 w-4 mr-2' />
        Send Message
      </Button>
    </form>
  );
}

// Smooth scroll function
function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function NextGenPage() {
  // Use scroll progress for hero parallax effect
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <main className='relative bg-background overflow-hidden'>
      <TargetCursor />

      {/* Hero Section */}
      <section
        id='hero'
        className='relative min-h-screen flex items-center justify-center overflow-hidden'
      >
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

              <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4'>
                <span className='block text-muted-foreground text-lg sm:text-xl font-normal mb-2'>
                  Hello, I&apos;m
                </span>
                <span className='bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient'>
                  Adarsh Vinothan
                </span>
              </h1>

              <div className='h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6'>
                <TypewriterText />
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

              <div className='flex items-center justify-center lg:justify-start gap-4'>
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
                  className='absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/40 to-primary/40 rounded-full blur-3xl scale-110'
                  animate={{
                    scale: [1.1, 1.2, 1.1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <BorderGlow glowSize={200}>
                  <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden'>
                    <Image
                      src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09874-ePkX2roV1Jdopwko6UJJrCDJ9WN9e7.jpg'
                      alt='Adarsh Vinothan'
                      fill
                      className='object-cover object-top'
                      priority
                    />
                  </div>
                </BorderGlow>

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
          className='absolute bottom-8 left-1/2 -translate-x-1/2'
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href='#about'
            onClick={(e) => scrollToSection(e, '#about')}
            className='flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
          >
            <span className='text-xs font-medium'>Scroll Down</span>
            <ArrowDown className='h-4 w-4' />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 lg:py-32 relative'>
        <div className='absolute inset-0 bg-secondary/30' />
        <DotGrid fadeEdges />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <SectionHeader
            label='About Me'
            title='Get to Know Me'
            description='Passionate about creating exceptional digital experiences'
          />

          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TiltedCard tiltAmount={5}>
                <BorderGlow>
                  <div className='relative rounded-2xl overflow-hidden'>
                    <Image
                      src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09894-K8XieqXE1PcjT0enze5FE8NlTnYHwl.jpg'
                      alt='Adarsh Vinothan'
                      width={600}
                      height={700}
                      className='object-cover w-full'
                    />
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
                  Results-driven Full-Stack Web Developer with 3+ years of
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
                  <span className='text-foreground font-medium'>
                    Dubai, UAE
                  </span>
                  , with a valid employment visa sponsored by X-Space Real
                  Estate.
                </p>
              </div>

              <div className='grid grid-cols-2 gap-4 mt-8'>
                {[
                  { icon: Briefcase, label: 'Experience', value: '3+ Years' },
                  { icon: MapPin, label: 'Location', value: 'Dubai, UAE' },
                  { icon: GraduationCap, label: 'Education', value: 'MCA' },
                  { icon: Award, label: 'Awards', value: 'Best Employee' },
                ].map((item) => (
                  <SpotlightCard key={item.label} className='p-4'>
                    <div className='flex items-center gap-3'>
                      <div className='p-2 rounded-lg bg-primary/10'>
                        <item.icon className='h-5 w-5 text-primary' />
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          {item.label}
                        </p>
                        <p className='font-semibold'>{item.value}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skills' className='py-20 lg:py-32 relative'>
        <OrbBackground orbCount={2} />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <SectionHeader
            label='Skills & Expertise'
            title='Technical Proficiency'
            description='A comprehensive toolkit built through years of hands-on experience'
          />

          {/* Metrics */}
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16'>
            {[
              { label: 'Years Experience', value: 3, suffix: '+' },
              { label: 'Performance Boost', value: 40, suffix: '%' },
              { label: 'Productivity Gain', value: 25, suffix: '%' },
              { label: 'Projects Delivered', value: 15, suffix: '+' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BorderGlow>
                  <div className='p-6 rounded-xl bg-card/80 backdrop-blur-sm text-center'>
                    <p className='text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2'>
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

          {/* Skills Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TiltedCard tiltAmount={8}>
                  <SpotlightCard className='p-6 h-full'>
                    <div
                      className={cn(
                        'w-12 h-12 rounded-xl bg-gradient-to-br p-2.5 mb-4',
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
                </TiltedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id='experience'
        className='py-20 lg:py-32 relative bg-secondary/30'
      >
        <DotGrid />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <SectionHeader
            label='Work Experience'
            title='Professional Journey'
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
                  <BorderGlow>
                    <div className='p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm'>
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
                  </BorderGlow>
                </TiltedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 lg:py-32 relative'>
        <OrbBackground orbCount={2} />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <SectionHeader
            label='Portfolio'
            title='Project Timeline'
            description='A selection of projects that showcase my skills and expertise'
          />

          <ProjectTimeline projects={projects} />

          <p className='text-center text-sm text-muted-foreground mt-16'>
            Note: Some previously developed projects have undergone domain or
            branding changes post-delivery and may not be publicly accessible
            under their original URLs.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section
        id='education'
        className='py-20 lg:py-32 relative bg-secondary/30'
      >
        <DotGrid />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <SectionHeader
            label='Education & Recognition'
            title='Academic Background'
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
                    <SpotlightCard className='p-6'>
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
                    </SpotlightCard>
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
                  <div className='p-6 rounded-xl bg-gradient-to-br from-primary/10 via-card to-accent/10'>
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
                          Recognized with two months of performance incentives
                          for exceptional contributions to project delivery and
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

      {/* Contact Section */}
      <section id='contact' className='py-20 lg:py-32 relative'>
        <OrbBackground />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
          <SectionHeader
            label='Get in Touch'
            title="Let's Work Together"
            description='Have a project in mind or want to discuss opportunities?'
          />

          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto'>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
              <p className='text-muted-foreground mb-8'>
                Feel free to reach out through any of the following channels.
              </p>

              <div className='space-y-4 mb-8'>
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'adarsh.vinodhan.00@gmail.com',
                    href: 'mailto:adarsh.vinodhan.00@gmail.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+971-565693968',
                    href: 'tel:+971565693968',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Dubai, UAE',
                    href: null,
                  },
                ].map((info) => (
                  <SpotlightCard key={info.label} className='p-4'>
                    <div className='flex items-center gap-4'>
                      <div className='p-3 rounded-lg bg-primary/10'>
                        <info.icon className='h-5 w-5 text-primary' />
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className='font-medium hover:text-primary transition-colors'
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className='font-medium'>{info.value}</p>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              <div className='flex gap-4 mb-8'>
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
                    className='p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className='h-5 w-5' />
                    <span className='sr-only'>{social.label}</span>
                  </motion.a>
                ))}
              </div>

              <BorderGlow>
                <div className='p-4 rounded-xl bg-primary/5'>
                  <div className='flex items-center gap-3'>
                    <span className='relative flex h-3 w-3'>
                      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75' />
                      <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500' />
                    </span>
                    <span className='text-sm font-medium'>
                      Available for immediate opportunities within the UAE
                    </span>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BorderGlow>
                <div className='p-8 rounded-2xl bg-card/80 backdrop-blur-sm'>
                  <h3 className='text-xl font-bold mb-6'>Send a Message</h3>
                  <ContactForm />
                </div>
              </BorderGlow>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 border-t border-border relative'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} Adarsh Vinothan. All rights
              reserved.
            </p>
            <div className='flex items-center gap-6'>
              <Link
                href='/'
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Original Version
              </Link>
              <a
                href='#hero'
                onClick={(e) => scrollToSection(e, '#hero')}
                className='text-sm text-muted-foreground hover:text-foreground transition-colors'
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
