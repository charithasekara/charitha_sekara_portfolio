"use client";
import { BentoGrid, BentoCard } from "@/components/bento-grid";
import { BentoShowcase } from "@/components/bento-showcase";
import CountUp from "@/components/count-up";
import { Button } from "@/components/ui/button";
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
  Ruler,
  SquarePen,
  School,
  MapPinHouse,
  Asterisk,
  CodeXml,
  Hexagon,
  PencilRuler,
  SpellCheck2,
  Star,
  SmilePlus,
  PaintbrushVertical,
  Book,
  MapPinPlusInside,
  Code,
  CookingPot,
  BookOpenCheck,
  BriefcaseBusiness,
  Braces,
  Activity,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Bio Showcase */}
        <BentoShowcase
          title="Hi,"
          description="I'm a UIX engineer with 3+ years of experience in design & development. I specialize in designing and creating responsive, user-friendly applications using modern technologies like Figma, React, Next.js, and Angular."
          imageSrc="/51.png"
          className="sm:col-span-3 md:col-span-2 h-full"
        >
          <div className="flex  gap-2 mb-4 animate-scroll whitespace-nowrap">
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              React
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Next.js
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Angular
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Figma
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Tailwind CSS
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Framer Motion
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              UI/UX
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Web Design & Development
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              UI/UX Design
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Responsive
            </span>

            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              React
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Next.js
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Angular
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Figma
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Tailwind CSS
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Framer Motion
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              UI/UX
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Web Design & Development
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              UI/UX Design
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Responsive
            </span>

            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              React
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Next.js
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Angular
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Figma
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Tailwind CSS
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Framer Motion
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              UI/UX
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Web Design & Development
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              UI/UX Design
            </span>
            <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
              Responsive
            </span>
          </div>
        </BentoShowcase>

        {/* Card 2: Education */}
        <BentoCard colSpan={2} rowSpan={1}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-400/20 text-gray-50">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Education</h3>
            </div>
          </div>
          <div className="flex items-start gap-3 border-stone-500 p-1 rounded-xl py-2 px-2 bg-purple-500/20 text-purple-500">
            <SquarePen className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-purple-400" />
            <div>
              <p className="text-sm text-gray-200 text-bold font-medium">
                Physical Science stream
              </p>
              <p className="text-xs text-gray-400 font-medium">
                Anuradhapura Central College
              </p>
            </div>
          </div>

          <div className="flex mt-2 items-start gap-3 border-stone-500 p-1 rounded-xl py-2 px-2 bg-purple-500/20 text-purple-500">
            <School className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-purple-400" />
            <div>
              <p className="text-sm text-gray-200 text-bold font-medium">
                BSC(Hons) Computing and Information Systems
              </p>
              <p className="text-xs text-gray-400 font-medium">
                Faculty of Computing, Sabaragamuwa University of Sri Lanka
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: Languages */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-400/20 text-gray-50">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-3 text-lg font-medium text-white">Location</h3>
          </div>
          <div className="mt-4 flex items-start gap-3 border-stone-500 p-1 rounded-xl py-2 px-2 bg-purple-500/20 text-purple-500">
            <MapPinHouse className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-purple-400" />
            <div>
              <p className="text-sm text-gray-200 text-bold font-medium">
                Sri Lanka
              </p>
              <p className="text-xs text-gray-400 font-medium">
                Anuradhapura Distric
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 4: Certifications */}
        {/* <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp
              end={8}
              labelText="Certifications"
              labelIcon={<Award className="w-4 h-4" />}
            />
          </div>
        </BentoCard> */}

        {/* Card 6: Collaborations */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-col items-center justify-center h-full">
            <CountUp
              end={7}
              labelText="Collaborations"
              labelIcon={<Users className="w-4 h-4" />}
            />
          </div>
        </BentoCard>

        {/* Card 5: Journey */}
        <BentoCard colSpan={2} rowSpan={2}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-400/20 text-gray-50">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">
                Work Experience
              </h3>
            </div>
          </div>
          <div className="space-y-3 p-2 py-3 rounded-xl bg-purple-500/20">
            <div className="flex gap-3 items-start mt-[4px]">
              <MapPinHouse className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-purple-400" />
              <div className="flex flex-col">
                <div className="flex  gap-6">
                  <h4>Trainee UIX Engineer</h4>
                  <span className="border bg-purple-950/20 border-purple-100/20 px-2 py-1 text-xs rounded-full">
                    2023-2024
                  </span>
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    Wavenet pvt Ltd
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-purple-400/20 my-2 -m-2"></div>

            <h5 className=" text-gray-200">Responsibilities</h5>

            <div>
              <ul className="list-disc list-inside text-gray-400 text-xs">
                <li>Designing and developing user interfaces</li>
                <li>Collaborating with cross-functional teams</li>
                <li>Conducting user research and testing</li>
                <li>Creating wireframes and prototypes</li>
                <li>Implementing responsive design principles</li>
              </ul>
            </div>

            <div className="h-px bg-purple-400/20 my-2 -m-2"></div>

            <h5 className=" text-gray-200">Tools & Technologies</h5>

            <div className="list-disc  flex text-gray-400 text-xs flex-wrap gap-3 mb-3">
              <span className="text-xs border rounded-md bg-purple-500/20 text-gray-400 px-2 py-1">
                Figma
              </span>
              <span className="text-xs border rounded-md bg-purple-500/20 text-gray-400 px-2 py-1">
                Angular
              </span>
              <span className="text-xs border rounded-md bg-purple-500/20 text-gray-400 px-2 py-1">
                Scss
              </span>
              <span className="text-xs border rounded-md bg-purple-500/20 text-gray-400 px-2 py-1">
                Adobe Illustrator
              </span>
              <span className="text-xs border rounded-md bg-purple-500/20 text-gray-400 px-2 py-1">
                Tailwind CSS
              </span>
              <span className="text-xs border rounded-md bg-purple-500/20 text-gray-400 px-2 py-1">
                Adobe XD
              </span>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Hobbies */}
        <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex flex-row gap-2 items-center justify-center">
            <SmilePlus className="h-4 w-4 text-purple-500" />
            <p className="text-xs text-gray-400">Hobbies</p>
          </div>
          <h3 className="text-lg mt-2 font-medium text-white flex justify-center">
            More Details
          </h3>
          <div className="flex flex-col gap-2 w-full max-w-2xl my-3 mb-4 -mx-[157px] ">
            {/* Row 1 */}
            <div className="flex animate-scroll whitespace-nowrap">
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <PaintbrushVertical className="h-4 w-4 text-purple-500" />
                Painting
              </span>
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <Book className="h-4 w-4 text-purple-500" />
                Reading
              </span>
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <MapPinPlusInside className="h-4 w-4 text-purple-500" />
                Traveling
              </span>
              {/* Duplicate for seamless looping */}
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <PaintbrushVertical className="h-4 w-4 text-purple-500" />
                Painting
              </span>
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <Book className="h-4 w-4 text-purple-500" />
                Reading
              </span>
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <MapPinPlusInside className="h-4 w-4 text-purple-500" />
                Traveling
              </span>
            </div>
            {/* Row 2 */}
            <div className="flex animate-scroll-reverse whitespace-nowrap">
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <Code className="h-4 w-4 text-purple-500" />
                Coding
              </span>
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <CookingPot className="h-4 w-4 text-purple-500" />
                Coocking
              </span>
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <BookOpenCheck className="h-4 w-4 text-purple-500" />
                Writing
              </span>
              {/* Duplicate for seamless looping */}
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <Code className="h-4 w-4 text-purple-500" />
                Coding
              </span>
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <CookingPot className="h-4 w-4 text-purple-500" />
                Coocking
              </span>
              <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                <BookOpenCheck className="h-4 w-4 text-purple-500" />
                Writing
              </span>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Achievements */}
        <BentoCard colSpan={1} rowSpan={1}>
          <div className="flex flex-col justify-center items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-400/20 text-gray-50">
              <Braces className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Hackathons</h3>
            </div>
          </div>
          <div className="flex items-start gap-3 border-stone-500 p-1 rounded-xl py-2 px-2 bg-purple-500/20 text-purple-500">
            <div className="p-1 rounded-md bg-purple-400/20 text-purple-400">
              <Trophy className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm text-gray-200 text-bold font-medium">
                UCSC | Finalists in MadHAck 2021
              </p>
              <p className="text-xs mt-1 text-gray-400 font-medium">
                Developer | Designer
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 8: Extra Activities */}
        <BentoCard colSpan={1} rowSpan={1}>
          <div className="flex flex-col justify-center items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-400/20 text-gray-50">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">
                Extra Activities
              </h3>
            </div>
          </div>
          
          <div className="flex items-start gap-3 border-stone-500 p-1 rounded-xl py-2 px-2 bg-purple-500/20 text-purple-500">
            <div className="p-1 rounded-md bg-purple-400/20 text-purple-400">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm text-gray-200 text-bold font-medium">
                IEEE Student Branch | SUSL
              </p>
              <p className="text-xs mt-1 text-gray-400 font-medium">Past Member</p>
            </div>
          </div>

          {/* <div className="flex items-start gap-3 border-stone-500 p-1 rounded-xl py-2 px-2 bg-purple-500/20 text-purple-500">
            <div className="p-1 rounded-md bg-purple-400/20 text-purple-400">
              <Trophy className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm text-gray-200 text-bold font-medium">
                IEEE Student Branch | SUSL
              </p>
              <p className="text-xs text-gray-400 font-medium">Past Member</p>
            </div>
          </div> */}
          
        </BentoCard>

        {/* Card 9: Fun Fact */}
        {/* <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500">
              <Lightbulb className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Fun Fact</h3>
              <p className="text-sm text-gray-300 mt-1">
                I love exploring tech stacks
              </p>
            </div>
          </div>
        </BentoCard> */}

        {/* Card 10: Location */}
        {/* <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/20 text-blue-500">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Location</h3>
              <p className="text-sm text-gray-300 mt-1">India, IST</p>
            </div>
          </div>
        </BentoCard> */}

        {/* Card 11: Professional Values */}
        {/* <BentoCard colSpan={3} rowSpan={1}>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-500/20 text-green-500">
              <Shield className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-white">
                Professional Values
              </h3>
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
        </BentoCard> */}

        {/* Card 12: Skills Preview */}
        <BentoCard colSpan={1} rowSpan={1} className="stack-card">
          <Link
            href="/skills"
            className="flex flex-col items-center justify-center h-full group "
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <CodeXml className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">My Stacks</p>
            </div>
            <h3 className="text-lg mt-2 font-medium text-white">
              Tech Arsenal
            </h3>

            <div className="flex flex-row gap-3 my-3 mb-4 animate-scroll whitespace-nowrap">
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <PencilRuler className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">Figma</p>
              </div>
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <Hexagon className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">NextJs</p>
              </div>
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <Asterisk className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">ReactJS</p>
              </div>
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <SpellCheck2 className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">Angular</p>
              </div>

              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <PencilRuler className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">Figma</p>
              </div>
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <Hexagon className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">NextJs</p>
              </div>
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <Asterisk className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">ReactJS</p>
              </div>
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <SpellCheck2 className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">Angular</p>
              </div>

              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <PencilRuler className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">Figma</p>
              </div>
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <Hexagon className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">NextJs</p>
              </div>
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <Asterisk className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">ReactJS</p>
              </div>
              <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-md pl-1 px-2 bg-purple-500/20 text-white">
                <SpellCheck2 className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
                <p className="text-sm text-gray-300 font-medium">Angular</p>
              </div>
            </div>
            <Button className="btn-primary">
              View Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}
