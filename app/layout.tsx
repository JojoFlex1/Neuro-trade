// app/layout.tsx
import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'NeuroTrade',
  description: 'Premium AI trading platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.className} bg-beige-100`}>{children}</body>
    </html>
  )
}