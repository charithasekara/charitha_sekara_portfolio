"use client"
import { BentoGrid, BentoCard } from "@/components/bento-grid"
import { BentoShowcase } from "@/components/bento-showcase"
import CountUp from "@/components/count-up"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Languages,
  Award,
  Clock,
  Users,
  Heart,
  Trophy,
  Lightbulb,
  MapPin,
  Shield,
  ArrowRight,
  Cpu,
} from "lucide-react"

export default function AboutPage() {
  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Bio Showcase */}
        <BentoShowcase
          title="About Pragadesh V"
          description="I'm a passionate software engineer with 6+ years of experience in web development. I specialize in creating responsive, user-friendly applications using modern technologies like React, Next.js, and TypeScript."
          imageSrc="/placeholder.svg?height=400&width=800"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">React</span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Next.js</span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">TypeScript</span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Tailwind CSS</span>
          </div>
        </BentoShowcase>

        {/* Card 2: Education */}
        <BentoCard colSpan={2} rowSpan={1}>
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/20 text-blue-500">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Education</h3>
              <p className="text-sm text-gray-300 mt-1">MIT University</p>
              <p className="text-xs text-gray-400">Software Engineering</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Languages */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/20 text-green-500">
              <Languages className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Languages</h3>
              <p className="text-sm text-gray-300 mt-1">English & Tamil</p>
              <p className="text-xs text-gray-400">Fluent</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Certifications */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp end={8} labelText="Certifications" labelIcon={<Award className="w-4 h-4" />} />
          </div>
        </BentoCard>

        {/* Card 5: Journey */}
        <BentoCard colSpan={2} rowSpan={2}>
          <h3 className="text-lg font-medium text-white mb-3">My Journey</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white">Started freelancing in 2019</p>
                <p className="text-xs text-gray-400">First client project</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white">Joined tech startup in 2021</p>
                <p className="text-xs text-gray-400">Lead developer role</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-white">Launched freelance career in 2023</p>
                <p className="text-xs text-gray-400">Full-time independent developer</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 6: Collaborations */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp end={7} labelText="Collaborations" labelIcon={<Users className="w-4 h-4" />} />
          </div>
        </BentoCard>

        {/* Card 7: Hobbies */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-red-500/20 text-red-500">
              <Heart className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Hobbies</h3>
              <p className="text-sm text-gray-300 mt-1">Tech Enthusiast</p>
              <p className="text-xs text-gray-400">Good Boy</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Achievements */}
        <BentoCard colSpan={2} rowSpan={1}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-500/20 text-yellow-500">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Achievements</h3>
              <p className="text-sm text-gray-300 mt-1">Top Freelancer 2023</p>
              <p className="text-xs text-gray-400">
                Recognized for exceptional client satisfaction and project delivery
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 9: Fun Fact */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500">
              <Lightbulb className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Fun Fact</h3>
              <p className="text-sm text-gray-300 mt-1">I love exploring tech stacks</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 10: Location */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/20 text-blue-500">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Location</h3>
              <p className="text-sm text-gray-300 mt-1">India, IST</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 11: Professional Values */}
        <BentoCard colSpan={3} rowSpan={1}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/20 text-green-500">
              <Shield className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-white">Professional Values</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Speed Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Quality Code</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Continuous Learning</span>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 12: Skills Preview */}
        <BentoCard colSpan={1} rowSpan={1} variant="featured">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center md:text-left">My Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-4">
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
                <div className="flex flex-col items-center p-2 rounded-lg bg-gray-800/50">
                  <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                  <span className="text-xs text-gray-300">Tailwind</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg bg-gray-800/50">
                  <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                  <span className="text-xs text-gray-300">Framer Motion</span>
                </div>
              </div>
            </div>
            <Button className="btn-primary w-full md:w-auto">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  )
}
