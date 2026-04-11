"use client"

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: "X-Space Real Estate Platform",
    description: "Designed and developed a multilingual real estate platform for a Dubai-based brokerage. Implemented advanced property search, listing management, and lead generation features.",
    image: "/projects/xspace.jpg",
    tech: ["Next.js", "Node.js", "Tailwind CSS", "Bitrix24", "REST API"],
    link: "https://www.x-space.ae/",
    highlights: [
      "Integrated CRM and third-party APIs for seamless data synchronization",
      "Optimized performance, SEO, and mobile responsiveness"
    ]
  },
  {
    title: "X-Space Admin Panel",
    description: "Developed a secure admin dashboard with full CRUD functionality for properties, agents, and content. Streamlined internal workflows for managing listings and articles.",
    image: "/projects/admin.jpg",
    tech: ["Next.js", "Node.js", "MongoDB", "JWT Auth", "REST API"],
    link: "https://admin-panel-web.x-space.ae",
    highlights: [
      "Improved operational efficiency with user-friendly interface",
      "Role-based access control implementation"
    ]
  },
  {
    title: "Emversity Platform",
    description: "Designed and developed an educational platform for vocational training in allied health sciences. Built responsive UI and structured content delivery for improved user experience.",
    image: "/projects/emversity.jpg",
    tech: ["React.js", "Node.js", "Strapi CMS", "Tailwind CSS"],
    link: "https://emversity.com/",
    highlights: [
      "Collaborated with stakeholders to align features with real-world industry requirements",
      "Implemented responsive design for all device sizes"
    ]
  }
]

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className="section-fade group relative rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/30"
      style={{ transitionDelay: `${0.2 + index * 0.15}s`, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Project Image / Gradient Background */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />
        
        {/* Project Number */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-6xl font-bold text-primary/20">0{index + 1}</span>
        </div>

        {/* Link Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
        >
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="space-y-1 mb-4">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">&#x2022;</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.section-fade')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 lg:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12 section-fade" style={{ transitionDelay: '0.8s' }}>
          Note: Some previously developed projects have undergone domain or branding changes post-delivery
          and may not be publicly accessible under their original URLs.
        </p>
      </div>
    </section>
  )
}
