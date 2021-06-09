import express from 'express'
import Association from '../models/association.js'
import mongoose from 'mongoose'
const router=express.Router()
export const createPostASS =async(req,res)=>{
const {Nom,email,categorie,ville,description,Gouvernorat,Photo}=req.body
const A =new Association({  Nom, email , categorie , ville  ,description,Gouvernorat , Photo})
try {
    if (Nom.length ===0 || email.length===0 || categorie.length===0 || Gouvernorat.length===0 || ville.length===0||(description.length===0))
    return res.status(400).json({msg:"please add all fucking fields"}) 

    await A.save()
    res.status(201).json(A)
} catch (error) {
    res.status(409).json({message:error.message})
}
}
export  const getPostsASS=async(req,res) =>{
try {
    const association =await Association.find()
    res.status(200).json(association)
} catch (error) {
    res.status(404).json({message:error.message})
}

}
export const getPostASS =async(req,res)=>{
    const { id } = req.params;
    try {
        const post = await Association.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const likePostASS = async(req,res)=>{
    const { id } =req.params;
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
      }

    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no post with that id:${id}`);
    const post =await Association.findById(id)// traj3ilna post bark like the name says
    const index = post.likesASS.findIndex((id) => id ===String(req.userId));
    if (index === -1) {
        post.likesASS.push(req.userId);
      } else {
        post.likesASS = post.likesASS.filter((id) => id !== String(req.userId));
      }
  
      const updatedPostASS = await Association.findByIdAndUpdate(id, post, { new: true });
      res.status(200).json(updatedPostASS);
  }
    
export default router