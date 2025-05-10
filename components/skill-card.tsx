import type React from "react"

interface SkillCardProps {
  icon: React.ReactNode
  name: string
  category?: string
  progress?: number
  className?: string
}

export default function SkillCard({ icon, name, category, progress = 0, className = "" }: SkillCardProps) {
  return (
    <div className={`flex items-center gap-3 skill-card-content ${className}`} style={{ width: "100%" }}>
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gray-700/50">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-white">{name}</h3>
          {category && <span className="text-xs text-gray-400">{category}</span>}
        </div>
        {progress > 0 && (
          <div className="w-full h-1.5 bg-gray-700 rounded-full mt-1.5 overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        )}
      </div>
    </div>
  )
}
