"use client"
import { BentoGrid, BentoCard } from "@/components/bento-grid"
import CountUp from "@/components/count-up"
import ServiceCard from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Code, Paintbrush, Search, Globe, Briefcase, Heart, CheckCircle, Zap, Phone } from "lucide-react"

export default function ServicesPage() {
  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Services Overview */}
        <BentoCard colSpan={4} rowSpan={1} variant="featured" hasPersistentHover>
          <div className="flex flex-col h-full">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">My Services</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              I offer a comprehensive range of digital services to help businesses and individuals establish a strong
              online presence. From web development to SEO optimization, my goal is to deliver high-quality solutions
              that meet your specific needs and exceed your expectations.
            </p>
          </div>
        </BentoCard>

        {/* Card 2: Web Development */}
        <BentoCard colSpan={3} rowSpan={2}>
          <ServiceCard
            icon={<Code className="h-5 w-5" />}
            title="Web Development"
            description="Crafting functional websites with clean code and responsive design to meet client objectives and enhance user experiences."
            experience="5+ Years"
            completedWorks="30+"
            hourlyRate="150"
          />
        </BentoCard>

        {/* Card 3: Client Satisfaction */}
        <BentoCard colSpan={2} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp
              end={99}
              suffix="%"
              labelText="Client Satisfaction"
              labelIcon={<CheckCircle className="w-4 h-4" />}
            />
          </div>
        </BentoCard>

        {/* Card 4: Web Dev Works Count */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp end={30} labelText="Web Dev Works" labelIcon={<Briefcase className="w-4 h-4" />} />
          </div>
        </BentoCard>

        {/* Card 5: Web Design */}
        <BentoCard colSpan={3} rowSpan={2}>
          <ServiceCard
            icon={<Paintbrush className="h-5 w-5" />}
            title="Web Design"
            description="Creating visually stunning and user-centric designs that reflect brand identity and captivate target audiences effectively."
            experience="4+ Years"
            completedWorks="20+"
            hourlyRate="100"
          />
        </BentoCard>

        {/* Card 6: Web Design Works Count */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp end={20} labelText="Web Design Works" labelIcon={<Briefcase className="w-4 h-4" />} />
          </div>
        </BentoCard>

        {/* Card 7: Category 1 */}
        <BentoCard colSpan={2} rowSpan={1} variant="minimal">
          <div className="flex items-center justify-center h-full text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mb-2">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Global Clients</h3>
              <p className="text-sm text-gray-300">Working across time zones</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Category 2 */}
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

        {/* Card 9: SEO Optimization */}
        <BentoCard colSpan={3} rowSpan={1}>
          <ServiceCard
            icon={<Search className="h-5 w-5" />}
            title="SEO Optimization"
            description="For boosting your traffic through strategic keyword research, on-page optimization, and technical SEO improvements."
            experience="5+ Years"
            completedWorks="30+"
            hourlyRate="150"
          />
        </BentoCard>

        {/* Card 10: Webflow Partnership */}
        <BentoCard colSpan={3} rowSpan={1}>
          <ServiceCard
            icon={<Globe className="h-5 w-5" />}
            title="Webflow Partner"
            description="For responsive websites with custom animations, interactions, and CMS integration using Webflow's powerful platform."
            experience="4+ Years"
            completedWorks="20+"
            hourlyRate="100"
          />
        </BentoCard>

        {/* Card 11: Benefit */}
        <BentoCard colSpan={2} rowSpan={1}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-yellow-500/20 text-yellow-500">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Speed Delivery</h3>
              <p className="text-sm text-gray-300 mt-1">
                Quick turnaround times with exceptional quality. I prioritize efficiency without compromising on the
                details that make your project stand out.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 12: Ready to Start CTA */}
        <BentoCard colSpan={6} rowSpan={1} variant="featured">
          <div className="flex flex-col md:flex-row items-center justify-between h-full gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Start?</h3>
              <p className="text-gray-300 mb-4 md:mb-0">
                Let's discuss your project requirements and create a tailored solution that meets your needs.
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
