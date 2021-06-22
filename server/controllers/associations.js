import express from 'express'
import Association from '../models/association.js'
import mongoose from 'mongoose'
const router=express.Router()
export const createPostASS =async(req,res)=>{
const A=req.body
const assoc =new Association({  ...A,createur: req.userId})
try {
   /* if (Nom.length ===0 || email.length===0 || categorie.length===0 || Gouvernorat.length===0 || ville.length===0||(description.length===0))
    return res.status(400).json({msg:"please add all fucking fields"}) */
if (!A) return  res.status(400).json({msg:"please add all fucking fields"})
    await assoc.save()
    res.status(201).json(assoc)
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
export const getAssociationBySearch=async(req,res)=>{
const {Rechercher} =req.query
    try {
    const title = new RegExp(Rechercher,'i');
const association = await Association.find(    [    {title}   ]              )
res.json({data: association})
} catch (error) {
    res.status(404).json({error: error.message})
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
  export const commentPostAss = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const association = await Association.findById(id);

    association.comments.push(value);

    const updatedPost = await Association.findByIdAndUpdate(id, association, { new: true });

    res.json(updatedPost);
};

export default router;
