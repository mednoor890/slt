import express from 'express';
const router = express.Router();
import {createPostASS, getPostsASS,getPostASS,likePostASS} from '../controllers/associations.js'
import auth from "../middleware/auth.js";

router.post('/',auth, createPostASS);
router.patch('/:id/likePostASS', auth, likePostASS);
router.get('/', getPostsASS);
router.get('/:id', getPostASS);
export default router;