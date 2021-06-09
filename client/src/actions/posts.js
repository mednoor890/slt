import * as api from "../api/index.js"
import {  FILTER_ACTIVITY, FETCH_ALL, CREATE,  LIKE,DELETE} from '../constants/actionTypes';

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
   
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FILTER_ACTIVITY, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};