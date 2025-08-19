// app/brochure/page.tsx
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
    <section id="about" className="bg-black">
          <Navbar />
      
      <Home />
      <Service/>
      <Hero />
      <Contact/>
      <Footer/>

    </section>
  )
}
