"use client"

import { useEffect, useRef } from 'react'
import { GraduationCap, Award, Calendar, MapPin, Trophy } from 'lucide-react'

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Sree Saraswathi Thyagaraja College",
    location: "Tamil Nadu, India",
    period: "2020 – 2022",
    icon: GraduationCap
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sree Saraswathi Thyagaraja College",
    location: "Tamil Nadu, India",
    period: "2017 – 2020",
    icon: GraduationCap
  }
]

const achievements = [
  {
    title: "Best Employee Award",
    organization: "Crystal Code Labs",
    period: "August 2023 & June 2024",
    description: "Recognized with two months of performance incentives for exceptional contributions to project delivery and quality.",
    icon: Trophy
  }
]

export function EducationSection() {
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
    <section id="education" className="py-20 lg:py-32 relative bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Education & Recognition</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Academic Background
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Foundation of knowledge that powers my professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 section-fade">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="section-fade relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/30"
                  style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />

                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-lg">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                        <edu.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 section-fade" style={{ transitionDelay: '0.3s' }}>
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              Achievements & Recognition
            </h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="section-fade p-6 rounded-xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                  style={{ transitionDelay: `${0.4 + index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20 shrink-0">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{achievement.title}</h4>
                      <p className="text-primary font-medium mb-2">{achievement.organization}</p>
                      <p className="text-sm text-muted-foreground mb-3">{achievement.period}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <div 
              className="section-fade mt-6 p-6 rounded-xl bg-card border border-border"
              style={{ transitionDelay: '0.6s' }}
            >
              <h4 className="font-semibold mb-4">Additional Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    Location
                  </span>
                  <span className="text-muted-foreground">Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    Visa Status
                  </span>
                  <span className="text-muted-foreground">Employment Visa (X-Space Real Estate)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    Availability
                  </span>
                  <span className="text-muted-foreground">Available for opportunities within UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
