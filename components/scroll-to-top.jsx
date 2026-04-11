'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        'fixed bottom-8 right-6 z-50 transition-all duration-300',
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none',
      )}
    >
      <Button
        onClick={scrollToTop}
        size='icon'
        className={cn(
          'rounded-full',
          'border border-border/50',
          'bg-background/60 dark:bg-background/40',
          'backdrop-blur-xl',
          'shadow-lg',
          'hover:scale-110 transition-transform',
          'bg-black dark:bg-white hover:bg-blue-500 dark:hover:bg-blue-500',
        )}
      >
        <ArrowUp className='h-5 w-5' />
      </Button>
    </div>
  );
}
