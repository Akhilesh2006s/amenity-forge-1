"use client"

import ProductsSection from "@/components/Amenity forge/ProductsSection"
import Navbar from "@/components/Amenity forge/navbar"
import { BrandButton } from "@/components/ui/brand-button"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto pt-24 pb-16 px-6 lg:px-12">
        <section className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            AI-Powered Digital Ecosystem
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10">
            One coherent platform philosophy - education, operations, and
            customer growth connected by AI. Less tool sprawl, clearer outcomes,
            faster adoption for teams that can&apos;t afford complexity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <BrandButton href="/Home#contact" variant="primary">
              Get Started
            </BrandButton>
            <BrandButton href="/Home#contact" variant="secondary">
              Book Demo
            </BrandButton>
          </div>
        </section>

        <ProductsSection />
      </main>
    </div>
  )
}
