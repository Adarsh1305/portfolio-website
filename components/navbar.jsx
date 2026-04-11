'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // threshold: 0.6,
        rootMargin: '-40% 0px -40% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* FLOATING NAVBAR */}
      <header className='fixed top-4 left-1/2 -translate-x-1/2 z-50'>
        <nav
          className={cn(
            'flex items-center gap-6 px-6 py-3 rounded-full',
            'border border-border/50',
            'bg-background/60 dark:bg-background/40',
            'backdrop-blur-xl supports-backdrop-filter:bg-background/50',
            'shadow-[0_8px_32px_rgba(0,0,0,0.25)]',
          )}
        >
          {/* Logo */}
          <Link
            href='/'
            className='text-lg font-bold font-display text-gradient'
          >
            AV
          </Link>

          {/* Desktop Links */}
          <div className='hidden lg:flex items-center gap-4'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={cn(
                  'text-sm px-3 py-1.5 rounded-full transition-all duration-300',
                  activeSection === link.id
                    ? 'bg-black/10 dark:bg-white/20 text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10',
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className='flex items-center gap-2'>
            {/* Theme Toggle */}
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className='rounded-full hover:bg-black/10 dark:hover:bg-white/10'
            >
              {theme === 'dark' ? (
                <Sun className='h-4 w-4' />
              ) : (
                <Moon className='h-4 w-4' />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant='ghost'
              size='icon'
              className='lg:hidden rounded-full hover:bg-black/10 dark:hover:bg-white/10'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className='h-4 w-4' />
              ) : (
                <Menu className='h-4 w-4' />
              )}
            </Button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={cn(
          'fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm transition-all duration-300',
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-2 pointer-events-none',
        )}
      >
        <div className='rounded-2xl border border-border/50 bg-background/60 dark:bg-background/40 backdrop-blur-xl shadow-xl p-4'>
          <div className='flex flex-col gap-2'>
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm transition-all duration-200',
                  activeSection === link.id
                    ? 'bg-black/10 dark:bg-white/20 text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10',
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {link.name}
              </Link>
            ))}

            <Button asChild className='mt-2'>
              <Link
                href='#contact'
                onClick={() => {
                  setActiveSection('contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
