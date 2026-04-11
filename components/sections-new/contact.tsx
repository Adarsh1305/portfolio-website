'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';

import { OrbBackground } from '@/components/ui/orb-background';
import { BorderGlow } from '@/components/ui/border-glow';
import { BorderGlowNew } from '@/components/ui/border-glow-new';
import { SectionHeader } from '../ui/section-header';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'adarsh.vinodhan.00@gmail.com',
    href: 'mailto:adarsh.vinodhan.00@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+971-565693968',
    href: 'tel:+971565693968',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dubai, UAE',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/adarsh-vinothan',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Adarsh1305',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:adarsh.vinodhan.00@gmail.com',
  },
];

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    if (!FORMSPREE_ENDPOINT) {
      setError('Contact form is not configured. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      setIsSubmitted(true);

      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Success UI
  if (isSubmitted) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-center'>
        <div className='p-4 rounded-full bg-green-500/10 mb-4'>
          <CheckCircle className='h-12 w-12 text-green-500' />
        </div>

        <h4 className='text-xl font-bold mb-2'>Message Sent!</h4>

        <p className='text-muted-foreground'>
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>

        <button
          onClick={() => setIsSubmitted(false)}
          className='mt-4 text-primary underline'
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6' autoComplete='off'>
      <FieldGroup>
        <div className='grid sm:grid-cols-2 gap-4'>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input
              type='text'
              name='name'
              placeholder='Your name'
              value={formState.name}
              onChange={handleChange}
              required
            />
          </Field>

          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input
              type='email'
              name='email'
              placeholder='your@email.com'
              value={formState.email}
              onChange={handleChange}
              required
            />
          </Field>
        </div>

        <Field>
          <FieldLabel>Subject</FieldLabel>
          <Input
            type='text'
            name='subject'
            placeholder="What's this about?"
            value={formState.subject}
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <FieldLabel>Message</FieldLabel>
          <Textarea
            name='message'
            placeholder='Tell me about your project...'
            rows={5}
            value={formState.message}
            onChange={handleChange}
            required
          />
        </Field>
      </FieldGroup>

      {/* ✅ Error Message */}
      {error && (
        <p className='text-sm text-red-500 bg-red-500/10 p-3 rounded-lg'>
          {error}
        </p>
      )}

      {/* ✅ Submit Button */}
      <Button
        type='submit'
        size='lg'
        className='w-full'
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            <Send className='h-4 w-4 mr-2' />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

export function ContactSection() {
  return (
    <section id='contact' className='py-20 lg:py-32 relative'>
      <OrbBackground />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <SectionHeader
          label='Get in Touch'
          title_1="Let's"
          title_2='Work Together'
          description='Have a project in mind or want to discuss opportunities?'
        />

        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto'>
          {/* Contact Info */}
          <motion.div initial={false} animate={{ opacity: 1, x: 0 }}>
            <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>

            <p className='text-muted-foreground mb-8'>
              Feel free to reach out through any of the following channels.
            </p>

            <div className='space-y-4 mb-8'>
              {contactInfo.map((info) => (
                <BorderGlowNew
                  key={info.label}
                  className='relative p-px rounded-xl'
                >
                  <div className='flex items-center gap-4 p-4'>
                    <div className='p-3 rounded-lg bg-primary/10'>
                      <info.icon className='h-5 w-5 text-primary' />
                    </div>

                    <div>
                      <p className='text-sm text-muted-foreground'>
                        {info.label}
                      </p>

                      {info.href ? (
                        <a
                          href={info.href}
                          className='font-medium hover:text-primary transition-colors'
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className='font-medium'>{info.value}</p>
                      )}
                    </div>
                  </div>
                </BorderGlowNew>
              ))}
            </div>

            <div className='flex gap-4 mb-8'>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className='h-5 w-5' />
                  <span className='sr-only'>{social.label}</span>
                </motion.a>
              ))}
            </div>

            <BorderGlow>
              <div className='p-4 rounded-xl bg-primary/5'>
                <div className='flex items-center gap-3'>
                  <span className='relative flex h-3 w-3'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75' />
                    <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500' />
                  </span>

                  <span className='text-sm font-medium'>
                    Available for immediate opportunities within the UAE
                  </span>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={false} animate={{ opacity: 1, x: 0 }}>
            <BorderGlow>
              <div className='p-8 rounded-2xl bg-card/80 backdrop-blur-sm'>
                <h3 className='text-xl font-bold mb-6'>Send a Message</h3>

                <ContactForm />
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
