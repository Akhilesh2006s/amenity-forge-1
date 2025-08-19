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
    title: "Edu Chatbot",
    image: "26.png",
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
    <div className="min-h-screen w-full bg-black py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-16">Featured Projects</h1>
        <div className="relative">
          <motion.div
            className="flex gap-8"
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
              <div key={index} className="flex-shrink-0">
<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100 w-[20rem] h-[20rem] border border-black-400 rounded-xl bg-gradient-to-br from-black-300 via-black-400 to-black-500 shadow-lg">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">{pin.title}</h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                    <img
                      src={pin.image || "/placeholder.svg"}
                      alt={pin.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
