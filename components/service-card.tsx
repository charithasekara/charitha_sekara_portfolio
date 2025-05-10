import type React from "react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  experience?: string
  completedWorks?: string
  hourlyRate?: string
  categories?: Array<{ name: string; count: string }>
  className?: string
}

export default function ServiceCard({
  icon,
  title,
  description,
  experience,
  completedWorks,
  hourlyRate,
  categories,
  className = "",
}: ServiceCardProps) {
  return (
    <div className={`flex flex-col service-card-content ${className}`} style={{ height: "100%", width: "100%" }}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>

      <p className="text-sm text-gray-300 mb-4">{description}</p>

      {(experience || completedWorks || hourlyRate) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm">
          {experience && (
            <div>
              <p className="text-gray-400">Experience</p>
              <p className="text-white font-medium">{experience}</p>
            </div>
          )}
          {completedWorks && (
            <div>
              <p className="text-gray-400">Completed Works</p>
              <p className="text-white font-medium">{completedWorks}</p>
            </div>
          )}
          {hourlyRate && (
            <div>
              <p className="text-gray-400">Hourly Rate</p>
              <p className="text-white font-medium">${hourlyRate}</p>
            </div>
          )}
        </div>
      )}

      {categories && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-700/50 text-xs">
              <span>{category.name}</span>
              <span className="text-gray-400">{category.count}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto">
        <Button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-400">Schedule Call</Button>
      </div>
    </div>
  )
}
