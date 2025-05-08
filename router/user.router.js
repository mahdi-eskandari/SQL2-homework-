import { Router } from "express"
const router = Router()

import {
    createUser,
    deleteUser,
    getAllUsers,
    updateUser
} from "../controllers/user.controllers.js"


router.post('/', createUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)



export default router