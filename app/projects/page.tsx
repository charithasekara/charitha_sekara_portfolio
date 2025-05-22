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
            <h3 className="text-lg mt-2 font-medium text-white flex justify-center">
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
                title={projects[0].title}
                category={projects[0].category}
                imageSrc={projects[0].imageSrc}
                className="project-page-card"
                onViewDetails={() => openModal(projects[0])}
              />
              <ProjectCard
                title={projects[0].title}
                category={projects[0].category}
                imageSrc={projects[0].imageSrc}
                className="project-page-card"
                onViewDetails={() => openModal(projects[0])}
              />
              <ProjectCard
                title={projects[0].title}
                category={projects[0].category}
                imageSrc={projects[0].imageSrc}
                className="project-page-card"
                onViewDetails={() => openModal(projects[0])}
              />
            </div>
          </div>

          {/* Card 2: Project 2 */}

          {/* Card 3: Projects Count */}
          <BentoCard colSpan={1} rowSpan={1}>
            <div className="flex flex-col items-center justify-center h-full">
              <CountUp
                end={56}
                labelText="Projects"
                labelIcon={<Briefcase className="w-4 h-4" />}
              />
            </div>
          </BentoCard>

          {/* Card 4: Category 1 */}
          <BentoCard colSpan={1} rowSpan={1}>
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
            <Link
              href="#"
              className="flex flex-col items-center justify-center h-full text-center group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 text-purple-500 mb-2 group-hover:scale-110 transition-transform">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-base font-medium text-white">
                More Projects
              </h3>
              <p className="text-xs text-gray-400 flex items-center">
                View All{" "}
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </p>
            </Link>
          </BentoCard>

          {/* Card 12: Project Management */}
          <BentoCard colSpan={2} rowSpan={1} variant="minimal">
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
          </BentoCard>

          {/* Card 13: Contact CTA */}
          <BentoCard colSpan={6} rowSpan={1} variant="featured">
            <div className="flex flex-col md:flex-row items-center justify-between h-full gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Interested in My Work?
                </h3>
                <p className="text-gray-300 mb-4 md:mb-0">
                  Let's discuss your project requirements and how I can help
                  bring your vision to life.
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

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
}
