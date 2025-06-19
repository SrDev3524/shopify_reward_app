import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [
      totalCustomers,
      totalProjects,
      totalPointsEarned,
      totalPointsUsed,
      recentAllocations,
      projectStats
    ] = await Promise.all([
      prisma.customer.count(),
      prisma.project.count(),
      prisma.pointEarning.aggregate({ _sum: { points: true } }),
      prisma.pointAllocation.aggregate({ _sum: { points: true } }),
      prisma.pointAllocation.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          customer: { select: { firstName: true, lastName: true, email: true } },
          project: { select: { title: true } }
        }
      }),
      prisma.project.findMany({
        select: {
          id: true,
          title: true,
          target: true,
          current: true,
          progress: true,
          _count: { select: { allocations: true } }
        }
      })
    ])

    return NextResponse.json({
      overview: {
        totalCustomers,
        totalProjects,
        totalPointsEarned: totalPointsEarned._sum.points || 0,
        totalPointsUsed: totalPointsUsed._sum.points || 0
      },
      recentAllocations,
      projectStats
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
  }
}