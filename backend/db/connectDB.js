import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI
    const conn = await mongoose.connect(MONGO_URI)

    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold.italic
    )
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB