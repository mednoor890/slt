import React from 'react';
import {  Grid,CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import ActivitePost from './ActivitePost/ActivitePost';



const ActivitePosts = ({setCurrentId}) => {
  const {posts,auth} = useSelector((state) => state);//useSelector accesses to store and more precisely the state 
  
return(
  !posts.length ? <CircularProgress /> :(
   

<Grid container alignItems="center">


 {posts.map((post)=>(
 <Grid key={post._id}  item >
 
<ActivitePost post={post}   setCurrentId={setCurrentId}/>
</Grid>

 ))}
    
    </Grid>    
    

   

    ))
    }



  
export default ActivitePosts;
/*const users=useSelector((state)=>state.auth);
  {users.map((auth)=>(<Grid key={auth._id}>
<Createur auth={auth} />
  </Grid>))}*/