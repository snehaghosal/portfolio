"use client"

import { Card } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  link: string
  color?: "blue" | "purple"
}

const CertificationCard = ({ title, issuer, date, link, color = "blue" }: CertificationCardProps) => {
  const bgColor = color === "blue" ? "bg-blue-50" : "bg-purple-50"
  const textColor = color === "blue" ? "text-blue-700" : "text-purple-700"
  const iconColor = color === "blue" ? "text-blue-500" : "text-purple-500"
  const borderColor = color === "blue" ? "border-blue-200" : "border-purple-200"
  const hoverBg = color === "blue" ? "hover:bg-blue-100" : "hover:bg-purple-100"

  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card
        className={`p-6 ${bgColor} border ${borderColor} rounded-xl shadow-md ${hoverBg} transition-all duration-300`}
      >
        <div className="flex items-start">
          <div className="mr-4">
            <Award className={`${iconColor} h-8 w-8`} />
          </div>
          <div className="flex-1">
            <h3 className={`text-xl font-bold ${textColor}`}>{title}</h3>
            <p className="text-gray-600 mt-1">{issuer}</p>
            <p className="text-gray-500 text-sm mt-1">{date}</p>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center ${textColor} hover:underline`}
            >
              View Certificate
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default CertificationCard
