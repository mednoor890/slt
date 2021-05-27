import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,compose,applyMiddleware } from 'redux'
import App from "./App"
import thunk from "redux-thunk"
import { reducers } from './reducers';
import './index.css';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(reducers,{},composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
    
,document.getElementById("root"))

/*What is Redux?

Redux is a pattern and library for managing and updating application state, 
using events called "actions". It serves as a centralized store for state 
that needs to be used across your entire application, with rules ensuring 
that the state can only be updated in a predictable fashion.*/