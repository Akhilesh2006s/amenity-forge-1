"use client"

import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const brandButtonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-6 py-3",
    "text-sm font-semibold transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "min-h-[44px]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400",
          "bg-[length:200%_auto] animate-gradient-shift",
          "text-neutral-900",
          "shadow-md shadow-orange-500/15",
          "hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 hover:brightness-105",
          "focus-visible:ring-yellow-400/90 focus-visible:ring-offset-[#0B0F19]",
        ].join(" "),
        secondary: [
          "border-2 border-yellow-400/55 bg-transparent text-white",
          "hover:scale-105 hover:border-orange-400/80 hover:bg-yellow-400/[0.07]",
          "focus-visible:ring-orange-400/70 focus-visible:ring-offset-[#0B0F19]",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export type BrandButtonProps = VariantProps<typeof brandButtonVariants> &
  React.PropsWithChildren<{
    className?: string
    /** When set, renders as Next.js `Link` */
    href?: string
  }> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">

export function BrandButton({
  className,
  variant,
  href,
  children,
  type = "button",
  ...props
}: BrandButtonProps) {
  const classes = cn(brandButtonVariants({ variant }), className)

  if (href) {
    return (
      <Link href={href} className={classes} prefetch={false}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export { brandButtonVariants }
