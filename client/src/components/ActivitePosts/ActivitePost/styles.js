import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
link:{
color:"grey",
textDecoration:"none",
'&:hover':{

textDecoration:"underline",
 
  color: "black",
  }
} ,
favorite:{
  backgroundColor:'white',
  color:"red",
  padding:"3px",
  marginLeft:"5%",
  border:"2px solid",
  borderRadius:"10%",
  borderColor:"red",
  cursor:"pointer",
  "&:hover":{
    backgroundColor:'red',
    borderColor:"white",
    color:"white",
    opacity:"0.8",

  }
},
loadingPaper: {
  display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '15px',
  height: '39vh',
},
commentsOuterContainer: {
  display: 'flex',
  justifyContent: 'space-between',
},
commentsInnerContainer: {
  height: '200px',
  overflowY: 'auto',
  marginRight: '30px',
},
  
}));