import mongoose from 'mongoose';

const avisSchema = mongoose.Schema({
/*heartCount:{
        type:Number,
        default:0
 },*/
 commentaire:{
        type:String,
        default:"",required:true
    },
    user:{type:mongoose.Types.ObjectId,ref:"user"},
    postId: mongoose.Types.ObjectId,

},{
timestamps:true})
export default  mongoose.model('Avis',avisSchema) 
