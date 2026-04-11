"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface OrbBackgroundProps {
  className?: string
  orbCount?: number
}

export function OrbBackground({ className, orbCount = 3 }: OrbBackgroundProps) {
  const orbs = [
    { color: "from-primary/40 to-primary/10", size: "w-96 h-96", position: "top-1/4 -left-48", delay: 0 },
    { color: "from-accent/40 to-accent/10", size: "w-[500px] h-[500px]", position: "bottom-1/4 -right-64", delay: 2 },
    { color: "from-primary/30 to-accent/10", size: "w-80 h-80", position: "top-1/2 left-1/3", delay: 4 },
  ].slice(0, orbCount)

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute rounded-full blur-3xl bg-gradient-to-br",
            orb.color,
            orb.size,
            orb.position
          )}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
