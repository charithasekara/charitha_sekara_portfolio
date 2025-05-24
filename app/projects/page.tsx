"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BentoGrid, BentoCard } from "@/components/bento-grid";
import CountUp from "@/components/count-up";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  FolderOpen,
  ShoppingBag,
  GraduationCap,
  Heart,
  ArrowRight,
  Phone,
  CodeXml,
  FolderGit2,
  Wand,
  Github,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import ProjectModal from "@/components/project-modal";
import projects from "@/data/projects.json";

interface Project {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  images: string[];
  description: string;
  process: string;
  technologies: string[];
  features: string[];
  githubLink: string;
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section className="py-10">
        <BentoGrid className="container main-layout mx-auto">
          {/* Card 1: Featured Project */}
          <div className="flex flex-col md:col-span-4 row-span-3  sm:col-span-1 h-full gap-2 project-full-container">
            <div className="flex flex-row gap-2 items-center justify-center">
              <FolderGit2 className="h-4 w-4 text-purple-500" />
              <p className="text-xs text-gray-400">My Projects</p>
            </div>
            <h3 className="text-lg mt-2 mb-3 font-medium text-white flex justify-center">
              Project Gallery
            </h3>
            <div className="project-showcase-card ">
              <ProjectCard
                title={projects[0].title}
                category={projects[0].category}
                imageSrc={projects[0].imageSrc}
                className="project-page-card"
                onViewDetails={() => openModal(projects[0])}
              />
              <ProjectCard
                title={projects[1].title}
                category={projects[1].category}
                imageSrc={projects[1].imageSrc}
                className="project-page-card"
                onViewDetails={() => openModal(projects[1])}
              />
              <ProjectCard
                title={projects[2].title}
                category={projects[2].category}
                imageSrc={projects[2].imageSrc}
                className="project-page-card"
                onViewDetails={() => openModal(projects[2])}
              />
              <ProjectCard
                title={projects[3].title}
                category={projects[3].category}
                imageSrc={projects[3].imageSrc}
                className="project-page-card"
                onViewDetails={() => openModal(projects[3])}
              />
            </div>
          </div>

          {/* Card 2: Project 2 */}

          {/* Card 3: Projects Count */}
          <BentoCard colSpan={1} rowSpan={1} className="md:col-span-1">
            <div className="flex flex-col items-center justify-center h-full">
              <CountUp
                end={32}
                labelText="Designs"
                labelIcon={<Briefcase className="w-4 h-4" />}
              />
            </div>
          </BentoCard>

          <BentoCard colSpan={1} rowSpan={1} className="md:col-span-1">
            <div className="flex flex-col items-center justify-center h-full">
              <CountUp
                end={20}
                labelText="Developments"
                labelIcon={<Briefcase className="w-4 h-4" />}
              />
            </div>
          </BentoCard>

          <BentoCard colSpan={1} rowSpan={1} className="md:col-span-1">
            <div className="flex flex-col items-center justify-center h-full">
              <CountUp
                end={10}
                labelText="Clients"
                labelIcon={<Briefcase className="w-4 h-4" />}
              />
            </div>
          </BentoCard>

          <BentoCard colSpan={1} rowSpan={1} className="relative md:col-span-1">
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
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative flex-shrink-0 justify-center items-center z-1">
                <Image
                  src="/charithaDp.png"
                  alt="Profile picture"
                  width={160}
                  height={160}
                  className="object-cover rounded-full  p-1 h-32 w-32"
                />
                <div className="absolute inset-0 border border-purple-500 rounded-full animate-pulse w-full h-full z-0" />
                <div className="absolute top-3/4 about-me-bento-sm">
                  <Link
                    href="/about"
                    className="text-purple-400 text-sm flex items-center group"
                  >
                    <Button className="btn-primary group-hover:scale-105 transition-transform duration-300">
                      About Me
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 4: Category 1 */}
          <BentoCard colSpan={2} rowSpan={1} className="md:col-span-2">
            <div className="flex gap-3 flex-col">
              <div className="flex flex-row gap-2 items-center justify-center">
                <FolderGit2 className="h-4 w-4 text-purple-500" />
                <p className="text-xs text-gray-400">My Projects</p>
              </div>
              <h3 className="text-lg mt-2 mb-3 font-medium text-white flex justify-center">
                More Projects
              </h3>

              <div className="flex flex-wrap gap-2 justify-between p-2 bg-purple-500/20 rounded-2xl">
                <Button className="btn-primary text-white w-full sm:w-auto flex-1 min-w-[150px]">
                  <Link
                    href="https://dribbble.com/your-profile" // Replace with actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full"
                    aria-label="Visit Dribbble profile"
                  >
                    <span className="flex items-center">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Behance
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button className="btn-primary text-white w-full sm:w-auto flex-1 min-w-[150px]">
                  <Link
                    href="https://dribbble.com/your-profile" // Replace with actual URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full"
                    aria-label="Visit Dribbble portfolio"
                  >
                    <span className="flex items-center">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Dribbble
                    </span>
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </BentoCard>

          {/* Card 12: Project Management */}
          {/* <BentoCard colSpan={2} rowSpan={1} variant="minimal">
            <div className="flex items-center justify-center h-full text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center mb-2">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-white">
                  Project Management
                </h3>
                <p className="text-sm text-gray-300">
                  Efficient delivery process
                </p>
              </div>
            </div>
          </BentoCard> */}

          {/* Card 13: Contact CTA */}
          {/* Card 12: Get in Touch */}
          <BentoCard
            colSpan={6}
            rowSpan={1}
            variant="minimal"
            className="contact-card md:col-span-2 xl:col-span-6"
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
                  Have a project in mind? Let's discuss how I can help bring
                  your ideas to life.
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

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}
