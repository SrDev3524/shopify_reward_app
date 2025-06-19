import dotenv from 'dotenv'
dotenv.config()

import { prisma } from '../lib/prisma.js'

async function main() {
  console.log('🌱 Seeding database...')

  // Create sample projects
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: "Clean Water Initiative",
        description: "Providing clean water access to rural communities in developing regions",
        story: "This project aims to build water filtration systems in 10 remote villages, providing clean drinking water to over 2,000 people. Each system will serve an entire village and requires maintenance training for local communities.",
        target: 50000,
        current: 12750,
        progress: 25.5,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
        status: "active",
        order: 1,
        breakdown: {
          "Water filtration systems": "$15,000",
          "Installation & setup": "$5,000",
          "Training programs": "$3,000",
          "Maintenance supplies": "$2,000"
        }
      }
    }),
    prisma.project.create({
      data: {
        title: "Education for All",
        description: "Building schools and providing educational resources to underprivileged children",
        story: "Supporting education infrastructure and learning materials for underprivileged children in developing regions. This includes building classrooms, providing books, tablets, and training teachers.",
        target: 75000,
        current: 45250,
        progress: 60.3,
        image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400",
        status: "active",
        order: 2,
        breakdown: {
          "School construction": "$25,000",
          "Learning materials": "$8,000",
          "Teacher training": "$5,000",
          "Technology equipment": "$7,000"
        }
      }
    }),
    prisma.project.create({
      data: {
        title: "Reforestation Project",
        description: "Planting trees to combat climate change and restore ecosystems",
        story: "A comprehensive tree-planting initiative to restore 100 hectares of deforested land and support local ecosystems. The project also provides employment for local communities.",
        target: 30000,
        current: 28750,
        progress: 95.8,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
        status: "active",
        order: 3,
        breakdown: {
          "Tree seedlings": "$8,000",
          "Land preparation": "$4,000",
          "Planting labor": "$6,000",
          "Monitoring & care": "$2,000"
        }
      }
    }),
    prisma.project.create({
      data: {
        title: "Solar Energy Access",
        description: "Installing solar panels in off-grid communities",
        story: "Bringing renewable energy to remote communities that lack access to electricity. Solar installations will power homes, schools, and small businesses.",
        target: 60000,
        current: 5420,
        progress: 9.0,
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400",
        status: "active",
        order: 4,
        breakdown: {
          "Solar panels": "$20,000",
          "Battery systems": "$15,000",
          "Installation": "$8,000",
          "Training & maintenance": "$5,000"
        }
      }
    })
  ])

  // Create sample customer
  const customer = await prisma.customer.create({
    data: {
      shopifyCustomerId: '123456789',
      email: 'demo@example.com',
      firstName: 'Demo',
      lastName: 'User',
      totalEarned: 5000,
      available: 2500,
      used: 2500
    }
  })

  // Create sample point earnings
  await prisma.pointEarning.create({
    data: {
      customerId: customer.id,
      orderId: 'order_001',
      orderTotal: 150.00,
      netSales: 125.00,
      points: 763,
      isGuest: false
    }
  })

  // Create sample allocations
  await prisma.pointAllocation.create({
    data: {
      customerId: customer.id,
      projectId: projects[0].id,
      points: 1000,
      type: 'manual'
    }
  })

  await prisma.pointAllocation.create({
    data: {
      customerId: customer.id,
      projectId: projects[1].id,
      points: 1500,
      type: 'manual'
    }
  })

  // Create some leaderboard entries
  const leaderboardUsers = await Promise.all([
    prisma.customer.create({
      data: {
        shopifyCustomerId: '987654321',
        email: 'top1@example.com',
        firstName: 'Alex',
        lastName: 'Champion',
        totalEarned: 15000,
        available: 500,
        used: 14500
      }
    }),
    prisma.customer.create({
      data: {
        shopifyCustomerId: '456789123',
        email: 'top2@example.com',
        firstName: 'Sarah',
        lastName: 'Impact',
        totalEarned: 12000,
        available: 1000,
        used: 11000
      }
    }),
    prisma.customer.create({
      data: {
        shopifyCustomerId: '789123456',
        email: 'top3@example.com',
        firstName: 'Mike',
        lastName: 'Green',
        totalEarned: 8500,
        available: 1500,
        used: 7000
      }
    })
  ])

  console.log('✅ Database seeded successfully!')
  console.log(`Created ${projects.length} projects`)
  console.log(`Created ${leaderboardUsers.length + 1} customers`)
  console.log('🎮 Ready to test the Impact Points System!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })