"use client"

import { ReactNode, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export default function AnimatedSection({ children, id, className }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10])

  return (
    <section 
      id={id} 
      className={`relative overflow-hidden ${className || ""}`}
      ref={ref}
      style={{ perspective: isClient ? "1000px" : undefined }}
    >
      {isClient ? (
        <motion.div 
          className="w-full h-full"
          style={{ 
            opacity,
            y,
            scale,
            rotateX,
            transformStyle: "preserve-3d"
          }}
        >
          {/* Background decorative elements */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
          
          {/* 3D parallax layers */}
          <motion.div 
            className="relative z-10"
            style={{ 
              transformStyle: "preserve-3d",
              transform: "translateZ(0px)"
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      ) : (
        <div className="w-full h-full">
          {children}
        </div>
      )}
    </section>
  )
}
