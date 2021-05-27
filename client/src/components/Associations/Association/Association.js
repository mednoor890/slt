import React from 'react'
import styled from 'styled-components'
import {ButtonBase} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
const Container=styled.div`

  background-color:rgb(215,240,255,0.7);
  margin-right:50px;
 
  margin-top:100px;
  width:300px;
  height:350px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.26);

  border-radius:35px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:75%;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.86);
    transform: translate(0, -5px);
    background-color:rgb(214,230,255,0.7);
`
export const Body = styled.div`
;
height: 25px;

width:85%;

  
  
`;
const Description=styled.h1`
color: #6c757d;
  font-size:15px;
  margin-left:30px;
  margin-right:30px;

`
const Image=styled.img`
border-color:rgb(255,248,232);
width:300px;

height:150px;


`

function Association({association}) {
  const openPost = () => history.push(`/Listeassociation/${association._id}`);

  const history=useHistory();

    return (
        <div>
          <ButtonBase 
          onClick={openPost}
          >


            
            <Container>
          
              
                <Body>
                <Image src={association.Photo}/>
                <Description> {association.Nom} est une association creer par {association.createur} au gouvernorat de {association.Gouvernorat} situe a {association.ville} l'association est active au domaine(s) de(s){association.categorie} et vise a {association.description} </Description>
                
                </Body>
            </Container>
                     </ButtonBase>

        </div>
    )
}

export default Association
