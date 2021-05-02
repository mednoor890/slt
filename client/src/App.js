import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

import FormActivite from './components/Form/FormActivite';
import Accueil from './components/Accueill/Accueil'
/*import { Modal } from './components/Form/Modal';
/import { useState } from 'react';*/
/*const  Buttonn =styled.button`
min-width:60px;
padding:16px 32px;
background:black;
height:100%;
margin-left:12px;
color:coral;
font-size:24px;

cursor:pointer;
fontFamily:"'Homemade Apple', cursive;"
`*/
 function App() {
    /*const [ShowModal, setShowModal] = useState(true)
  const openModal=()=>{
    setShowModal(prev=>!prev)
  }*/
             /*dispatch has access to currentState and reducer 
             . When dispatch is called, it receives an action object as an argument. 
             ... when an action is dispatched, or when we invoke dispatch and pass 
             in an action object, the dispatch function calls our reducer and passes in the current state and the action object!*/
      
     //once w have where to send an action we have to create an action by importing it 1st and then passing it to useEffect
    // now we have to export the action fom the actions folder
     return (
         <BrowserRouter>
        <Container maxwidth="lg">
 
<Navbar />


<Switch>
<Route path='/' exact component={ Accueil }/>
<Route path='/auth' exact component={ Auth }/>
<Route path='/activites' exact component={ FormActivite }/>
</Switch>


        </Container>
        </BrowserRouter>
    )         
}

export default App
//to use redux 1st we hav to dispatch our get posts actions in the app file