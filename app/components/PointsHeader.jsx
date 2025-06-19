'use client'

import { Coins, User } from 'lucide-react'

export default function PointsHeader({ customer }) {
  if (!customer) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        <User className="w-4 h-4" />
        <span className="text-sm">Sign in to earn points</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4 bg-white px-3 py-2 rounded border">
      <div className="flex items-center gap-2">
        <User className="w-4 h-4 text-blue-600" />
        <span className="font-medium text-sm">{customer.firstName || 'User'}</span>
      </div>
      <div className="flex items-center gap-2">
        <Coins className="w-4 h-4 text-green-600" />
        <span className="font-bold text-green-600">{customer.available.toLocaleString()}</span>
      </div>
    </div>
  )
}