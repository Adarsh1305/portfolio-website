"use client"

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MapPin, Briefcase, GraduationCap, Award } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    label: "Experience",
    value: "3+ Years"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, UAE"
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "MCA"
  },
  {
    icon: Award,
    label: "Awards",
    value: "Best Employee"
  }
]

export function AboutSection() {
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
    <section id="about" className="py-20 lg:py-32 relative" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Get to Know Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="section-fade" style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09894-K8XieqXE1PcjT0enze5FE8NlTnYHwl.jpg"
                  alt="Adarsh Vinothan - Professional Photo"
                  width={600}
                  height={700}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="section-fade" style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Full-Stack Developer with a Passion for Innovation
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Results-driven Full-Stack Web Developer with 3+ years of experience designing, 
                developing, and deploying scalable web applications across real estate and technology sectors.
              </p>
              <p>
                Proficient in <span className="text-foreground font-medium">Next.js (CSR/SSR)</span>, 
                <span className="text-foreground font-medium"> Node.js</span>, 
                <span className="text-foreground font-medium"> React.js</span>, 
                <span className="text-foreground font-medium"> Laravel</span>, 
                <span className="text-foreground font-medium"> REST APIs</span>, and 
                <span className="text-foreground font-medium"> CRM automation using Bitrix24</span>.
              </p>
              <p>
                Proven track record of improving application performance by up to 40%, 
                enhancing team productivity by 25%, and delivering seamless API integrations, 
                property portal solutions, and IT support in fast-paced environments.
              </p>
              <p>
                Currently based in <span className="text-foreground font-medium">Dubai, UAE</span>, 
                with a valid employment visa sponsored by X-Space Real Estate.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div 
                  key={item.label}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8 p-4 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-2">Languages</p>
              <div className="flex gap-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  English (Professional)
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Tamil (Native)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
