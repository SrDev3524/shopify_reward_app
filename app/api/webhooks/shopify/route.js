import { NextResponse } from 'next/server'
import { PointsService } from '@/lib/services/points'

export async function POST(request) {
  try {
    const body = await request.json()
    
    const orderTotal = parseFloat(body.total_price || 0)
    const tax = parseFloat(body.total_tax || 0)
    const shipping = parseFloat(body.total_shipping_price || 0)
    const discounts = parseFloat(body.total_discounts || 0)
    
    const { netSales, points } = PointsService.calculatePoints(orderTotal, tax, shipping, discounts)
    
    if (points <= 0) {
      return NextResponse.json({ success: false, error: 'No points to allocate' })
    }

    if (body.customer) {
      // Logged-in customer
      const result = await PointsService.addCustomerPoints({
        shopifyCustomerId: body.customer.id.toString(),
        orderId: body.id.toString(),
        orderTotal,
        netSales,
        points,
        email: body.customer.email,
        firstName: body.customer.first_name,
        lastName: body.customer.last_name
      })
      
      return NextResponse.json(result)
    } else {
      // Guest customer
      const result = await PointsService.distributeGuestPoints({
        orderId: body.id.toString(),
        orderTotal,
        netSales,
        points
      })
      
      return NextResponse.json(result)
    }
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}