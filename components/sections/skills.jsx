"use client"

import { useEffect, useRef, useState } from 'react'
import { 
  Code2, 
  Server, 
  Database, 
  Settings, 
  Palette, 
  Wrench,
  Globe,
  Workflow
} from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["Next.js", "React.js", "Tailwind CSS", "SASS", "Semantic HTML"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Laravel", "REST API Design", "Webhooks", "Microservices"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Programming Languages",
    icon: Globe,
    skills: ["JavaScript (ES6+)", "TypeScript", "PHP"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "MongoDB Compass"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "CRM & Integrations",
    icon: Workflow,
    skills: ["Bitrix24 CRM", "Workflow Automation", "Webhook-Based Sync", "XML/API Integration"],
    color: "from-red-500 to-rose-500"
  },
  {
    title: "DevOps & Hosting",
    icon: Settings,
    skills: ["cPanel", "DNS Management", "Hosting", "Deployment", "Server Configuration"],
    color: "from-indigo-500 to-violet-500"
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["GitHub", "Jira", "Trello", "VS Code", "Strapi CMS"],
    color: "from-teal-500 to-cyan-500"
  },
  {
    title: "UI/UX & Design",
    icon: Palette,
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Responsive Design", "Cross-Browser"],
    color: "from-pink-500 to-fuchsia-500"
  }
]

const metrics = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Performance Boost", value: 40, suffix: "%" },
  { label: "Productivity Gain", value: 25, suffix: "%" },
  { label: "Projects Delivered", value: 15, suffix: "+" }
]

function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function SkillsSection() {
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
    <section id="skills" className="py-20 lg:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Skills & Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Technical Proficiency
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16 section-fade" style={{ transitionDelay: '0.2s' }}>
          {metrics.map((metric, index) => (
            <div 
              key={metric.label}
              className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                <CountUp end={metric.value} suffix={metric.suffix} />
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="section-fade group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1"
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-2.5 mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-full h-full text-white" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-4">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
