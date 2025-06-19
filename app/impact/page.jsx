'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Target, Users } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import ProjectCard from '@/app/components/ProjectCard'
import PointAllocationModal from '@/app/components/PointAllocationModal'
import Leaderboard from '@/app/components/Leaderboard'
import PointsHeader from '@/app/components/PointsHeader'

const MOCK_CUSTOMER_ID = '123456789'

export default function ImpactPage() {
  const [projects, setProjects] = useState([])
  const [customer, setCustomer] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const [projectsRes, customerRes] = await Promise.all([
        fetch('/api/projects'),
        fetch(`/api/customer/${MOCK_CUSTOMER_ID}`)
      ])
      
      setProjects(await projectsRes.json())
      if (customerRes.ok) setCustomer(await customerRes.json())
    } catch (error) {
      toast.error('Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  const handleAllocatePoints = async (projectId, points) => {
    const response = await fetch('/api/allocate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ shopifyCustomerId: MOCK_CUSTOMER_ID, projectId, points })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error)
    }

    await loadData()
    toast.success(`${points} points allocated! 🎉`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    )
  }

  const totalPoints = projects.reduce((sum, p) => sum + p.current, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h1 className="text-lg font-bold">Impact Points</h1>
          </div>
          <PointsHeader customer={customer} />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Make a Real Impact</h2>
          <p className="text-gray-600">Turn your purchases into social good. Choose your projects.</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center">
            <Target className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-xl font-bold">{projects.length}</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <Sparkles className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-xl font-bold">{totalPoints.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Points Allocated</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-xl font-bold">${(totalPoints / 2.44).toFixed(0)}</div>
            <div className="text-sm text-gray-600">USD Impact</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onUsePoints={setSelectedProject}
                customer={customer}
              />
            ))}
          </div>
          <div>
            <Leaderboard />
          </div>
        </div>
      </main>

      {/* Modal */}
      <PointAllocationModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
        customer={customer}
        onAllocate={handleAllocatePoints}
      />
    </div>
  )
}