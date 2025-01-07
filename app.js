import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()
const port = 8080

app.use(cors())

app.use(express.json())

app.listen(port, () => {
  console.log(`Todo app listening on port ${port}`)
})

app.get('/', async (req, res) => {
	const tasks = await prisma.task.findMany()
    res.json(tasks)
})

app.get('/tasks', async (req, res) => {
	const tasks = await prisma.task.findMany()
    res.json(tasks)
})

app.post('/tasks', async (req, res) => {
	const { title, color, completed } = req.body
	const task = await prisma.task.create({
		data: {
			title,
			color,
			completed
		}
	})
  res.json(task)
})

app.put('/tasks/:id', async (req, res) => {
	const { id } = req.params
	const { completed } = req.body
	const task = await prisma.task.update({
		where: { id: Number(id) },
		data: {
			completed: !completed
		}
	})
  res.json(task)
})

app.delete('/tasks/:id', async (req, res) => {
	const { id } = req.params
	const task = await prisma.task.delete({
		where: { id: Number(id) },
	})
  res.json(task)
})