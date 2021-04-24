import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) =>
 ({
  appBar: {
    
    marginTop: '-8px ',
    marginLeft:"-67px",
    height:"80px",
    width:"114%",
    backgroundColor:"coral",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    position:"relative",
  },
  heading: {
    backgroundColor: 'turquoise',
    color:"coral",
    textDecoration: 'none',
    fontFamily:"'Homemade Apple', cursive;",
    fontSize:"34px",
    "&:hover" :{
      color:"white",
      borderRadius:"15px"
     
    }
  },
 noor:{
color:"coral",
backgroundColor:"black",
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
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontFamily:"'Homemade Apple', cursive;",
    color:"turquoise"
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

  
  '& :hover':{

    opacity: "1",
 
  color: "red",
  }
    
  
  }
}))