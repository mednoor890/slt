import mongoose from 'mongoose';

const activiteSchema = mongoose.Schema({
    Titre:String,
    isAssociation:String,
    categorie:[String],
    ageMin:{type:Number, min:6, max:50},
    ageMax:{type:Number, min:10 ,max:100},
    description: String,
    createur:{type:[mongoose.Schema.Types.ObjectId],ref:"user"},
    Gouvernorat :[String], /* gouvernorat*/
    ville :String,
    CreatedAt: {
        type: Date,
        default: new Date(),
    },
    
    Datederoulement:{
        type: Date,
        default: new Date(),
    },
    
    commentaire:{
        type:String,
        default:""
    },
    heartCount:{
        type:Number,
        default:0
 },
    //commentaireBy:{type:[mongoose.Schema.Types.ObjectId],ref:"User"}
    
  
    AssociationNom:String,
    tel:Number, // we need a phone validator here
    Photo:String
})
export default  mongoose.model('PostMessage',activiteSchema) 
