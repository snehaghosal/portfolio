"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface SkillBarProps {
  name: string
  percentage: number
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const gradientColor = percentage > 85 
    ? "from-blue-500 to-purple-600" 
    : percentage > 75 
    ? "from-blue-400 to-purple-500" 
    : "from-blue-300 to-purple-400"

  return (
    <div ref={ref} className="mb-6 perspective-1000">
      <div className="flex justify-between mb-2 items-center">
        <motion.span 
          className="text-lg font-medium text-gray-700"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {name}
        </motion.span>
        <motion.span 
          className="text-gray-600 font-medium"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner relative transform hover:rotate-x-12 transition-transform duration-300" style={{ transformStyle: "preserve-3d" }}>
        <motion.div
          className={`h-full bg-gradient-to-r ${gradientColor} rounded-full relative`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d", transform: "translateZ(2px)" }}
        >
          {/* Animated particles inside skill bar */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute top-0 bottom-0 rounded-full bg-white/30"
              style={{ 
                width: `${Math.random() * 20 + 10}px`,
                left: `${(i * 18) + Math.random() * 5}%`,
              }}
              animate={{
                opacity: [0.7, 0.4, 0.7],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
        
        {/* Reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" style={{ transform: "translateZ(4px)" }}></div>
        
        {/* Edge highlight */}
        <motion.div 
          className="absolute h-[2px] top-0 left-0 bg-white/50"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ transform: "translateZ(5px)" }}
        ></motion.div>
      </div>
    </div>
  )
}
