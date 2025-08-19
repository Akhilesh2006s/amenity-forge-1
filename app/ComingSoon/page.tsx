// app/brochure/page.tsx
"use client"

import Hero from "@/components/Amenity forge/Hero"
import ProductsSection from "@/components/Amenity forge/ProductsSection"
import CallToAction from "@/components/Amenity forge/CallToAction"
import Navbar from "@/components/Amenity forge/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProductsSection />
      <CallToAction />
    </div>
  );
}
