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
} from "lucide-react";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    imageSrc: "/placeholder.svg?height=400&width=600",
    href: "/projects/1",
  },
  {
    imageSrc: "/placeholder.svg?height=400&width=600",
    href: "/projects/2",
  },
  {
    imageSrc: "/placeholder.svg?height=400&width=600",
    href: "/projects/3",
  },
  {
    imageSrc: "/placeholder.svg?height=400&width=600",
    href: "/projects/4",
  },
];

export default function Home() {
  return (
    <section className="py-10">
      <BentoGrid className="container main-layout mx-auto">
        {/* Card 1: Hero */}
        <BentoCard colSpan={3} rowSpan={1} variant="minimal" hasPersistentHover>
          <div
            className="sm:ps-8 flex flex-col sm:flex-row items-center gap-6"
            style={{ height: "100%" }}
          >
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
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="
                  text-2xl sm:text-3xl md:text-4xl font-bold mb-2
                  bg-clip-text text-transparent TextGradient
                "
              >
                Charitha Weerasekara
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
                end={56}
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
                end={6}
                labelText="Years Experience"
                labelIcon={<Clock className="w-4 h-4" />}
                className="TextGradient"
              />
            </div>
          </BentoCard>
        </div>
        {/* Card 3: Projects Count */}

        {/* Card 6: work process */}
        <BentoCard colSpan={1} rowSpan={2} variant="minimal">
          <div className="center-content">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Star className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">Work Process</p>
            </div>
          </div>
          <h3 className="mt-2 font-medium text-white flex justify-center">
            Workflow Highlights
          </h3>
          <div className="h-px bg-gray-800 my-2 -m-6"></div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-xl pl-1 px-2 bg-purple-500/20 text-white">
              <Target className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
              <p className="text-sm text-gray-300 font-medium">Goals</p>
            </div>
            <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-xl pl-1 px-2 bg-purple-500/20 text-white">
              <FileText className="h-6 w-6 p-1 rounded-md bg-purple-400/20 text-white" />
              <p className="text-sm text-gray-300 font-medium">Research</p>
            </div>
            <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-xl pl-1 px-2 bg-purple-500/20 text-white">
              <Grid className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
              <p className="text-sm text-gray-300 font-medium">Wireframe</p>
            </div>
            <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-xl pl-1 px-2 bg-purple-500/20 text-white">
              <Code className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
              <p className="text-sm text-gray-300 font-medium">Prototyping</p>
            </div>
            <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-xl pl-1 px-2 bg-purple-500/20 text-white">
              <PenTool className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
              <p className="text-sm text-gray-300 font-medium">
                Finalize Design
              </p>
            </div>
            <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-xl pl-1 px-2 bg-purple-500/20 text-white">
              <TabletSmartphone className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
              <p className="text-sm text-gray-300 font-medium">Test</p>
            </div>
            <div className="flex items-center gap-3 border border-stone-500 p-1 rounded-xl pl-1 px-2 bg-purple-500/20 text-white">
              <Code className="h-6 w-6  p-1 rounded-md bg-purple-400/20 text-white" />
              <p className="text-sm text-gray-300 font-medium">Implement</p>
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
        <BentoCard colSpan={1} rowSpan={1} className="feature-card">
          <div
            className="project-card-content h-full"
            
          >
            {/* Non-animating title */}
            <div className="center-content">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Star className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">Projects</p>
            </div>
          </div>
          <h3 className="mt-2 font-medium text-white flex justify-center">
            Works Gallery
          </h3>
            <div className="relative h-full overflow-hidden rounded-xl my-3" style={{ height: "60%" }}>
              <div className="flex animate-scroll whitespace-nowrap absolute z-0 h-full">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    // title={project.title}
                    // category={project.category}
                    imageSrc={project.imageSrc}
                    href={project.href}
                    className="inline-block min-w-[150px] max-w-[150px] mx-4 animate-fade"
                  />
                ))}
                {/* Duplicate items for seamless looping */}
                {projects.map((project, index) => (
                  <ProjectCard
                    key={`dup-${index}`}
                    // title={project.title}
                    // category={project.category}
                    imageSrc={project.imageSrc}
                    href={project.href}
                    className="inline-block w-full max-w-[300px] mx-4 animate-fade"
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
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </BentoCard>

        {/* Card 7: Learn More About Me */}
        <BentoCard colSpan={2} rowSpan={1}>
          <Link
            href="/about"
            className="center-content group h-full"
          >
            <div className="center-content">
            <div className="flex flex-row gap-2 items-center justify-center">
              <Star className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">About Me</p>
            </div>
          </div>
          <h3 className="mt-2 font-medium text-white flex justify-center">
            More Details
          </h3>
            
            <div className="count-label flex items-center gap-2 mt-2 border border-stone-500 p-1 rounded-full px-2 bg-purple-500/20 text-white">
            hello
</div>
            <p className="text-xs text-gray-400 flex items-center">
              <Button className="btn-primary">
                View Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </p>
          </Link>
        </BentoCard>

        {/* Card 8: Highlighted Service */}
        <BentoCard colSpan={2} rowSpan={1}>
          <Link
            href="/services"
            className="service-card-content group"
            style={{ height: "100%" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/20 text-purple-500 group-hover:scale-110 transition-transform">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">
                Web Development
              </h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">Crafting</p>
            <div className="mt-auto flex items-center text-purple-400 text-sm">
              View Services{" "}
              <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </BentoCard>

        {/* Card 11: Skills Overview */}
        <BentoCard colSpan={1} rowSpan={1}>
          <Link
            href="/skills"
            className="flex flex-col"
            style={{ height: "100%" }}
          >
            <h3 className="text-lg font-medium text-white mb-3">
              My Skills Overview
            </h3>
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
              View All Skills{" "}
              <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </BentoCard>

        {/* Card 12: Get in Touch */}
        <BentoCard colSpan={6} rowSpan={1} variant="minimal">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ height: "100%" }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center sm:text-left">
                Get in Touch
              </h3>
              {/* <p className="text-gray-300 mb-4 sm:mb-0 text-center sm:text-left">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p> */}
              <Button className="btn-primary w-full sm:w-auto">
                <Phone className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </section>
  );
}
