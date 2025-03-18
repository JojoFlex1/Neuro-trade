import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "NeuroTrade Dashboard",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}