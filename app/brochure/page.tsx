// app/brochure/page.tsx
"use client"

import ComicBookReader from "@/components/Amenity forge/interactive-book"
import Navbar from "@/components/Amenity forge/navbar"


export default function BrochurePage() {
  return (
    <section id="about" className="bg-black">
          <Navbar />
      
      <ComicBookReader />
    </section>
  )
}
