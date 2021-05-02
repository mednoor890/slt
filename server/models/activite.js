import mongoose from 'mongoose';

const activiteSchema = mongoose.Schema({
    Titre:String,
    isAssociation:Boolean,
    categorie:[String],
    ageMin:Number,
    ageMax:Number,
    description: String,
    createur:{type:[mongoose.Schema.Types.ObjectId],ref:"User"},
    Gouvernorat :[String], /* gouvernorat*/
    ville :String,
    CreatedAt: {
        type: Date,
        default: new Date(),
    },
    commentaire:{type:String,
    default:''},
    Datederoulement:{
        type: Date,
        default: new Date(),
    },
    //associatinName
    tel:Number,
    Photo:String
})
export default  mongoose.model('PostMessage',activiteSchema) 
