import * as api from "../api/index.js"
import { FETCH_ASS,CREATEASS,FETCH_As,LIKEASS,COMMENT} from '../constants/actionTypes';

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
export const getAssocBySearch =(searchQuery) => async (dispatch) => {
try {
  const {data:{data}} = await api.fetchAssocBySearch()
  console.log(data)
} catch (error) {
  console.log(error)
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
export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};
export const likePostASS = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));
  
    try {
      const { data } = await api.likePostASS(id, user?.token);
  
      dispatch({ type: LIKEASS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };