"use client"

import { LucideIcon } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  icon: LucideIcon
  featured?: boolean
  className?: string
}

export default function ProductCard({
  title,
  description,
  icon: Icon,
  featured = false,
  className = "",
}: ProductCardProps) {
  return (
    <article
      className={[
        "group rounded-2xl border border-white/10 bg-[#111827] text-white",
        "p-6 md:p-8 transition-all duration-300 ease-out",
        "hover:-translate-y-[5px] hover:border-orange-500/25",
        "hover:shadow-lg hover:shadow-orange-500/[0.12]",
        featured ? "lg:col-span-2" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl",
          "bg-orange-500/15 text-orange-400",
          "ring-1 ring-orange-500/25 transition-colors duration-300",
          "group-hover:bg-orange-500/20 group-hover:text-orange-300",
        ].join(" ")}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3
        className={[
          "font-semibold text-white mb-3",
          featured ? "text-2xl md:text-3xl" : "text-xl",
        ].join(" ")}
      >
        {title}
      </h3>
      <p
        className={[
          "text-gray-400 leading-relaxed",
          featured ? "text-base max-w-2xl" : "text-sm md:text-base",
        ].join(" ")}
      >
        {description}
      </p>
    </article>
  )
}
