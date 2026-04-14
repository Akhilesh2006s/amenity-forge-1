"use client"

import ProductsSection from "@/components/Amenity forge/ProductsSection"
import { BrandButton } from "@/components/ui/brand-button"
import { ArrowRight } from "lucide-react"

const gridBgClass =
  "bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"

export default function ProductsPage() {
  return (
    <div className={`relative min-h-screen bg-black text-white ${gridBgClass}`}>
      <main className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 lg:px-12">
        <section className="mb-16 text-center md:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-yellow-400"
              aria-hidden
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400 md:text-xs">
              Ecosystem
            </span>
          </div>

          <h1 className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
            <span className="block">AI-Powered</span>
            <span className="mt-1 block bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Digital Ecosystem
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            One coherent platform philosophy — education, operations, and
            customer growth connected by AI.
          </p>

          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <BrandButton href="/Home#contact" variant="primary" className="gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </BrandButton>
            <BrandButton
              href="/Home#contact"
              variant="secondary"
              className="!border-2 !border-white/30 text-white hover:!border-white/45 hover:!bg-white/[0.05]"
            >
              Book Demo
            </BrandButton>
          </div>
        </section>

        <ProductsSection />
      </main>
    </div>
  )
}
