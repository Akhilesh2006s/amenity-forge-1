"use client"

import { useEffect, useState } from "react"
import PageLoader from "@/components/Amenity forge/PageLoader"

const SPLASH_TEXT = "A Vallunex Global Pvt Ltd Initiative"

export default function RootClientShell({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSplash, setShowSplash] = useState(true)
  const [visibleChars, setVisibleChars] = useState(0)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i += 1
      setVisibleChars(i)

      if (i >= SPLASH_TEXT.length) {
        clearInterval(interval)
        // Small delay after full text, then hide splash
        setTimeout(() => setShowSplash(false), 600)
      }
    }, 80) // speed of typing (ms per character)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {children}
      {showSplash && (
        <>
          <PageLoader />
          <div className="fixed inset-0 z-[60] flex items-end justify-center pb-16 pointer-events-none">
            <p className="text-xs sm:text-sm md:text-base text-gray-300 tracking-[0.25em] uppercase animate-fade-in-up">
              {SPLASH_TEXT.slice(0, visibleChars)}
            </p>
          </div>
        </>
      )}
    </>
  )
}

