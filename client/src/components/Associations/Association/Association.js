 import React from 'react'
import styled from 'styled-components'
import {Avatar, ButtonBase} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
const Container=styled.div`
background:whitesmoke;
margin-right:10%;
margin-top:-130px;
width:300px;
height:350px;
box-shadow: 0 15px 15px rgba(20, 50, 20, 0.6);
border-radius:15px;
  
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:10%;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.86);
    transform: translate(0, -5px);
    background-color:rgb(214,230,255,0.7);
    border :solid 2px #3F51B5;
    border-radius:15px;
`
export const CardaButton = styled.button`
  
  width: 250%;
  
  padding: 12px 12px 12px 12px;
  font-size: 14px;
  font-weight: 700;
  color: pink ;
  background-color:rgb(63,81,181) ;
  border: 2px groove;
  border-color:#FFFFF0;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(100, 100, 100, 0.9);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:165%;
margin-bottom:12px;
margin-top:20px;
&:hover {
  font-family:'Homemade Apple', cursive;
    box-shadow: 0 15px 15px pink;
    transform: translateX(0, -5px);
    background-color:rgb(63,81,181)  ;
    font-size:18px;
  color:hotpink ;
  border: 2px groove;
  border-color:pink;
  border-radius: 10px;
  }
`

const Description=styled.h1`
color: #6c757d;

overflow-y: auto;
    
    height: 32%;
font-size:14px;
  margin-left:10px;
  margin-right:1px;
  &:hover{
    color:black;
  }

`
const Image=styled.img`
background:white;
border-color:rgb(255,248,232);
width:wrap-content;
height:100%;
`
const Title=styled.h1`
font-size:24px;
font-family:'Homemade Apple', cursive;
`
function Association({association}) {
  const openPost = () => history.push(`/Listeassociation/${association._id}`);
  const user = JSON.parse(localStorage.getItem('profile'));
  const history=useHistory();

    return (
      <>

<div>
          <ButtonBase 
          disabled={!user?.result}
          onClick={openPost}
          >


            
            <Container>
          
              
                
             <Avatar style={{height:"150px",width:"150px",marginLeft:"42px",border:"solid 2px ",fontSize:"28px"}} > <Image src={association.Photo}/>{association.Nom.charAt(0)} {association.Nom.charAt(1)}</Avatar> 
                <Title>{association.Nom}</Title>
                <Description> {association.Nom} est une association creer par {association.createur} au gouvernorat de {association.Gouvernorat} situe a {association.ville} l'association est active au domaine(s) de(s){association.categorie} et vise a {association.description} </Description>
                
                
            </Container>
                     </ButtonBase>

<CardaButton disabled={!user?.result} onClick={openPost}>Adhérer</CardaButton>
        </div>
</>    )
}

export default Association
