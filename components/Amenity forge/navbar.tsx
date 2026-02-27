"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/Home" },
    { name: "Products", href: "/Products" },
    { name: "Services", href: "/Services" },
    { name: "RNXA", href: "/RNXA" },
    { name: "About", href: "/About" },
    { name: "GTAP", href: "/GTP" },
    // External jobs portal subdomain
    { name: "Jobs Portal", href: "https://jobs.amenityforge.com" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-yellow-400/20 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo + Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            <img
              src="/logo1.jpg"
              alt="Logo"
              className="h-8 w-auto sm:h-10 object-contain"
            />
            <span className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wide bg-[length:200%_auto] animate-gradient-shift">
              Amenity Forge
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative text-white/90 hover:text-yellow-400 transition-all duration-300 text-sm md:text-base group px-2 py-1 rounded-lg"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-yellow-400 transition-colors duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block text-white/90 hover:text-yellow-400 transition-colors duration-300 py-3 px-2 text-base min-h-[44px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
