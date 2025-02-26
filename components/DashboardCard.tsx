// components/DashboardCard.tsx
import React from 'react'

interface DashboardCardProps {
  title: string
  children: React.ReactNode
  icon: React.ReactNode
}

export default function DashboardCard({ title, children, icon }: DashboardCardProps) {
  return (
    <div className="bg-beige-200 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-semibold ml-2 text-neutral-700">{title}</h3>
      </div>
      <div className="text-neutral-600 text-sm">
        {children}
      </div>
    </div>
  )
}