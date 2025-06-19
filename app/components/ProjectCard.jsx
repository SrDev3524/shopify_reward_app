'use client'

import { useState } from 'react'
import { Heart, Info, Sparkles } from 'lucide-react'

export default function ProjectCard({ project, onUsePoints, customer }) {
  const [showDetails, setShowDetails] = useState(false)
  
  const progress = Math.min((project.current / project.target) * 100, 100)
  const progressColor = progress >= 67 ? 'bg-green-500' : progress >= 34 ? 'bg-blue-500' : 'bg-blue-300'
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <img 
            src={project.image || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400'} 
            alt={project.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
            {progress.toFixed(1)}% Complete
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
          
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>{project.current.toLocaleString()}</span>
              <span>{project.target.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${progressColor}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowDetails(true)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
            >
              Details
            </button>
            <button
              onClick={() => onUsePoints(project)}
              disabled={!customer || project.status !== 'active'}
              className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 text-sm"
            >
              Use Points
            </button>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setShowDetails(false)}>
          <div className="bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <button onClick={() => setShowDetails(false)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-4" />
            <p className="text-gray-700 mb-4">{project.story || project.description}</p>
            <div className="bg-gray-50 p-3 rounded">
              <div className="flex justify-between mb-2">
                <span>Progress: {progress.toFixed(1)}%</span>
                <span>{project.current.toLocaleString()} / {project.target.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className={`h-3 rounded-full ${progressColor}`} style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}