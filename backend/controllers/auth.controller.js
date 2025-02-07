import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js'
import bcryptjs from 'bcryptjs'
import crypto from 'crypto'
import { User } from '../models/user.model.js'

// signup
export const signup = async (req, res) => {
  const { name, email, password } = req.body
  try {
    if (!name || !email || !password) {
      throw new Error('All fields are required')
    }
    const userAlreadyExists = await User.findOne({ email })
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: 'User already exists' })
    }
    const hashedPassword = await bcryptjs.hash(password, 12)
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString()
    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    })
    await user.save()
    // generate token and set cookie
    generateTokenAndSetCookie(res,user._id)
    res
      .status(201)
      .json({
        success: true,
        message: 'User created successfully',
        user: { ...user._doc, password: undefined },
      })
  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
}
// signin
export const signin = async (req, res) => {
  res.send('signin')
}

// signout
export const signout = async (req, res) => {
  res.send('signout')
}
