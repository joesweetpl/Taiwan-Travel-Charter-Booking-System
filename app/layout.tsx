import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Taiwan Travel Charter Booking',
  description: 'Book your Taiwan travel charter service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
