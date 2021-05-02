import express from 'express';
const router = express.Router();
import { getPosts,getPost} from '../controllers/activite.js'
router.get('/', getPosts);
router.get('/:id', getPost);
export default router;
