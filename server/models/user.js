import mongoose from "mongoose"
const userSchema =mongoose.Schema({

    Nom:{type:String, required :true ,unique:false},
    Prenom:{type:String, required :true,unique:false },
    Age: {type:Number,
        maximum:120,
        minimum:6
    },
    Email: {type:String,
        require: true,
        match: /.+\@.+\..+/,
        unique:true
    },
    Gender: { type: String,
      

},
    Gouvernorat:{
        type:String,
        default:"beja"
    //name:{$in:["ariana","beja" ,"benarous","bizerte","gabes","gafsa","jendouba","kairouan","kasserine","kebili","kef","mahdia","manouba","mednine","monastir","nabeul","sfax","sidi bouzid","silliana","sousse","tataouine","tozeur","tataouine","zaghouan"]}},
   //enum:[],
},
   // Cinteret:{type:[Schema.Types.ObjectId],ref:"Categorie"},
   Cinteret:{type:Array,
default:[]},
    Password:{type:String,require:true},
    confirmPassword:{type:String,require:true},
    Nfollowers:{type:Number,default:0},
    Nfollowing:{type:Number,default:0},
    selectedFile:{type:String}
}) 
/*const validator=function(value){
   return /ariana,beja ,benarous,bizerte,gabes,gafsa,jendouba,kairouan,kasserine,kebili,kef,mahdia,manouba,mednine,monastir,nabeul,sfax,sidi bouzid,silliana,sousse,tataouine,tozeur,tataouine,zaghouan/i.test(value)}
    userSchema.path('Gouvernorat').validate(validator,'gouvernorat`{VALUE}`not valid,`invalid gouvernorat`');*/

export default  mongoose.model('User',userSchema) 


//export default mongoose.model("User", userSchema);
/* import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
 username:{
type:String,
required:[true,"pls da5al esmek"]
 }
 ,
 email:{
    type:String,
    required:[true,"pls da5al email"],
    unique:true,
    match:[/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "pls valid email bel @ "  ]
},
password:{
    type:String,
    required:[true,"pls da5al mot de passe"]
    ,minlength:6,
    select:false},
    resetPasswordToken:String,
    resetPasswordExpire:Date
}

) 
UserSchema.pre("save", async function (next){
    if (!this.isModified("password")){
        next();
    }
    const salt =await bcrypt.genSalt(10)
    this.password =await bcrypt.hash(this.password,salt)//
    next()
})
UserSchema.methods.matchPasswords=async function(password){
    return await bcrypt.compare(password)
}
const User =mongoose.model("User",UserSchema)
export default User */