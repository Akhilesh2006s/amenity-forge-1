"use client"

import { TrendingUp, Users, Award, Zap, Target, Star } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  {
    icon: TrendingUp,
    value: "40+",
    label: "Projects Delivered",
    description: "Hands-on experience across academic, startup, and live technical industry environments.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients & Collaborators",
    description: "and partnered mentors.",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    icon: Award,
    value: "4+ Years",
    label: "Learning & Innovation Journey",
    description: "Built through consistent practice, mentorship, and ecosystem exposure.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Zap,
    value: "98%",
    label: "Success & Satisfaction Rate",
    description: "High project completion and positive client outcomes.",
    gradient: "from-orange-500 to-yellow-400"
  },
  {
    icon: Target,
    value: "10+",
    label: "Countries Reached",
    description: "Through global platforms, AI tools, and digital learning products.",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Project Feedback",
    description: "Reflecting client trust and strong delivery quality.",
    gradient: "from-orange-500 to-yellow-400"
  }
]

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden bg-black py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <p className="text-lg lg:text-xl text-gray-400 mb-4 uppercase tracking-wider">
            Snapshot of Success
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Proven Results
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for themselves. Our track record of excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 hover:border-yellow-400/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 overflow-hidden">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${stat.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-yellow-400/30`}>
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    
                    <div className="mb-4">
                      <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {stat.label}
                      </h3>
                      <p className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
