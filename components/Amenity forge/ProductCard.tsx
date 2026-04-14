"use client"

import Link from "next/link"
import { LucideIcon, ArrowRight, Sparkles } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  icon: LucideIcon
  tags: readonly string[]
  featured?: boolean
  revenueBadge?: string
  href?: string
  className?: string
}

export default function ProductCard({
  title,
  description,
  icon: Icon,
  tags,
  featured = false,
  revenueBadge,
  href = "/Home#contact",
  className = "",
}: ProductCardProps) {
  return (
    <article
      className={[
        "group relative flex h-full flex-col rounded-3xl border bg-zinc-900/60 p-6 md:p-8 text-white backdrop-blur-sm transition-all duration-300",
        featured
          ? "border-yellow-500/50 shadow-[0_0_48px_-12px_rgba(234,179,8,0.35)] ring-1 ring-yellow-500/20"
          : "border-white/[0.08] hover:border-white/15 hover:bg-zinc-900/80",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {featured && revenueBadge && (
        <div className="absolute right-4 top-4 md:right-5 md:top-5">
          <span className="inline-flex items-center gap-1 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-yellow-400 md:text-xs">
            <Sparkles className="h-3 w-3 shrink-0" aria-hidden />
            {revenueBadge}
          </span>
        </div>
      )}

      <div
        className={[
          "mb-5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-yellow-500/40 bg-yellow-500/5 text-yellow-400 transition-colors duration-300",
          "group-hover:border-yellow-400/60 group-hover:bg-yellow-500/10",
        ].join(" ")}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </div>

      <h3
        className={[
          "mb-3 font-bold leading-snug tracking-tight",
          featured ? "text-lg text-yellow-400 md:text-xl" : "text-lg text-white md:text-xl",
        ].join(" ")}
      >
        {title}
      </h3>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-400 md:text-[15px]">
        {description}
      </p>

      <div className="mt-auto flex items-end justify-between gap-4 pt-2">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-zinc-400 md:text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={href}
          className={[
            "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            featured
              ? "border-yellow-400 bg-yellow-400 text-black hover:bg-yellow-300"
              : "border-white/15 text-zinc-400 hover:border-yellow-500/40 hover:text-yellow-400",
          ].join(" ")}
          aria-label={`Learn more about ${title}`}
        >
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </article>
  )
}
