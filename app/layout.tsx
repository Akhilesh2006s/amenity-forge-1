import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
