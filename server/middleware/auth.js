import jwt from 'jsonwebtoken'
const secret = 'test';
const auth =async(req,res,next)=>{
//ken l'utilisateur wela l visiteur yenzel 3ala fonctionalite mou3ayna lazem yet3ada 3al auth middleware(next) ken 3andou permission l requete te3ada si nn le
    try {
        const token = req.headers.authorization.split(" ")[1];
      let decodedData
        
            decodedData = jwt.verify(token,secret) //now we are able to know which user is connected 
            req.userId = decodedData.id//we get his id
        next()
    } catch (error) {
        console.log(error)
    }
}
export default auth

// to know that it s a real user who is logged in
