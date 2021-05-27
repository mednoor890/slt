import express from 'express'
import Association from '../models/association.js'
import mongoose from 'mongoose'
const router=express.Router()
export const createPostASS =async(req,res)=>{
const {Nom,email,categorie,ville,description,Gouvernorat,Photo}=req.body
const A =new Association({  Nom, email , categorie , ville  ,description,Gouvernorat , Photo})
try {
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

    
export default router