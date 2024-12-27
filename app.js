import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', async (req, res) => {
	const posts = await prisma.task.findMany()
    res.json(posts)
})