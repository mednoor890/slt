
import { CREATE ,FETCH_ALL,FILTER_ACTIVITY,LIKE,DELETE,CREATE_COMMENT,FETCH_BY_CREATOR} from '../constants/actionTypes';
export default  (posts = [], action)=>{
    //the state should always have a value 
    switch(action.type){
       
    case FETCH_ALL:
        return action.payload;
        case FILTER_ACTIVITY:
          case FETCH_BY_CREATOR:
      return action.payload;
case CREATE:
return [...posts, action.payload]; // all the posts and the new post is stored inside the action.payload  
case DELETE:
      return posts.filter((post) => post._id !== action.payload) ;
   
            case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case CREATE_COMMENT:
        return {
          
          activite: posts.posts.map((post) => {
            if (post._id == +action.payload._id) {
              return action.payload;
            }
            return post;
          }),
        };   
      default:return posts
    }
}