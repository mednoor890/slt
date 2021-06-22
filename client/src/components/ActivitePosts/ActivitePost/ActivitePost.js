import React, { useEffect, useState,useRef } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components"
import { Avatar,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory,Link,useParams} from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {likePost,deletePost } from '../../../actions/posts'
import moment from 'moment'
import localization from 'moment/locale/fr';
import useStyles from "./styles"
import ActiviteCommentaire from './ActiviteCommentaire'
export const Container = styled.div`
 
  position:relative;
  background-color:rgb(215,240,255,0.7);
  margin-right:50px;
  margin-left:150px;
  margin-top:30px;
  min-width:600px;
  max-width:600px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.26);
min-height:400px;
max-height:1000px;
  border-radius:35px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:45%;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.86);
    transform: translate(0, -5px);
    background-color:rgb(214,230,255,0.7);
  `;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 25px;
  padding: 1.25rem;
  width:95%;
  
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
  font-size: 1rem;
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
  border-color:rgb(255,248,232);
 max-width:600px;
 min-width:599px;
 max-height:250px;
 min-height:250px;
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


export const Wakt=styled.p`{
margin-left:90%;
margin-top:-35px;
font-size:12px;
color:grey;
}`
const Nlikes=styled.h1`
margin-left:2%;
font-size:18px;
`
const NomWrapper=styled.div`

height:100%;

margin-top:-30px;
margin-left:45px;
`

function ActivitePost({post,setCurrentId}) {
const initStatus= { commentaire:""}
const [comment, setComment] = useState('');
const { id } = useParams();
const [likes, setLikes] = useState(post?.likes);
const dispatch = useDispatch()
const history = useHistory();
const user = JSON.parse(localStorage.getItem('profile'));
const [expanded, setExpanded] = React.useState(false);
const classes=useStyles()
/*const [CommentData, setCommentData] = useState(initStatus);

const [comments, setComments] = useState(post?.comments);
*/
const handleExpandClick = () => {
  setExpanded(!expanded);
};
const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.heartCount.find((heartCount) => heartCount === userId);
  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.heartCount.filter((id) => id !== userId));
    } else {
      setLikes([...post.heartCount, userId]);
    }
  };
  

    

/*const handleCommentaire =async() =>{
  
  const newComments =await dispatch(createComment(CommentData, post._id))
  setCommentData('');
  setComments(newComments);
  commentsRef.current.scrollIntoView({ behavior: 'smooth' });

}
*/
moment.locale('fr', localization);
  return (
    
      <Container>
    
    <Body>
    <Link to={`/creators/${post.name}`} className={classes.link} >
    
  <Avatar size="big-avatar" src={post.Avatar}></Avatar>                  
   <NomWrapper>{post.name} {post.prenom}</NomWrapper>  </Link>
       <Wakt>{
       moment(post.Datederoulement).fromNow(post.createdAt)}</Wakt>
         </Body>     
      <Image src={post.Photo}/>
<Title > Titre: {post.Titre}

       
</Title>
<FavoriteIcon fontSize='large' className={classes.favorite}  disabled={!user?.result} onClick={handleLike}/>
         <Nlikes>{post.heartCount.length} j'adore </Nlikes> 
       

<IconButton
        disabled={!user?.result}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
         
        style={{ fontSize:"14px",marginTop:"-55px",marginLeft:"350px",borderRadius:"15px",border:" inset 1px pink" ,fontFamily:"'Homemade Apple'"}}>
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

         
       
       {(user?.result?.googleId === post?.createur || user?.result?._id === post?.createur) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Supprimer
          </Button>
)}




<ActiviteCommentaire/>  
</Collapse>
      </Container>

    

  )
}

export default ActivitePost

