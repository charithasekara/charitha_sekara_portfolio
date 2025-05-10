"use client"

import Image from "next/image"
import Link from "next/link"
import { BentoGrid, BentoCard } from "@/components/bento-grid"
import CountUp from "@/components/count-up"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Briefcase, FolderOpen, ShoppingBag, GraduationCap, Heart, ArrowRight, Phone } from "lucide-react"

export default function ProjectsPage() {
  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Featured Project */}
        <BentoCard colSpan={4} rowSpan={2} variant="featured" hasPersistentHover>
          <div className="flex flex-col h-full">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Featured Project</h2>
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
              <Image src="/placeholder.svg?height=300&width=600" alt="Nathan Portfolio" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Nathan Portfolio</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-2">
                  Modern portfolio website with dark theme and interactive elements
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Framer Motion</span>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <Button className="btn-primary w-full sm:w-auto">
                View Project Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Project 2 */}
        <BentoCard colSpan={2} rowSpan={2}>
          <ProjectCard
            title="StyleLoom Ecommerce"
            category="Ecommerce"
            imageSrc="/placeholder.svg?height=400&width=300"
            className="h-full"
          />
        </BentoCard>

        {/* Card 3: Projects Count */}
        <BentoCard colSpan={2} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp end={56} labelText="Projects" labelIcon={<Briefcase className="w-4 h-4" />} />
          </div>
        </BentoCard>

        {/* Card 4: Category 1 */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500">
              <FolderOpen className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Portfolio</h3>
              <p className="text-sm text-gray-300 mt-1">06 Projects</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5: Category 2 */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/20 text-blue-500">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Ecommerce</h3>
              <p className="text-sm text-gray-300 mt-1">03 Projects</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Project 3 */}
        <BentoCard colSpan={3} rowSpan={2}>
          <ProjectCard
            title="NexGen Agency"
            category="Agency"
            imageSrc="/placeholder.svg?height=400&width=600"
            className="h-full"
          />
        </BentoCard>

        {/* Card 7: Category 3 */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/20 text-green-500">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Edutech</h3>
              <p className="text-sm text-gray-300 mt-1">02 Projects</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Project 4 */}
        <BentoCard colSpan={2} rowSpan={2}>
          <ProjectCard
            title="DevCraft Portfolio"
            category="Portfolio"
            imageSrc="/placeholder.svg?height=400&width=300"
            className="h-full"
          />
        </BentoCard>

        {/* Card 9: Category 4 */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-500/20 text-red-500">
              <Heart className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Health</h3>
              <p className="text-sm text-gray-300 mt-1">04 Projects</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 10: More Projects */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <Link href="#" className="flex flex-col items-center justify-center h-full text-center group">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-500 mb-2 group-hover:scale-110 transition-transform">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-base font-medium text-white">More Projects</h3>
            <p className="text-xs text-gray-400 flex items-center">
              View All <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </p>
          </Link>
        </BentoCard>

        {/* Card 11: Project 5 */}
        <BentoCard colSpan={3} rowSpan={1}>
          <ProjectCard
            title="Currentvandi Business"
            category="Business"
            imageSrc="/placeholder.svg?height=200&width=600"
            className="h-full"
          />
        </BentoCard>

        {/* New Card: Project Management */}
        <BentoCard colSpan={2} rowSpan={1} variant="minimal">
          <div className="flex items-center justify-center h-full text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center mb-2">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Project Management</h3>
              <p className="text-sm text-gray-300">Efficient delivery process</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 12: Contact CTA */}
        <BentoCard colSpan={6} rowSpan={1} variant="featured">
          <div className="flex flex-col md:flex-row items-center justify-between h-full gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Interested in My Work?</h3>
              <p className="text-gray-300 mb-4 md:mb-0">
                Let's discuss your project requirements and how I can help bring your vision to life.
              </p>
            </div>
            <Button className="btn-primary">
              <Phone className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  )
}
