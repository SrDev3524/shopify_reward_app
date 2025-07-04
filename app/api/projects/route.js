import { NextResponse } from 'next/server'
import { PointsService } from '@/lib/services/points'

export async function GET() {
  try {
    const projects = await PointsService.getProjects()
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}