import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
	const task1 = await prisma.task.create({
    data: {
      title: 'walk the hamster',
      color: 'red',
      completed: true,
    },
  })

	const task2 = await prisma.task.create({
		data: {
			title: "wash laundry",
			color: "yellow",
			completed: false,
		},
	})

  const task3 = await prisma.task.create({
		data: {
			title: "build castle",
			color: "green",
			completed: false,
		}
	})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })