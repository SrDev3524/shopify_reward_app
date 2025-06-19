'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function PointAllocationModal({ isOpen, onClose, project, customer, onAllocate }) {
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen || !project || !customer) return null

  const available = customer.available || 0
  const suggested = [500, 1000, available].filter(amt => amt > 0 && amt <= available)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const points = parseInt(amount)
    
    if (!points || points <= 0) {
      setError('Enter a valid amount')
      return
    }
    if (points > available) {
      setError('Insufficient points')
      return
    }

    setLoading(true)
    try {
      await onAllocate(project.id, points)
      setAmount('')
      setError('')
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Allocate Points</h2>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>

        <div className="mb-4 p-3 bg-gray-50 rounded">
          <h3 className="font-medium">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Available: {available.toLocaleString()} points</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
                setError('')
              }}
              placeholder="Enter points"
              className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              max={available}
              min={1}
            />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
          </div>

          {suggested.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Quick select:</p>
              <div className="flex gap-2">
                {suggested.map((amt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setAmount(amt.toString())}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                  >
                    {amt === available ? 'All' : amt.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-2 border rounded hover:bg-gray-50">
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? 'Processing...' : 'Confirm'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}