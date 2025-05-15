import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  imageSrc: string
  href?: string
  className?: string
}


export default function ProjectCard({ imageSrc, href = "#", className = "" }: ProjectCardProps) {
  return (
    <div
      className={`relative group overflow-hidden rounded-xl project-card-content ${className}`}
      style={{ height: "100%", width: "100%" }}
    >
      <div className="relative h-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc || "/placeholder.svg"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          alt={""}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col">
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="text-sm text-gray-300">{category}</p>
      </div> */}

      {/* <Link href={href} className="absolute inset-0 flex items-center justify-end p-4">
        <span className="sr-only">View project</span>
        <span className="h-8 w-8 rounded-full bg-purple-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link> */}
    </div>
  )
}
