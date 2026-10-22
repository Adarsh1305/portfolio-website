"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion } from "framer-motion"

export function TargetCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const requestRef = useRef<number | undefined>(undefined);
  const targetPosition = useRef({ x: 0, y: 0 })

  const animate = useCallback(() => {
    setPosition((prev) => ({
      x: prev.x + (targetPosition.current.x - prev.x) * 0.15,
      y: prev.y + (targetPosition.current.y - prev.y) * 0.15,
    }))
    requestRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      )
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [animate])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        style={{
          left: position.x,
          top: position.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isPointer ? 48 : 12,
            height: isPointer ? 48 : 12,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] hidden lg:block"
        style={{
          left: position.x,
          top: position.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border-2 border-primary/50"
          animate={{
            width: isPointer ? 64 : 40,
            height: isPointer ? 64 : 40,
            opacity: isPointer ? 0.5 : 0.3,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        />
      </motion.div>
    </>
  )
}
