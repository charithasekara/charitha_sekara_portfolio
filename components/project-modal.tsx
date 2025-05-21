import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Github, ChevronLeft, ChevronRight } from "lucide-react"

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
        >
          <X className="h-6 w-6" />
        </button> */}
        <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />
          {project.images.length > 1 && (
            <>
              {/* <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              >
                <ChevronRight className="h-6 w-6" />
              </button> */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    title={`Show image ${index + 1}`}
                    aria-label={`Show image ${index + 1}`}
                    className={`h-2 w-2 rounded-full ${
                      currentImageIndex === index ? "bg-white" : "bg-gray-500"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <h3 className="text-lg font-medium text-white mb-2">Description</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <h3 className="text-lg font-medium text-white mb-2">Development Process</h3>
        <p className="text-gray-300 mb-4">{project.process}</p>
        <h3 className="text-lg font-medium text-white mb-2">Technologies Used</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
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
  )
}