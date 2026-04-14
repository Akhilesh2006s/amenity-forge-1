// app/brochure/page.tsx
"use client"

import ProductsSection from "@/components/Amenity forge/ProductsSection"
import CallToAction from "@/components/Amenity forge/CallToAction"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ProductsSection />
      <CallToAction />
    </div>
  );
}
