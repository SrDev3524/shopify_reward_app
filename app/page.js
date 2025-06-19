import Link from 'next/link'
import { Sparkles, Target, Users, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Impact Points System
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Turn your purchases into real social impact. Earn points with every order 
            and choose which projects to support around the world.
          </p>
          
          <Link 
            href="/impact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Explore Impact Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6">
            <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Earn Points</h3>
            <p className="text-gray-600">Get 6% of your purchase value as points</p>
          </div>
          
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Choose Projects</h3>
            <p className="text-gray-600">Support real social impact projects</p>
          </div>
          
          <div className="text-center p-6">
            <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">See Impact</h3>
            <p className="text-gray-600">Watch progress and compete on leaderboard</p>
          </div>
        </div>
      </div>
    </div>
  )
}