
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken' //store the user in a period of time

import UserModal from "../models/user.js"
const secret = 'test';
export const signup = async (req,res) =>{
    
  const { Nom,Prenom,Age,selectedFile,Gender,Gouvernorat,Cinteret,Email,Password,confirmPassword} =req.body;

    try {
        const existingUser=await UserModal.findOne({ Email })
        console.log(req.body)
       // if (Gouvernorat !== States) return res.status(401).json({message:"no such gouvernorat"})
        if   (existingUser ) return res.status(400).json({message:"user already in the database"})
        if (Password !== confirmPassword) return res.status(400).json({message:"check the password"})
        const hashedPassword =await bcrypt.hash(Password,12)
      //const result = await UserModel.create({Nom,Prenom,Gender,Gouvernorat,Cinteret,dNaissance,Email,Password: hashedPassword,confirmPassword})
      const result = await UserModal.create({Nom,
        Prenom,
        Gender ,selectedFile,
        Gouvernorat,Cinteret,Age,Email,Password: hashedPassword,confirmPassword}) 
      const token = jwt.sign({ Email: result.Email,id: result._id},secret,{expiresIn:"1h"})
     
       res.status(201).json({result,token})
    } catch (error) {
       res.status(500).json(error.message)
   console.log(error)
    }
}

export const signin =async (req,res)=>{
    const {Email,Password} =req.body;
    try {
    const existingUser=await UserModal.findOne({ Email })
    if   (!existingUser ) return res.status(404).json({message:"user not in the database"})
    const isPasswordCorrect =await bcrypt.compare(Password,existingUser.Password) 
if(!isPasswordCorrect) return res.status(400).json({message:"invalide"})
const token = jwt.sign({ Email: existingUser.Email,id: existingUser._id},secret,{expiresIn:"50h"})
res.status(200).json({result:existingUser,token})   

} catch (error) {
     res.status(500).json(error.message)
    }
}
export const getUsers= async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await UserModal.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }}
/*import User from "../models/User.js"
export const register= async(req,res,next)=>{
    //res.send("insicription route"
    const {username,email,password} = req.body;
    try {
        const user =await User.create({
            username,email,password
        })
        res.status(201).json({
            succees:true,
            token:"23fef34f"
        })
    } catch (error) {
        res.status(500).json({succees:false,
        error:error.message
    })
    }
}
export const login = async (req,res,next)=>{
    const {email,password} =req.body
    //res.send("connexion route")
try {
    const user = await User.findOne({ email }).select("+password");
if(!user){
    res.status(404).json({succees:false,error:"invalide"})
}
const kifKif= await  user.matchPasswords(password)
if (!kifKif){
    res.status(404).json({succees:false,error:"invalid password"})
}
res.status(200).json({
succees:true,
token:"tr34f3443fc"
})
} catch (error) {
    res.status(500).json({sucess :false,error:error.message})
}
}
export const forgotpassword= (req,res,next)=>{
    res.send("mot de passe oublie route")
}
export const resetpassword= (req,res,next)=>{
    res.send("recuperation mot de passe  route")
}
const sendToken =(user,s)*/