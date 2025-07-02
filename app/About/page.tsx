"use client"

import About from "@/components/Amenity forge/About"
import Navbar from "@/components/Amenity forge/navbar"
import Review from "@/components/Amenity forge/Testimonials"


export default function BrochurePage() {
  return (
    <section id="about" className="bg-black">
          <Navbar />
      
      <About />
      <Review />
    </section>
  )
}
