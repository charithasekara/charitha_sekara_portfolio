"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BentoShowcaseProps {
  title: string
  description: string
  imageSrc: string
  href?: string
  className?: string
  children?: React.ReactNode
}

export function BentoShowcase({ title, description, imageSrc, href = "#", className, children }: BentoShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bento-card col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 row-span-2 overflow-hidden p-0 glass-card",
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl ">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105 rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-300 mb-4 max-w-xl">{description}</p>
          {children}
          {/* {href && (
            <Link
              href={href}
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
            >
              Learn more
            </Link>
          )} */}
        </div>
      </div>
    </motion.div>
  )
}
