import { prisma } from '@/lib/prisma'

export const PointsService = {
  
  async addCustomerPoints({
    shopifyCustomerId,
    orderId,
    orderTotal,
    netSales,
    points,
    email,
    firstName = null,
    lastName = null
  }) {
    try {
      const customer = await prisma.customer.upsert({
        where: { shopifyCustomerId },
        update: {
          totalEarned: { increment: points },
          available: { increment: points },
          lastActivity: new Date()
        },
        create: {
          shopifyCustomerId,
          email,
          firstName,
          lastName,
          totalEarned: points,
          available: points
        }
      })

      await prisma.pointEarning.create({
        data: {
          customerId: customer.id,
          orderId,
          orderTotal,
          netSales,
          points,
          isGuest: false
        }
      })

      return { success: true, customer, points }
    } catch (error) {
      console.error('Error adding customer points:', error)
      throw new Error('Failed to add customer points')
    }
  },

  async distributeGuestPoints({ orderId, orderTotal, netSales, points }) {
    try {
      const activeProjects = await prisma.project.findMany({
        where: { status: 'active' }
      })

      if (activeProjects.length === 0) {
        throw new Error('No active projects found')
      }

      const perProject = Math.floor(points / activeProjects.length)
      const remainder = points % activeProjects.length

      await prisma.$transaction(async (tx) => {
        for (let i = 0; i < activeProjects.length; i++) {
          const project = activeProjects[i]
          const allocated = perProject + (i < remainder ? 1 : 0)
          
          const updatedProject = await tx.project.update({
            where: { id: project.id },
            data: {
              current: { increment: allocated }
            }
          })

          await tx.project.update({
            where: { id: project.id },
            data: {
              progress: Math.min((updatedProject.current / updatedProject.target) * 100, 100)
            }
          })

          await tx.pointAllocation.create({
            data: {
              projectId: project.id,
              points: allocated,
              type: 'guest',
              source: orderId
            }
          })
        }

        await tx.pointEarning.create({
          data: { orderId, orderTotal, netSales, points, isGuest: true }
        })
      })

      return { success: true, projects: activeProjects.length, perProject }
    } catch (error) {
      console.error('Error distributing guest points:', error)
      throw new Error('Failed to distribute guest points')
    }
  },

  async allocatePoints({ shopifyCustomerId, projectId, points }) {
    try {
      const customer = await prisma.customer.findUnique({
        where: { shopifyCustomerId }
      })

      if (!customer) throw new Error('Customer not found')
      if (customer.available < points) throw new Error('Insufficient points')

      const project = await prisma.project.findUnique({
        where: { id: projectId }
      })

      if (!project) throw new Error('Project not found')
      if (project.status !== 'active') throw new Error('Project not active')

      await prisma.$transaction(async (tx) => {
        await tx.customer.update({
          where: { shopifyCustomerId },
          data: {
            available: { decrement: points },
            used: { increment: points },
            lastActivity: new Date()
          }
        })

        const updatedProject = await tx.project.update({
          where: { id: projectId },
          data: { current: { increment: points } }
        })

        await tx.project.update({
          where: { id: projectId },
          data: {
            progress: Math.min((updatedProject.current / updatedProject.target) * 100, 100)
          }
        })

        await tx.pointAllocation.create({
          data: {
            customerId: customer.id,
            projectId,
            points,
            type: 'manual'
          }
        })
      })

      return { success: true, points }
    } catch (error) {
      console.error('Error allocating points:', error)
      throw error
    }
  },

  async getProjects() {
    return await prisma.project.findMany({
      where: { status: { in: ['active', 'completed'] } },
      orderBy: { order: 'asc' }
    })
  },

  async getCustomer(shopifyCustomerId) {
    return await prisma.customer.findUnique({
      where: { shopifyCustomerId }
    })
  },

  async getLeaderboard(limit = 20) {
    const customers = await prisma.customer.findMany({
      where: { used: { gt: 0 } },
      orderBy: { used: 'desc' },
      take: limit,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        used: true
      }
    })

    return customers.map((customer, index) => ({
      ...customer,
      rank: index + 1,
      badge: index < 3 ? ['gold', 'silver', 'bronze'][index] : null
    }))
  },

  calculatePoints(orderTotal, tax = 0, shipping = 0, discounts = 0) {
    const netSales = orderTotal - tax - shipping - discounts
    const points = Math.round(netSales * 0.06 * 2.44)
    return { netSales, points }
  }
}