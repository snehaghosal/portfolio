"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useRef } from "react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubLink: string
  liveLink?: string
  color?: "blue" | "purple"
}

export default function ProjectCard({ title, description, technologies, githubLink, liveLink, color = "blue" }: ProjectCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateXValue = (y - centerY) / 20
    const rotateYValue = (centerX - x) / 20
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    setScale(1.05)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  const borderColor = color === "blue" ? "border-blue-500" : "border-purple-500"
  const bgGradient =
    color === "blue" ? "bg-gradient-to-br from-white to-blue-50" : "bg-gradient-to-br from-white to-purple-50"

  return (
    <motion.div
      ref={cardRef}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
          transition: "transform 0.2s ease"
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="h-full"
      >
        <Card className={`p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-${color}-50 border-t-4 border-${color}-500 overflow-hidden relative group`}>
          {/* Background glow effect */}
          <div className={`absolute -inset-1 bg-gradient-to-r from-${color}-400 to-${color === "blue" ? "purple" : "blue"}-400 rounded-lg blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
          
          <div className="relative">
            <h3 className={`font-bold text-xl mb-3 text-${color}-700 flex items-center`}>
              <span className={`w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center mr-3`}>
                <span className={`inline-block w-5 h-5 rounded-full bg-${color}-500`}></span>
              </span>
              {title}
            </h3>
            <p className="text-gray-600 mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ y: -5 }}
                  className={`px-3 py-1 text-sm rounded-full bg-${color}-100 text-${color}-600`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <div className="flex gap-5">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center text-${color}-600 hover:text-${color}-700 transition-colors`}
              >
                <Github size={18} className="mr-2" />
                <span>View on GitHub</span>
                <motion.span 
                  initial={{ width: 0 }} 
                  whileHover={{ width: "100%" }} 
                  className={`block h-0.5 bg-${color}-500 mt-0.5`}
                />
              </a>

              {liveLink && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${color === "blue" ? "text-blue-600" : "text-purple-600"} hover:opacity-80`}
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}
