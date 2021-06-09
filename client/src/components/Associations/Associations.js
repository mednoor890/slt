import React from 'react'
import Association from './Association/Association';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
const Grid=styled.div`
display: grid;
  grid-gap: 90px;
  grid-template-columns: 50px 50px 50px;
margin-top: 80px ;
margin-left:45px;
column-gap:275px;
margin-right:20px;
  max-width: 960px;
  text-align: center;`
  
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




