import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CEX Campaign Hub',
  description: 'Track ongoing rewards & contests on crypto exchanges',
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