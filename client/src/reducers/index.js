import { combineReducers } from 'redux';


import auth from './auth';
import posts from './posts'
import associations from'./associations'
export const reducers = combineReducers({  auth,posts,associations });