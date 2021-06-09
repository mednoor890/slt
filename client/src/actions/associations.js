import * as api from "../api/index.js"
import { FETCH_ASS,CREATEASS,FETCH_As,fetchPostsAS,LIKEASS} from '../constants/actionTypes';

export const getPostAs =(id) => async (dispatch)=>{
    try {
        const {data}=await api.fetchPostsAS(id)
        dispatch({type:FETCH_As, payload: data})
    } catch (error) {
        console.log(error.message)
    }
    
    }
    
export const getPostAss =() => async (dispatch)=>{
try {
    const {data}=await api.fetchPostsASS()
    dispatch({type:FETCH_ASS, payload: data})
} catch (error) {
    console.log(error.message)
}

}
export const createPostASS =(newPostASS)=> async (dispatch)=>{
try {
  const {data} =await api.createPostASS(newPostASS)  
  dispatch ({type:CREATEASS, payload:data})
} catch (error) {
    console.log(error.message)

}


}

export const likePostASS = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
  
    try {
      const { data } = await api.likePostASS(id, user?.token);
  
      dispatch({ type: LIKEASS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };