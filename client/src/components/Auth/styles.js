import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    backgroundColor:"white",
    border:"15px groove"
  ,
  borderTopColor:"turquoise",
  borderLeftColor:"turquoise",
  borderRightColor:"turquoise",
  borderBottomColor:"turquoise",
  borderRadius:"15px"
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
    border:"15px "
    
    ,
    borderColor:"black"
  },
  
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "coral",
  },
noor:{
  
},
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    
    
    borderColor:"black"
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
    ,
    backgroundColor:"coral"
  },
  
}));