import { Router } from 'express'
import { verifyToken } from '../verifyToken.js'
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from '../controllers/video.js'

const router = new Router()

// Create a Video
router.post('/', verifyToken, addVideo)

// Update a Video
router.put('/:id', verifyToken, updateVideo)

// Delete a Video
router.delete('/:id', verifyToken, deleteVideo)

// Get a Video
router.get('/find/:id', getVideo)

// Add a View
router.put('/view/:id', addView)

// Trend
router.get('/trend', trend)

// Random
router.get('/random', random)

// Subscribed Users
router.get('/sub', verifyToken, sub)

// Get by Tag
router.get('/tags', getByTag)

// Search - Get by Query
router.get('/search', search)

export default router
