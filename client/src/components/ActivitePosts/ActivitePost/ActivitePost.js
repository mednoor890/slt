import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useDispatch} from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core'


export const Container = styled.div`
 
  position:relative;
  background-color:turquoise;
  margin-right:50px;
  margin-left:150px;
  margin-top:100px;
  min-width:800px;
  max-width:800px;
  background-color:rgb(210,236,235);
  border-radius:35px;
  `;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  height: 25px;
  padding: 1.25rem;
  width:95%;
  background-color:whitesmoke
`;
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin-left: 1px;
  margin-right:2px;
  width:97%;
  background: whitesmoke;
  border: none;
height:40px;
  ::placeholder {
    color: black;
  }
`;
export const Title = styled.h1`
  font-size: 1.35rem;
  color:black;
  align-items:center;
  font-family:"'Homemade Apple', cursive;";
  font-weight: bold;
  margin-left:25px;

`;

export const Text = styled.p`
  color: #6c757d;
  font-size:12px;
  margin-left:25px;
`;

export const Image = styled.img`
  width: auto;
  border: groove 3px;
  border-color:rgb(255,248,232);
 max-width:800px;
 min-width:795px;
 max-height:400px;
 min-height:400px;
  `;

function ActivitePost({post}) {
const dispatch = useDispatch()
const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};


  return (
    
      <Container>
        <Body><Avatar   src={post.createur.selectedFile}></Avatar> </Body>
      <Image src={post.Photo}/>
      
<Title > Titre: {post.Titre}
</Title>
<IconButton
        
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />voir plus
          </IconButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
<Text>description:{post.description}</Text>
<Text>ville ou adresse deroulement:{post.ville}</Text>
<Text>moyenne d'age:{((post.ageMax)+(post.ageMin))/2}</Text>
<Text>telephone:{post.tel}</Text>

<Title>commentaire</Title>
<Input placeholder="ecrire un commentaire"/>
</Collapse>
      </Container>

    

  )
}

export default ActivitePost

