import { NextResponse } from 'next/server'
import { PointsService } from '@/lib/services/points'

export async function POST(request) {
  try {
    const { shopifyCustomerId, projectId, points } = await request.json()
    
    if (!shopifyCustomerId || !projectId || !points || points <= 0) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 })
    }
    
    const result = await PointsService.allocatePoints({
      shopifyCustomerId,
      projectId,
      points: parseInt(points)
    })
    
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error allocating points:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}