import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });
//this is going to happen before all of the requests we have to send our tocken to the backend so the middleware verify that we r logged in
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;//this function is going to happen on each one of our requests
  }

  return req;
});
//activite requests 

export const fetchPosts = () => API.get('/activite');
export const fetchPostsBySearch = (searchQuery) => API.get(`/activite/search?searchQuery=${searchQuery.Search|| 'none'}&isAssociation=${searchQuery.Filter}`);
export const createPost = (newPost) => API.post('/activite', newPost);
export const likePost = (id) => API.patch(`/activite/${id}/likePost`);
export const deletePost = (id) => API.delete(`/activite/${id}`);

export const createComment=(newCommentaire)=>API.post(`/comment`,newCommentaire);
//requests of auth
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData)

// requests of association
export const createPostASS = (newPostASS) => API.post('/association', newPostASS);
export const fetchPostsASS= () => API.get('/association');
export const fetchPostsAS= (id) => API.get(`/association/${id}`);
export const likePostASS = (id) => API.patch(`/association/${id}/likePostASS`)

//export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
//export const deletePost = (id) => API.delete(`/posts/${id}`);
