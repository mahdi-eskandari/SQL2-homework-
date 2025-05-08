import { Router } from "express"
const router = Router()

import {
    createPost,
    deletePost,
    getAllPost,
    updatePost
} from "../controllers/post.controllers.js"



router.post('/users/:userId/posts', createPost)
router.get('/users/:userId/posts', getAllPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)



export default router
