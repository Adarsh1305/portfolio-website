"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const roles = [
  "Full-Stack Web Developer",
  "Next.js Expert",
  "React Specialist",
  "Node.js Developer",
  "CRM Integration Pro"
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4">
              <span className="block text-muted-foreground text-lg sm:text-xl font-normal mb-2">Hello, I&apos;m</span>
              <span className="gradient-text">Adarsh Vinothan</span>
            </h1>

            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Results-driven developer with 3+ years of experience designing and deploying scalable web applications. 
              Currently based in Dubai, UAE, specializing in Next.js, React, Node.js, and CRM automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="#projects">
                  View Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://linkedin.com/in/adarsh-vinothan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Adarsh1305"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="mailto:adarsh.vinodhan.00@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/40 to-primary/40 rounded-full blur-3xl scale-110 animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09874-ePkX2roV1Jdopwko6UJJrCDJ9WN9e7.jpg"
                  alt="Adarsh Vinothan - Full-Stack Web Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-lg glass shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-semibold">3+ Years Exp</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg glass shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-semibold">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
