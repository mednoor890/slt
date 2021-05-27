import { CREATE } from '../constants/actionTypes';
export default  (comments = [], action)=>{
    //the state should always have a value 
    switch(action.type){
       
case CREATE:
return [...comments, action.payload]; // all the posts and the new post is stored inside the action.payload  
default:
    return comments;
    }
}