import type { Metadata } from 'next'
import './globals.css'
import RootClientShell from '@/components/Amenity forge/RootClientShell'

export const metadata: Metadata = {
  title: 'Amenityforge',
  description: 'Amenityforge',
  generator: 'Amenityforge',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/WhatsApp%20Image%202026-04-10%20at%2023.03.49.jpeg" type="image/jpeg" />
      </head>
      <body suppressHydrationWarning>
        <RootClientShell>{children}</RootClientShell>
      </body>
    </html>
  )
}
