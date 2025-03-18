import type React from "react"

import "../globals.css"
import { Navbar } from "@/components/ui/navbar"

export const metadata = {
  title: "Trading Bot Platform",
  description: "Create and manage trading bots",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

