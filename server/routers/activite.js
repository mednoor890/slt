import express from 'express';
import auth from "../middleware/auth.js"
const router = express.Router();
import {  getPostsBySearch,createPost ,getPosts,getPost,likePost,deletePost,getPostsByCreator,commentPost} from '../controllers/activite.js';
router.get('/createur',getPostsByCreator)
router.get('/search', getPostsBySearch);
router.post("/", createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.patch('/:id/likePost',auth, likePost);
router.delete('/:id', auth, deletePost);
router.post('/:id/commentPost', commentPost);



export default router;


//router.delete('/:id', deletePost);
//remember what patch do  it s for updating