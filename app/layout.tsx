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
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.jpg" type="image/png" />
      </head>
      <body>
        <RootClientShell>{children}</RootClientShell>
      </body>
    </html>
  )
}
