import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(request, { params }) {
  try {
    const data = await request.json()
    const project = await prisma.project.update({
      where: { id: params.id },
      data: {
        title: data.title,
        description: data.description,
        story: data.story,
        target: parseInt(data.target),
        image: data.image,
        status: data.status,
        order: data.order || 0
      }
    })
    return NextResponse.json(project)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  try {
    await prisma.project.delete({
      where: { id: params.id }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}