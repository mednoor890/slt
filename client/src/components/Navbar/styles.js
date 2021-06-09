import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import zIndex from '@material-ui/core/styles/zIndex';

export default makeStyles((theme) =>
 ({
  appBar: {
    
    marginTop: '-8px ',
    marginLeft:"-67px",
    height:"63px",
    width:"112%",
  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    position:"relative",
  boxShadow: "none"

  },
  heading: {
    backgroundColor: 'grey',
    color:"white",
    marginLeft:"-10px",
    textDecoration: 'none',
    boxShadow: "0 5px 5px pink",


    fontFamily:"'Homemade Apple', cursive;",
    fontSize:"30px",
    "&:hover" :{
      color:"black",
      borderRadius:"15px",
    }
  },
 noor:{
color:"black",
backgroundColor:"#FF69B4",
"&:hover" :{
  color:"white",
  borderRadius:"15px"
}
 },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
 
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    
  },
  add:{
    
marginLeft:'15px',
color:"black",
textDecoration:"underline",
fontSize:"20px",
fontFamily:"'Brush Script MT'",
marginTop:"50px",
marginBottom:"50px",
textDecoration:"none",
paddingLeft:"10px",
paddingRight:"10px",
paddingBottom:"10px",
paddingTop:"10px",
transform: "translateX(0px) scale(1)",

"&:hover":{
  textShadow: "pink -2px 1px 1px",
  fontSize:"25px",
fontFamily:"Brush Script MT",
  color:"black",
overflow: "hidden",

content: "attr(alt)",
transition: "all 0.6s",
transform: 'translateY(-10px) scaleZ(2.2)',

transition: "transform .5s ",
zIndex:"0"

}
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontFamily:"'Homemade Apple', cursive;",
    color:"#f50057"
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    
  },
  purple: {
   
    height:"50px",
    width:"50px",
    color: theme.palette.getContrastText(deepPurple[500]),
    fontFamily:"'Homemade Apple', cursive;",
    backgroundColor: deepPurple[500],
    
  },
  khalil:{
    backgroundColor:"rgb(63,180,192)",
    marginLeft:"250%",
    marginTop:"280%",

  
  '&:hover':{

    opacity: "1",
 
  color: "red",
  }
    
  
  }
}))