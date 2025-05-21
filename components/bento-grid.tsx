"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface BentoGridProps {
  children: React.ReactNode
  className?: string
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-3 auto-rows-[minmax(180px,auto)]",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6
  rowSpan?: 1 | 2 | 3 | 4 
  hasPersistentHover?: boolean
  variant?: "default" | "featured" | "minimal"
}

export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  hasPersistentHover = false,
  variant = "default",
}: BentoCardProps) {
  const colSpanClass = {
  1: "sm:col-span-1 md:col-span-2 lg:col-span-1",
  2: "sm:col-span-2 md:col-span-3 lg:col-span-2",
  3: "sm:col-span-3 md:col-span-3 lg:col-span-3",
  4: "sm:col-span-4 md:col-span-4 lg:col-span-4",
  5: "sm:col-span-5 md:col-span-5 lg:col-span-5",
  6: "sm:col-span-6 md:col-span-6 lg:col-span-6",
}[colSpan]


  const rowSpanClass = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
  }[rowSpan]

  const variantClass = {
    default: "glass-card",
    featured: "glass-card featured",
    minimal: "glass-card minimal",
  }[variant]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bento-card col-span-1 row-span-1",
        colSpanClass,
        rowSpanClass,
        variantClass,
        hasPersistentHover && "shadow-md shadow-purple-500/10 border-purple-500/30",
        className,
      )}
    >
      <div className="flex flex-col">{children}</div>
    </motion.div>
  )
}
