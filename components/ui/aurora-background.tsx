"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  showRadialGradient?: boolean
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen bg-background overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "absolute inset-0",
            "[--aurora:repeating-linear-gradient(100deg,var(--primary)_10%,var(--accent)_15%,var(--primary)_20%,var(--accent)_25%,var(--primary)_30%)]",
            "[background-image:var(--aurora)]",
            "[background-size:200%_200%]",
            "[background-position:50%_50%]",
            "filter blur-[80px]",
            "opacity-30 dark:opacity-20",
            "animate-aurora"
          )}
        />
        {showRadialGradient && (
          <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        )}
      </div>
      {children}
    </div>
  )
}
