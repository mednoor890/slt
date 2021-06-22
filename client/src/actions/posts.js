import * as api from "../api/index.js"
import {  FILTER_ACTIVITY, FETCH_ALL, CREATE,  LIKE,DELETE,  CREATE_COMMENT,FETCH_BY_CREATOR } from '../constants/actionTypes';
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  }
   catch (error) {
    console.log(error);
  }
};
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
   
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FILTER_ACTIVITY, payload: {data }});
  } catch (error) {
    console.log(error);
  }
};
  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload:data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const likePost=(id) => async (dispatch)=> {
    const user = JSON.parse(localStorage.getItem('profile'));

try {
  const {data} = await api.likePost(id, user?.token)
  dispatch({type: LIKE,payload:data})
} catch (error) {
  console.log(error)
}
  }
  export const commentPost = (value, id) => async (dispatch) => {
    try {
      const { data } = await api.commentPost(value, id);
  
      dispatch({ type: CREATE_COMMENT, payload: data });
  
      return data.comments;
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
  }}
  export const getPostsByCreator = (name) => async (dispatch) => {
    try {
      
      const { data: { data }} = await api.fetchPostsByCreator(name);
  
      dispatch({ type: FETCH_BY_CREATOR, payload:  {data}  });
     
    } catch (error) {
      console.log(error);
    }
  };
 
;