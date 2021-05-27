import express from 'express';
const router = express.Router();
import {createPostASS, getPostsASS,getPostASS} from '../controllers/associations.js'
import auth from "../middleware/auth.js";

router.post('/', createPostASS);

router.get('/', getPostsASS);
router.get('/:id', getPostASS);
export default router;