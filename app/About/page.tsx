"use client"

import About from "@/components/Amenity forge/About"
import Navbar from "@/components/Amenity forge/navbar"
import Footer from "@/components/Amenity forge/footer"

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}
