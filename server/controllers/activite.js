import express from 'express';
import mongoose from 'mongoose';


import PostMessage from '../models/activite.js';
import UserModal from "../models/user.js"

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getPostsBySearch = async (req,res) =>{
    const {searchQuery,isAssociation} =req.query
    try {
        
        
        const posts=await PostMessage.find({ $or :[ {searchQuery}, {isAssociation}]})
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
    try {
    const { Titre, isAssociation , categorie , ageMin ,ageMax,ville  ,description,Gouvernorat , Photo,tel,AssociationNom,Datederoulement,temps } = req.body;
    
               if (Photo.length ===0 || Titre.length===0 || isAssociation.length===0 || Gouvernorat.length===0 ||categorie.length===0 || ville.length===0)
               return res.status(400).json({msg:"please add all fucking fields"}) 
  
    const newPostMessage = new PostMessage({ Titre, isAssociation , categorie , ageMin ,ageMax, ville  ,  description, Gouvernorat, Photo,tel,temps,AssociationNom,Datederoulement ,createur: req.userId})
    
      //const bhim= await PostMessage.save({ Titre, isAssociation , categorie , ageMin ,ageMax, ville  ,  description  , Photo,Gouvernorat,tel } );
     await newPostMessage.save()
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const likePost = async(req,res)=>{
const { id } =req.params;

if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('no post with that id');
const post =await PostMessage.findById(id)// traj3ilna post bark like the name says
const updatedPost =await PostMessage.findByIdAndUpdate(id, { heartCount: post.heartCount + 1},{new:true})
res.json(updatedPost)
res.status(209)
}


export const deletePost = async (req, res) => {
const { id } = req.params;
if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)
await PostMessage.findByIdAndRemove(id);
res.json({message:"not found"})
}


export default router;
 // 