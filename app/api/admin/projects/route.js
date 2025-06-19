import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        allocations: {
          select: {
            points: true,
            type: true,
            createdAt: true
          }
        }
      }
    })
    return NextResponse.json(projects)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const data = await request.json()
    const project = await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        story: data.story,
        target: parseInt(data.target),
        image: data.image,
        status: data.status || 'active',
        order: data.order || 0
      }
    })
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}