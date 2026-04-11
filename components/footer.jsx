"use client"

import Link from 'next/link'
import { Linkedin, Github, Mail, Heart } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/adarsh-vinothan"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Adarsh1305"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:adarsh.vinodhan.00@gmail.com"
  }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gradient">
            AV
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-border" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Adarsh Vinothan. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
