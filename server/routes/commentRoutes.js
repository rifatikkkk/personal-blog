import { Router } from 'express'
import { verifyToken } from '../verifyToken.js'
import { addComment, deleteComment, getComments } from '../controllers/comment.js'

const router = new Router()

// Add Comment
router.post('/', verifyToken, addComment)

// Get Comments
router.get('/:videoId', verifyToken, getComments)

// Delete Comment
router.delete('/:id', verifyToken, deleteComment)

export default router
