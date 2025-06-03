"use client";

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
import CustomCarousel from "@/components/custom-carousel";

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

  // Ensure at least 3 slides for seamless loop
  const displayedImages =
    project.images.length >= 3
      ? project.images
      : [...project.images, ...project.images, ...project.images].slice(0, 3);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900/90 backdrop-blur-md rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto border border-gray-800 shadow-xl transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md pt-4 pb-2 px-6 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Carousel */}
        <div className="p-4 carousel-box">
          {/* <Carousel
            opts={{
              loop: true,
              align: "center",
              slidesToScroll: 1,
              skipSnaps: false, // 👈 Important for smooth looping
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full"
          >
            <CarouselContent>
              {displayedImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg bg-gray-800">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel> */}
            <CustomCarousel images={project.images} title={project.title} />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-white mb-2">
              Description
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-2">
              Development Process
            </h3>
            <p className="text-gray-300 leading-relaxed">{project.process}</p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full hover:bg-purple-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-2">
              Key Features
            </h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index} className="leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-white mb-2">
              Source Code
            </h3>
            <Button
              className="btn-primary"
              onClick={onClose}
            >
              <Github className="h-5 w-5 group-hover:animate-pulse" />
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
