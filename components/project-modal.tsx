import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

type Project = {
  title: string;
  images: string[];
  description: string;
  process: string;
  technologies: string[];
  features: string[];
  githubLink: string;
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 pt-[120px]">
      <div className="bg-gray-900/90 rounded-3xl max-w-7xl w-full p-6 pt-0 relative max-h-[85vh] overflow-y-auto overflow-hidden">
        <div className="sticky top-0 z-10 bg-gray-900/90 pt-4 pb-2 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
<div className="flex flex-col justify-center items-center mt-4">
          <div className="flex flex-row gap-2  mb-4 ">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="carousl-conatiner">
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] w-full">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <h3 className="text-lg font-medium text-white mb-2 mt-4">
          Description
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <h3 className="text-lg font-medium text-white mb-2">
          Development Process
        </h3>
        <p className="text-gray-300 mb-4">{project.process}</p>
        <h3 className="text-lg font-medium text-white mb-2">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-medium text-white mb-2">Key Features</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3 className="text-lg font-medium text-white mb-2">Source Code</h3>
        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-4"
        >
          <Github className="h-5 w-5 mr-2" />
          View on GitHub
        </Link>
        <Button className="btn-primary w-full sm:w-auto" onClick={onClose}>
          Close
        </Button>
        
      </div>
    </div>
  );
}
