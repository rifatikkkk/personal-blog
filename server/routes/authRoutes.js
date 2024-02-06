import { Router } from 'express'
import { signIn, signUp } from '../controllers/auth.js'

const router = new Router()

// Create a new User - Sign Up
router.post('/signup', signUp)

// Sign In
router.post('/signin', signIn)

// Google Auth
router.post('/google',)


export default router
