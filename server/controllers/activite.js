import express from 'express';
import mongoose from 'mongoose';


import PostMessage from '../models/activite.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getPostsBySearch=async(req,res) =>{
    try {
        const {searchQuery,isAssociation} =req.query
        const Gouvernorat=new RegExp(searchQuery,'i')
        const posts=await PostMessage.find({$or:[{Gouvernorat},{isAssociation}]})
        res.json({data:posts})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPost = async (req, res) => {
    const { Titre, isAssociation , categorie , ageMin ,ageMax,ville  ,description,Gouvernorat , Photo,tel,AssociationNom,createur } = req.body;
               
  
    const newPostMessage = new PostMessage({ Titre, isAssociation , categorie , ageMin ,ageMax, ville  ,  description, Gouvernorat ,createur, Photo,tel,AssociationNom })
    try {
      //const bhim= await PostMessage.save({ Titre, isAssociation , categorie , ageMin ,ageMax, ville  ,  description  , Photo,Gouvernorat,tel } );
     await newPostMessage.save()
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const createComment =async (req,res)=>{
    const commentaire =new PostMessage({
        commentaire:req.body.commentaire,
        commentedBy:req.body.commentedBy
    })
    
    
       const hey= await commentaire.save()
       res.json(hey)
    } 
    export const getComment =async (req,res)=>{
    const comments = await PostMessage.findByIdAndUpdate().exec()
    res.json(comments)
       
    }
export const likePost = async(req,res)=>{
const { id } =req.params

if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
const post =await PostMessage.findById(id)
const updatedPost =await PostMessage.findOneAndUpdate(id, { heartCount: post.heartCount + 1},{new:true})
res.json(updatedPost)
res.status(209)
}



//ass controllers




export default router;
 // 