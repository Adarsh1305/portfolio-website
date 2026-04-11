"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Calendar, 
  Code, 
  FileText, 
  User, 
  Clock, 
  Rocket, 
  Database,
  Globe,
  ExternalLink,
  Github,
  Sparkles
} from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import RadialOrbitalTimeline, { TimelineItem } from "@/components/ui/radial-orbital-timeline";
import { GlassCard, GlassButton, GlassFilter } from "@/components/ui/liquid-glass";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "X-Space Platform",
    date: "2023-2024",
    content: "Full-stack real estate platform with property listings, CRM, and analytics dashboard for X-Space Real Estate Dubai.",
    category: "Web Development",
    icon: Globe,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Admin Dashboard",
    date: "2024",
    content: "Comprehensive admin panel with user management, analytics, and real-time data visualization.",
    category: "Dashboard",
    icon: Database,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Emversity",
    date: "2023",
    content: "Educational platform for learning management with course creation, student tracking, and assessments.",
    category: "EdTech",
    icon: FileText,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "E-Commerce System",
    date: "2022-2023",
    content: "Full-featured e-commerce solution with payment integration, inventory management, and order tracking.",
    category: "E-Commerce",
    icon: Code,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Portfolio V2",
    date: "2024",
    content: "Modern portfolio website with 3D animations, orbital timeline, and immersive user experience.",
    category: "Personal",
    icon: Rocket,
    relatedIds: [4, 6],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 6,
    title: "API Gateway",
    date: "2024",
    content: "Microservices API gateway with authentication, rate limiting, and request routing.",
    category: "Backend",
    icon: Calendar,
    relatedIds: [5, 7],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 7,
    title: "Mobile App",
    date: "2025",
    content: "Cross-platform mobile application for real estate browsing and client management.",
    category: "Mobile",
    icon: User,
    relatedIds: [6],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 8,
    title: "AI Integration",
    date: "2025",
    content: "Machine learning integration for property recommendations and market analysis.",
    category: "AI/ML",
    icon: Clock,
    relatedIds: [7],
    status: "pending" as const,
    energy: 15,
  },
];

const projectCards = [
  {
    title: "X-Space Real Estate Platform",
    description: "A comprehensive real estate platform with property listings, virtual tours, CRM integration, and analytics dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Admin Dashboard System",
    description: "Multi-tenant admin panel with real-time analytics, user management, and customizable widgets.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Emversity Learning Platform",
    description: "EdTech platform with course management, progress tracking, live classes, and certification system.",
    technologies: ["Vue.js", "Django", "MongoDB", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "E-Commerce Solution",
    description: "Full-featured online store with payment processing, inventory management, and analytics.",
    technologies: ["React", "Express", "Stripe", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60",
  },
];

function ScrollSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projectCards[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div 
        className={`
          relative overflow-hidden rounded-2xl
          bg-gradient-to-br from-white/10 to-white/5
          backdrop-blur-xl border border-white/20
          transition-all duration-500 ease-out
          ${isHovered ? 'scale-[1.02] shadow-2xl shadow-purple-500/20 border-purple-400/50' : ''}
        `}
      >
        {/* Glow effect */}
        <div 
          className={`
            absolute inset-0 opacity-0 transition-opacity duration-500
            bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20
            ${isHovered ? 'opacity-100' : ''}
          `}
        />
        
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className={`
              w-full h-full object-cover transition-transform duration-700
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex gap-3">
            <Button 
              size="sm" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-white/70 hover:text-white hover:bg-white/10"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects3DPage() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  return (
    <main className="min-h-screen bg-black text-white">
      <GlassFilter />
      
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AV
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <Link href="/#projects" className="text-white/70 hover:text-white transition-colors text-sm">
              Projects
            </Link>
            <Link href="/#contact" className="text-white/70 hover:text-white transition-colors text-sm">
              Contact
            </Link>
            <GlassButton href="/#contact">
              <span className="text-sm">Get in Touch</span>
            </GlassButton>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-screen"
      >
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(20, 0, 50)"
          gradientBackgroundEnd="rgb(0, 10, 40)"
          firstColor="100, 50, 255"
          secondColor="180, 80, 255"
          thirdColor="50, 200, 255"
          fourthColor="120, 0, 200"
          fifthColor="0, 150, 200"
          pointerColor="140, 100, 255"
          size="90%"
          containerClassName="!h-screen"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-white/80">Interactive Experience</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  My Projects
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8">
                A journey through my work in an interactive orbital timeline.
                Explore my projects in a futuristic, immersive way.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <GlassButton>
                  <span className="flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Explore Timeline
                  </span>
                </GlassButton>
              </motion.div>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
              >
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-white"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </BackgroundGradientAnimation>
      </motion.section>
      
      {/* Orbital Timeline Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Project Timeline
                </span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Click on any node to explore project details. Watch the connections between related projects.
              </p>
            </div>
          </ScrollSection>
          
          <ScrollSection>
            <RadialOrbitalTimeline timelineData={timelineData} />
          </ScrollSection>
        </div>
      </section>
      
      {/* Project Cards Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <ScrollSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Detailed showcase of my most impactful work with live demos and source code.
              </p>
            </div>
          </ScrollSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCards.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollSection>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {"Let's Work Together"}
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              {"Have a project in mind? I'd love to hear about it. Let's create something amazing together."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton href="/#contact">
                <span className="flex items-center gap-2">
                  Start a Project
                </span>
              </GlassButton>
              <Button 
                variant="ghost" 
                className="text-white/70 hover:text-white hover:bg-white/10 border border-white/20"
                asChild
              >
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </ScrollSection>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            2024 Adarsh Vinothan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Home
            </Link>
            <Link href="/#projects" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="text-white/40 hover:text-white/70 text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
