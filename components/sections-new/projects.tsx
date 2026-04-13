'use client';

// import { motion } from 'framer-motion';
import { OrbBackground } from '@/components/ui/orb-background';
import { ProjectTimeline } from '@/components/ui/project-timeline';
import { SectionHeader } from '../ui/section-header';

const projects = [
  {
    title: 'X-Space Real Estate Platform',
    description:
      'Designed and developed a scalable, multilingual real estate platform for a Dubai-based brokerage, enabling advanced property discovery, dynamic listing management, and lead generation. Enhanced user experience and system performance to support high-traffic property searches.',
    tech: [
      'Next.js',
      'Node.js',
      'Tailwind CSS',
      'Bitrix24 CRM',
      'RESTful APIs',
      'SEO Optimization',
    ],
    link: 'https://www.x-space.ae/',
    highlights: [
      'Integrated Bitrix24 CRM and third-party APIs for real-time data synchronization and lead management',
      'Implemented advanced property search and filtering to improve user engagement and conversion rates',
      'Optimized application performance, SEO, and mobile responsiveness for improved visibility and faster load times',
    ],
    period: '2025 - Present',
  },
  {
    title: 'X-Space Admin Panel',
    description:
      'Designed and developed a secure, scalable admin dashboard to manage properties, agents, and content. Implemented full CRUD functionality and optimized internal workflows, significantly improving content and listing management efficiency.',
    tech: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'JWT Authentication',
      'RESTful APIs',
      'Role-Based Access Control (RBAC)',
      'Third-Party API Integration',
    ],
    link: 'https://admin-panel-web.x-space.ae',
    highlights: [
      'Built a role-based access control system to ensure secure and permission-based operations',
      'Improved operational efficiency through an intuitive and responsive user interface',
      'Developed and integrated RESTful APIs for seamless data management and system communication',
    ],
    period: '2025 - Present',
  },
  {
    title: 'Emversity Platform',
    description:
      'Designed and developed a scalable educational platform for vocational training in allied health sciences. Built a responsive, content-driven interface and structured content delivery system to enhance accessibility and user engagement.',
    tech: ['React.js', 'Node.js', 'Strapi CMS', 'Tailwind CSS', 'RESTful APIs'],
    link: 'https://emversity.com/',
    highlights: [
      'Collaborated with stakeholders to translate real-world training requirements into platform features and workflows',
      'Developed a fully responsive UI to ensure seamless experience across mobile, tablet, and desktop devices',
      'Integrated Strapi CMS for efficient content management and dynamic content delivery',
    ],
    period: '2023',
  },
];

export function ProjectsSection() {
  return (
    <section id='projects' className='py-20 lg:py-32 relative'>
      <OrbBackground orbCount={2} />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <SectionHeader
          label='Portfolio'
          title_1='Project'
          title_2='Timeline'
          description='A selection of projects that showcase my skills and expertise'
        />

        <ProjectTimeline projects={projects} />

        <p className='text-center text-md text-muted-foreground mt-14 font-bold'>
          Note: Some previously developed projects have undergone domain or
          <br className='hidden md:block' />
          branding changes post-delivery and may not be publicly accessible
          under their original URLs.
        </p>
      </div>
    </section>
  );
}
