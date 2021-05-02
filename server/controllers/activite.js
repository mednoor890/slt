import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/activite.js';

const router = express.Router();


export const createPost = async (req, res) => {
    const { Titre, isAssociation , categorie , ageMin ,ageMax,ville  ,description,Gouvernorat , Photo,tel } = req.body;
               
  
    const newPostMessage = new PostMessage({ Titre, isAssociation , categorie , ageMin ,ageMax, ville  ,  description, Gouvernorat , Photo,tel })
    try {
      //const bhim= await PostMessage.save({ Titre, isAssociation , categorie , ageMin ,ageMax, ville  ,  description  , Photo,Gouvernorat,tel } );
     await newPostMessage.save()
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
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

export default router;
 // 