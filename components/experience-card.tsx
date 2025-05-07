"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string[]
  color?: "blue" | "purple"
}

const ExperienceCard = ({ title, company, period, description, color = "blue" }: ExperienceCardProps) => {
  const borderColor = color === "blue" ? "border-l-blue-500" : "border-l-purple-500"
  const titleColor = color === "blue" ? "text-blue-700" : "text-purple-700"
  const companyColor = color === "blue" ? "text-blue-500" : "text-purple-500"
  const bulletColor = color === "blue" ? "text-blue-500" : "text-purple-500"

  return (
    <motion.div
      whileHover={{
        x: 10,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`p-8 border-l-4 ${borderColor} shadow-lg rounded-xl bg-white`}>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
          <div>
            <h3 className={`text-2xl font-bold ${titleColor}`}>{title}</h3>
            <p className={`${companyColor} font-medium text-lg`}>{company}</p>
          </div>
          <span className="text-gray-500 text-sm md:text-base whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>

        <ul className="mt-6 space-y-3">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600 flex items-start">
              <span className={`${bulletColor} mr-3 text-xl`}>•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}

export default ExperienceCard
