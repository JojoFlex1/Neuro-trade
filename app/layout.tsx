// app/layout.tsx
import type { Metadata } from 'next'
import { Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import HeaderUI from '@/components/header'

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
      <body className={`${cormorantGaramond.className} bg-beige-100`}>      
      <SidebarProvider>
        <AppSidebar />
        <main className='w-full border-none'>
          <HeaderUI />
          {children}
        </main>
      </SidebarProvider>
      </body>
    </html>
  )
}