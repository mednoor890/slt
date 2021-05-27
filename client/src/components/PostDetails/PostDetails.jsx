import React, {useEffect} from 'react';
import {Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import useStyles from './styles';
import { useParams, useHistory } from 'react-router-dom';
import { getPostAs } from '../../actions/associations';
const PostDetails = () => {
const {association, associations} = useSelector((state) => state.associations);
const dispatch = useDispatch();
const history = useHistory();
const classes = useStyles();
const {id} = useParams();
useEffect(()=>{
    dispatch(getPostAs(id));
},[id]); 
if (!association) return null;
/*  Nom, email , categorie , ville  ,description,Gouvernorat , Photo*/
    return(
<Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{association.Nom}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{association.categorie.map((categorie) => `#${categorie} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{association.description}</Typography>
          <Typography variant="h6">Created by: {association.Nom}</Typography>
          <Typography variant="body1">{moment(association.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong></strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong></strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={association.Photo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={association.ville} />
        </div>
      </div>
      </Paper>
    );
};
export default PostDetails;