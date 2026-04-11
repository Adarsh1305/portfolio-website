"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { BorderGlow } from "./border-glow"
import { TiltedCard } from "./tilted-card"

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  highlights: string[]
  period: string
}

interface ProjectTimelineProps {
  projects: Project[]
  className?: string
}

export function ProjectTimeline({ projects, className }: ProjectTimelineProps) {
  const { scrollYProgress } = useScroll()
  const lineHeight = useTransform(scrollYProgress, [0.3, 0.9], ["0%", "100%"])

  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-0.5">
        <motion.div
          className="absolute top-0 left-0 w-full bg-linear-to-b from-primary via-accent to-primary"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Timeline items */}
      <div className="space-y-16 md:space-y-24">
        {projects.map((project, index) => (
          <TimelineItem
            key={project.title}
            project={project}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({
  project,
  index,
  isLeft,
}: {
  project: Project
  index: number
  isLeft: boolean
}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={itemRef}
      className={cn(
        "relative flex flex-col md:flex-row items-start gap-8 pl-16 md:pl-0",
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30 md:-translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
      />

      {/* Period badge - mobile */}
      <motion.div
        className="absolute left-0 top-0 text-xs font-semibold text-primary md:hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        {project.period}
      </motion.div>

      {/* Content */}
      <motion.div
        className={cn("flex-1 md:w-1/2", isLeft ? "md:pr-16" : "md:pl-16")}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <TiltedCard tiltAmount={8}>
          <BorderGlow>
            <div className="p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm">
              {/* Period badge - desktop */}
              <span className="hidden md:inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-4">
                {project.period}
              </span>

              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
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
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5">&#x2022;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                View Project
              </a>
            </div>
          </BorderGlow>
        </TiltedCard>
      </motion.div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  )
}
