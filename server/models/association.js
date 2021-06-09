import mongoose from 'mongoose';
/*  Nom, email , categorie , ville  ,description,Gouvernorat , Photo */
const associationSchema = mongoose.Schema({
    Nom:String,
    categorie:[String],
    description: String,
    createur:{type:[mongoose.Schema.Types.ObjectId],ref:"User"},
    email: [String],
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
    likesASS:{type:[String],
    default:[]
    },
    

    Photo:String
})
export default  mongoose.model('Association',associationSchema)