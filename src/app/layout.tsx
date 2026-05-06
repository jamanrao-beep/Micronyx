import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Micronyx',
  description: 'Industrial-Grade Logic at Scale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}