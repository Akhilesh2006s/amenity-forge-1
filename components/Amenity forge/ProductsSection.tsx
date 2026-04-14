"use client"

import ProductCard from "./ProductCard"
import { BrandButton } from "@/components/ui/brand-button"
import {
  GraduationCap,
  BarChart3,
  Award,
  Zap,
  ArrowRight,
} from "lucide-react"

const products = [
  {
    title: "XE - Operating System for Schools",
    description:
      "A unified school ecosystem for academics, administration, family communication, and AI-assisted decisions — one platform instead of fragmented tools.",
    icon: GraduationCap,
    tags: ["AI-POWERED", "EDUCATION", "SAAS"] as const,
    featured: false,
    revenueBadge: undefined,
  },
  {
    title: "Amenop - AI Business Operations",
    description:
      "Automate workflows, optimize resources, and scale operations with AI-driven orchestration built for modern teams.",
    icon: BarChart3,
    tags: ["AUTOMATION", "OPERATIONS"] as const,
    featured: false,
    revenueBadge: undefined,
  },
  {
    title: "GTP Certification & Education Partnerships",
    description:
      "Industry-aligned certifications, technical enablement, and strategic partnerships that help institutions adopt technology with confidence.",
    icon: Award,
    tags: ["CERTIFICATION", "PARTNERSHIPS"] as const,
    featured: false,
    revenueBadge: undefined,
  },
  {
    title: "XC AI-Native CRM",
    description:
      "Pipeline clarity, relationship intelligence, and workflow automation so revenue teams move faster with less manual work.",
    icon: Zap,
    tags: ["CRM", "AI-NATIVE"] as const,
    featured: true,
    revenueBadge: "3x Revenue",
  },
] as const

const clientShowcase = [
  {
    logoIndex: 1,
    name: "RevLabs",
    description: "Faster launches with stronger execution",
  },
  {
    logoIndex: 2,
    name: "T-Series",
    description: "Faster campaign delivery across channels",
  },
  {
    logoIndex: 5,
    name: "Bennett University",
    description: "Reduced manual admissions workload significantly",
  },
  {
    logoIndex: 6,
    name: "DRK Group",
    description: "Automated reporting for faster decisions",
  },
  {
    logoIndex: 11,
    name: "Adorable Aroma",
    description: "Scaled online orders with fewer delays",
  },
  {
    logoIndex: 13,
    name: "VIT-AP University",
    description: "Faster applicant processing and enrollment",
  },
] as const

const projectShowcase = [
  {
    logoIndex: 3,
    name: "AsliLearn",
    description: "Reduced service delays across campuses",
  },
  {
    logoIndex: 4,
    name: "AsliPrep",
    description: "Expanded outreach with faster coordination",
  },
  {
    logoIndex: 7,
    name: "Infrastructure Analytics Rollout",
    description: "Improved visibility across infrastructure execution",
  },
  {
    logoIndex: 8,
    name: "Enterprise Workflow Revamp",
    description: "Automated handoffs and reduced bottlenecks",
  },
  {
    logoIndex: 9,
    name: "Inkaranya",
    description: "Faster member support resolution",
  },
  {
    logoIndex: 10,
    name: "Game of Go",
    description: "Real-time reporting with fewer errors",
  },
] as const

function PartnerLogoCard({
  index,
  name,
  description,
}: {
  index: number
  name: string
  description: string
}) {
  return (
    <div
      className={[
        "group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg",
        "transition-all duration-300 ease-out",
        "hover:scale-[1.02] hover:border-yellow-400/40",
        "hover:shadow-[0_0_28px_rgba(250,204,21,0.2)]",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl p-6 text-center",
        ].join(" ")}
      >
        <div className="rounded-lg bg-white/5 p-3">
          <img
            src={`/logo${index}.png`}
            alt={`${name} logo`}
            className={[
              "h-auto max-h-20 w-auto max-w-[180px] object-contain",
              "opacity-90 transition-all duration-300 ease-out",
              "group-hover:opacity-100 group-hover:scale-105",
            ].join(" ")}
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = "none"
            }}
          />
        </div>
        <div className="w-full max-w-full space-y-1 overflow-hidden">
          <h3 className="line-clamp-1 text-lg font-semibold text-white">{name}</h3>
          <p className="line-clamp-1 w-full max-w-full overflow-hidden text-sm text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section className="w-full">
      <div className="mb-10 flex items-center gap-4 md:mb-14">
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-400 md:text-xs">
          Products
        </span>
        <div className="h-px min-w-0 flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            description={product.description}
            icon={product.icon}
            tags={product.tags}
            featured={product.featured}
            revenueBadge={product.revenueBadge}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:mt-14 sm:flex-row sm:items-center">
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

      <div className="mt-16 border-t border-white/10 pt-12 md:mt-20 md:pt-16">
        <h2 className="mb-3 text-center text-2xl font-semibold text-white md:text-3xl">
          Who We&apos;ve Built For
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-300 md:mb-12">
          A selection of clients and projects we&apos;ve worked on
        </p>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientShowcase.map((partner) => (
            <PartnerLogoCard
              key={partner.logoIndex}
              index={partner.logoIndex}
              name={partner.name}
              description={partner.description}
            />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projectShowcase.map((project) => (
              <PartnerLogoCard
                key={project.logoIndex}
                index={project.logoIndex}
                name={project.name}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
