// app/page.tsx - Main homepage
"use client"

import Home from "@/components/Amenity forge/Home"
import Navbar from "@/components/Amenity forge/navbar"
import Service from "@/components/Amenity forge/Service"
import Contact from "@/components/Amenity forge/Contact"
import About from "@/components/Amenity forge/About"
import Review from "@/components/Amenity forge/Testimonials"
import Hero from "@/components/Amenity forge/Hero"
import Footer from "@/components/Amenity forge/footer"

export default function BrochurePage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Home />
      <Service />
      <Hero />
      <Contact />
      <Footer />
    </div>
  )
}
