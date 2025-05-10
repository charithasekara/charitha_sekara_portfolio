"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
  labelText?: string
  labelIcon?: React.ReactNode
}

export default function CountUp({
  end,
  duration = 2000,
  suffix = "+",
  className = "",
  labelText,
  labelIcon,
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return (
    <div ref={countRef} className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className={`count-up ${className}`}
      >
        {count}
        {suffix}
      </motion.div>
      {labelText && (
        <div className="count-label">
          {labelIcon}
          <span>{labelText}</span>
        </div>
      )}
    </div>
  )
}
