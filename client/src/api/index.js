import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });
//this is going to happen before all of the requests we have to send our tocken to the backend so the middleware verify that we r logged in
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchPosts = () => API.get('/');
export const createPost = (newPost) => API.post('/activite', newPost);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData)
//export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
//export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
//export const deletePost = (id) => API.delete(`/posts/${id}`);
