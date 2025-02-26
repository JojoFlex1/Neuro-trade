// app/dashboard/layout.tsx
import Header from '@/components/Header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      <Header />
      <main className="max-w-6xl mx-auto px-8 py-12">
        {children}
      </main>
    </div>
  )
}