import * as api from "../api/index.js"
import {  START_LOADING, END_LOADING, FETCH_ALL,  FETCH_BY_SEARCH, CREATE,  LIKE} from '../constants/actionTypes';

  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload:data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const likePost=(id) => async (dispatch)=> {
try {
  const {data} = await api.likePost(id)
  dispatch({type: LIKE,payload:data})
} catch (error) {
  console.log(error)
}
  }
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
   
    const { data:{data} } = await api.fetchPostsBySearch(searchQuery);
console.log(data)
  } catch (error) {
    console.log(error);
  }
};
/*export const filterAssociation = (posts,isAssociation) => async (dispatch) => {
 
};
*/
  

  