import React ,{useState}from 'react'
import { Avatar,Button, Paper,Grid, Typography, Container,TextField,MenuItem} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import  Input  from "./Input"
import Radio from"./Radio"
import FileBase from 'react-file-base64';
import Select1 from "./Select"
//import  CustomizedHook from "./MultipleSelect";
import { signin, signup } from '../../actions/auth';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';

const initialState={Nom:"",Prenom:"", Age:"", Gouvernorat:"",Gender:"",Cinteret:"",Email:"",  Password:"",confirmPassword:"",selectedFile:""}
/*const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;*/
function Auth() {
    const [form, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory()
  const classes = useStyles();

  const [ShowPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword)=>!prevShowPassword)

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form,history));
    } else {
      dispatch(signin(form, history));
    }
  };
        
        const handleChange=(e)=>{
setFormData({...form,[e.target.name]:e.target.value})


        }
       
         return (
       
        
            <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={3}>
    <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
    </Avatar>
    <Typography  component="h1" variant='h6' >{ isSignup ? "inscription" : "connexion"} </Typography>
    <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
    {
        isSignup &&(
            <>
            
            <Input name="Nom" label="Nom" handleChange={handleChange} fullWidth ></Input>
            <Input name="Prenom" label="Prenom" handleChange={handleChange}  fullWidth></Input>
            <Input name="Age" label="age" min="0" max="80" type="Number" handleChange={handleChange } fullWidth />
            <FileBase name="selectedFile" type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...initialState,selectedFile: base64 })} />
            <Input name="Gender" label="Sexe"   handleChange={handleChange } fullWidth />
            <Input name="Cinteret" label="Categorie"  handleChange={handleChange } fullWidth />
            <Input name="Gouvernorat" label="Gouvernorat"  handleChange={handleChange } fullWidth />
            </>
        )
    }
   
   <Input name="Email" label="adresse email" handleChange={handleChange} fullWidth type="email"></Input>
    <Input name="Password" label="mot de passe" handleChange={handleChange} fullWidth type={ShowPassword ? "text": "password"} handleShowPassword={handleShowPassword}/>
           {isSignup && <Input name="confirmPassword" label="Confirmer mot de passe" handleChange={handleChange} type="password"/>}
    
        </Grid>
        <Button type="submit" fullWidth variant="contained"  className={classes.submit}>{isSignup ?'Sign up':  "Sign in"}</Button>
   

     <Grid container justify='flex-end'>
<Grid item>
    <Button onClick={switchMode}>{isSignup? "already have an account":"register"}</Button>
</Grid>
   </Grid>
    </form>
    </Paper>
</Container>
)}
    
/*const top100Films = [
  { title: 'sports' },
  { title: 'culture' },
  { title: 'musique' },
  
  { title: 'cinema' },
  { title: 'dance'},
  { title: 'travel'},
  { title: 'hiking'},
  { title: '5arja'},
  { title: 'camping',},
  { title: 'a3mal ela t7eb web3edni barka',}
];
*/
export default Auth
 
 {{/*<TextField id="select" label="Gouvernorat" name="Gouvernorat" fullWidth select>
 <MenuItem value="10"> ariana</MenuItem>
 <MenuItem value="20">Beja</MenuItem>
 <MenuItem value="10">ben arous</MenuItem>
 <MenuItem value="20">bizerte</MenuItem>
 <MenuItem value="10">gabes</MenuItem>
 <MenuItem value="20">gafsa</MenuItem>
 <MenuItem value="10">jendouba</MenuItem>
 <MenuItem value="20">kairouan</MenuItem>
 <MenuItem value="10">kasserine</MenuItem>
 <MenuItem value="20">kebili</MenuItem>
 <MenuItem value="10">kef</MenuItem>
 <MenuItem value="20">mahdia</MenuItem>
 <MenuItem value="10">manouba</MenuItem>
 <MenuItem value="20">medenine</MenuItem>
 <MenuItem value="10">monastir</MenuItem>
 <MenuItem value="20">nabeul</MenuItem>
 <MenuItem value="10">sfax</MenuItem>
 <MenuItem value="20">sidi bouzid</MenuItem>
 <MenuItem value="10">siliana</MenuItem>
 <MenuItem value="20">sousse</MenuItem>
 <MenuItem value="10">tattaouine</MenuItem>
 <MenuItem value="20">tozeur</MenuItem>
 <MenuItem value="10">tunis</MenuItem>
 <MenuItem value="20">zaghouan</MenuItem>
 


  </TextField>*/}}
 // {{//<CustomizedHook  fullWidth name="Cinteret"  handleChange={handleChange}/>  }}
 /*<Radio name="Gender"  handleChange={handleChange}/>
           < Select1 name="Gouvernorat" handleChange={handleChange} fullWidth />
 
<Autocomplete
name="Cinteret"
      multiple
      id="checkboxes-tags-demo"
      handleChange={handleChange}
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ paddingBottom:"10px",paddingTop:"10px",width: 800 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Catégorie" placeholder="Catégorie" />
      )}
    />
  */