import React, { useState, useEffect } from 'react';
import { Container, AppBar, Grid,TextField,Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import ActivitePosts from '../ActivitePosts/ActivitePosts';
import styled from "styled-components"
import { getPostsBySearch } from '../../actions/posts';
import { useHistory, useLocation } from 'react-router-dom';// useHistory allows us to renavigate to certain  pages and search terms \ uselocation is used to now on which page we r currently

const Select = styled.select`
  width: 370px;
  height: 35px;
  background: white;
  color: black;
  margin-top:18px;
  padding-left: 5px;
  font-size: 18px;
  border-radius:1px;
  
  margin-left: 190px;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    border:groove 3px;
  border-color:#FFFFF0  ;
    background-color:white;
outline:none;
  color:grey;
  }
  option {
    color:grey;
    border-radius:10px;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 20px 1px;
    
    ::placeholder {
      ;
    }
  }
`
export const CardButton = styled.button`
  display: block;
  width: 15%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: rgb(233,78,84) ;
  background-color:black ;
  border: 2px solid;
  border-color:rgb(233,78,84);
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(100, 100, 100, 0.9);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:42%;
margin-bottom:12px;
margin-top:20px;
&:hover {
    box-shadow: 0 15px 15px rgba(50, 70, 80, 0.9);
    transform: translateX(0, -5px);
    background-color:rgb(233,78,84) ;
    font-size:22px;
  color:black ;
  border-color:white;

  }
`;
const Wrapper=styled.div`
height:150px;
background-color:red;
width:112%;
margin-left:-67px;
border-bottom-left-radius: 30%;
border-bottom-right-radius: 90%;
border-bottom: 282px solid rgb(233,85,79);
background-image: linear-gradient(black, rgb(233,85,79));
-webkit-box-shadow:5px 1px 1px white;
 -moz-box-shadow:5px 5px 1px white;
 box-shadow:5px 5px 1px #F6B7B9;

`

function useQuery() {
  return new URLSearchParams(useLocation().search);
} 
//this allows us to use it us a hook 
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [nId, setnId] = useState(0)
  const dispatch = useDispatch();
  const query = useQuery();//query is where we will be getting our page info from
  const searchQuery = query.get('searchQuery');
  const history = useHistory();
  const [Filter, setFilter] = useState("")
  const [Search, setSearch] = useState("")
  const searchPost = () => {
    if (Filter || Search) {
      dispatch(getPostsBySearch( { Search, Filter }));
    //history.push(`/search?Gouvernorat=${Search || 'none'}&isAssociation=${Filter}`);
    } else {
      history.push('/');
    }
  };



//useEffect feha fonction hiya ela t7adedlek kifech besh tetbadel lstate mta3ek
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
 
  return (
    <>
    <Wrapper>
<Select name="isAssociation" value={Filter} onChange={(e) => setFilter( e.target.value )}>
  <option >Afficher activite Associative ou Personnelle</option>
  <option value="personelle">Personnelle</option>
  <option value="associative">Associative</option>
</Select>

<Select name="Gouvernorat" value={Search} onChange={(e) => setSearch( e.target.value )}>
  <option>Afficher activite selon Gouvernorat</option>
  <option value="ariana ">Ariana</option>
         <option value="Beja ">Beja</option>
         <option value="BenArous ">BenArous</option>
         <option value="Bizerte ">Bizerte</option>
         <option value="Gabes ">Gabes</option>
         <option value="Jendouba ">Jendouba</option>
         <option value="Kairouan ">Kairouan</option>
         <option value="kasserine ">kasserine</option>
         <option value="Kebili ">Kebili</option>
         <option value="Lekef ">Lekef</option>
         <option value="Mahdia ">Mahdia</option>
         <option value="Manouba ">Manouba</option>
         <option value="Medenine ">Medenine</option>
         <option value="Monastir ">Monastir</option>
         <option value="Nabeul ">Nabeul</option>
         <option value="Sfax ">Sfax</option>
         <option value="Sidi bouzid ">Sidi bouzid</option>
         <option value="Silliana ">Silliana</option>
         <option value="Sousse ">Sousse</option>
         <option value="Tattaouine ">Tattaouine</option>
         <option value="Tozeur ">Tozeur</option>
         <option value="Tunis ">Tunis</option>
         <option value="Zaghouan ">Zaghouan</option>
</Select>
<CardButton onClick={searchPost}>filtrer</CardButton>

      <Container>
                <Grid >

            <ActivitePosts setCurrentId={setCurrentId} />
</Grid>
</Container>
</Wrapper>
      </>
  );
};

export default Home;
