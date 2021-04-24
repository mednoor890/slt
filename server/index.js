import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routers/user.js'

const app = express()
app.use(bodyParser.json({limit:'30mb',extended :true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended :true}))//send properly our requests
app.use(cors())
mongoose.connect('mongodb://127.0.0.1:27017/pfe',{useNewUrlParser:true,useCreateIndex:true,
useUnifiedTopology:true,
useFindAndModify:true})
const connection = mongoose.connection
connection.once('open',function(){
    console.log("MongoDb connection established  succesfully")
})
app.use('/user',userRoutes)





const PORT = 5000;
app.listen(PORT ,() => console.log(`server working on port: ${PORT}`))
/*import  express  from "express";
import { login, register, resetpassword,forgotpassword } from "./controllers/auth.js";
import   connectDB  from "./config/db.js";

connectDB()
const app=express()

app.use(express.json())//allow us to take data from the body
app.use("/auth",register)
app.use("/auth",login)
app.use("/auth",forgotpassword)
app.use("/auth",resetpassword)


const PORT=  5000;
const server =app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
  });
//server setup*/
