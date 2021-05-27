import * as api from "../api/index.js"
import { FETCH_ASS,CREATEASS,FETCH_As,fetchPostsAS} from '../constants/actionTypes';

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