"use client"

import ProductCard from "./ProductCard"
import { BrandButton } from "@/components/ui/brand-button"
import { Cpu, GraduationCap, Award, Users } from "lucide-react"

const products = [
  {
    title: "XE - Operating System for Schools",
    description:
      "A unified school ecosystem for academics, administration, family communication, and AI-assisted decisions - one platform instead of fragmented tools.",
    icon: GraduationCap,
    featured: true,
  },
  {
    title: "Amenop - AI Business Operations",
    description:
      "Automate workflows, optimize resources, and scale operations with AI-driven orchestration built for modern teams.",
    icon: Cpu,
  },
  {
    title: "GTP Certification & Education Partnerships",
    description:
      "Industry-aligned certifications, technical enablement, and strategic partnerships that help institutions adopt technology with confidence.",
    icon: Award,
  },
  {
    title: "XC AI-Native",
    description:
      "Pipeline clarity, relationship intelligence, and workflow automation so revenue teams move faster with less manual work.",
    icon: Users,
  },
] as const

function PartnerLogo({ index }: { index: number }) {
  return (
    <div
      className={[
        "group rounded-xl p-px",
        "bg-white/10",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-yellow-400",
        "hover:shadow-[0_0_20px_rgba(255,165,0,0.15)]",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-40 w-full min-h-0 items-center justify-center overflow-hidden rounded-[11px] bg-[#111827] p-6",
        ].join(" ")}
      >
        <img
          src={`/logo${index}.png`}
          alt=""
          className={[
            "max-h-16 max-w-[120px] h-auto w-auto object-contain",
            "opacity-80 transition-all duration-300 ease-out",
            "group-hover:opacity-100 group-hover:scale-105",
          ].join(" ")}
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = "none"
          }}
        />
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const [featured, ...rest] = products

  return (
    <section className="w-full">
      <div className="mb-10 md:mb-14">
        <h2 className="text-2xl font-semibold text-white mb-2">Products</h2>
        <p className="text-gray-400 max-w-2xl">
          Modular platforms that work together - deploy what you need today and
          expand as your organization grows.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ProductCard
          title={featured.title}
          description={featured.description}
          icon={featured.icon}
          featured
        />
        {rest.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            description={product.description}
            icon={product.icon}
          />
        ))}
      </div>

      <div className="mt-12 md:mt-14 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-stretch sm:items-center">
        <BrandButton href="/Home#contact" variant="primary">
          Get Started
        </BrandButton>
        <BrandButton href="/Home#contact" variant="secondary">
          Book Demo
        </BrandButton>
      </div>

      <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-white/10">
        <h2 className="text-2xl font-semibold text-white text-center mb-3">
          Trusted references
        </h2>
        <p className="text-gray-400 text-center text-sm max-w-xl mx-auto mb-10">
          Organizations and brands we cite for factual context. Trademarks
          belong to their respective owners.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13].map((logoIndex) => (
            <PartnerLogo key={logoIndex} index={logoIndex} />
          ))}
        </div>
        <p className="mt-8 text-center text-[10px] sm:text-xs text-gray-500 max-w-3xl mx-auto leading-snug">
          Logos are used strictly for factual media distribution reference. No
          partnership or endorsement is implied.
        </p>
      </div>
    </section>
  )
}
