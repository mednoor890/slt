import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });
//this is going to happen before all of the requests we have to send our tocken to the backend so the middleware verify that we r logged in
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});
export const fetchPosts = () => API.get('/activite');
export const fetchPostsBySearch = (searchQuery) => API.get(`/search?searchQuery=${searchQuery.search || 'none'}&IsAssociation=${searchQuery.isAssociation}`);
export const createPost = (newPost) => API.post('/activite', newPost)
export const createComment =(id,newComment)=> API.post(`/activite/${id}/`,newComment)
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData)
export const likePost = (id) => API.patch(`/activite/${id}/likePost`);



export const createPostASS = (newPostASS) => API.post('/association', newPostASS);
export const fetchPostsASS= () => API.get('/association');
export const fetchPostsAS= (id) => API.get(`/association/${id}`);


//export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
//export const deletePost = (id) => API.delete(`/posts/${id}`);
