import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default  (posts=[],action)=>{
    //the state should always have a value 
    switch(action.type){
       case DELETE:
       return posts.filter((post) => post._id !== action.payload) 
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case FETCH_ALL :
    return action.payload;
    case LIKE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
case CREATE:
return [...posts,action.payload]; // all the posts and the new post is stored inside the action.payload  
default:
    return posts;
    }
}