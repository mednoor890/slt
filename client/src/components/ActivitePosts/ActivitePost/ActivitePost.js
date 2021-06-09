import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components"
import { Avatar,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {likePost,deletePost } from '../../../actions/posts'
import moment from 'moment'
import localization from 'moment/locale/fr';


import { createComment } from '../../../actions/comments';
export const Container = styled.div`
 
  position:relative;
  background-color:rgb(215,240,255,0.7);
  margin-right:50px;
  margin-left:150px;
  margin-top:30px;
  min-width:800px;
  max-width:800px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.26);

  border-radius:35px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:25%;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.86);
    transform: translate(0, -5px);
    background-color:rgb(214,230,255,0.7);
    
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
export const Input = styled.input`
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
  font-family:"'Homemade Apple'", cursive;
  font-weight: bold;
  margin-left:25px;

`;

export const Text = styled.p`
  color: #6c757d;
  font-size:15px;
  
  margin-left:30px;
  margin-right:30px;
  &:hover{
    transform: translate(0, -5px);
    background-color:whitesmoke;
    border-top:outset 5px;
    border-bottom:inset 5px;
    border-color:whitesmoke;
    font-size:22px;
  color:black;
  transition: all 0.5s cubic-bezier(0.02, 0.01, 0.47, 1);
padding-left:15px;
width:75%;
border-radius:2px;
  }
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
  export const CardButton = styled.button`
  display: block;
  width: 50%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: whitesmoke;
  background-color: grey;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:25%;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.4);
    transform: translate(0, -5px);
    background-color:grey;
    font-size:22px;
  color:white;
  }
`;

export const Jadore=styled.button `
width:15%;
height:15%;
margin-left:50%;
color:red;
font-family:'Homemade Apple', cursive;
background-color:rgb(224,241,252);
cursor:pointer;
border:none;
border-radius:35px;
&:hover{
background-color:white;
color:red;
box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
transform: translate(0, 2px);
}
`
export const Wakt=styled.p`{
margin-left:85%;
margin-top:-5px;
font-size:12px;
color:grey;
}`
const Nlikes=styled.h1`
margin-left:1px;
font-size:18px;
`
function ActivitePost({post,setCurrentId}) {
const initStatus= { commentaire:""}
const dispatch = useDispatch()
const history = useHistory();
const user = JSON.parse(localStorage.getItem('profile'));
const [expanded, setExpanded] = React.useState(false);
const [CommentData, setCommentData] = useState(initStatus);

const handleExpandClick = () => {
  setExpanded(!expanded);
};



const handleCommentaire =async(e) =>{
  e.preventDefault()
  dispatch(createComment({...CommentData}))
}
moment.locale('fr', localization);
  return (
    
      <Container>
    
    <Body><Avatar src={post.Avatar}></Avatar> 
       <Wakt>{
       moment(post.Datederoulement).fromNow(post.createdAt)}</Wakt>
         </Body>     
      <Image src={post.Photo}/>
<Title > Titre: {post.Titre}
<Jadore  disabled={!user?.result} onClick={()=> dispatch(likePost(post._id))}>
          <FavoriteIcon fontSize='large'/>
         <Nlikes>{post.heartCount} j'adore </Nlikes> 
       </Jadore>

       
</Title>

{(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Supprimer
          </Button>
)}


<IconButton
        disabled={!user?.result}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
         
        style={{ marginLeft:"350px",borderRadius:"15px",border:" inset 1px pink" ,marginBottom:"6px",fontFamily:"'Homemade Apple'"}}>
          <ExpandMoreIcon /> je participe (voir plus)
<CheckCircleIcon/>
          </IconButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
<Text>description:{post.description}</Text>
<Text>ville ou adresse deroulement:{post.ville}</Text>
<Text>moyenne d'age:{((post.ageMax)+(post.ageMin))/2}</Text>
<Text>telephone:{post.tel}</Text>
<Text>Gouvernorat:{post.Gouvernorat}</Text>
<Text>Categorie:{post.categorie}</Text>
<Text>associative: {post.isAssociation}
</Text>
<Text>date de deroulement:{post.Datederoulement}</Text>
<Text>Heure de rendez-vous:{post.temps}</Text>
<Text> createur:{post.name}</Text>

<Title>commentaire</Title>

<Input placeholder="ecrire un commentaire"  value={CommentData.commentaire} onChange={(e) => setCommentData({ ...CommentData, commentaire: e.target.value })}/>
<CardButton onClick={handleCommentaire}>commenter </CardButton>
  
</Collapse>
      </Container>

    

  )
}

export default ActivitePost

