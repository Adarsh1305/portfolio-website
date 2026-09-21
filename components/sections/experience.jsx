"use client"

import { useEffect, useRef } from 'react'
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: "Web Developer & IT Support",
    company: "X-Space Real Estate",
    location: "Dubai, UAE",
    period: "November 2024 – May 2026",
    type: "Full-time",
    achievements: [
      "Develop and maintain full-stack web applications using Next.js (CSR/SSR) and Node.js, significantly improving platform speed and SEO performance",
      "Integrate external APIs and XML property feeds to enable real-time property listing updates across portals",
      "Design and implement responsive, accessible user interfaces using Tailwind CSS, SASS, and semantic HTML in alignment with UI/UX best practices",
      "Configure and automate Bitrix24 CRM workflows, including webhook-based data synchronization to streamline sales and admin operations",
      "Manage hosting infrastructure including cPanel, DNS configuration, domain management, and application deployment",
      "Supervise property portal integrations, ensuring listing accuracy, quality control, and timely updates",
      "Identify, debug, and resolve application errors to maintain platform stability and high availability",
      "Provide cross-departmental IT support and technology solutions, collaborating with sales and operations teams"
    ]
  },
  {
    title: "Web Developer",
    company: "Crystal Code Labs",
    location: "Tamil Nadu, India",
    period: "March 2022 – August 2024",
    type: "Full-time",
    achievements: [
      "Built secure REST APIs and server-side rendered (SSR) applications using Next.js, achieving a 30% improvement in application performance",
      "Developed scalable and efficient Node.js backend services, reducing average server response time by 40%",
      "Architected and deployed microservices for Authorization, Metrics tracking, and Notification systems, improving system modularity",
      "Created a reusable React component library, boosting development team productivity by 25% and ensuring consistent UI across projects",
      "Engineered custom Laravel packages that reduced feature delivery time by 20%, accelerating project timelines",
      "Built custom Strapi CMS plugins, cutting content update time by 50% and empowering non-technical users to manage content independently"
    ]
  }
]

export function ExperienceSection() {
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
    <section id="experience" className="py-20 lg:py-32 relative bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Work Experience</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, achievements, and impactful contributions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-0.5" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`section-fade relative flex flex-col lg:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 shadow-lg shadow-primary/30" />

              {/* Content Card */}
              <div className={`ml-16 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                    {exp.type}
                  </span>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.slice(0, 4).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                    {exp.achievements.length > 4 && (
                      <li className="text-sm text-primary font-medium pl-6">
                        +{exp.achievements.length - 4} more achievements
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block lg:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
