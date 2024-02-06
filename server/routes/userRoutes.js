import { Router } from 'express'
import { deleteUser, dislikeVideo, getUser, likeVideo, subscribe, unSubscribe, updateUser } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js'

const router = new Router()

// Update User
router.put('/:id', verifyToken, updateUser)

// Delete User
router.delete('/:id', verifyToken, deleteUser)

// Get a User
router.get('/find/:id', getUser)

// Subscribe a User
router.put('/sub/:id', verifyToken, subscribe)

// UnSubscribe a User
router.put('/unsub/:id', verifyToken, unSubscribe)

// Like a Video
router.put('/like/:videoId', verifyToken, likeVideo)

// Dislike a Video
router.put('/dislike/:videoId', verifyToken, dislikeVideo)

export default router
