
import { CREATE } from '../constants/actionTypes';
export default  (posts = [], action)=>{
    //the state should always have a value 
    switch(action.type){
       
case CREATE:
return [...posts, action.payload]; // all the posts and the new post is stored inside the action.payload  
default:
    return posts;
    }
}