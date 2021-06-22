import React from 'react'
import {TextField,Grid,IconButton,InputAdornment} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import styled from"styled-components"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
const Inputa = styled.input`
  font-size: 18px;
  color:black;
  padding: 10px;
  margin-left:7px;

  width:400px;
  background: whitesmoke;
  opacity:0.8;
  border: none;
  font-family:'Courier New';
  border-radius: 3px;
  ::placeholder {
    color: grey;
  }
`;



  const Input = ({name,handleChange,label,half,autoFocus,type,handleShowPassword}) => {
    return (
       <Grid item xs={12} sm={half?6:12}>
<Inputa 
name = {name}
onChange = {handleChange}
variant = 'outlined'
required
placeholder = {label}
autoFocus ={autoFocus}
type ={type}
InputProps ={name ==='Password' ?{
endAdornment:(
    <InputAdornment position="end">
<IconButton onClick={handleShowPassword}>
    {type === "password"  ?  <VisibilityOff/> : <Visibility/>}
</IconButton>

    </InputAdornment>
),

}: null}
/>

        </Grid>
    )
}
export default Input