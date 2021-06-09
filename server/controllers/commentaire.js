import express from "express"
import Avis from '../models/avis.js'
import PostMessage from '../models/activite.js'
import mongoose from 'mongoose'
const router=express.Router()
export const createComment = async (req,res)=>{
  try {
       const {postId,commentaire}=req.body
       const newCommentaire=new Avis({ 
           user: req.user._id,commentaire
       })
       await PostMessage.findByIdAndUpdate({_id:postId},
        
        {$push:
            {commentaire:new newCommentaire._id}
        },{new:true})
        await newCommentaire.save()
        res.json({newCommentaire})
  } catch (error) {
      
  }

}
export default router;



/*const { id } =req.params.id;
const userId =req.user.id;
const post=await PostMessage.findById(id)
const user = await UserModal.findById(userId)
const createur={
id:req.user.id,
name:user.Nom,
avatar:user.selectedFile,
}
const newPostComment=new Comment({  comment:req.body,
createur:createur
})
    newPostComment.save()
resstatus(204).json(newPostComment)} 
    catch (err) {
res.status(500).json({msg:"something lsh"
*/