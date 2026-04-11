'use client';

import { useRef } from 'react';

export default function GlowCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const x = px * 100;
    const y = py * 100;

    // Edge sensitivity
    const dx = px - 0.5;
    const dy = py - 0.5;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const intensity = Math.min(distance * 2, 1);

    ref.current.style.setProperty('--x', `${x}%`);
    ref.current.style.setProperty('--y', `${y}%`);
    ref.current.style.setProperty('--intensity', intensity.toString());
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty('--intensity', '0');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='glow-card relative rounded-xl p-[1px]'
    >
      <div className='inner h-full w-full rounded-xl'>{children}</div>
    </div>
  );
}
