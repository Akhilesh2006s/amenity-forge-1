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
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning>
        <RootClientShell>{children}</RootClientShell>
      </body>
    </html>
  )
}
