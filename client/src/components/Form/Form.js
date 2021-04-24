import React from 'react'
import useStyles from './styles'
import {  TextField , Button, Typography, Paper, Select,MenuItem} from "@material-ui/core"
import { useState,useEffect} from 'react'

import { useDispatch ,useSelector} from "react-redux"
import { createPost,updatePost } from '../../actions/posts'

function Form({ currentId, setCurrentId }) {
    const [postData, setpostData] = useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:'',
        sexe:'',
        age:'',
    })
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : 0))
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        if (post) setpostData(post);
      }, [post]);
      const clear=()=>{
        setCurrentId(0);
        setpostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }
    const handleSubmit= async (e)=>{
    e.preventDefault()
    if (currentId === 0) {
        dispatch(createPost(postData));
        clear();
      } else {
        dispatch(updatePost(currentId, postData));
        clear();
      }
    };
    
   
    
    
    return(
        
        <Paper className={classes.paper}>
<form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
<Typography variant="h6"> Creating an activity</Typography>
<TextField
name="creator"
variant="outlined" 
label="Creator"
fullWidth
value={postData.creator}
onChange={(e)=>setpostData({...postData,creator :e.target.value})}//we use the spread operator here to make all data persist and just the creator will be changed
/>
<TextField
name="title"
variant="outlined" 
label="Title"
fullWidth
value={postData.title}
onChange={(e)=>setpostData({...postData,title :e.target.value})}//we use the spread operator here to make all data persist and just the creator will be changed
/>





<TextField
name="tags"
variant="outlined" 
label="Tags"
fullWidth
value={postData.tags}
onChange={(e)=>setpostData({...postData,tags :e.target.value})}//we use the spread operator here to make all data persist and just the creator will be changed
/>
<div className={classes.fileInput}>
   


</div>
<Button className={classes.buttonSubmit} variant="contained" color='primary' size="large" type="submit" fullWidth> Submit</Button>
<Button className={classes.buttonSubmit} variant="contained" color='secondary' size="small" onClick={clear} fullWidth> clear</Button>
</form>

        </Paper>
    )
}

export default Form