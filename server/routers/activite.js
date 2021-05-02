import express from 'express';
const router = express.Router();
import {  createPost,getPosts,getPost } from '../controllers/activite.js';
router.post("/",createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
export default router;

//router.patch('/:id', updatePost);
//router.delete('/:id', deletePost);
//router.patch('/:id/likePost', likePost);//remember what pash do 