import express from'express'
const router=express.Router()
import {createComment} from '../controllers/commentaire.js'
router.post('/', createComment)
export default router