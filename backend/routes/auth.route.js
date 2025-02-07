import Router from 'express'
import { signup, signin, signout } from '../controllers/auth.controller.js'

const router = Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/signout', signout)

export default router
// PORT=5000

// MONGO_URI=mongodb+srv://abuhuda51020:DH8ZwGDuC3y2TGhr@cluster0.6ksbi.mongodb.net/auth-tuturial?retryWrites=true&w=majority&appName=Cluster0
// JWT_SECRET=1Db5B42fgdksodmkvonemlaGfkirf58rekfjvld
// NODE_ENV=develpment