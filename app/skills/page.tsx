"use client";

import { BentoGrid, BentoCard } from "@/components/bento-grid";
import CountUp from "@/components/count-up";
import SkillCard from "@/components/skill-card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Cpu,
  Phone,
  Figma,
  FileCode,
  Wand,
  MessageSquare,
  Users,
  Code,
  Palette,
  Layout,
  ChevronRight,
  Github,
  PencilRuler,
  AudioWaveform,
  Bolt,
  Waves,
  Hourglass,
  Megaphone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandBehance, IconBrandDribbble } from "@tabler/icons-react";

export default function SkillsPage() {
  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Overview */}
        <BentoCard colSpan={2} rowSpan={1} className="md:col-span-2 relative">
          <svg
            className="absolute inset-0 w-full h-full z-0"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 100 100"
          >
            <image
              href="/bg.svg"
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
          <div className="flex flex-col h-full">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Code className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">My Expertise</p>
            </div>
            <h2 className="text-lg mt-2 mb-3 font-medium text-white text-center">
              Technical & Design Skills
            </h2>
            <p className="text-sm text-gray-300 text-center">
              A comprehensive overview of my expertise in UI/UX design, frontend
              development, and modern web technologies, honed through academic
              training and professional experience.
            </p>
          </div>
        </BentoCard>

        {/* Card 2: Design Tools */}
        <BentoCard colSpan={2} rowSpan={1} className="md:col-span-2">
          <div className="flex flex-col h-full">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Palette className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">Design Toolkit</p>
            </div>
            <h3 className="text-lg mt-2 mb-3 font-medium text-white text-center">
              Design Tools
            </h3>
            <div className="space-y-3">
              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[100px]">
                  <PencilRuler className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">Figma</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <PencilRuler className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">Adobe XD</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <PencilRuler className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">Photoshop</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <PencilRuler className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">
                    Illustrator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Development Tools */}
        <BentoCard colSpan={2} rowSpan={3} className="md:col-span-3">
          <div className="flex flex-col h-full">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Cpu className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">Development Toolkit</p>
            </div>
            <h3 className="text-lg mt-2 mb-3 font-medium text-white text-center">
              Development Tools
            </h3>
            <h2 className="mb-2">Front-End</h2>
            <div className="space-y-3 mb-3">
              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">ReactJs</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">Next.js</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">Angular</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">Vue</p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">HTML</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">
                    CSS | SCSS
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mb-2">Back-End</h2>
            <div className="space-y-3 mb-3">
              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">NodeJs</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">Rest APIs</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">GraphQL</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">JWT Auth</p>
                </div>
              </div>
            </div>

            <h2 className="mb-2">Database & Storage</h2>
            <div className="space-y-3 mb-3">
              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">MySQL</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">MongoDB</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">GraphQL</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">JWT Auth</p>
                </div>
              </div>
            </div>

            <h2 className="mb-2">Other</h2>
            <div className="space-y-3 mb-3">
              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">
                    Github | Bitbucket
                  </p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">Vercel</p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">AWS</p>
                </div>
                <div className="flex items-center gap-3 border border-stone-500/20 p-1 rounded-lg pl-1 px-2 bg-purple-500/20 text-white w-full sm:w-auto flex-1 min-w-[118px]">
                  <FileCode className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-purple-500" />
                  <p className="text-sm text-gray-300 font-medium">Jira</p>
                </div>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Certifications Count */}
        <BentoCard
          colSpan={1}
          rowSpan={1}
          variant="minimal"
          className="md:col-span-2"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp
              end={3}
              labelText="Certifications"
              labelIcon={<Award className="w-4 h-4" />}
            />
          </div>
        </BentoCard>
        {/* Card 5: UI Libraries */}
        <BentoCard
          colSpan={1}
          rowSpan={1}
          variant="minimal"
          className="md:col-span-1"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative flex-shrink-0 justify-center items-center z-1">
              <Image
                src="/mui3d.png"
                alt="Profile picture"
                width={160}
                height={160}
                className="object-cover rounded-full  p-3 h-24 w-24"
              />
              <div className="absolute inset-0 border border-blue-500 rounded-full animate-pulse w-full h-full z-0" />
            </div>
            <div className="count-label flex items-center gap-2 mt-2 border border-stone-500 p-1 rounded-full px-2 bg-purple-500/20 text-white">
              Material UI
            </div>
          </div>
        </BentoCard>

       
        {/* Card 9: Soft Skill 1 */}
        <BentoCard
          colSpan={1}
          rowSpan={1}
          variant="minimal"
          className="md:col-span-1"
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mb-2">
              <AudioWaveform className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Communication</h3>
            <p className="text-xs text-gray-400">Clear & effective</p>
          </div>
        </BentoCard>


        {/* Card 9: Soft Skill 1 */}
        <BentoCard
          colSpan={1}
          rowSpan={1}
          variant="minimal"
          className="md:col-span-1"
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-2">
              <Bolt className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Problem-Solving </h3>
            <p className="text-xs text-gray-400">Analytical & Creative</p>
          </div>
        </BentoCard>


        {/* Card 7: Frameworks & Libraries */}
        <BentoCard colSpan={3} rowSpan={1} className="md:col-span-3">
          <div className="flex flex-col h-full">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Cpu className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">Core Technologies</p>
            </div>
            <h3 className="text-lg mt-2 mb-3 font-medium text-white text-center">
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">HTML</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">CSS</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">SCSS</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">JavaScript</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Cpu className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </BentoCard>

        
        {/* Card 9: Soft Skill 1 */}
        <BentoCard
          colSpan={1}
          rowSpan={1}
          variant="minimal"
          className="md:col-span-1"
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-500 flex items-center justify-center mb-2">
              <Waves className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Adaptability</h3>
            <p className="text-xs text-gray-400">Flexible & Open-minded</p>
          </div>
        </BentoCard>


        {/* Card 8: Methodologies */}
        <BentoCard colSpan={2} rowSpan={1} className="md:col-span-3">
          <div className="flex flex-col h-full">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Layout className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">Design Methodologies</p>
            </div>
            <h3 className="text-lg mt-2 mb-3 font-medium text-white text-center">
              Methodologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Layout className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">User Research</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Layout className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">Wireframing</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Layout className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">Design Systems</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-purple-500/20">
                <Layout className="h-5 w-5 text-purple-500 mb-1" />
                <span className="text-xs text-gray-300">Info Architecture</span>
              </div>
            </div>
          </div>
        </BentoCard>

        <BentoCard
          colSpan={1}
          rowSpan={1}
          variant="minimal"
          className="md:col-span-1"
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 text-fuchsia-500 flex items-center justify-center mb-2">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Teamwork</h3>
            <p className="text-xs text-gray-400">Collaborative & supportive</p>
          </div>
        </BentoCard>

        {/* Card 9: Soft Skill 1 */}
        <BentoCard
          colSpan={1}
          rowSpan={1}
          variant="minimal"
          className="md:col-span-1"
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-500 flex items-center justify-center mb-2">
              <Hourglass className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Time Management</h3>
            <p className="text-xs text-gray-400">Organized & Efficient</p>
          </div>
        </BentoCard>

        {/* Card 10: Soft Skill 2 */}
        <BentoCard
          colSpan={1}
          rowSpan={1}
          variant="minimal"
          className="md:col-span-1"
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center mb-2">
              <Megaphone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">Attention to Detail</h3>
            <p className="text-xs text-gray-400"> Precise & Thorough</p>
          </div>
        </BentoCard>

      {/* Card 12: Social Links */}
        <BentoCard colSpan={1} rowSpan={1} className="md:col-span-2">
          <div className="flex flex-col h-full">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Code className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">Connect With Me</p>
            </div>
            <h3 className="text-lg mt-2 mb-3 font-medium text-white text-center">
              Portfolio & Profiles
            </h3>
            <div className="flex flex-wrap gap-2 justify-between p-2 bg-purple-500/20 rounded-2xl">
              <Button className="btn-primary text-white w-full sm:w-auto flex-1 min-w-[150px]">
                <Link
                  href="https://behance.net/charithweerasekara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full link-btn"
                  aria-label="Visit Behance profile"
                >
                  <span className="flex items-center">
                    <IconBrandBehance stroke={2} className="h-5 w-5 mr-2" />
                    Behance
                  </span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button className="btn-primary text-white w-full sm:w-auto flex-1 min-w-[150px]">
                <Link
                  href="https://github.com/charithmadhushansekara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full link-btn"
                  aria-label="Visit GitHub profile"
                >
                  <span className="flex items-center">
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </span>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </BentoCard>

        
      </BentoGrid>
    </section>
  );
}
