'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, BarChart3, Settings } from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import ProjectForm from '@/app/components/admin/ProjectForm'
import Analytics from '@/app/components/admin/Analytics'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('projects')
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (activeTab === 'projects') {
      loadProjects()
    }
  }, [activeTab])

  const loadProjects = async () => {
    try {
      const response = await fetch('/api/admin/projects')
      const data = await response.json()
      setProjects(data)
    } catch (error) {
      toast.error('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProject = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      const response = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) throw new Error('Failed to delete')
      
      toast.success('Project deleted!')
      loadProjects()
    } catch (error) {
      toast.error('Failed to delete project')
    }
  }

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Settings },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content */}
        {activeTab === 'analytics' && <Analytics />}
        
        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Manage Projects</h2>
              <button
                onClick={() => {
                  setSelectedProject(null)
                  setShowProjectForm(true)
                }}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            </div>

            {loading ? (
              <div className="grid gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 h-24 rounded"></div>
                ))}
              </div>
            ) : (
              <div className="grid gap-4">
                {projects.map(project => (
                  <div key={project.id} className="bg-white rounded-lg border p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg">{project.title}</h3>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            project.status === 'active' ? 'bg-green-100 text-green-800' :
                            project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span>Progress: {project.progress.toFixed(1)}%</span>
                          <span>{project.current.toLocaleString()} / {project.target.toLocaleString()} points</span>
                          <span>{project.allocations?.length || 0} contributions</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedProject(project)
                            setShowProjectForm(true)
                          }}
                          className="p-2 text-gray-600 hover:text-blue-600"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="p-2 text-gray-600 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Project Form Modal */}
      <ProjectForm
        project={selectedProject}
        isOpen={showProjectForm}
        onClose={() => {
          setShowProjectForm(false)
          setSelectedProject(null)
        }}
        onSave={loadProjects}
      />
    </div>
  )
}