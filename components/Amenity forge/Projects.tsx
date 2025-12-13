"use client"
import { PinContainer } from "@/components/3d-pin"
import { motion } from "framer-motion"
import { useState } from "react"

const pinData = [
  {
    title: "Game Dashboards",
    image: "21.png",
  },
  {
    title: "Edfunplay",
    image: "22.png",
  },
  {
    title: "Revenue Gear",
    image: "23.png",
  },
  {
    title: "Quiz Hunt",
    image: "24.png",
  },
  {
    title: "Food & Recipe",
    image: "25.png",
  },
  {
    title: "Personal Bot",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80",
    isExternal: true,
  },
  {
    title: "Kid Fun Tutorials",
    image: "27.png",
  },
 
]

export default function AnimatedPinGallery() {
  const duplicatedPins = [...pinData, ...pinData]
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="w-full bg-black py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Featured Projects
            </span>
          </h1>
        </div>
        <div className="relative">
          <motion.div
            className="flex gap-6 lg:gap-8 will-change-transform"
            style={{ willChange: 'transform' }}
            animate={{
              x: isHovered ? undefined : [0, -2400],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedPins.map((pin, index) => (
              <div key={index} className="flex-shrink-0 min-w-[280px] lg:min-w-[320px] w-[280px] lg:w-[320px]">
                <div className="group flex flex-col p-6 tracking-tight text-white w-full min-h-[360px] lg:min-h-[400px] h-[360px] lg:h-[400px] border border-gray-700/50 rounded-2xl bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md shadow-lg hover:border-yellow-400/70 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <h3 className="font-bold text-lg lg:text-xl text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300 relative z-10">
                    {pin.title}
                  </h3>
                  
                  <div className="flex flex-1 w-full rounded-lg overflow-hidden relative z-10">
                    <img
                      src={pin.isExternal ? pin.image : `/${pin.image}` || "/placeholder.svg"}
                      alt={pin.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
