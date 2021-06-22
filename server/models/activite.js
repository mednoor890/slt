import mongoose from 'mongoose';

const activiteSchema = mongoose.Schema({
    Titre:String,
    isAssociation:String,
    categorie:[String],
    ageMin:{type:Number, min:6, max:50},
    ageMax:{type:Number, min:7 ,max:100},
    description: String,
    name:String,
    createur:String,
    Avatar:String,
    prenom:String,
    //createur:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}],
    Gouvernorat :[String], /* gouvernorat*/
    ville :String,
    CreatedAt: {
        type: Date
        
    },
    
    Datederoulement:{
        type: String,
     
    },
    temps: {type: String},
    comments: { type: [String], default: [] },    
    heartCount:
        {type:[String],
            default:[]
 },
    //commentaireBy:{type:[mongoose.Schema.Types.ObjectId],ref:"User"}
    
  
    AssociationNom:String,
    tel:Number, // we need a phone validator here
    Photo:String
})
export default  mongoose.model('PostMessage',activiteSchema) 