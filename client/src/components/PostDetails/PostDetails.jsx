import React, {useEffect} from 'react';
import { Avatar,Typography, CardActions,Button } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import useStyles from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { getPostAs,likePostASS } from '../../actions/associations';
import styled from 'styled-components'
const Piper=styled.div`
width:115%;
background-color:rgb(63,81,181);
margin-left:-70px;

`
const Name=styled.h1`
font-size:40px;
color:rgb(38,247,0);
margin-left:15px;

`
const NameWrapper=styled.div`
width:wrap-content;
padding-top:100px;
`
const Wrapper=styled.div`
height:20%;
width:100%;
display:flex;
flex-direction:row;

`
const ImageWrapper=styled.div`
background-color:rgb(63,81,181);
border:solid 2px white;
border-radius:100%;
margin-left:200px;
height:210px;
width:210px;
margin-bottom:100px;
margin-top:100px;
`
const Image=styled.img`
background:white;
border-radius:100%;
margin-left:4px;
margin-top:4px;

height:200px;
width:200px;



`
const Gouvernorat=styled.h3`
width:15px;
height:15px;
color:white;
margin-left:150px;
margin-top:350px;
`
const PostDetails = () => {
const {association, associations} = useSelector((state) => state.associations);
const dispatch = useDispatch();
const history = useHistory();
const {id} = useParams();

useEffect(()=>{
    dispatch(getPostAs(id));
},[id]); 
if (!association) return null;
/*  Nom, email , categorie , ville  ,description,Gouvernorat , Photo*/
const user = JSON.parse(localStorage.getItem('profile'));
const LikesASS = () => {
  if (association?.LikesASS?.length > 0) {
    return association.likesASS.find((like) => like === (user?.result?.googleId || user?.result?._id))
      ? (
        <><ThumbUpAltIcon fontSize="small" />&nbsp;{association.likesASS.length > 2 ?` You and ${association.likesASS.length - 1} others. `: `${association.likesASS.length} like${association.likesASS.length > 1 ? 's' : ''}` }</>
      ) : (
        <><ThumbUpAltOutlined fontSize="small" />&nbsp;{association.likesASS.length} {association.likesASS.length === 1 ? 'Like' : 'Likes'}</>
      );
  }

  return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
};
    return(
<Piper >
<Wrapper>
     <ImageWrapper> 
        <Image     src={association.Photo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={association.Nom} />
</ImageWrapper>
       <NameWrapper>
          <Name >Nous sommes {association.Nom} .</Name>
          <Name>une Association du {association.categorie}.</Name>
          </NameWrapper>
          <Gouvernorat>{association.ville},{association.Gouvernorat}</Gouvernorat>
          </Wrapper>
         {/* <Typography>{association.categorie.map((categorie) => `#${categorie} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{association.description}</Typography>
          <Typography variant="h6">Created by: {association.Nom}</Typography>
          <Typography variant="body1">{moment(association.createdAt).fromNow()}</Typography>
          
       
       
          <CardActions >
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePostASS(association._id))}>
          <LikesASS />
        </Button>
       </CardActions>
       
       
        
    */}
      </Piper>
    );
};
export default PostDetails;