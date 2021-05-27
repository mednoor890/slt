import React ,{useState}from 'react'
import { Avatar,Button, Paper,Grid, Typography, Container,TextField,MenuItem} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import  Input  from "./Input"
import FileBase from 'react-file-base64';
import styled ,{keyframes}from 'styled-components'
//import  CustomizedHook from "./MultipleSelect";
import { signin, signup } from '../../actions/auth';

const Sandouk=styled.div`
width:100%;
height:100%;
background-color:pink;

}`
const Wrapper=styled.div`

width:40%;
background: #B47DD8;
background: -webkit-linear-gradient(top left, pink 0%, #3F51B5 100%);
background: -moz-linear-gradient(top left, hotpink 80%, grey 100%);
background: -o-linear-gradient(top left, hotpink 0%, #3F51B5 100%);
background: linear-gradient(to bottom right,#3F51B5 0%, hotpink 100%);

border : groove 4px; 
border-radius:66px;
border-color:pink;
margin-top:80px;
margin-left:29%;
`
const Form=styled.form`
width:90%;
padding:24px;

`
const Tipography=styled.h6`
margin-left:40%;
margin-top:-53px;
margin-bottom:19px;
font-size:30px;
`
const FormButton=styled.button`
display: block;
width: 60%;
padding: 12px 0;
font-family: inherit;
font-size: 14px;
font-weight: 700;
color: white  ;
background-color:grey ;
border: 2px groove;
border-color:#FFFFF0;

box-shadow: 0 10px 10px rgba(100, 100, 100, 0.9);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
margin-left:60px;
margin-bottom:12px;
margin-top:20px;
&:hover {
  box-shadow: 0 15px 15px rgba(50, 70, 80, 0.9);
  transform: translateX(0, -5px);
  background-color:rgb(63,81,181)  ;
  font-size:22px;
color:black ;
}
`



const initialState={Nom:"",Prenom:"", Age:"", Gouvernorat:"",Gender:"",Cinteret:"",Email:"",  Password:"",confirmPassword:"",selectedFile:""}
/*const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;*/
function Auth() {
    const [form, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory()
  

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

        <Wrapper >
         
          <Tipography  component="h1" variant='h6' >{ isSignup ? "inscription" : "connexion"} </Tipography>
          
    <Avatar style={{marginLeft:"235px",marginTop:"36px",marginBottom:"15px",backgroundColor:"pink"}}>
        <LockOutlinedIcon />
    </Avatar >
    
    <Form  onSubmit={handleSubmit}>
    
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
        <FormButton type="submit" fullWidth variant="contained"  >{isSignup ?'s inscrire':  "connecter"}</FormButton>
   

     <Grid container justify='flex-end'>
<Grid item>
    <FormButton onClick={switchMode}>{isSignup? "j'ai deja un compte":"inscrire"}</FormButton>
</Grid>

   </Grid>
    </Form>
    
  
    </Wrapper>
    
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