import React from 'react'
import Association from './Association/Association';
import {  Grid,CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import {Container }  from 'styled-components'
function Associations({setCurrentId}) {
    const associations= useSelector((state) => state.associations)
    return (
        ! associations.length ? <CircularProgress /> :(
<Grid container alignItems="stretch" spacing={10}>
 {associations.map((association)=>(
 <Grid key={association._id} item xs={6}   >
 
<Association association={association}  setCurrentId={setCurrentId}/>
</Grid>

))}
    
</Grid>    





))
}

export default Associations




