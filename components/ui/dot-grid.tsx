"use client"

import { cn } from "@/lib/utils"

interface DotGridProps {
  className?: string
  dotSize?: number
  gap?: number
  dotColor?: string
  fadeEdges?: boolean
}

export function DotGrid({
  className,
  dotSize = 1,
  gap = 24,
  dotColor = "currentColor",
  fadeEdges = true,
}: DotGridProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
          backgroundSize: `${gap}px ${gap}px`,
        }}
      />
      {fadeEdges && (
        <>
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
        </>
      )}
    </div>
  )
}
