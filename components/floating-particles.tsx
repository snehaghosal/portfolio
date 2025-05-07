"use client"

import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  depth: number
  vx: number
  vy: number
  opacity: number
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Generate random particles
  const generateParticles = useCallback(() => {
    if (!isClient) return
    
    const newParticles: Particle[] = []
    const particleCount = 30
    
    const colors = [
      "rgba(59, 130, 246, 0.7)", // blue-500
      "rgba(99, 102, 241, 0.7)", // indigo-500
      "rgba(139, 92, 246, 0.7)",  // purple-500
      "rgba(168, 85, 247, 0.7)",  // violet-500
      "rgba(236, 72, 153, 0.7)",  // pink-500
    ]

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 15 + 5
      const depth = Math.random() * 5
      const speedFactor = 0.5 / (depth + 1)
      
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        depth,
        vx: (Math.random() - 0.5) * speedFactor,
        vy: (Math.random() - 0.5) * speedFactor,
        opacity: (0.3 + Math.random() * 0.5) / (depth + 1),
      })
    }
    
    setParticles(newParticles)
  }, [dimensions, isClient])

  // Update particle positions
  const updateParticles = useCallback(() => {
    if (!isClient) return
    
    setParticles((prevParticles) =>
      prevParticles.map((p) => {
        let newX = p.x + p.vx
        let newY = p.y + p.vy
        
        // Bounce off the edges
        if (newX <= 0 || newX >= dimensions.width) {
          p.vx = -p.vx
          newX = p.x + p.vx
        }
        
        if (newY <= 0 || newY >= dimensions.height) {
          p.vy = -p.vy
          newY = p.y + p.vy
        }
        
        return {
          ...p,
          x: newX,
          y: newY,
        }
      })
    )
  }, [dimensions, isClient])

  // Set up animation and window resize event
  useEffect(() => {
    if (!isClient) return
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    handleResize()
    window.addEventListener("resize", handleResize)
    
    return () => window.removeEventListener("resize", handleResize)
  }, [isClient])

  // Generate particles when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      generateParticles()
    }
  }, [dimensions, generateParticles])

  // Animation loop
  useEffect(() => {
    if (!isClient) return
    
    const animationId = setInterval(updateParticles, 50)
    return () => clearInterval(animationId)
  }, [updateParticles, isClient])

  // Mouse interaction effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInside, setIsMouseInside] = useState(false)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsMouseInside(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsMouseInside(false)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave, isClient])

  // Update particles based on mouse position
  useEffect(() => {
    if (!isClient || !isMouseInside) return
    
    setParticles((prevParticles) =>
      prevParticles.map((p) => {
        // Calculate distance from mouse
        const dx = mousePosition.x - p.x
        const dy = mousePosition.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Define influence radius
        const influenceRadius = 150 / (p.depth + 1)
        
        if (distance < influenceRadius) {
          // Calculate repulsion force
          const force = (influenceRadius - distance) / influenceRadius
          const angle = Math.atan2(dy, dx)
          
          // Apply force to velocity (stronger for particles in front)
          const forceX = Math.cos(angle) * force * 0.2 / (p.depth + 1)
          const forceY = Math.sin(angle) * force * 0.2 / (p.depth + 1)
          
          return {
            ...p,
            vx: p.vx - forceX,
            vy: p.vy - forceY,
          }
        }
        
        return p
      })
    )
  }, [isMouseInside, mousePosition, isClient])

  if (!isClient) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            x: particle.x,
            y: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            zIndex: Math.floor(10 - particle.depth),
            boxShadow: `0 0 ${particle.size * 1.5}px ${particle.color}`,
            filter: `blur(${particle.depth}px)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, particle.id % 2 === 0 ? 180 : -180],
          }}
          transition={{
            duration: 20 + particle.id % 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
