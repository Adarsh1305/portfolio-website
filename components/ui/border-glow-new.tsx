'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;

  // Radial glow
  glowColor?: string;
  glowSize?: number;

  // Edge glow
  edgeSensitivity?: number;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
}

export function BorderGlowNew({
  children,
  className,
  glowColor = 'hsl(var(--primary))',
  glowSize = 150,
  edgeSensitivity = 30,
  borderRadius = 16,
  glowRadius = 30,
  glowIntensity = 1,
}: BorderGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Radial glow state
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [dim, setDim] = useState({ w: 0, h: 0 });

  // Set dimensions
  useEffect(() => {
    if (ref.current) {
      setDim({
        w: ref.current.offsetWidth,
        h: ref.current.offsetHeight,
      });
    }
  }, []);

  // Idle animation (floating glow)
  useEffect(() => {
    if (!hovered) {
      let angle = 0;
      const i = setInterval(() => {
        angle += 2;
        const r = (angle * Math.PI) / 180;

        setPos({
          x: (Math.cos(r) * dim.w) / 2 + dim.w / 2,
          y: (Math.sin(r) * dim.h) / 2 + dim.h / 2,
        });
      }, 20);

      return () => clearInterval(i);
    }
  }, [hovered, dim]);

  // Pointer move → BOTH effects
  const handleMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({ x, y });

    // Edge glow logic
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const dx = x - cx;
    const dy = y - cy;

    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

    const edge = Math.min(Math.max(Math.abs(dx) / cx, Math.abs(dy) / cy), 1);

    ref.current.style.setProperty('--cursor-angle', `${angle}deg`);
    ref.current.style.setProperty('--edge-proximity', `${edge * 100}`);
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn('relative overflow-hidden', className)}
      style={
        {
          '--border-radius': `${borderRadius}px`,
          '--glow-padding': `${glowRadius}px`,
          '--edge-sensitivity': edgeSensitivity,
          '--glow-intensity': glowIntensity,
        } as React.CSSProperties
      }
    >
      {/* EDGE GLOW (bottom layer) */}
      <span className='edge-light absolute inset-0 pointer-events-none' />

      {/* RADIAL GLOW (top interactive layer) */}
      <div
        className='absolute inset-0 pointer-events-none transition-opacity duration-300'
        style={{
          background: `radial-gradient(${glowSize}px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 70%)`,
          opacity: hovered ? 0.8 : 0.4,
        }}
      />

      {/* BORDER MASK */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background: `radial-gradient(${glowSize}px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 60%)`,
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1px',
          borderRadius,
        }}
      />

      {/* CONTENT */}
      <div className='relative z-10 rounded-[inherit] bg-card/80 backdrop-blur-sm'>
        {children}
      </div>
    </div>
  );
}
