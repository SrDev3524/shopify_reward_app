'use client'

import { useState, useEffect } from 'react'
import { Trophy } from 'lucide-react'

export default function Leaderboard() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="bg-white rounded-lg p-6"><div className="animate-pulse h-40 bg-gray-200 rounded"></div></div>

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 text-center">
        <h2 className="text-lg font-bold">Top Contributors</h2>
      </div>
      
      <div className="p-4">
        {users.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No contributors yet</p>
        ) : (
          <div className="space-y-3">
            {users.slice(0, 10).map((user, i) => (
              <div key={user.id} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  {i < 3 ? (
                    <Trophy className={`w-4 h-4 ${i === 0 ? 'text-yellow-500' : i === 1 ? 'text-gray-400' : 'text-orange-500'}`} />
                  ) : (
                    <span className="text-xs font-bold">#{i + 1}</span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{user.firstName || 'Anonymous'}</p>
                  <p className="text-xs text-gray-500">{user.used.toLocaleString()} points</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {users.length > 0 && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-center">
            <p className="text-sm text-yellow-800">🏆 Top 3 get exclusive merchandise!</p>
          </div>
        )}
      </div>
    </div>
  )
}