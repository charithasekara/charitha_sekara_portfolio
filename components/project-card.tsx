import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowRight, MoveUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  imageSrc: string
  title: string
  category: string
  href?: string
  className?: string
  onViewDetails?: () => void
}

export default function ProjectCard({ imageSrc, title, category, href = "#", className = "", onViewDetails }: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col relative group rounded-md project-card-content bg-gray-900/50 h-full ${className}`}
      style={{ height: "100%", width: "100%" }}
    >
      <div className="relative overflow-hidden rounded-2xl h-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          fill
          className="object-cover transition-transform duration-500 h-full group-hover:scale-105"
          alt={title || "Project image"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="flex flex-row justify-between items-start mt-3 gap-3 flex-wrap">
        <div>
          <h3 className="text-medium font-medium text-white">{title}</h3>
        <p className="text-sm  text-gray-300">{category}</p>
        </div>
        <div>
          {onViewDetails && (
          <Button
            onClick={onViewDetails}
            className="btn-icon w-full"
          >
            <MoveUpRight className="h-4 w-4" />
          </Button>
        )}
        </div>
        
        
      </div>

      {/* Uncomment this if you want to enable linking to a project page */}
      {/* <Link href={href} className="absolute inset-0 flex items-center justify-end p-4">
        <span className="sr-only">View project</span>
        <span className="h-8 w-8 rounded-full bg-purple-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link> */}
    </div>
  )
}