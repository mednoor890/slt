import * as api from "../api/index.js"
import {  CREATE } from '../constants/actionTypes';

  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload:data });
    } catch (error) {
      console.log(error);
    }
  };
  
  

  