import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import '../styles/border-glow.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Adarsh Vinothan | Full-Stack Web Developer',
  description:
    'Results-driven Full-Stack Web Developer with 3+ years of experience in Next.js, Node.js, React, and CRM Integration. Based in Dubai, UAE.',
  keywords: [
    'Full-Stack Developer',
    'Web Developer',
    'Next.js',
    'React',
    'Node.js',
    'Dubai',
    'UAE',
  ],
  authors: [{ name: 'Adarsh Vinothan' }],
  openGraph: {
    title: 'Adarsh Vinothan | Full-Stack Web Developer',
    description:
      'Results-driven Full-Stack Web Developer with 3+ years of experience designing, developing, and deploying scalable web applications.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning data-scroll-behavior='smooth'>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
