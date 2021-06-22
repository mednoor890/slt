import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import FormActivite from './components/Form/FormActivite';
import Accueil from './components/Accueill/Accueil'
import Profil from './components/Profil/Profil';
import FormAss from './components/Form1/FormAssociation';
import ListeAssociations from './components/ListeAssociations/ListeAssociations';
import PostDetails from './components/PostDetails/PostDetails';
import Creator from './components/Creator/Creator';

 function App() {
   
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
<Route path='/activite' exact component={ FormActivite }/>
<Route path='/association' exact component={ FormAss }/>
<Route path='/Listeassociation' exact component={ ListeAssociations }/>
<Route path="/Listeassociation/:id" component={PostDetails} />
<Route path="/creators/:name" exact component={Creator} />
<Route path='/profil' exact component={Profil}/>

</Switch>


        </Container>
        </BrowserRouter>
    )         
}

export default App
//to use redux 1st we hav to dispatch our get posts actions in the app file