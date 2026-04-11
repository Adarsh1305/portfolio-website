"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface BorderGlowProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  glowSize?: number
  duration?: number
}

export function BorderGlow({
  children,
  className,
  glowColor = "hsl(var(--primary))",
  glowSize = 150,
  duration = 3,
}: BorderGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      })
    }
  }, [])

  useEffect(() => {
    if (!isHovered) {
      // Animate around the border when not hovered
      let angle = 0
      const interval = setInterval(() => {
        angle += 2
        const radian = (angle * Math.PI) / 180
        const x = (Math.cos(radian) * dimensions.width) / 2 + dimensions.width / 2
        const y = (Math.sin(radian) * dimensions.height) / 2 + dimensions.height / 2
        setPosition({ x, y })
      }, 20)
      return () => clearInterval(interval)
    }
  }, [isHovered, dimensions])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-xl", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 70%)`,
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />
      
      {/* Border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{
          background: `radial-gradient(${glowSize}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 60%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
