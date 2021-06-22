import React, {useEffect} from 'react';
import { Avatar,Typography, CardActions,Button } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import useStyles from "./styles"
import CommentSection from './Comments';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import { useParams, useHistory,Link } from 'react-router-dom';
import { getPostAs,likePostASS } from '../../actions/associations';
import styled from 'styled-components'
const Piper=styled.div`
width:115%;

margin-left:-70px;

`
const Name=styled.h1`
font-size:40px;
color:rgb(233,85,79);
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
background-color: #1F0B0B;
`
const ImageWrapper=styled.div`
background-color:#1F0B0B;
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
const WrapGov=styled.div`
display:flex;
flex-direction:row;
background-color:red;
width:99%;
margin-top:-40px;
background-color:#1F0B0B;
`
const Gouvernorat=styled.h3`
color:white;
margin-left:300px;

`
const PostDetails = () => {
const {association} = useSelector((state) => state.associations);
const dispatch = useDispatch();
const history = useHistory();
const { id } = useParams();
const [value, setValue] = React.useState(2);
const classes=useStyles()

useEffect(()=>{
    dispatch(getPostAs(id));
},[id]); 
if (!association) return null;
/*  Nom, email , categorie , ville  ,description,Gouvernorat , Photo*/
const user = JSON.parse(localStorage.getItem('profile'));

    return(
<Piper >

<Wrapper>
<Box component="fieldset" mb={3} borderColor="transparent">
        
        <Rating
          name="simple-controlled"
          className={classes.rating}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
     <ImageWrapper> 
        <Image     src={association.Photo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={association.Nom} />
</ImageWrapper>
       <NameWrapper>
          <Name >Nous sommes {association.Nom} .</Name>
          <Name>une Association du {association.categorie}.</Name>
          <Name style={{marginTop:"-250px",marginLeft:"100px",fontFamily:'Brush Script MT',color:"rgb(214,230,255,0.7)"}}> une association creé par <Link>{association.Noma}</Link>.</Name>

          </NameWrapper>
          
          </Wrapper>
          <WrapGov>
          <Gouvernorat ><LocalPostOfficeIcon style={{marginRight:"5px",marginBottom:"-5px"}}/>{association.email}</Gouvernorat>
          <Gouvernorat>{association.ville},{association.Gouvernorat}</Gouvernorat>
         
          </WrapGov>
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
                <CommentSection />

      
      </Piper>
    );
};
export default PostDetails;