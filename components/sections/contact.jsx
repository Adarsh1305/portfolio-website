"use client"

import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "adarsh.vinodhan.00@gmail.com",
    href: "mailto:adarsh.vinodhan.00@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971-565693968",
    href: "tel:+971565693968"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dubai, UAE",
    href: null
  }
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/adarsh-vinothan",
    color: "hover:text-blue-500"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Adarsh1305",
    color: "hover:text-foreground"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:adarsh.vinodhan.00@gmail.com",
    color: "hover:text-red-500"
  }
]

export function ContactSection() {
  const sectionRef = useRef(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Frontend only - show success state
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 section-fade">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="section-fade" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of the following channels. I typically respond within 24 hours.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg text-muted-foreground ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium">
                  Available for immediate opportunities within the UAE
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="section-fade" style={{ transitionDelay: '0.4s' }}>
            <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="p-4 rounded-full bg-green-500/10 mb-4">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FieldGroup>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field>
                        <FieldLabel>Name</FieldLabel>
                        <Input
                          name="name"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel>Email</FieldLabel>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel>Subject</FieldLabel>
                      <Input
                        name="subject"
                        placeholder="What's this about?"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel>Message</FieldLabel>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                  </FieldGroup>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
