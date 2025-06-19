import { NextResponse } from 'next/server'
import { PointsService } from '@/lib/services/points'

export async function GET(request, { params }) {
  try {
    const customer = await PointsService.getCustomer(params.shopifyId)
    
    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
    }
    
    return NextResponse.json(customer)
  } catch (error) {
    console.error('Error fetching customer:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}