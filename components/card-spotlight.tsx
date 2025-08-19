"use client"

import { useMotionValue, motion, useMotionTemplate } from "framer-motion"
import React, { type MouseEvent as ReactMouseEvent, useState } from "react"
import { cn } from "@/lib/utils"

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#FFD700", // gold highlight default
  className,
  ...props
}: {
  radius?: number
  color?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={cn(
        "group/spotlight p-6 rounded-xl relative border border-neutral-800 bg-black transition-all duration-300 hover:border-yellow-500 cursor-pointer",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Solid gold radial mask overlay */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      />

      {/* Card content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
