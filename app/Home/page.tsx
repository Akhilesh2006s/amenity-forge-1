// app/brochure/page.tsx
"use client"

import Home from "@/components/Amenity forge/Home"
import Navbar from "@/components/Amenity forge/navbar"
import Service from "@/components/Amenity forge/Service"


export default function BrochurePage() {
  return (
    <section id="about" className="bg-black">
          <Navbar />
      
      <Home />
      <Service/>
    </section>
  )
}
