import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import cookieParser from 'cookie-parser'
import connectDB from './db/connectDB.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

// middleware:
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// routes:
app.use('/api/auth', authRoutes)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// listen for server:
app.listen(port, () => {
  // connect to MongoDB:
  connectDB()
  console.log(
    `Server is running on: http://localhost:${port}`.cyan.bold.bgWhite.italic
  )
})
