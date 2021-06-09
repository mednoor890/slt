import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(4),
    backgroundColor:'pink',
      width:"50vw",
      marginLeft:"23%",
      paddingTop:"3%"
  },
  form: {
  
    
    alignItems:"center",
    backgroundColor:'white',
    color:'black',
   width:'50vw',
   
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    color:"white",
  },
}));