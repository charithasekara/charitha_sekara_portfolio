"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { BentoGrid, BentoCard } from "@/components/bento-grid"
import CountUp from "@/components/count-up"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  Clock,
  ArrowRight,
  CheckCircle,
  Info,
  Code,
  PhoneIcon as BrandWhatsapp,
  BellIcon as BrandTelegram,
  Cpu,
  Phone,
} from "lucide-react"

export default function Home() {
  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Hero */}
        <BentoCard colSpan={4} rowSpan={2} variant="featured" hasPersistentHover>
          <div className="flex flex-col md:flex-row items-center gap-6" style={{ height: "100%" }}>
            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex-shrink-0">
              <Image
                src="/charithaDp.png"
                alt="Dp"
                width={160}
                height={160}
                className="profile-image object-cover"
              />
              <span className="absolute top-0 right-0 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
              >
                Charitha Weerasekara
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl text-purple-400 mb-4"
              >
                I&apos;m a UIX Engineer
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center md:justify-start"
              >
                <Button className="btn-primary">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Brief Bio */}
        <BentoCard colSpan={2} rowSpan={1}>
          <div style={{ height: "100%" }}>
            <h3 className="text-lg font-medium text-white mb-2">Software Engineer from India</h3>
            <p className="text-sm text-gray-300">
              With over 6 years of experience in web development, I specialize in creating responsive, user-friendly
              applications using modern technologies like React, Next.js, and TypeScript.
            </p>
          </div>
        </BentoCard>

        {/* Card 3: Projects Count */}
        <BentoCard colSpan={1} rowSpan={1}>
          <div className="center-content" style={{ height: "100%" }}>
            <CountUp end={56} labelText="Projects" labelIcon={<Briefcase className="w-4 h-4" />} />
          </div>
        </BentoCard>

        {/* Card 4: Experience Count */}
        <BentoCard colSpan={1} rowSpan={1}>
          <div className="center-content" style={{ height: "100%" }}>
            <CountUp end={6} labelText="Years Experience" labelIcon={<Clock className="w-4 h-4" />} />
          </div>
        </BentoCard>

        {/* Card 5: Featured Project */}
        <BentoCard colSpan={3} rowSpan={2}>
          <div className="relative project-card-content" style={{ height: "100%" }}>
            <Image src="/placeholder.svg?height=400&width=600" alt="Featured Project" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white">Featured Project</h3>
              <p className="text-sm text-gray-300 mb-4">Modern web application with Next.js and Tailwind</p>
              <Link href="/projects" className="text-purple-400 text-sm flex items-center">
                <Button className="btn-primary">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Available to Work */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="center-content" style={{ height: "100%" }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/20 text-green-500 mb-2">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-white">Available to Work</h3>
            <p className="text-xs text-gray-400">Open for freelance projects</p>
          </div>
        </BentoCard>

        {/* Card 7: Learn More About Me */}
        <BentoCard colSpan={2} rowSpan={1}>
          <Link href="/about" className="center-content group" style={{ height: "100%" }}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20 text-purple-500 mb-2 group-hover:scale-110 transition-transform">
              <Info className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-white">Learn More About Me</h3>
            <p className="text-xs text-gray-400 flex items-center">
              I am a UI/UX Engineer with a passion for building web applications. 
            </p>
            <p className="text-xs text-gray-400 flex items-center">
              <Button className="btn-primary">
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4" />
              </Button> 
            </p>
          </Link>
        </BentoCard>

        {/* Card 8: Highlighted Service */}
        <BentoCard colSpan={3} rowSpan={1}>
          <Link href="/services" className="service-card-content group" style={{ height: "100%" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-500 group-hover:scale-110 transition-transform">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">Web Development</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Crafting functional websites with clean code and responsive design to meet client objectives and enhance
              user experiences.
            </p>
            <div className="mt-auto flex items-center text-purple-400 text-sm">
              View Services <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </BentoCard>

        {/* Card 9: WhatsApp */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <Link href="/contact" className="center-content group" style={{ height: "100%" }}>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-500 mb-2 group-hover:scale-110 transition-transform">
              <BrandWhatsapp className="h-6 w-6" />
            </div>
            <h3 className="text-base font-medium text-white">WhatsApp</h3>
            <p className="text-xs text-gray-400">Connect with me</p>
          </Link>
        </BentoCard>

        {/* Card 10: Telegram */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <Link href="/contact" className="center-content group" style={{ height: "100%" }}>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 mb-2 group-hover:scale-110 transition-transform">
              <BrandTelegram className="h-6 w-6" />
            </div>
            <h3 className="text-base font-medium text-white">Telegram</h3>
            <p className="text-xs text-gray-400">Message me</p>
          </Link>
        </BentoCard>

        {/* Card 11: Skills Overview */}
        <BentoCard colSpan={2} rowSpan={1}>
          <Link href="/skills" className="flex flex-col" style={{ height: "100%" }}>
            <h3 className="text-lg font-medium text-white mb-3">My Skills Overview</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="flex flex-col items-center p-2 rounded-lg bg-gray-800/50">
                <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">React</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-gray-800/50">
                <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">Next.js</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-gray-800/50">
                <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">TypeScript</span>
              </div>
            </div>
            <div className="mt-auto flex items-center text-purple-400 text-sm">
              View All Skills <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </BentoCard>

        {/* Card 12: Get in Touch */}
        <BentoCard colSpan={6} rowSpan={1} variant="featured">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4" style={{ height: "100%" }}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center sm:text-left">Get in Touch</h3>
              <p className="text-gray-300 mb-4 sm:mb-0 text-center sm:text-left">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
            </div>
            <Button className="btn-primary w-full sm:w-auto">
              <Phone className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  )
}
