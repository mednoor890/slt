import React ,{ useState, useEffect }from 'react'
import { AppBar,Avatar,Button,Typography,Toolbar } from '@material-ui/core'
import useStyles from "./styles"
import * as actionType from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import styled from 'styled-components'
import {Link,NavLink, useHistory, useLocation  } from "react-router-dom";
const FormButtonSign=styled.button`
display: block;
width: 40%;
padding: 12px 0;
font-family: inherit;
font-size: 14px;
font-weight: 700;
color: white  ;
background-color:  #4FE9E3 ;
border: 2px groove;
border-color:#FFFFF0;

box-shadow: 0 10px 10px rgba(100, 100, 100, 0.9);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
&:hover {
  box-shadow: 0 15px 15px rgba(50, 70, 80, 0.9);
  transform: translateY(0, -5px);
  background-color:#4FE9E3 ;
  font-size:18px;
color:black ;
}
`


function Navbar() {
  
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes=useStyles()
    const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  
    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/auth');
    
        setUser(null);
      };
      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);
    
    return (
        <>
            <AppBar className={classes.appBar} position ="relative" >
                <div className={classes.brandContainer}>
                <Typography component ={Link} to ="/" className={classes.heading} variant="h2" align='center'><div className={classes.noor}>ACT</div>&VIT</Typography>
                <Typography component ={Link} to ="/activite" className={classes.add}  variant="h6" align='center'>Ajouter une activitee
                </Typography>
                <Typography component ={Link} to ="/association" className={classes.add}  variant="h6" align='center'>Ajouter une association
                </Typography>
                <Typography component ={Link} to ="/Listeassociation" className={classes.add}  variant="h6" align='center'>Les Associations
                </Typography>
</div>



<Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.Nom} src={user?.result.selectedFile} component={Link} to="/profil">{user?.result.Nom.charAt(0)}</Avatar>
            <FormButtonSign  onClick={logout}>Deconnecter</FormButtonSign>
          </div>
        ):(
            <Button component={Link} to="/auth" style={{backgroundColor:"#4FE9E3",color:"white"}}  > s'inscrire</Button>
        )
        
        }

    </Toolbar>

 </AppBar>

        </>
    )
}

export default Navbar
