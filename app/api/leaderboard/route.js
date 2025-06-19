import { NextResponse } from 'next/server'
import { PointsService } from '@/lib/services/points'

export async function GET() {
  try {
    const leaderboard = await PointsService.getLeaderboard()
    return NextResponse.json(leaderboard)
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 })
  }
}