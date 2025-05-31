"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "@/components/bento-grid";
import CountUp from "@/components/count-up";
import { Button } from "@/components/ui/button";
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
  PenTool,
  FileText,
  Grid,
  Star,
  Target,
  TabletSmartphone,
  Boxes,
  Braces,
  UserSearch,
  Redo2,
  Pencil,
  BookText,
  Frame,
  Figma,
  Hexagon,
  Codesandbox,
  Asterisk,
  PencilRuler,
  SpellCheck2,
  CodeXml,
  Sparkles,
  Wand,
  BookCheck,
  Rocket,
  MessageSquareCode,
  Download,
} from "lucide-react";

import ProjectImage from "@/components/project-image";
import { AuroraText } from "@/components/aurora-text";
import { IconBrandBehance } from "@tabler/icons-react";

const projects = [
  { imageSrc: "/pimg1.png", href: "/project1" },
  { imageSrc: "/pimg2.png", href: "/project1" },
  { imageSrc: "/pimg1.png", href: "/project1" },
  { imageSrc: "/pimg2.png", href: "/project1" },
];

export default function Home() {
  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Hero */}
        <BentoCard colSpan={3} rowSpan={1} variant="minimal" hasPersistentHover>
          <div className="lg:ps-8 flex flex-col lg:flex-row items-center gap-6 h-full">
            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex-shrink-0 ">
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
            <div className="flex-1 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  text-2xl sm:text-3xl md:text-4xl font-bold mb-2
                  bg-clip-text text-transparent TextGradient
                "
              >
                <AuroraText>Charitha Weerasekara</AuroraText>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg sm:text-xl text-gray-300 mb-4"
              >
                I&apos;m a UIX Engineer
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <Link
                  href="/about"
                  className="text-purple-400 text-sm flex items-center group"
                >
                  <Button className="btn-primary group-hover:scale-105 transition-transform duration-300">
                    Explore My Work
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="absolute top-4 right-4">
            <a
              href="/Charitha_Weerasekara_Resume.pdf"
              download="Charitha_Weerasekara_Resume.pdf"
              aria-label="Download Charitha's resume"
              className="flex items-center gap-2 px-4 py-2 text-xs font-normal border border-purple-500/20 text-white hover:bg-purple-500/20 rounded-full transition-colors duration-200"
            >
              <span className="">Resume</span>{" "}
                <Download className="h-4 w-4  hidden sm:inline" />
            </a>
          </div>
        </BentoCard>

        {/* Card 2: Brief Bio */}
        {/* <BentoCard colSpan={2} rowSpan={1}>
          <div style={{ height: "100%" }}>
            <h3 className="text-lg font-medium text-white mb-2">Software Engineer from India</h3>
            <p className="text-sm text-gray-300">
              With over 6 years of experience in web development, I specialize in creating responsive, user-friendly
              applications using modern technologies like React, Next.js, and TypeScript.
            </p>
          </div>
        </BentoCard> */}

        <div className="col-span-1 row-span-1">
          <BentoCard colSpan={1} rowSpan={1}>
            <div className="flex flex-col items-center justify-center h-full">
              <CountUp
                end={20}
                labelText="Projects"
                labelIcon={<Briefcase className="w-4 h-4" />}
                className="TextGradient"
              />
            </div>
          </BentoCard>

          {/* Card 4: Experience Count */}
          <BentoCard
            colSpan={1}
            rowSpan={1}
            className="mt-3 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <CountUp
                end={3}
                labelText="Years Experience"
                labelIcon={<Clock className="w-4 h-4" />}
                className="TextGradient"
              />
            </div>
          </BentoCard>
        </div>
        {/* Card 3: Projects Count */}

        {/* Card 6: work process */}
        <BentoCard
          colSpan={1}
          rowSpan={2}
          variant="minimal"
          className="work-process-card md:col-span-1"
        >
          <div className="center-content">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Star className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">Work Process</p>
            </div>
          </div>
          <h3 className="text-lg mt-2 font-medium text-white flex justify-center">
            Workflow Highlight
          </h3>
          <div className="h-px bg-gray-800 my-2 -m-6"></div>
          <div className="flex flex-col gap-3 mt-4 timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content bg-purple-500/20 text-white border border-stone-500 rounded-full">
                <Target className="h-4 w-4  rounded-md  text-purple-400 workflow-icon" />
                <p className="text-sm text-gray-300 font-medium text-wrap">
                  Goals
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content bg-purple-500/20 text-white border border-stone-500 rounded-full">
                <FileText className="h-4 w-4  rounded-md  text-purple-400 workflow-icon" />
                <p className="text-sm text-gray-300 font-medium text-wrap">
                  Research
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content bg-purple-500/20 text-white border border-stone-500 rounded-full">
                <Grid className="h-4 w-4  rounded-md  text-purple-400 workflow-icon" />
                <p className="text-sm text-gray-300 font-medium text-wrap">
                  Wireframe
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content bg-purple-500/20 text-white border border-stone-500 rounded-full">
                <PenTool className="h-4 w-4  rounded-md  text-purple-400 workflow-icon" />
                <p className="text-sm text-gray-300 font-medium text-wrap">
                  Prototyping
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content bg-purple-500/20 text-white border border-stone-500 rounded-full">
                <BookCheck className="h-4 w-4  rounded-md  text-purple-400 workflow-icon" />
                <p className="text-sm text-gray-300 font-medium text-wrap">
                  Finalize
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">6</div>
              <div className="timeline-content bg-purple-500/20 text-white border border-stone-500 rounded-full">
                <TabletSmartphone className="h-4 w-4  rounded-md  text-purple-400 workflow-icon" />
                <p className="text-sm text-gray-300 font-medium text-wrap">
                  Testing
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">7</div>
              <div className="timeline-content bg-purple-500/20 text-white border border-stone-500 rounded-full">
                <Code className="h-4 w-4  rounded-md  text-purple-400 workflow-icon" />
                <p className="text-sm text-gray-300 font-medium text-wrap">
                  Implement
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">8</div>
              <div className="timeline-content bg-purple-500/20 text-white border border-stone-500 rounded-full">
                <Rocket className="h-4 w-4  rounded-md  text-purple-400 workflow-icon" />
                <p className="text-sm text-gray-300 font-medium text-wrap">
                  Launch
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">9</div>
              <div className="timeline-content bg-purple-500/20 text-white border border-stone-500 rounded-full">
                <MessageSquareCode className="h-4 w-4  rounded-md  text-purple-400 workflow-icon" />
                <p className="text-sm text-gray-300 font-medium text-wrap">
                  Feedback
                </p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* Card 9: WhatsApp */}
        {/* <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <Link href="/contact" className="center-content group h-full flex flex-col justify-center items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-500 mb-5 group-hover:scale-110 transition-transform">
              <BrandWhatsapp className="h-6 w-6" />
            </div>
            <h3 className="text-base font-medium text-white">WhatsApp</h3>
            <p className="text-xs text-gray-400">Connect with me</p>
          </Link>
        </BentoCard> */}

        {/* Card 10: Telegram */}
        {/* <BentoCard colSpan={1} rowSpan={1} variant="minimal">
          <Link href="/contact" className="center-content group" style={{ height: "100%" }}>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 mb-2 group-hover:scale-110 transition-transform">
              <BrandTelegram className="h-6 w-6" />
            </div>
            <h3 className="text-base font-medium text-white">Telegram</h3>
            <p className="text-xs text-gray-400">Message me</p>
          </Link>
        </BentoCard> */}

        {/* Card 5: Featured Project */}
        <BentoCard
          colSpan={1}
          rowSpan={1}
          className="feature-card md:col-span-4"
        >
          <div className="project-card-content h-full">
            {/* Non-animating title */}
            <div className="center-content">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Star className="h-4 w-4 text-purple-500" />
                <p className="text-xs text-gray-400">Projects</p>
              </div>
            </div>
            <h3 className="text-lg mt-2 font-medium text-white flex justify-center">
              Works Gallery
            </h3>
            <div
              className="relative h-full overflow-hidden rounded-xl my-3"
              style={{ height: "60%" }}
            >
              <div className="flex animate-scroll whitespace-nowrap absolute z-0 h-full">
                {projects.map((project, index) => (
                  <ProjectImage
                    key={index}
                    imageSrc={project.imageSrc}
                    href={project.href}
                  />
                ))}
                {/* Duplicate items for seamless looping */}
                {projects.map((project, index) => (
                  <ProjectImage
                    key={`duplicate-${index}`}
                    imageSrc={project.imageSrc}
                    href={project.href}
                  />
                ))}
              </div>
            </div>
            {/* View Projects Button with animation */}
            <div className="flex flex-col justify-center items-center mb-4">
              <Link
                href="/projects"
                className="text-purple-400 text-sm flex items-center group"
              >
                <Button className="btn-primary group-hover:scale-105 transition-transform duration-300">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Learn More About Me */}
        <BentoCard
          colSpan={2}
          rowSpan={1}
          className="about-card lg:col-span-3 xl:col-span-2"
        >
          <Link
            href="/about"
            className="flex flex-col items-center justify-center h-full group"
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <Star className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">About Me</p>
            </div>
            <h3 className="text-lg mt-2 font-medium text-white">
              More Details
            </h3>
            <div className="flex flex-col gap-2 w-full max-w-2xl my-3 mb-4 -mx-[157px] ">
              {/* Row 1 */}
              <div className="flex animate-scroll whitespace-nowrap">
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Sri Lanka
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  English & Tamil
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  SUSL
                </span>
                {/* Duplicate for seamless looping */}
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Sri Lanka
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  English & Tamil
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  SUSL
                </span>

                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Sri Lanka
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  English & Tamil
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  SUSL
                </span>
              </div>
              {/* Row 2 */}
              <div className="flex animate-scroll-reverse whitespace-nowrap">
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  CIS
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  UIX Engineer
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Graphic Designer
                </span>
                {/* Duplicate for seamless looping */}
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  CIS
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  UIX Engineer
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Graphic Designer
                </span>

                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  CIS
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  UIX Engineer
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Star className="h-4 w-4 text-purple-500" />
                  Graphic Designer
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 flex items-center justify-center">
              <Button className="btn-primary">View Skills</Button>
            </p>
          </Link>
        </BentoCard>

        {/* Card 8: Highlighted Service */}
        <BentoCard
          colSpan={2}
          rowSpan={1}
          className="service-card md:col-span-2"
        >
          <Link
            href="/services"
            className="flex flex-col items-center justify-center h-full group"
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <Boxes className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">Services</p>
            </div>
            <h3 className="text-lg mt-2 font-medium text-white">
              Service Suite
            </h3>
            <div className="flex flex-col gap-2 w-full max-w-2xl my-3 mb-4 -mx-[157px] ">
              {/* Row 1 */}
              <div className="flex animate-scroll-reverse whitespace-nowrap">
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Pencil className="h-4 w-4 text-purple-500" />
                  Web & Mobile UI Design
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Braces className="h-4 w-4 text-purple-500" />
                  Web & Mobile Development
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <UserSearch className="h-4 w-4 text-purple-500" />
                  UI UX Research
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Redo2 className="h-4 w-4 text-purple-500" />
                  UI Revamp
                </span>
                {/* Duplicate for seamless looping */}
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Pencil className="h-4 w-4 text-purple-500" />
                  Web & Mobile UI Design
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Braces className="h-4 w-4 text-purple-500" />
                  Web & Mobile Development
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <UserSearch className="h-4 w-4 text-purple-500" />
                  UI UX Research
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Redo2 className="h-4 w-4 text-purple-500" />
                  UI Revamp
                </span>
              </div>
              {/* Row 2 */}
              <div className="flex animate-scroll whitespace-nowrap">
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <PenTool className="h-4 w-4 text-purple-500" />
                  Graphic Design
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Frame className="h-4 w-4 text-purple-500" />
                  Logo Design
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <BookText className="h-4 w-4 text-purple-500" />
                  Flyer Design
                </span>
                {/* Duplicate for seamless looping */}
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <PenTool className="h-4 w-4 text-purple-500" />
                  Graphic Design
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <Frame className="h-4 w-4 text-purple-500" />
                  Logo Design
                </span>
                <span className="count-label flex items-center gap-2 border border-stone-500 p-1 rounded-md px-2 bg-purple-500/20 text-white mx-2">
                  <BookText className="h-4 w-4 text-purple-500" />
                  Flyer Design
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 flex items-center justify-center">
              <Button className="btn-primary">View Services</Button>
            </p>
          </Link>
        </BentoCard>

        {/* Card 11: Skills Overview */}
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
            <Button className="btn-primary">View Profile</Button>
          </Link>
        </BentoCard>

        {/* Card 12: Get in Touch */}
        <BentoCard
          colSpan={6}
          rowSpan={1}
          variant="minimal"
          className="contact-card md:col-span-3 lg:col-span-2 xl:col-span-6"
        >
          <div className="flex flex-col items-center justify-center gap-3 h-full">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-500">
              <Wand className="h-5 w-5" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-medium text-lg text-white text-center">
                Let's Work Together
              </h3>
              <p className="text-gray-300 mb-3 text-center">
                Have a project in mind? Let's discuss how I can help bring your
                ideas to life.
              </p>
              <Link href="/contact">
                <Button className="btn-primary w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}
