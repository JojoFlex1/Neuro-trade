"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Plus, LineChart, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const routes = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Create Bot",
      path: "/bot",
      icon: Plus,
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      icon: LineChart,
    },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl">
            Trading Bot
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => {
            const Icon = route.icon
            const isActive = pathname === route.path

            return (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {route.name}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4">
            <nav className="flex flex-col gap-4">
              {routes.map((route) => {
                const Icon = route.icon
                const isActive = pathname === route.path

                return (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                      isActive ? "bg-muted text-primary" : "text-muted-foreground",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {route.name}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

