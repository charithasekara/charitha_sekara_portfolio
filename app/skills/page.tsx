"use client"
import { BentoGrid, BentoCard } from "@/components/bento-grid"
import CountUp from "@/components/count-up"
import SkillCard from "@/components/skill-card"
import { Button } from "@/components/ui/button"
import { Award, Cpu, Phone, Figma, FileText, ShoppingBag, Mail, FileCode, Users, MessageSquare } from "lucide-react"

export default function SkillsPage() {
  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Overview */}
        <BentoCard colSpan={4} rowSpan={1} variant="featured" hasPersistentHover>
          <div className="flex flex-col h-full">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">My Skills</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              I've developed a diverse skill set over my 6+ years in the industry, focusing on modern web technologies
              and design tools. Here's a comprehensive overview of my technical expertise and capabilities.
            </p>
          </div>
        </BentoCard>

        {/* Card 2: Design Tools */}
        <BentoCard colSpan={2} rowSpan={2}>
          <h3 className="text-lg font-medium text-white mb-3">Design Tools</h3>
          <div className="space-y-3">
            <SkillCard
              icon={<Figma className="h-5 w-5 text-purple-500" />}
              name="Figma"
              category="Design Tool"
              progress={95}
            />
            <SkillCard
              icon={<FileText className="h-5 w-5 text-purple-500" />}
              name="Notion"
              category="Productivity Tool"
              progress={90}
            />
          </div>
        </BentoCard>

        {/* Card 3: Certifications Count */}
        <BentoCard colSpan={2} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp end={8} labelText="Certifications" labelIcon={<Award className="w-4 h-4" />} />
          </div>
        </BentoCard>

        {/* Card 4: Development Tools */}
        <BentoCard colSpan={3} rowSpan={2}>
          <h3 className="text-lg font-medium text-white mb-3">Development Tools</h3>
          <div className="space-y-3">
            <SkillCard
              icon={<FileCode className="h-5 w-5 text-purple-500" />}
              name="Webflow"
              category="No-code Tool"
              progress={85}
            />
            <SkillCard
              icon={<ShoppingBag className="h-5 w-5 text-purple-500" />}
              name="Shopify"
              category="Ecommerce Tool"
              progress={80}
            />
            <SkillCard
              icon={<Cpu className="h-5 w-5 text-purple-500" />}
              name="React"
              category="Frontend Framework"
              progress={95}
            />
            <SkillCard
              icon={<Cpu className="h-5 w-5 text-purple-500" />}
              name="Next.js"
              category="React Framework"
              progress={90}
            />
          </div>
        </BentoCard>

        {/* Card 5: Skill: Mailchimp */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <SkillCard
            icon={<Mail className="h-5 w-5 text-purple-500" />}
            name="Mailchimp"
            category="Marketing Tool"
            progress={85}
          />
        </BentoCard>

        {/* Card 6: Skill: WordPress */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <SkillCard
            icon={<FileCode className="h-5 w-5 text-purple-500" />}
            name="WordPress"
            category="CMS Tool"
            progress={90}
          />
        </BentoCard>

        {/* Card 7: Frameworks */}
        <BentoCard colSpan={3} rowSpan={1}>
          <h3 className="text-lg font-medium text-white mb-3">Frameworks & Libraries</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
            <div className="flex flex-col items-center p-2 rounded-lg bg-gray-800/50">
              <Cpu className="h-5 w-5 text-purple-500 mb-1" />
              <span className="text-xs text-gray-300">Node.js</span>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Certifications */}
        <BentoCard colSpan={3} rowSpan={1}>
          <h3 className="text-lg font-medium text-white mb-3">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/50">
              <Award className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-white">Certified Web Developer</p>
                <p className="text-xs text-gray-400">Frontend Masters</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/50">
              <Award className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-white">React Advanced</p>
                <p className="text-xs text-gray-400">Meta</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-800/50">
              <Award className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-sm text-white">TypeScript Professional</p>
                <p className="text-xs text-gray-400">Microsoft</p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 9: Soft Skill 1 */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-500 mb-2">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Communication</h3>
            <p className="text-xs text-gray-400">Clear & effective</p>
          </div>
        </BentoCard>

        {/* Card 10: Soft Skill 2 */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 mb-2">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Team Collaboration</h3>
            <p className="text-xs text-gray-400">Adaptable & supportive</p>
          </div>
        </BentoCard>

        {/* Card 11: Skill: Jira */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <SkillCard
            icon={<Cpu className="h-5 w-5 text-purple-500" />}
            name="Jira"
            category="Management Tool"
            progress={80}
          />
        </BentoCard>

        {/* Card 12: Hire Me CTA */}
        <BentoCard colSpan={6} rowSpan={1} variant="featured">
          <div className="flex flex-col md:flex-row items-center justify-between h-full gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Hire Me</h3>
              <p className="text-gray-300 mb-4 md:mb-0">
                Looking for a skilled developer with this expertise? Let's discuss your project requirements.
              </p>
            </div>
            <Button className="btn-primary">
              <Phone className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </BentoCard>
        {/* Card X: Continuous Learning */}
        <BentoCard colSpan={2} rowSpan={1} variant="minimal">
          <div className="flex items-center justify-center h-full text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center mb-2">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white">Continuous Learning</h3>
              <p className="text-sm text-gray-300">Always improving my skills</p>
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  )
}
