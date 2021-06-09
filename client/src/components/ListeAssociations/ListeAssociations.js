import React, { useState, useEffect } from 'react';
import { Button,Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getPostAss } from '../../actions/associations';
import Association from '../Associations/Associations';
const Input = styled.input`
font-size: 18px;
padding: 10px;
margin-left: 25%;
margin-top:10px;
width:450px;
outline:none;
color:black;
background: white;
border: groove 1.5px;
border-color:pink;
border-radius: 43px;
font-family:'Homemade Apple';
`
const ListeAssociations = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
const [Rechercher, setRechercher] = useState("")
  useEffect(() => {
    dispatch(getPostAss());
  }, [currentId, dispatch]);
  function handleChange(e) {
    setRechercher(e.target.value);
}
  return (
    <>
    
    <Input type="text" name="recherche" placeholder="filtrer par Nom" value={Rechercher} onChange={handleChange}/>
    <Button variant ="contained" color='secondary' style={{borderRadius:"19px",marginLeft:"5px"}}>rechercher</Button>
    <Grow in>
    
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Association setCurrentId={setCurrentId} />
          </Grid>
          
        </Grid>
      </Container>
    </Grow>
  </>);
};

export default ListeAssociations;