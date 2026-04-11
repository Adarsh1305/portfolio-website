'use client';

import { motion } from 'framer-motion';

function SectionHeader({
  label,
  title_1,
  title_2,
  description,
}: {
  label: string;
  title_1: string;
  title_2: string;
  description: string;
}) {
  return (
    <motion.div
      className='text-center mb-16'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className='text-primary font-semibold text-sm uppercase tracking-wider'>
        {label}
      </span>
      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-balance'>
        {title_1} <span className='text-gradient'>{title_2}</span>
      </h2>
      <p className='text-muted-foreground max-w-2xl mx-auto'>{description}</p>
    </motion.div>
  );
}

export { SectionHeader };
