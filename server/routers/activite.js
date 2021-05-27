import express from 'express';
import auth from "../middleware/auth.js"
const router = express.Router();
import {  getPostsBySearch,createPost ,createComment,getPosts,getPost,getComment,likePost} from '../controllers/activite.js';

router.post("/",auth, createPost);
router.post('/:id', createComment )
router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/:id', getComment)
router.patch('/:id/likePost', likePost);


export default router;


//router.delete('/:id', deletePost);
//remember what pash do  it s for updating